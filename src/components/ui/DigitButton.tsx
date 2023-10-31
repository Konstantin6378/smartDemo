import { useState, useEffect } from 'react';
import { useContextForm } from '@/utils/Context';

import Button from './Button';
import { dataNumber } from './data';

export default function DigitButton() {
  const { numberPhone, setNumberPhone } = useContextForm();

  const [selectedElement, setSelectedElement] = useState(0);

  const handleBackspace = () => {
    if (numberPhone.length > 0) {
      setNumberPhone(numberPhone.slice(0, -1));
    }
  };

  const handleKeyPress = (event: { key: string }) => {
    switch (event.key) {
      case 'ArrowUp':
        if (selectedElement === 0 || selectedElement === 1 || selectedElement === 2) {
          setSelectedElement(selectedElement);
        } else if (selectedElement === 10) {
          setSelectedElement(8);
        } else {
          setSelectedElement(selectedElement - 3);
        }
        break;

      case 'ArrowDown':
        if (selectedElement === 7) {
          setSelectedElement(selectedElement + 2);
        } else if (selectedElement === 8) {
          setSelectedElement(selectedElement + 2);
        } else if (selectedElement === 9) {
          setSelectedElement(10);
        } else if (selectedElement === 10) {
          setSelectedElement(selectedElement);
        } else {
          setSelectedElement(selectedElement + 3);
        }
        break;

      case 'ArrowLeft':
        if (selectedElement === 0) {
          setSelectedElement(selectedElement);
        } else {
          setSelectedElement(selectedElement - 1);
        }
        break;

      case 'ArrowRight':
        if (selectedElement === 8) {
          setSelectedElement(selectedElement + 1);
        } else if (selectedElement === 10) {
          setSelectedElement(selectedElement);
        } else {
          setSelectedElement(selectedElement + 1);
        }
        break;

      case 'Enter':
        if (selectedElement === 9) {
          handleBackspace();
        } else if (selectedElement === 10) {
          setNumberPhone(numberPhone + '0');
        } else if (selectedElement < 9) {
          const value = dataNumber[selectedElement].number;
          setNumberPhone(numberPhone + value);
        } else {
          handleBackspace();
        }
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="grid grid-cols-3 gap-2 w-[80%]">
      {dataNumber.map((num, index) => (
        <Button
          className={`
            text-2xl font-bold px-2 py-2 
            hover:bg-black hover:text-white 
            active:bg-black/25 outline-black border rounded-xl  
            ${index === selectedElement ? 'bg-black text-white' : ''}
          `}
          type="button"
          key={num.id}
          onClick={() => setNumberPhone(numberPhone + num.number)}
        >
          {num.number}
        </Button>
      ))}

      <Button
        className={`
          px-2 py-2 col-start-1 col-end-3 uppercase font-semibold 
          hover:bg-black hover:text-white active:bg-black/25 outline-black border rounded-xl  
          ${selectedElement === 9 ? 'bg-black text-white' : ''}
        `}
        type="button"
        onClick={handleBackspace}
      >
        Стереть
      </Button>

      <Button
        className={`
          text-2xl col-start-3 font-bold px-2 py-2  
          hover:bg-black hover:text-white active:bg-black/25 outline-black border rounded-xl
          ${selectedElement === 10 ? 'bg-black text-white' : ''} 
        `}
        type="button"
        onClick={() => setNumberPhone(numberPhone + '0')}
      >
        0
      </Button>
    </div>
  );
}
