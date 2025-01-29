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
   let [category, setCategory] = useState<IContractTypes>();
   const [contracts, setContracts] = useState([]);

   const sendRes = () => {
      console.log(
         transactionTypeGet,
         transactionTypePost,
         dateFrom,
         dateTo,
         category,
      );
   };

   useEffect(() => {
      const fetchContracts = async () => {
         try {
            const response = await fetch('http://localhost:4565/contracts', {
               method: 'GET',
               headers: {
                  'Content-Type': 'application/json',
               }
            });
            if (!response.ok) {
               throw new Error(`Ошибка при получении договоров: ${response.status}`);
            }
            const data = await response.json();
            setContracts(data);
         } catch (error) {
            console.error(error);
         }
      };

      fetchContracts();
   }, []);


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
            <FilterBlock>
               <FilterLabel>по договору:</FilterLabel>
               <UiDropdown
                  items={contracts}
                  onSelect={(item) => setCategory(item)}
                  placeholder={'Выберите вариант из списка'} label={''}
               />
            </FilterBlock>
         </FilterLine>
         <UiButton label={'Применить'} onClick={sendRes} />
      </FilterContainer>
   );
};