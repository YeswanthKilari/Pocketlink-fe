import { useState } from 'react';
import { Button } from '../components/Button';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Card } from '../components/Card';
import { Createmodel } from '../components/Createmodel';
import { Sidebar } from '../components/Sidebar';
import { useContent } from '../Hooks/useContent';
import Masonry from 'react-masonry-css'; // Import Masonry

export function Dashboard() {
    const [modelopen, setmodelopen] = useState(false);
    const { contents, refreshContent, isLoading, error } = useContent();

    if (isLoading) {
        return (
            <div className="flex dark:bg-black text-black">
                <Sidebar />
                <div className="flex flex-col w-full min-h-screen pl-72 bg-gray-100">
                    <p>Loading content...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex dark:bg-black text-black">
                <Sidebar />
                <div className="flex flex-col w-full min-h-screen pl-72 bg-gray-100">
                    <p>Error: {error}</p>
                </div>
            </div>
        );
    }

    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };

    return (
        <div className="flex dark:bg-black text-black">
            <Sidebar />

            <div className="flex flex-col w-full min-h-screen dark:bg-black pl-72 bg-gray-100">
                <Createmodel open={modelopen} onClose={async () => {
                  setmodelopen(false);
                  await refreshContent();
                }} />

                <div className="flex justify-end gap-2 pt-4 pr-5">
                    <Button
                        text="Share Me"
                        onClick={() => alert('Button clicked!')}
                        variant="primary"
                        size="md"
                        startIcon={<ShareIcon />}
                    />
                    <Button
                        text="Add content"
                        onClick={() => setmodelopen(true)}
                        variant="primary"
                        size="md"
                        startIcon={<PlusIcon />}
                    />
                </div>

                <div className="p-6">
                    {/* Use Masonry instead of the grid */}
                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="my-masonry-grid"
                        columnClassName="my-masonry-grid_column"
                    >
                        {contents.map(({ type, link, title, _id }, index) => (
                            <Card
                                key={_id || index}
                                title={title}
                                link={link}
                                type={type}
                            />
                        ))}
                    </Masonry>
                </div>
            </div>
        </div>
    );
}