import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import QR from '@/assets/qr-code.gif';
import { motion } from 'framer-motion';
import ButtonClose from '@/ui/ButtonClose';
export default function Popup() {
  const [isClose, setIsClose] = useState<boolean>(false);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (!isClose) {
      const closeId = setTimeout(() => {
        setIsClose(true);
      }, 15000);
      return () => {
        clearTimeout(closeId);
      };
    }
  }, [isClose]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex absolute w-full h-full justify-center items-center"
      >
        <div className="w-1/6 absolute  right-0 h-1/2 flex items-center justify-center bg-[#86D3F4] ">
          <div className="w-full h-full flex justify-evenly items-center flex-col">
            <div className="">
              <h2 className="uppercase text-[10px] mx-3 font-semibold">
                Исполните мечту вашего малыша! Поадирте ему собаку!
              </h2>
            </div>
            <div className="">
              <Link to="/main">
                <img
                  src={QR}
                  width="132"
                  height="132"
                  title="QR код"
                  className="select-none"
                  onLoad={() => setIsImageLoaded(true)}
                />
              </Link>
            </div>
            <div className="">
              {!isImageLoaded && <p>Loading...</p>}
              {isImageLoaded && <p>Сканируйте QR-код или нажмите ОК</p>}
            </div>
            <div className="z-10">
              <Link
                aria-label="button-link"
                type="button"
                className="border bg-black hover:bg-[#86D3F4] active:bg-zinc-700/70 rounded-lg hover:text-black border-black outline-black text-[#86D3F4] px-14 py-2"
                to="/main"
              >
                OK
              </Link>
            </div>
          </div>
          {isClose && <ButtonClose />}
        </div>
      </motion.div>
    </>
  );
}
