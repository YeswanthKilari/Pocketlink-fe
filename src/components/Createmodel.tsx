import { Close } from "../icons/Close";
import { Button } from "./Button";
import { Input } from "./Input";

//@ts-ignore
export function Createmodel({ open, onClose }) {
    return (
        <div>
            {open && (
                <div className="fixed inset-0  bg-opacity-40 backdrop-blur-md flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-xl ring-2 ring-white w-96">
                        <div className="flex justify-end">
                            <button onClick={onClose} className="cursor-pointer">
                                <Close />
                            </button>
                        </div>

                        <div className="space-y-3">
                            <Input type="text" placeholder="Title" />
                            <Input type="text" placeholder="Link" />
                        </div>

                        <div className="flex justify-center pt-4">
                            <Button variant="primary" text="Submit" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
