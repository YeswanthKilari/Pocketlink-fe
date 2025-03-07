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
        <div className="flex dark:bg-black text-black  ">
            <Sidebar />
            <div className='flex flex-col  w-full h-min-screen pl-4 dark:bg-black  bg-gray-100'>
                <Createmodel open={modelopen} onClose={() => setmodelopen(false)} />
                <div className=' w-full h-screen'>
                    <div className='flex gap-2 m-6 justify-end pt-4 pr-5'>
                        <Button 
                            text="Share Me" 
                            onClick={() => alert('Button clicked!')} 
                            variant="primary" 
                            size="lg"
                            startIcon={<ShareIcon />}
                        />
                        <Button 
                            text="Add content" 
                            onClick={() => setmodelopen(true)} 
                            variant="primary" 
                            size="lg"
                            startIcon={<PlusIcon />}
                        />
                    </div>
                    <div className='flex flex-wrap pt-10 gap-3.5   '>
                        <Card title='Hello World' link='https://youtu.be/PBDxZkIJLNg?si=eHmOIFdQZAt3JcwB' type='youtube' />
                        <Card title='Second Tweet' link='https://x.com/_kingjonah/status/1897300923812340102' type='twitter' />
                        
                        <Card title='Hello World' link='https://youtu.be/PBDxZkIJLNg?si=eHmOIFdQZAt3JcwB' type='youtube' />
                        <Card title='Second Tweet' link='https://x.com/_kingjonah/status/1897300923812340102' type='twitter' />
                        
                        <Card title='Hello World' link='https://youtu.be/PBDxZkIJLNg?si=eHmOIFdQZAt3JcwB' type='youtube' />
                        <Card title='Second Tweet' link='https://x.com/_kingjonah/status/1897300923812340102' type='twitter' />

                        <Card title='Hello World' link='https://youtu.be/PBDxZkIJLNg?si=eHmOIFdQZAt3JcwB' type='youtube' />
                         <Card title='Hello World' link='https://youtu.be/PBDxZkIJLNg?si=eHmOIFdQZAt3JcwB' type='youtube' />
                    </div>
                </div>
            </div>
        </div>
    );
}