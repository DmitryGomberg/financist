import React, { FC } from 'react';
import { EDateType } from 'utils';
import { PayConditionsItemContainer, PayConditionsItemDelete } from './styled';
import { IStageTypes } from '../index';
import { UiInput } from 'ui/Input';
import { UiRadio } from 'ui/Radio';
import { RadioCheckboxWrapper } from '../../../../styled';
import { Delete } from '@mui/icons-material';

type PayConditionsItemProps = {
   stage: IStageTypes;
   updateStage: (id: number, updatedStage: Partial<IStageTypes>) => void;
   deleteStage: (id: number) => void;
};

export const PayConditionsItem: FC<PayConditionsItemProps> = ({ stage, updateStage, deleteStage }) => {
   const handleChange = (name: string, value: string | EDateType) => {
      updateStage(stage.id, { [name]: value });
   };

   return (
      <PayConditionsItemContainer>
         <UiInput
            type="text"
            label={'Название этапа'}
            value={stage.name}
            onChange={(value) => handleChange('name', value)}
            placeholder="Название этапа"
         />
         <UiInput
            type="number"
            label={'Процент от суммы'}
            value={stage.percent.toString()}
            onChange={(value) => handleChange('percent', value)}
            placeholder="Процент"
         />
         <UiInput
            type="number"
            label={'Срок получения средств'}
            value={stage.time.toString()}
            onChange={(value) => handleChange('time', value)}
            placeholder="Время"
         />
         <RadioCheckboxWrapper>
            <UiRadio
               checked={stage.dayType === EDateType.calendar}
               onChange={() => handleChange('dayType', EDateType.calendar)}
               label="Календарные дни"
            />
            <UiRadio
               checked={stage.dayType === EDateType.work}
               onChange={() => handleChange('dayType', EDateType.work)}
               label="Рабочие дни"
            />
         </RadioCheckboxWrapper>
         <PayConditionsItemDelete onClick={() => deleteStage(stage.id)}>
            <Delete />
         </PayConditionsItemDelete>
      </PayConditionsItemContainer>
   );
};