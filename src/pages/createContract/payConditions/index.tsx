import React, { FC } from 'react';
import { EDateType } from 'utils';
import { Subtitle } from '../../../styled';
import { PayConditionsItem } from './item';
import { PayConditionsContainer, PayConditionsMore, PayConditionsWrapper } from './styled';
import { Add } from '@mui/icons-material';
import { PayConditionsError } from './styled';

export type IStageTypes = {
   id: number;
   name: string;
   percent: number;
   time: number;
   dayType: EDateType;
};

type PayConditionsProps = {
   stages: IStageTypes[];
   addStage: () => void;
   updateStage: (id: number, updatedStage: Partial<IStageTypes>) => void;
   deleteStage: (id: number) => void;
   error?: boolean
};

export const validateNames = (stages: IStageTypes[]) =>{
   for (const stage of stages) {
      if(stage.name === '') {
         return false
      }
   }
   return true
}
export const validateStages = (stages: IStageTypes[]) => {
   let sumOfPercents = 0;
   stages.map((stage)=>{
      sumOfPercents += Number(stage.percent);
   })
   return sumOfPercents === 100
};

export const PayConditions: FC<PayConditionsProps> = ({ stages, addStage, updateStage, deleteStage, error }) => {
   return (
      <PayConditionsContainer>
         <Subtitle>Укажите условия оплаты</Subtitle>
         {validateNames(stages)}
         {error && !validateStages(stages) && <PayConditionsError>{stages.length > 0 ? "Неверно указаны проценты от общей суммы - их сумма должна давать 100 %" : "Укажите условия оплаты"}</PayConditionsError>}
         <PayConditionsWrapper>
            {stages.map(stage => (
               <PayConditionsItem key={stage.id} stage={stage} updateStage={updateStage} deleteStage={deleteStage} error={error} />
            ))}
            <PayConditionsMore onClick={addStage}><Add />Добавить этап</PayConditionsMore>
         </PayConditionsWrapper>
      </PayConditionsContainer>
   );
};