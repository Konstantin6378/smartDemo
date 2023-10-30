import { useState } from 'react';
import { Link } from 'react-router-dom';
import HookFormDoc from '@/ui/Form';
import { FormContext } from '@/utils/Context';

export default function FormPage() {
  const [numberPhone, setNumberPhone] = useState('+7');
  const [isCheck, setIsCheck] = useState(false);

  return (
    <FormContext.Provider value={{ numberPhone, setNumberPhone, isCheck, setIsCheck }}>
      <div className="bg-main-page bg-no-repeat w-[1280px] h-[720px]">
        <div className="flex justify-center relative w-full h-full">
          <div className="w-[30%] flex justify-center bg-[#86D3F4] left-0 h-full absolute">
            <HookFormDoc />
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
