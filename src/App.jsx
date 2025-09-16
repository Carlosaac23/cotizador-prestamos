import { useState, useEffect } from 'react';
import { formatMoney, calculateTotalPay } from './helpers';
import Header from '@/components/Header';
import Button from '@/components/Button';

export default function App() {
  const [quantity, setQuantity] = useState(15000);
  const [months, setMonths] = useState(6);
  const [total, setTotal] = useState(0);
  const [pay, setPay] = useState(0);

  useEffect(() => {
    const totalToPayResult = calculateTotalPay(quantity, months);
    setTotal(totalToPayResult);
  }, [quantity, months]);

  useEffect(() => {
    setPay(total / months);
  }, [total, months]);

  const MIN = 0;
  const MAX = 30000;
  const STEP = 100;

  function handleRangeChange(e) {
    setQuantity(parseInt(e.target.value));
  }

  function handleSelectChange(e) {
    setMonths(parseInt(e.target.value));
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
        onChange={handleRangeChange}
        min={MIN}
        max={MAX}
        step={STEP}
        value={quantity}
      />

      <p className='my-10 text-center text-5xl font-extrabold text-sky-600'>
        {formatMoney(quantity)}
      </p>

      <h2 className='text-center text-2xl font-extrabold text-neutral-500'>
        Elige un <span className='text-sky-600'>plazo</span> a pagar
      </h2>
      <select
        className='mt-5 w-full rounded-sm border border-neutral-300 p-2 text-center text-lg font-bold text-neutral-500'
        value={months}
        onChange={handleSelectChange}
      >
        <option value='6'>6 Meses</option>
        <option value='12'>12 Meses</option>
        <option value='24'>24 Meses</option>
      </select>

      <div className='my-5 space-y-3 rounded-sm bg-neutral-50 p-5'>
        <h2 className='text-center text-2xl font-extrabold text-neutral-500'>
          Resumen <span className='text-sky-600'>de pagos</span>
        </h2>
        <p className='text-center text-xl font-bold text-neutral-500'>
          {months} Meses
        </p>
        <p className='text-center text-xl font-bold text-neutral-500'>
          {formatMoney(total)} Total a pagar
        </p>
        <p className='text-center text-xl font-bold text-neutral-500'>
          {formatMoney(pay)} Pago mensual
        </p>
      </div>
    </div>
  );
}
