import {FC, useState} from 'react';
import {CreateContractPageContainer, CreateContractPageLine} from './styled';
import {RadioCheckboxWrapper, Title} from '../../styled';
import {UiButton} from 'ui/Button';
import {UiInput} from 'ui/Input';
import {UiRadio} from 'ui/Radio';
import {PayConditions, validateNames, validateStages} from './payConditions';
import {EDateType, IContractTypes, IStageTypes} from 'utils';

export const CreateContractPage: FC = () => {
   let [name, setName] = useState<string>('');
   let [num, setNum] = useState<string>('');
   let [customer, setCustomer] = useState<string>('');
   let [sum, setSum] = useState<string>('0');
   let [date, setDate] = useState<string>('');
   let [timeDelivery, setTimeDelivery] = useState<string>('');
   let [timeDeliveryType, setTimeDeliveryType] = useState<EDateType>(EDateType.calendar);
   let [stages, setStages] = useState<IStageTypes[]>([]);
   let [error, setError] = useState(false);

   const addStage = () => {
      setStages([...stages, { id: Date.now(), name: '', percent: 0, time: 0, dayType: EDateType.calendar }]);
   };

   const updateStage = (id: number, updatedStage: Partial<IStageTypes>) => {
      setStages(stages.map(stage => (stage.id === id ? { ...stage, ...updatedStage } : stage)));
   };

   const deleteStage = (id: number) => {
      setStages(stages.filter(stage => stage.id !== id));
   };

   function validate () {
      if(!name || !num || !customer || !sum || !date || !timeDelivery  || !validateStages(stages) || !validateNames(stages)){
         alert('Исправьте ошибки в форме');
         console.log(
            !name, !num, !customer, !sum, !date, !timeDelivery, !validateStages(stages), !validateNames(stages)
         );
         return false;
      }
      return true;
   }

   const handleSubmit = async () => {
      const formatDateForMySQL = (date: Date) => {
         return date.toISOString().slice(0, 19).replace('T', ' ');
      };

      const contractData = {
         name: name,
         number: num,
         customerName: customer,
         price: Number(sum),
         dateOfCreate: formatDateForMySQL(new Date(date)),
         deadline: Number(timeDelivery),
         deadlineType: timeDeliveryType === EDateType.calendar ? 'calendar' : 'work',
         payCondition: stages,
      };

      const createContract = async (contractData: IContractTypes) => {
         try {
            const response = await fetch('http://localhost:4565/contracts', {
               method: 'POST',
               headers: {
                  'Content-Type': 'application/json',
               },
               body: JSON.stringify(contractData),
            });
            if (!response.ok) {
               throw new Error(`Ошибка при создании договора: ${response.status}`);
            } else {
               alert ('Договор успешно создан')
            }
         } catch (error) {
            console.error(error);
         }
      };

      await createContract(contractData);
   };

   return (
      <CreateContractPageContainer>
         <Title>Добавить договор +</Title>

         <UiInput onChange={(text) => setName(text)} value={name} label={'Введите наименование поставляемой продукции'}
                  placeholder={'Введите значение'} validated={error} />
         <UiInput onChange={(text) => setNum(text)} value={num} label={'Введите номер договора'}
                  placeholder={'Введите значение'} validated={error} />
         <UiInput onChange={(text) => setCustomer(text)} value={customer} label={'Введите наименование заказчика'}
                  placeholder={'Введите значение'} validated={error} />
         <CreateContractPageLine>
            <UiInput type={'number'} value={sum} onChange={(text) => setSum(text)} label={'Введите сумму договора'} validated={error} />
            <UiInput type={'date'} value={date} onChange={(text) => setDate(text)}
                     label={'Введите дату составления договора'} validated={error} />
         </CreateContractPageLine>
         <CreateContractPageLine>
            <UiInput onChange={(text) => setTimeDelivery(text)} value={timeDelivery} label={'Введите срок поставки'}
                     placeholder={'Введите значение'} type={'number'} validated={error} />
            <RadioCheckboxWrapper>
               <UiRadio label={'Календарных дней'} checked={timeDeliveryType === EDateType.calendar}
                        onChange={() => setTimeDeliveryType(EDateType.calendar)} />
               <UiRadio label={'Рабочих дней'} checked={timeDeliveryType === EDateType.work}
                        onChange={() => setTimeDeliveryType(EDateType.work)} />
            </RadioCheckboxWrapper>
         </CreateContractPageLine>

         <PayConditions stages={stages} addStage={addStage} updateStage={updateStage} deleteStage={deleteStage} error={error} />

         <UiButton label={'Сохранить договор'} onClick={() => {
            validate() ? handleSubmit() : setError(true)
         }} />
      </CreateContractPageContainer>
   );
};