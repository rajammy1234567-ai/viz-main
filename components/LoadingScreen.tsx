'use client';

import { useEffect, useState } from 'react';

export function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Wait for the video to play (adjust duration based on your video length)
        const videoElement = document.querySelector('video') as HTMLVideoElement;

        if (videoElement) {
            videoElement.addEventListener('ended', () => {
                // Start fade out animation
                setFadeOut(true);
                // Remove loading screen after fade out
                setTimeout(() => {
                    setIsLoading(false);
                }, 500); // Match this with CSS transition duration
            });

            // Fallback: If video doesn't play or takes too long, auto-hide after 5 seconds
            const fallbackTimer = setTimeout(() => {
                setFadeOut(true);
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
            }, 5000);

            return () => {
                clearTimeout(fallbackTimer);
            };
        } else {
            // If video element not found, hide after 3 seconds
            const timer = setTimeout(() => {
                setFadeOut(true);
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, []);

    if (!isLoading) return null;

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-500 ${fadeOut ? 'opacity-0' : 'opacity-100'
                }`}
            style={{ pointerEvents: fadeOut ? 'none' : 'auto' }}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <video
                    autoPlay
                    muted
                    playsInline
                    className="max-w-[80vw] max-h-[80vh] object-contain"
                >
                    <source src="/logovideo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}
