import { FC, useState } from 'react';
import { Subtitle } from 'styled';
import { UiButton, UiInput, UiCheckbox } from 'ui';
import { FilterBlock, FilterContainer, FilterLabel, FilterLine } from '../styled';

export const FilterContracts: FC = () => {
   let [dateFrom, setDateFrom] = useState('');
   let [dateTo, setDateTo] = useState('');
   let [isDrafted, setIsDrafted] = useState(false);
   let [isSigned, setIsSigned] = useState(false);
   let [isClosed, setIsClosed] = useState(false);

   const sendRes = () => {
      console.log(
         dateFrom,
         dateTo,
         isDrafted,
         isSigned,
         isClosed,
      );
   };

   return (
      <FilterContainer>
         <Subtitle>Фильтровать по</Subtitle>
         <FilterLine>
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
               <FilterLabel>по состоянию:</FilterLabel>
               <div>
                  <UiCheckbox label={'Составлен'} checked={isDrafted} onChange={() => setIsDrafted(!isDrafted)} />
               </div>
               <div>
                  <UiCheckbox label={'Подписан'} checked={isSigned} onChange={() => setIsSigned(!isSigned)} />
               </div>
               <div>
                  <UiCheckbox label={'Закрыт'} checked={isClosed} onChange={() => setIsClosed(!isClosed)} />
               </div>
            </FilterBlock>
         </FilterLine>
         <UiButton label={'Применить'} onClick={sendRes} />
      </FilterContainer>
   );
};