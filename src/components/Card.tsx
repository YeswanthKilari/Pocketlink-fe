// src/components/Card.tsx
import { useEffect } from "react";
import { PlusIcon } from "../icons/PlusIcon";

export type ContentType = "twitter" | "youtube" | "facebook" | "instagram";

interface CardProps {
    title: string;
    link: string;
    type: ContentType;
}

const getYouTubeEmbedUrl = (url: string) => {
    try {
        const urlObj = new URL(url);
        let videoId = urlObj.searchParams.get("v");

        if (!videoId) {
            videoId = urlObj.pathname.substring(1);
        }

        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        } else {
            console.warn("No video ID found in YouTube URL:", url);
            return url;
        }
    } catch (error) {
        console.error("Error parsing YouTube URL:", url, error);
        return url;
    }
};

declare global {
    interface Window {
        twttr?: {
            widgets: {
                load: () => void;
            };
        };
    }
}

export function Card({ title, link, type }: CardProps) {
    const formattedTwitterLink = link.replace("x.com", "twitter.com");

    useEffect(() => {
        if (type === "twitter") {
            const loadTwitterScript = () => {
                if (!window.twttr) {
                    const script = document.createElement("script");
                    script.src = "https://platform.twitter.com/widgets.js";
                    script.async = true;
                    document.body.appendChild(script);
                    script.onload = () => window.twttr?.widgets?.load();
                } else {
                    window.twttr.widgets.load();
                }
            };

            loadTwitterScript();
        }
    }, [type, formattedTwitterLink]);

    let content;

    switch (type) {
        case "youtube":
            content = (
                <iframe
                    className="w-full"
                    style={{ aspectRatio: "16/9" }} 
                    draggable
                    src={getYouTubeEmbedUrl(link)}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe>
            );
            break;
        case "twitter":
            content = (
                <blockquote className="twitter-tweet">
                    <a href={formattedTwitterLink}>{formattedTwitterLink}</a>
                </blockquote>
            );
            break;
        case "facebook":
            content = <p>Facebook content placeholder. Implement Facebook embed logic here.</p>;
            break;
        case "instagram":
            content = <p>Instagram content placeholder. Implement Instagram embed logic here.</p>;
            break;
        default:
            content = <p>Unsupported content type.</p>;
    }

    return (
        <div className="bg-white font-light border rounded-md shadow-md border-gray-200 break-inside-avoid">
            <div className="part-1 flex justify-between items-center p-2">
                <div className="flex gap-2">{title}</div>
                <div className="flex gap-2 text-gray-500">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <PlusIcon />
                    </a>
                </div>
            </div>
            <div className="part-2 pt-4 overflow-hidden justify-center items-center object-center">
                {content}
            </div>
        </div>
    );
}
