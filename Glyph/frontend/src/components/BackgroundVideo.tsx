import React, { useEffect } from 'react';

const videoForGuest = '/video1.webm';
const videoForUser = '/video2.webm';

interface BackgroundVideoProps {
  isAuthenticated: boolean;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ isAuthenticated }) => {
  useEffect(() => {
    const videoElement = document.getElementById('background-video') as HTMLVideoElement | null;
    if (videoElement) {
      const newSrc = isAuthenticated ? videoForUser : videoForGuest;
      if (videoElement.currentSrc !== window.location.origin + newSrc) {
        videoElement.src = newSrc;
        videoElement.load(); 
        videoElement.play().catch(error => {
          console.error("Video autoplay failed:", error);
        });
      }
    }
  }, [isAuthenticated]); // This effect will re-run whenever the `isAuthenticated` prop changes

  return null;
};

export default BackgroundVideo;