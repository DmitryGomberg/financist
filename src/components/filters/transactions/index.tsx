import {FC, useEffect, useState} from 'react';
import { IContractTypes } from 'utils';
import { UiButton, UiCheckbox, UiDropdown, UiInput } from 'ui';
import { Subtitle } from 'styled';
import { FilterBlock, FilterContainer, FilterLabel, FilterLine } from '../styled';

export const FilterTransactions: FC = () => {
   let [transactionTypeGet, setTransactionTypeGet] = useState<boolean>(true);
   let [transactionTypePost, setTransactionTypePost] = useState<boolean>(true);
   let [dateFrom, setDateFrom] = useState('');
   let [dateTo, setDateTo] = useState('');

   const sendRes = () => {
      console.log(
         transactionTypeGet,
         transactionTypePost,
         dateFrom,
         dateTo,
      );
   };

   return (
      <FilterContainer>
         <Subtitle>Фильтровать по</Subtitle>
         <FilterLine>
            <FilterBlock>
               <FilterLabel>по типу:</FilterLabel>
               <UiCheckbox label={'Поступления'} checked={transactionTypeGet}
                           onChange={() => setTransactionTypeGet(!transactionTypeGet)} />
               <UiCheckbox label={'Затраты'} checked={transactionTypePost}
                           onChange={() => setTransactionTypePost(!transactionTypePost)} />
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
         </FilterLine>
         <UiButton label={'Применить'} onClick={sendRes} />
      </FilterContainer>
   );
};