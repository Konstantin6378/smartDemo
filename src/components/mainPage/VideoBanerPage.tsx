import { useRef, useEffect, useState } from 'react';
import video from '@/assets/video.mp4';
import Popup from './Popup';
import { MyGlobalContext } from '@/utils/Context';

interface VideoBanerPageProps {
  videoProgress: number;
  setVideoProgress: (progress: number) => void;
}

function VideoBanerPage({ videoProgress, setVideoProgress }: VideoBanerPageProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isView, setIsView] = useState<boolean>(false);

  useEffect(() => {
    if (!isView) {
      const timerId = setTimeout(() => {
        setIsView(true);
      }, 5000);
      return () => {
        clearTimeout(timerId);
      };
    }
  }, [isView]);

  useEffect(() => {
    const currentVideo = videoRef.current;

    if (currentVideo) {
      currentVideo.currentTime = videoProgress || 0;

      const delay = setTimeout(() => {
        currentVideo.play();
      }, 2000);

      const handleFocus = () => {
        if (!currentVideo.paused) return; // Если видео уже воспроизводится, не делаем ничего
        currentVideo.play();
      };

      const handleBlur = () => {
        if (currentVideo.paused) return; // Если видео уже на паузе, не делаем ничего
        currentVideo.pause();
      };

      window.addEventListener('focus', handleFocus);
      window.addEventListener('blur', handleBlur);

      return () => {
        clearTimeout(delay);
        window.removeEventListener('focus', handleFocus);
        window.removeEventListener('blur', handleBlur);
      };
    }
  }, [videoRef]);

  return (
    <MyGlobalContext.Provider value={{ isView, setIsView }}>
      <div className="relative bg-no-repeat w-[1280px] h-[720px]">
        <div className="absolute">
          <video
            ref={videoRef}
            loop
            muted
            autoPlay
            onTimeUpdate={() => {
              setVideoProgress(videoRef.current?.currentTime || 0);
            }}
          >
            <source src={video} />
          </video>
        </div>
        {isView && <Popup />}
      </div>
    </MyGlobalContext.Provider>
  );
}

export default VideoBanerPage;
