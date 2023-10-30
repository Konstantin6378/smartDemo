import { useGlobalContext } from '@/components/utils/Context';

export default function ButtonClose() {
  const { setIsView } = useGlobalContext();
  return (
    <div className="absolute w-full h-full mr-3 mt-1 ">
      <button
        className="top-0 absolute right-0  z-30  m-0  border-none rounded-full  hover:text-white active:bg-black/25 "
        onClick={() => setIsView(false)}
      >
        x
      </button>
    </div>
  );
}
