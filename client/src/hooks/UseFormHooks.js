import { useState } from 'react';

export const UseFormHook = (initialValues, isValidate, validations) => {
  const [formValues, setFormValues] = useState(initialValues);
  
  const handleInputValues = (e) => {
    const { name, value } = e.target;
      setFormValues({
        ...formValues,
        [name]: value,
      });

      if(isValidate) {
        validations({[name]: value})
      }
  };

  const handleSelectValues = (e) => {
    const { name, value } = e.target;

      setFormValues({
        ...formValues,
        [name]: value,
      });

      if(isValidate) {
        validations({ [name] : value })
      }
  };

  
  return {
    formValues, 
    setFormValues,
    handleInputValues,
    handleSelectValues
  }
};
