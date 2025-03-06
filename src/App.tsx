import React, { useState } from 'react';
import { Button } from './components/Button';
import { IoShareSocialOutline, IoCafe } from "react-icons/io5";
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';
import { Card } from './components/Card';
import { Createmodel } from './components/Createmodel';

function App() {

  const [modelopen, setmodelopen] = useState(true);

  return <>

    <Createmodel open={modelopen} onClose={() => {
      setmodelopen(false);
    }}/>
    
    <div className=' bg-black w-full h-screen '>
      
      <div className='flex gap-2 m-6 justify-end pt-4 pr-5 '>
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
      <div className='flex  gap-3.5'>
          <Card title='Hello World' link='https://youtu.be/PBDxZkIJLNg?si=eHmOIFdQZAt3JcwB' type='youtube' />
          <Card title='Second Tweet' link='https://x.com/_kingjonah/status/1897300923812340102' type='twitter' />
      </div>
    
    </div>
    );
    </>
}


export default App;



