import { FC, useState } from 'react';
import { Subtitle } from 'styled';
import { UiButton, UiCheckbox, UiDropdown, UiInput } from 'ui';
import { FilterBlock, FilterContainer, FilterLabel, FilterLine } from '../styled';

export const FilterTransactions: FC = () => {
   let [transactionTypeGet, setTransactionTypeGet] = useState<boolean>(true);
   let [transactionTypePost, setTransactionTypePost] = useState<boolean>(true);
   let [dateFrom, setDateFrom] = useState('');
   let [dateTo, setDateTo] = useState('');
   let [category, setCategory] = useState<string>('');

   const sendRes = () => {
      console.log(
         transactionTypeGet,
         transactionTypePost,
         dateFrom,
         dateTo,
         category,
      );
   };

   return (
      <FilterContainer>
         <Subtitle>Фильтровать по</Subtitle>
         <FilterLine>
            <FilterBlock>
               <FilterLabel>по типу:</FilterLabel>
               <UiCheckbox label={'Поступления'} checked={transactionTypeGet}
                           onChange={() => transactionTypeGet ? setTransactionTypeGet(false) : setTransactionTypeGet(true)} />
               <UiCheckbox label={'Затраты'} checked={transactionTypePost}
                           onChange={() => transactionTypePost ? setTransactionTypePost(false) : setTransactionTypePost(true)} />
            </FilterBlock>
            <FilterBlock>
               <FilterLabel>по времени:</FilterLabel>
               <div>
                  с
                  <UiInput type={'date'} label={''} onChange={(text) => {
                     setDateFrom(text);
                  }} value={dateFrom} />
               </div>
               <div>
                  по
                  <UiInput type={'date'} label={''} onChange={(text: string) => {
                     setDateTo(text);
                  }} value={dateTo} />
               </div>
            </FilterBlock>
            <FilterBlock>
               <FilterLabel>по договору:</FilterLabel>
               <UiDropdown items={['fsdf', 'dsf']} onSelect={(item) => setCategory(item)}
                           placeholder={'Выберите вариант из списка'} label={''} />
            </FilterBlock>
         </FilterLine>
         <UiButton label={'Применить'} onClick={sendRes} />
      </FilterContainer>
   );
};