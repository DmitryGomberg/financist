import { FC } from 'react';
import { UiRadioContainer, UiRadioLabel, UiRadioMain } from './styled';
import { Check } from '@mui/icons-material';

type IUiRadioProps = {
   label: string;
   checked: boolean;
   onChange(): void;
};

export const UiRadio: FC<IUiRadioProps> = (props) => {
   return (
      <UiRadioContainer onClick={props.onChange}>
         <UiRadioMain active={props.checked.toString()}>
            <Check />
         </UiRadioMain>
         <UiRadioLabel>{props.label}</UiRadioLabel>
      </UiRadioContainer>
   );
};