import { ChangeEvent, useEffect, useState } from 'react';
import { eventTargetValues } from '../interfaces';

/**
* Custom hook to help with controlling form values. Uses initial hook to shape the values it will control, then updates them as the set hook is called in the component.
*
* todo -> If order info is available in the getDraggedItem we should set it to state and use that to update, instead of using data.
*
* @param {any} initial - initial values used in the controlled form in a component
* @return - Returns state and functions to set the state in the component it is rendered in.
*/

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
