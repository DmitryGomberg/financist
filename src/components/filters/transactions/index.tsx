import { FC, useState } from 'react';
import { Subtitle } from 'styled';
import { FilterBlock, FilterContainer, FilterLabel, FilterLine } from '../styled';
import { UiCheckbox } from 'ui/Checkbox';
import { ETransactionType } from 'utils';

export const FilterTransactions: FC = () => {
   let [transactionType, setTransactionType] = useState(ETransactionType.get);
   return (
      <FilterContainer>
         <Subtitle>Фильтровать по</Subtitle>
         <FilterLine>
            <FilterBlock>
               <FilterLabel>по типу:</FilterLabel>
               <UiCheckbox label={'Поступления'} checked={transactionType === ETransactionType.get}
                           onChange={() => setTransactionType(ETransactionType.get)} />
               <UiCheckbox label={'Затраты'} checked={transactionType === ETransactionType.send}
                           onChange={() => setTransactionType(ETransactionType.send)} />
            </FilterBlock>
         </FilterLine>
      </FilterContainer>
   );
};