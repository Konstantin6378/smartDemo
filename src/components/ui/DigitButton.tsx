import { useContextForm } from '@/utils/Context';
import Button from './Button';
import { dataNumber } from './data';

export default function DigitButton() {
  const { numberPhone, setNumberPhone } = useContextForm();
  const handleBackspace = () => {
    if (numberPhone.length > 2) {
      setNumberPhone(numberPhone.slice(0, -1));
    }
  };
  return (
    <div className="grid grid-cols-3 gap-2 w-[80%]">
      {dataNumber.map((num) => (
        <Button
          className="text-2xl font-bold px-2 py-2 hover:bg-black hover:text-white active:bg-black/25 outline-black border rounded-xl"
          type="button"
          key={num.id}
          onClick={() => setNumberPhone(numberPhone + `${num.number}`)}
        >
          {num.number}
        </Button>
      ))}

      <Button
        className="px-2 py-2 col-start-1 col-end-3 uppercase font-semibold  hover:bg-black hover:text-white active:bg-black/25 outline-black border rounded-xl"
        type="button"
        onClick={handleBackspace}
      >
        Стереть
      </Button>
      <Button
        className="text-2xl col-start-3 font-bold px-2 py-2 hover:bg-black hover:text-white active:bg-black/25 outline-black border rounded-xl"
        type="button"
        onClick={() => setNumberPhone(numberPhone + '0')}
      >
        0
      </Button>
    </div>
  );
}
