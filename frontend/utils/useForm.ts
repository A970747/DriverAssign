import { ChangeEvent, useEffect, useState } from 'react';
import { eventTargetValues } from '../interfaces';

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState<any>(initial);
  const initialValues = Object.values(initial).join('');

  useEffect(() => {
    setInputs(initial);
  }, [initialValues]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let { name, type, value }: eventTargetValues = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  return {
    inputs,
    setInputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
