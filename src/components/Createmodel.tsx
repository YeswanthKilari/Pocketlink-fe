import { Close } from "../icons/Close"
import { Button } from "./Button";

//@ts-ignore
export function Createmodel({ open, onClose }) {
    
    function Input({onchange,placeholder} :{onchange: ()=> void}) {
    return <div>
        <input type={"text"} placeholder={placeholder} className='px-4 py-2  hover:border rounded' onChange={onchange}/>
    </div>
}



    return <div>
        {open && <div className="w-full h-screen left-0 top-0 fixed bg-slate-700 opacity-60 flex justify-center">
            <div className="flex flex-col justify-center opacity-100 ">
                <span className="bg-white flex flex-col backdrop-opacity-0 p-4 rounded">
                    <div className="flex justify-end">
                        <div onClick={onClose} className="cursor-pointer">
                            <Close  />
                        </div>
                        
                    </div>
                    <div>
                        <Input type={"text"} placeholder={"Title"} />
                        <Input type={"text"} placeholder={"link"} />
                    </div>
                    <div className="flex justify-center pt-3">
                        <Button  variant='primary' text="submit" />
                    </div>
                </span>
            </div>
            
        </div>}
    </div>
}