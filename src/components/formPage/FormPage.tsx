import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HookFormDoc from '../ui/Form';
import { FormContext } from '@/utils/Context';
import FormAccepted from './FormAccepted';

interface MainPageProps {
  videoProgress: number;
  setVideoProgress: (progress: number) => void;
}

export default function MainPage({ videoProgress, setVideoProgress }: MainPageProps) {
  const navigate = useNavigate();
  const [numberPhone, setNumberPhone] = useState('+7');
  const [isCheck, setIsCheck] = useState(false);
  const [isCheckSubmit, setIsCheckSubmit] = useState(false);
  const timeoutRef = useRef<number>();

  // при переходе на эту страницу востонавливает прогресс видео.
  useEffect(() => {
    setVideoProgress(videoProgress);
  }, []);

  // Возвращает на стартовую страницу если нет активности от пользователя в течении 20 секунд

  useEffect(() => {
    const handleUserInteraction = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = window.setTimeout(() => {
        navigate('/');
      }, 20000);
    };

    document.addEventListener('mousemove', handleUserInteraction);
    document.addEventListener('keydown', handleUserInteraction);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      document.removeEventListener('mousemove', handleUserInteraction);
      document.removeEventListener('keydown', handleUserInteraction);
    };
  }, []);

  return (
    <FormContext.Provider value={{ numberPhone, setNumberPhone, isCheck, setIsCheck, isCheckSubmit, setIsCheckSubmit }}>
      <div className="bg-main-page bg-no-repeat w-[1280px] h-[720px]">
        <div className="flex justify-center relative w-full h-full">
          <div className="w-[30%] flex justify-center bg-[#86D3F4] left-0 h-full absolute">
            {isCheckSubmit ? <FormAccepted /> : <HookFormDoc />}
          </div>
          <Link
            className="text-black font-bold right-0 bg-white hover:border-white border-black border-4 mr-3 mt-2 absolute px-6 py-2 hover:bg-black hover:text-white active:bg-black/25"
            to="/"
          >
            X
          </Link>
        </div>
      </div>
    </FormContext.Provider>
  );
}
