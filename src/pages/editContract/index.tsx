import { FC, useState } from 'react';
import { EditContractPageContainer, EditContractPageLine } from './styled';
import { RadioCheckboxWrapper, Title } from '../../styled';
import { UiButton } from 'ui/Button';
import { UiInput } from 'ui/Input';
import { UiInputSum } from 'ui/inputSum';
import { UiRadio } from 'ui/Radio';
import { PayConditions } from './payConditions';
import { EDateType } from 'utils';

export type IStageTypes = {
   id: number;
   name: string;
   percent: number;
   time: number;
   dayType: EDateType;
};

export const EditContractPage: FC = () => {
   let [name, setName] = useState<string>('');
   let [num, setNum] = useState<string>('');
   let [customer, setCustomer] = useState<string>('');
   let [sum, setSum] = useState<string>('');
   let [date, setDate] = useState<string>(new Date().toLocaleDateString('ru-RU'));
   let [timeDelivery, setTimeDelivery] = useState<string>('');
   let [timeDeliveryType, setTimeDeliveryType] = useState<EDateType>(EDateType.calendar);
   let [stages, setStages] = useState<IStageTypes[]>([]);

   const addStage = () => {
      setStages([...stages, { id: Date.now(), name: '', percent: 0, time: 0, dayType: EDateType.calendar }]);
   };

   const updateStage = (id: number, updatedStage: Partial<IStageTypes>) => {
      setStages(stages.map(stage => (stage.id === id ? { ...stage, ...updatedStage } : stage)));
   };

   const deleteStage = (id: number) => {
      setStages(stages.filter(stage => stage.id !== id));
   };

   const handleSubmit = () => {
      const contractData = {
         name,
         num,
         customer,
         sum,
         date,
         timeDelivery,
         timeDeliveryType,
         stages,
      };
      console.log(contractData);
   };

   return (
      <EditContractPageContainer>
         <Title>Редактировать договор</Title>

         <UiInput onChange={(text) => setName(text)} value={name} label={'Наименование поставляемой продукции'}
                  placeholder={'Введите значение'} />
         <UiInput onChange={(text) => setNum(text)} value={num} label={'Номер договора'}
                  placeholder={'Введите значение'} />
         <UiInput onChange={(text) => setCustomer(text)} value={customer} label={'Наименование заказчика'}
                  placeholder={'Введите значение'} />
         <EditContractPageLine>
            <UiInputSum value={sum} onChange={(text) => setSum(text)} label={'Сумма договора'} />
            <UiInput type={'date'} value={date} onChange={(text) => setDate(text)}
                     label={'Дата составления договора'} />
         </EditContractPageLine>
         <EditContractPageLine>
            <UiInput onChange={(text) => setTimeDelivery(text)} value={timeDelivery} label={'Срок поставки'}
                     placeholder={'Введите значение'} type={'number'} />
            <RadioCheckboxWrapper>
               <UiRadio label={'Календарных дней'} checked={timeDeliveryType === EDateType.calendar}
                        onChange={() => setTimeDeliveryType(EDateType.calendar)} />
               <UiRadio label={'Рабочих дней'} checked={timeDeliveryType === EDateType.work}
                        onChange={() => setTimeDeliveryType(EDateType.work)} />
            </RadioCheckboxWrapper>
         </EditContractPageLine>

         <PayConditions stages={stages} addStage={addStage} updateStage={updateStage} deleteStage={deleteStage} />

         <UiButton label={'Сохранить изменения'} onClick={handleSubmit} />
      </EditContractPageContainer>
   );
};