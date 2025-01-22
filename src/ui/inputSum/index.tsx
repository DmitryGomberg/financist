import { FC, useState } from 'react';
import { UiInput } from 'ui/Input';

type IUiInputSumProps = {
   value: string;
   onChange: (value: string) => void;
   label: string;
}

export const UiInputSum: FC<IUiInputSumProps> = (props) => {
   const [validValue, setValidValue] = useState<string>(props.value || '');

   const handleChange = (text: string) => {
      const formatted = text.replace(/[^\d.]/g, '');
      setValidValue(formatted);
      props.onChange(formatted);
   };

   return (
      <UiInput
         value={validValue}
         placeholder={'Введите сумму'}
         onChange={handleChange}
         label={props.label}
      />
   );
};