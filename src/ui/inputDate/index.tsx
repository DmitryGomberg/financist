import { FC, useEffect, useState } from 'react';
import { UiInput } from 'ui/Input';

type IUiInputDateProps = {
   value: string;
   onChange: (value: string) => void;
   label: string;
}

export const UiInputDate: FC<IUiInputDateProps> = (props) => {
   const [validValue, setValidValue] = useState<string>(props.value || new Date().toLocaleDateString('ru-RU'));

   const handleChange = (text: string) => {
      const cleaned = text.replace(/\D/g, '');

      let formatted = cleaned;
      if (cleaned.length > 2) {
         const day = parseInt(cleaned.slice(0, 2), 10);
         if (day > 31) return;
         formatted = `${cleaned.slice(0, 2)}.${cleaned.slice(2)}`;
      }
      if (cleaned.length > 4) {
         const month = parseInt(cleaned.slice(2, 4), 10);
         if (month > 12) return;
         formatted = `${cleaned.slice(0, 2)}.${cleaned.slice(2, 4)}.${cleaned.slice(4)}`;
      }
      if (cleaned.length > 8) {
         const year = parseInt(cleaned.slice(4, 8), 10);
         const currentYear = new Date().getFullYear();
         if (year > currentYear) return;
      }
      if (formatted.length <= 10) {
         setValidValue(formatted);
         props.onChange(formatted);
      }
   };

   return (
      <UiInput
         value={validValue}
         placeholder={'dd.mm.yyyy'}
         onChange={handleChange}
         label={props.label}
      />
   );
};
