export default function Button({ operator, fn }) {
  return (
    <button
      type='button'
      className='flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-sky-400 text-2xl font-bold text-white hover:ring-2 hover:ring-sky-500 hover:ring-offset-2 hover:outline-none'
      onClick={fn}
    >
      {operator}
    </button>
  );
}
