import { useState } from 'react';
import formatMoney from './helpers';
import Header from '@/components/Header';
import Button from '@/components/Button';

export default function App() {
  const [quantity, setQuantity] = useState(15000);

  const MIN = 0;
  const MAX = 30000;
  const STEP = 100;

  function handleChange(e) {
    setQuantity(parseInt(e.target.value));
  }

  function handleClickDecrement() {
    const value = quantity - STEP;
    if (value < MIN) return alert(`La cantidad mínima es ${MIN}`);

    setQuantity(value);
  }

  function handleClickIncrease() {
    const value = quantity + STEP;
    if (value > MAX) return alert(`La cantidad máxima es ${MAX}`);

    setQuantity(value);
  }

  return (
    <div className='mx-auto my-20 max-w-lg rounded-sm bg-white p-10 shadow-sm'>
      <Header />
      <div className='my-6 flex justify-between'>
        <Button operator='-' fn={handleClickDecrement} />
        <Button operator='+' fn={handleClickIncrease} />
      </div>
      <input
        type='range'
        className='h-6 w-full bg-neutral-200 accent-sky-400 hover:accent-sky-600'
        onChange={handleChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={quantity}
      />
      <p className='my-10 text-center text-5xl font-extrabold text-sky-600'>
        {formatMoney(quantity)}
      </p>
    </div>
  );
}
