// src/components/Createmodel.tsx
import { useRef, useState } from "react";
import { Close } from "../icons/Close";
import { Button } from "./Button";
import { Input } from "./Input";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { ContentType } from "./Card"; // Import ContentType

export function Createmodel({ open, onClose }: { open: boolean; onClose: () => void }) {
    const [type, setType] = useState<ContentType>("youtube");

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);

    const addcontent = async () => {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;

        if (!title || !link) {
            console.warn("Title and link are required");
            return; // Or display an error message to the user
        }

        console.log("Adding content:", { title, link, type });

        try {
            await axios.post(`${BACKEND_URL}/api/v1/content`, {
                title,
                link,
                type,
            }, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });

            // Optionally: Close the modal after successful submission
            onClose();

        } catch (error) {
            console.error("Error adding content:", error);
            // Handle the error (e.g., display an error message to the user)
        }
    };

    return (
        <div>
            {open && (
                <div className="fixed inset-0 bg-opacity-40 backdrop-blur-md flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-xl ring-2 ring-white w-96">
                        <div className="flex justify-end">
                            <button onClick={onClose} className="cursor-pointer">
                                <Close />
                            </button>
                        </div>

                        <div className="space-y-3">
                            <Input ref={titleRef} type="text" placeholder="Title" />
                            <Input ref={linkRef} type="text" placeholder="Link" />
                        </div>

                        <div className="flex justify-around pt-4">
                            <Button text="YouTube" variant={type === "youtube" ? "primary" : "secondary"} onClick={() => setType("youtube")} />
                            <Button text="Twitter" variant={type === "twitter" ? "primary" : "secondary"} onClick={() => setType("twitter")} />
                            <Button text="Instagram" variant={type === "instagram" ? "primary" : "secondary"} onClick={() => setType("instagram")} />
                        </div>

                        <div className="flex justify-center pt-4">
                            <Button onClick={addcontent} variant="primary" text="Submit" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}