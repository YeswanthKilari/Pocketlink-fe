import { useState, useEffect } from 'react';
import { BACKEND_URL } from "../config";
import axios from 'axios';

interface Content {
    _id: string;
    title: string;
    link: string;
    type: "twitter" | "youtube" | "facebook" | "instagram";
}

export function useContent() {
    const [contents, setContents] = useState<Content[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const refreshContent = async () => {
        try {
            const response = await axios.get(`${BACKEND_URL}/api/v1/content`, {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("token")}`
                }
            });
            setContents(response.data.content);
            setIsLoading(false);
        } catch (error) {
            console.error("Error fetching content:", error);
            setError("Failed to load content");
            setIsLoading(false);
        }
    };

    useEffect(() => {
        refreshContent();
    }, []);

    return { contents, refreshContent, isLoading, error };
}