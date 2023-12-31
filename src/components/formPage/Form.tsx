import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../ui/Button';
import InputMask from 'react-input-mask';
import { TSingUpSchema, signUpSchma } from '../lib/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { NumberDataType, useContextForm } from '@/utils/Context';
import DigitButton from '../ui/DigitButton';
import { Checkbox as Check } from '@material-tailwind/react';
import useFetch from '@/hooks/useFetch';
import { useEffect, useState } from 'react';
const API = import.meta.env.VITE_API_KEY;
export default function HookFormDoc() {
  const [isData, setIsData] = useState<NumberDataType | null>(null);
  const { numberPhone, setNumberPhone, isCheck, setIsCheck, isCheckSubmit, setIsCheckSubmit } = useContextForm();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<TSingUpSchema>({
    resolver: zodResolver(signUpSchma),
  });

  useEffect(() => {
    fetch(`${API}&number=${numberPhone}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setIsData(data);
        }
      })
      .catch((error) => console.log(error));
  }, [numberPhone]);

  const { get } = useFetch(`${API}`);

  const onSubmit: SubmitHandler<TSingUpSchema> = () => {
    if (numberPhone.length >= 12) {
      get(`&number=${numberPhone}`)
        .then((res) => {
          console.log(res);
          setIsCheckSubmit(!isCheckSubmit);
        })
        .catch((error) => console.error(error));
    }
    setNumberPhone('+7');
  };

  return (
    <>
      <div className="flex justify-center items-center w-[80%]">
        <form className="w-full h-full justify-center flex items-center flex-col" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="text-2xl w-full mb-5 font-medium ">Введите ваш номер мобильного телефона</h2>
          <InputMask
            typeof="text"
            className={
              numberPhone.length >= 12 && !isData?.valid
                ? 'text-2xl w-full font-bold bg-[#86D3F4] text-red-400'
                : `text-2xl w-full  font-bold bg-[#86D3F4]`
            }
            mask="        +7(999)999-99-99"
            {...register('numberPhone')}
            value={numberPhone}
            onChange={(e) => setNumberPhone(e.target.value)}
          />

          {errors.numberPhone && <p>Не меньше 10 символов</p>}
          <p className="text-xs w-[80%] font-medium my-4">и с Вами свяжется наш менеждер для дальнейшей консультации</p>
          <DigitButton />
          <div className="flex justify-around my-4 w-[80%]">
            {numberPhone.length >= 12 && !isData?.valid ? (
              <p className="text-red-500 font-bold uppercase">Не верно введён номер</p>
            ) : (
              <>
                <Check
                  containerProps={{
                    className: 'p-0 rounded',
                  }}
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50">
                      <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
                    </svg>
                  }
                  disabled={numberPhone.length >= 12 ? false : true}
                  className="checked:bg-[#86D3F] w-10 h-10 border-2"
                  onClick={() => setIsCheck(!isCheck)}
                  crossOrigin={undefined}
                />
                <p className="w-[100%]">Согласие на обработку персональных данных</p>
              </>
            )}
          </div>
          <Button
            type="submit"
            className={
              !isCheck
                ? 'py-2 px-2 w-full text-base text-zinc-700/40'
                : 'py-2 px-2 w-full text-lg hover:bg-black font-semibold uppercase hover:text-white active:bg-black/25 outline-black rounded-lg border'
            }
          >
            Подтвердить номер
          </Button>
        </form>
      </div>
    </>
  );
}
