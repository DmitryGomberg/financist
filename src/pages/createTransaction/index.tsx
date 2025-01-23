import { FC, useState } from 'react';
import { CreateTransactionPageContainer, CreateTransactionPageLine, CreateTransactionPageType } from './styled';
import { RadioCheckboxWrapper, Subtitle, Title } from '../../styled';
import { UiRadio } from 'ui/Radio';
import { UiDropdown } from 'ui/Dropdown';
import { UiInputSum } from 'ui/inputSum';
import { UiInput } from 'ui/Input';
import { UiButton } from 'ui/Button';
import { ETransactionType } from 'utils';

export const CreateTransactionPage: FC = () => {
   let [type, setType] = useState<ETransactionType>(ETransactionType.get);
   let [category, setCategory] = useState<string>('');
   let [date, setDate] = useState<string>('');
   let [sum, setSum] = useState<string>('');
   let [descr, setDescr] = useState<string>('');

   const handleRadioMore = () => {
      setType(ETransactionType.get);
   };
   const handleRadioLess = () => {
      setType(ETransactionType.send);
   };
   console.log(category);

   return (
      <CreateTransactionPageContainer>
         <Title>Добавить запись +</Title>
         <CreateTransactionPageType>
            <Subtitle>Выберите тип записи</Subtitle>
            <RadioCheckboxWrapper>
               <UiRadio label={'Поступление'} checked={type === ETransactionType.get} onChange={handleRadioMore} />
               <UiRadio label={'Затраты'} checked={type === ETransactionType.send} onChange={handleRadioLess} />
            </RadioCheckboxWrapper>
         </CreateTransactionPageType>
         <UiDropdown items={['fsdf', 'dsf']} onSelect={(item) => setCategory(item)}
                     placeholder={'Выберите вариант из списка'} label={'Выберите договор'} />
         <CreateTransactionPageLine>
            <UiInput type={'date'} value={date} onChange={(text) => setDate(text)} label={'Дата'} />
            <UiInputSum value={sum} onChange={(val) => {
               setSum(val);
            }} label={'Сумма'} />
            <UiInput onChange={(text) => setDescr(text)} value={descr} label={'Примечание'}
                     placeholder={'Введите примечание'} />
         </CreateTransactionPageLine>
         <UiButton label={'Создать запись'} />
      </CreateTransactionPageContainer>
   );
};