export default function FormAccepted() {
  return (
    <div className="flex justify-center items-center w-[80%] flex-col">
      <div className="h-[20%] flex flex-col justify-around">
        <h2 className="uppercase text-4xl mb-8 font-bold h-10">Заявка принята</h2>
        <p className="text-xs font-semibold w-full break-normal">
          Держите телефон под рукой. <br />
          Скоро Вами свяжется наш менеджер.{' '}
        </p>
      </div>
    </div>
  );
}
