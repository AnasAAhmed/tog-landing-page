import z from "zod";

export const videoDataSchema = z.object({
    url: z
        .url("Invalid URL format").min(6, 'Url Is Required')
        .refine((url) => {
            const allowedHosts = [
                "instagram.com",
                "twitter.com",
                "x.com",
                "tiktok.com",
                "vm.tiktok.com",
                "youtube.com",
                "youtu.be",
                "facebook.com",
                "fb.watch",
            ];
            const { hostname } = new URL(url);
            return allowedHosts.some(domain => hostname.includes(domain));
        }, { message: "Unsupported platform" })
        .refine((url) => {
            const newUrl = new URL(url);

            if (newUrl.hostname.includes("youtube.com") || newUrl.hostname.includes("youtu.be")) {
                return /\/shorts\//.test(url);
            }

            if (newUrl.hostname.includes("facebook.com") || newUrl.hostname.includes("fb.watch")) {
                return /\/reel\//.test(url);
            }

            return true;
        }, {
            message: "YouTube: Only Shorts allowed / Facebook: Only Reels allowed"
        }),
});