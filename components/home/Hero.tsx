'use client'
import { Calendar, Clock, Download, ExternalLink, Loader, MessageCircle, Search, ThumbsUp, User, Youtube } from 'lucide-react'
import { BackgroundCircles } from '../ui/Parallax'
import { useEffect, useRef, useState } from 'react'
import { formatDate, formatDuration, formatNumber, getFileDetails } from '@/lib/utils';
import { videoDataSchema } from '@/lib/validation';

const Hero = () => {
    const [urlInput, setUrlInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [fileSize, setFileSize] = useState('');
    const [downloadLoading, setDownloadLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [videoData, setVideoData] = useState<VideoDataType | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        if (!videoRef.current) return;

        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const getDetails = async () => {
        const res = await getFileDetails(videoData!.media_url)
        setFileSize(res?.sizeInMB!)
    }

    useEffect(() => {
        if (videoData && videoRef.current) {
            videoRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
            getDetails()
        }
    }, [videoData])

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (!urlInput) {
            setErrorMessage('Provide Url first')
            return
        } else setErrorMessage('');

        const parsedUrl = videoDataSchema.safeParse({ url: urlInput });
        if (parsedUrl.error) {
            let messages = ''
            parsedUrl.error.issues.map((i, _) => (
                messages += `${_ > 0 ? ' & ' : ''}` + i.message
            ))
            setErrorMessage(messages)

            return;
        } else setErrorMessage('');

        try {
            setLoading(true)

            const res = await fetch('https://mariachug.com/api/media/download/', {
                method: "POST",
                body: JSON.stringify({ media_url: parsedUrl.data.url }),
                headers: {
                    // 'Authorization': 'Bearer N15lUIoNycOeUt3B1Y1mVh_cb7fdy4S0',
                    // 'x-api-key': 'b6ac4f750048007378a2f8d0f3bb0c63',
                    'Content-Type': 'application/json'
                },

            })
            const data = await res.json();
            if (!res.ok) {
                throw new Error(data?.error || res.statusText)
            } else setErrorMessage('');
            setVideoData(data);
            getDetails()
        } catch (error) {
            console.log(error)
            setErrorMessage((error as Error).message)
        }
        finally {
            setLoading(false)
        }
    }
    async function downloadFile(url: string) {
        if (!url) {
            return
        };
        try {
            setDownloadLoading(true)
            const res = await fetch(url);
            const blob = await res.blob();
            const a = document.createElement("a");
            a.href = URL.createObjectURL(blob);
            a.download = "video.mp4";
            a.click();
            URL.revokeObjectURL(a.href);
        } catch (error) {
            setErrorMessage((error as Error).message)
            console.log(error);
        } finally {
            setDownloadLoading(false)
        }
    }

    return (
        <section className="relative overflow-hidden bg-s[url('/images/hero.png')] bg-[#FD5A17] pt-30 pb-24 md:pb-36 psx-4">
            <BackgroundCircles />

            <div className="relative z-10 flex flex-col items-center text-center mxs-auto">
                <h1 style={{ fontFamily: 'var(--font-ghuthen)' }} className="text-5xl max-w-5xl sm:text-6xl md:text-7xl h1-fade lg:text-[119px] font-bold text-black leading-[0.95] tracking-wide mb-4 md:mb-6 [text-shadow:1px_1px_0_#000]">
                    One Tool. Every Video.
                    <br />
                    Zero Trouble.
                </h1>
                <p style={{ fontFamily: 'var(--font-questrial)' }} className="font-body text-base md:text-lg p-fade text-black leading-relaxed mb-8 md:mb-12 max-ws-3xl mx-2">
                    Download videos from YouTube, Instagram, TikTok, Facebook and more — fast, clean, and always in HD
                </p>
                <form onSubmit={handleSubmit} className="flex btns-fade flex-row items-center justify-center gap-3 md:gap-5 max-w-3xl w-full max-sm:px-2 mx-auto">

                    <div onSubmit={handleSubmit} className="relative flex-1 w-auto">
                        <input
                            type="text"
                            placeholder="Paste your link"
                            className="w-full max-sm:text-[10px] rounded border-2 border-black bg-transparent px-4 md:px-6 py-3 md:py-5 text-base sm:text-lg md:text-xl text-black placeholder:text-black/60"
                            onChange={(e: any) => {
                                setUrlInput(e.target.value);
                                setErrorMessage('')
                            }}
                        />
                    </div>
                    <button
                        type='submit'
                        disabled={downloadLoading}
                        className="hidden md:flex disabled:opacity-45 justify-center items-center btn-animated min-w-[120px] sm:min-w-[150px] md:min-w-[180px] rounded py-3.5 sm:py-[22px] font-body text-base text-[10px]  gap-1 sm:text-lg md:text-xl">
                        <span className="btn-text mx-2 flex items-center justify-center gap-2">Download {loading ? <Loader className='animate-spin' /> : ''}</span>
                    </button>
                </form>
                {/* Preview */}
                {videoData && (
                    <div
                        id="video-preview"
                        className="flex flex-col lg:flex-row my-5 gap-6 p-3 sm:p-4 max-lg:items-centerrounded-md bg-gray-200/10 backdrop-blur-md border border-gray-200/20 shadow-lg w-full max-w-7xl mx-auto"
                    >
                        <div className="relative w-full md:w-[420px] md:max-h-[440px] aspect-video md:aspect-4/3 bg-black rounded-md overflow-hidden shadow-md">
                            <video
                                ref={videoRef}
                                src={videoData?.media_url}
                                className="w-full h-full object-cover object-top"
                            />

                            <div
                                onClick={togglePlay}
                                className="absolute inset-0 flex items-center justify-center cursor-pointer"
                            >
                                {!isPlaying && (
                                    <div className="bg-gray-600/50 p-4 rounded-full backdrop-blur-sm hover:bg-black/60 transition">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-200" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="flex-1 w-full p-2 sm:p-4 space-y-4">

                            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-200 leading-snug wrap-break-words">
                                {videoData?.data?.title}
                            </h2>

                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                                <div className="bg-gray-200/5 backdrop-blur-sm rounded-lg p-3 border border-gray-200/10">
                                    <div className="flex items-center gap-2 mb-1">
                                        <ThumbsUp className="h-4 w-4" />
                                        <span className="text-xs font-medium">Likes</span>
                                    </div>
                                    <p className="text-gray-200 font-bold text-lg">{formatNumber(videoData.data.like_count)}</p>
                                </div>

                                <div className="bg-gray-200/5 backdrop-blur-sm rounded-lg p-3 border border-gray-200/10">
                                    <div className="flex items-center gap-2 mb-1">
                                        <MessageCircle className="h-4 w-4" />
                                        <span className="text-xs font-medium">Comments</span>
                                    </div>
                                    <p className="text-gray-200 font-bold text-lg">{formatNumber(videoData.data.comment_count)}</p>
                                </div>

                                <div className="bg-gray-200/5 backdrop-blur-sm rounded-lg p-3 border border-gray-200/10">
                                    <div className="flex items-center gap-2 mb-1">
                                        <Clock className="h-4 w-4" />
                                        <span className="text-xs font-medium">Duration</span>
                                    </div>
                                    <p className="text-gray-200 font-bold text-lg">{formatDuration(videoData.data.duration)}s</p>
                                </div>

                                {fileSize && (
                                    <div className="bg-gray-200/5 backdrop-blur-sm rounded-lg p-3 border border-gray-200/10">
                                        <div className="flex items-center gap-2  mb-1">
                                            <Download className="h-4 w-4" />
                                            <span className="text-xs font-medium">Size</span>
                                        </div>
                                        <p className="text-gray-200 font-bold text-lg">{fileSize} MB</p>
                                    </div>
                                )}
                            </div>

                            <div className="bg-gray-200/5 backdrop-blur-sm rounded-lg p-4 border border-gray-200/10 space-y-2">
                                <div className="flex items-center gap-3">

                                    <div className="flex-1 min-w-0">
                                        <p className="text-gray-200 font-semibold text-sm sm:text-base truncate">{videoData.data.channel}</p>
                                        <div className="flex items-center gap-2 text-gray-200 text-xs sm:text-sm">
                                            <User className="h-6 w-6" />
                                            <span className="truncate">{videoData.data.uploader}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-gray-200 text-xs sm:text-sm pt-2 border-t border-gray-200/10">
                                    <Calendar className="h-6 w-6" />
                                    <span>Uploaded {formatDate(videoData?.data?.upload_date)}</span>
                                </div>
                            </div>

                            {videoData?.data?.description && <details className="bg-gray-200/5 backdrop-blur-sm rounded-lg  border border-gray-200/10">
                                <summary className="cursor-pointer p-4 font-semibold text-sm mb-2 hover:opacity-65 transition-colors">Description</summary>
                                <p className="text-gray-300 text-sm p-4 leading-relaxed">
                                    {videoData?.data?.description}
                                </p>
                            </details>}


                            {/* Action Buttons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">

                                <button
                                    onClick={() => downloadFile(videoData.media_url)}
                                    disabled={downloadLoading}
                                    className="hidden disabled:opacity-45  md:block px-5 py-2.5 text-sm md:text-[15px] font-normal tracking-wide btn-animated">
                                    <span className="relative btn-text z-10 flex items-center justify-center gap-2">
                                        <Download className="h-5 w-5" />
                                        Download Video
                                        {downloadLoading ? <Loader className='animate-spin' /> : ''}
                                    </span>
                                </button>

                                <a
                                    href={videoData.media_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-gray-200/10 hover:bg-gray-200/20 border-2 border-gray-200/30 hover:border-gray-200/50 text-gray-200 font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex relative items-center justify-center gap-2"
                                >
                                    <ExternalLink className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                                    Open in New Tab
                                    <div className="absolute rounded-xl inset-0 bg-gray-200/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>
                )}

                {errorMessage && <p className='text-gray-200'>{errorMessage}</p>}

            </div>
        </section >
    )
}


export default Hero
