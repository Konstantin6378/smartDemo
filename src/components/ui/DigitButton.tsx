import { useState, useEffect, useRef } from 'react';
import { useContextForm } from '@/utils/Context';

import Button from './Button';
import { dataButton } from './data';

export default function DigitButton() {
  const { numberPhone, setNumberPhone } = useContextForm();

  const [selectedElement, setSelectedElement] = useState(0);
  const selectedButtonRef = useRef<HTMLButtonElement>(null);

  const handleBackspace = () => {
    if (numberPhone.length > 2) {
      setNumberPhone(numberPhone.slice(0, -1));
    }
  };

  const maxLength = 12;

  const handleButtonClick = (index: number) => {
    setSelectedElement(index);

    if (index === 9) {
      handleBackspace();
    } else {
      const value = dataButton[index].button;

      if (numberPhone.length < maxLength) {
        setNumberPhone(numberPhone + value);
      }
    }
  };

  const handleKeyPress = (event: { key: string; preventDefault: () => void }) => {
    switch (event.key) {
      case 'Tab':
        event.preventDefault();

        if (selectedElement === 10) {
          setSelectedElement(0);
        } else {
          setSelectedElement(selectedElement + 1);
        }
        break;
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
        event.preventDefault();
        if (selectedElement === 9) {
          handleBackspace();
        } else {
          const value = dataButton[selectedElement].button;

          if (numberPhone.length < maxLength) {
            setNumberPhone(numberPhone + value);
          }
        }

        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (selectedButtonRef.current) {
      selectedButtonRef.current.focus();
    }
  }, [selectedElement]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="grid grid-cols-3 gap-2 w-[80%]">
      {dataButton.map((num, index) => (
        <Button
          ref={index === selectedElement ? selectedButtonRef : null}
          className={`
            ${
              num.button === 0
                ? 'text-2xl col-start-3 font-bold px-2 py-2  hover:bg-black hover:text-white active:bg-black/25 outline-black border rounded-xl'
                : 'text-2xl font-bold px-2 py-2 hover:bg-black hover:text-white active:bg-black/25 outline-black border rounded-xl  '
            }
            ${
              num.button === 'Стереть'
                ? 'px-2 py-2 col-start-1 col-end-3 uppercase font-medium hover:bg-black hover:text-white active:bg-black/25 outline-black border rounded-xl'
                : 'text-2xl font-bold px-2 py-2 hover:bg-black hover:text-white active:bg-black/25 outline-black border rounded-xl  '
            }
            ${index === selectedElement ? 'bg-black text-white' : ''}
          `}
          type="button"
          key={num.id}
          onClick={() => handleButtonClick(index)}
        >
          {num.button}
        </Button>
      ))}
    </div>
  );
}
