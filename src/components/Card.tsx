import { useEffect } from "react";
import { PlusIcon } from "../icons/PlusIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube" | "facebook" | "instagram";
}

const getYouTubeEmbedUrl = (url: string) => {
  try {
    const urlObj = new URL(url);
    let videoId = urlObj.searchParams.get("v");

   
    if (!videoId) {
      videoId = urlObj.pathname.substring(1);
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  } catch {
    return url;
  }
};

export function Card({ title, link, type }: CardProps) {
  useEffect(() => {
    if (type === "twitter" && window.twttr?.widgets) {
      window.twttr.widgets.load();
    }
  }, [type, link]);
    
  const formattedTwitterLink = link.replace("x.com", "twitter.com");

  return (
    <div className="bg-white h-min w-150px  font-light border rounded-md shadow-md border-gray-200">
      <div className="part-1 flex justify-between items-center p-2">
        <div className="flex gap-2">
          <PlusIcon />
          {title}
        </div>
        <div className="flex gap-2 text-gray-500">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <PlusIcon />
          </a>
          <PlusIcon />
        </div>
      </div>
      <div className="part-2 pt-4 overflow-hidden justify-center items-center object-center  h-min ">
        {type === "youtube" && (
          <iframe
            className="w-full p-3"
            draggable
            src={getYouTubeEmbedUrl(link)}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
        {type === "twitter" && (
          <blockquote className="twitter-tweet w-50">
            <a href={formattedTwitterLink}>{formattedTwitterLink}</a>
          </blockquote>
        )}
      </div>
    </div>
  );
}
