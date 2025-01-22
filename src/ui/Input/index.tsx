import { FC } from 'react';
import { UiInputContainer, UiInputLabel, UiInputMain } from './styled';

type IUiInputProps = {
   placeholder?: string;
   onChange: (value: string) => void;
   label?: string;
   value: string;
   type?: string;
};

export const UiInput: FC<IUiInputProps> = (props) => {

   const handleClick = (value: string) => {
      props.onChange(value);
   };

   return (
      <UiInputContainer>
         {props.label && <UiInputLabel>{props.label}</UiInputLabel>}
         <UiInputMain placeholder={props.placeholder} onChange={(e) => handleClick(e.target.value)}
                      value={props.value} type={props.type} />
      </UiInputContainer>
   );
};