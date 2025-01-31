import {FC, useEffect, useState} from 'react';
import { Title } from 'styled';
import { ContractsPageContainer, ContractsPageHeader } from './styled';
import { FilterContracts, TableContracts} from 'components';
import { UiButton } from 'ui/Button';
import {formatDate, formatPrice, IContractTypes} from "../../utils";

export const ContractsPage: FC = () => {
   let [activeFilter, setActiveFilter] = useState(false);
   const [contracts, setContracts] = useState<any>([]);

   useEffect(() => {
      const fetchContracts = async () => {
         try {
            const response = await fetch(`http://localhost:4565/contracts/`);
            if (!response.ok) {
               throw new Error(`Error fetching contract: ${response.status}`);
            }
            const data = await response.json();
            setContracts(data);
            console.log(data);
         } catch (error) {
            console.error(error);
         }
      };
      fetchContracts();
   },[]);


   return (
      <ContractsPageContainer>
         <ContractsPageHeader>
            <Title>Договоры</Title>
            <UiButton label={'Фильтровать'} onClick={() => {
               setActiveFilter(!activeFilter);
            }} />
         </ContractsPageHeader>
         {activeFilter && <FilterContracts />}
         <TableContracts
            headers={['Название', 'Номер договора', 'Сумма', 'Срок поставки', 'Состояние', 'Дата составления', 'Дата подписания', 'Дата закрытия']}
            data={contracts}
         />
      </ContractsPageContainer>
   );
};