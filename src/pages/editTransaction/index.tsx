import { FC, useState } from 'react';
import { EditTransactionPageContainer, EditTransactionPageLine, EditTransactionPageType } from './styled';
import { RadioCheckboxWrapper, Subtitle, Title } from '../../styled';
import { UiRadio } from 'ui/Radio';
import { UiDropdown } from 'ui/Dropdown';
import { UiInputDate } from 'ui/inputDate';
import { UiInputSum } from 'ui/inputSum';
import { UiInput } from 'ui/Input';
import { UiButton } from 'ui/Button';
import { ETransactionType } from '../../utils/enums';
import { UiTable } from 'ui/Table';

export const EditTransactionPage: FC = () => {
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

   return (
      <EditTransactionPageContainer>
         <Title>Редактировать запись</Title>
         <EditTransactionPageType>
            <Subtitle>Выберите тип записи</Subtitle>
            <RadioCheckboxWrapper>
               <UiRadio label={'Поступление'} checked={type === ETransactionType.get} onChange={handleRadioMore} />
               <UiRadio label={'Затраты'} checked={type === ETransactionType.send} onChange={handleRadioLess} />
            </RadioCheckboxWrapper>
         </EditTransactionPageType>
         <UiDropdown items={['fsdf', 'dsf']} onSelect={(item) => setCategory(item)}
                     placeholder={'Выберите вариант из списка'} label={'Выберите договор'} />
         <EditTransactionPageLine>
            <UiInputDate value={date} onChange={(text) => setDate(text)} label={'Дата'} />
            <UiInputSum value={sum} onChange={(val) => {
               setSum(val);
            }} label={'Сумма'} />
            <UiInput onChange={(text) => setDescr(text)} value={descr} label={'Примечание'}
                     placeholder={'Введите примечание'} />
         </EditTransactionPageLine>
         <UiButton label={'Сохранить изменения'} />
      </EditTransactionPageContainer>
   );
};