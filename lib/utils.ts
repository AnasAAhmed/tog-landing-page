import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export async function getFileDetails(url: string) {
  if (!url) return;
  let duration = 0;
  try {
    const res = await fetch(url);
    const blob = await res.blob();
    const sizeInBytes = blob.size;
    const sizeInMB = (sizeInBytes / (1024 * 1024)).toFixed(2);
    const videoEl = document.createElement("video");
    videoEl.preload = "metadata";

    const objectUrl = URL.createObjectURL(blob);
    videoEl.src = objectUrl;

    // videoEl.onloadedmetadata = () => {
    //   duration = videoEl.duration;
    //   URL.revokeObjectURL(objectUrl);
    // };
    return {  sizeInMB }
  } catch (error) {
    console.error(error);
    return {  sizeInMB:'' }

  }
}

export const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
};

export const formatDuration = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    if (hrs > 0) return `${hrs}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};
