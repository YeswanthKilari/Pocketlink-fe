import React, { useState } from 'react';
import { Button } from '../components/Button';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { Card } from '../components/Card';
import { Createmodel } from '../components/Createmodel';
import { Sidebar } from '../components/Sidebar';

export function Dashboard() {
    const [modelopen, setmodelopen] = useState(false);

    return (
        <div className="flex dark:bg-black text-black">
            {/* Sidebar (Fixed) */}
            <Sidebar />

            {/* Main Content (With Left Padding for Sidebar) */}
            <div className="flex flex-col w-full min-h-screen pl-72 dark:bg-black bg-gray-100">
                <Createmodel open={modelopen} onClose={() => setmodelopen(false)} />

                {/* Header Section */}
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
                    <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                        <Card title="Hello World" link="https://youtu.be/PBDxZkIJLNg?si=eHmOIFdQZAt3JcwB" type="youtube" />
                        <Card title="Second Tweet" link="https://x.com/_kingjonah/status/1897300923812340102" type="twitter" />
                        <Card title="Another Video" link="https://youtu.be/PBDxZkIJLNg?si=eHmOIFdQZAt3JcwB" type="youtube" />
                        <Card title="Twitter Post" link="https://x.com/_kingjonah/status/1897300923812340102" type="twitter" />
                        <Card title="More Content" link="https://youtu.be/PBDxZkIJLNg?si=eHmOIFdQZAt3JcwB" type="youtube" />
                        <Card title="Final Tweet" link="https://x.com/_kingjonah/status/1897300923812340102" type="twitter" />
                        <Card title="Hello World" link="https://youtu.be/PBDxZkIJLNg?si=eHmOIFdQZAt3JcwB" type="youtube" />
                        <Card title="Second Tweet" link="https://x.com/_kingjonah/status/1897300923812340102" type="twitter" />
                        <Card title="Another Video" link="https://youtu.be/PBDxZkIJLNg?si=eHmOIFdQZAt3JcwB" type="youtube" />
                        <Card title="Twitter Post" link="https://x.com/_kingjonah/status/1897300923812340102" type="twitter" />
                        <Card title="More Content" link="https://youtu.be/PBDxZkIJLNg?si=eHmOIFdQZAt3JcwB" type="youtube" />
                        <Card title="Final Tweet" link="https://x.com/_kingjonah/status/1897300923812340102" type="twitter" />
                    </div>
                </div>
            </div>
        </div>
    );
}
