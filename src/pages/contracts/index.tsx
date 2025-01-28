import { FC, useState } from 'react';
import { Title } from 'styled';
import { ContractsPageContainer, ContractsPageHeader } from './styled';
import { FilterContracts } from 'components/filters';
import { UiButton } from 'ui/Button';
import { UiTable } from 'ui/Table';

export const ContractsPage: FC = () => {
   let [activeFilter, setActiveFilter] = useState(false);
   return (
      <ContractsPageContainer>
         <ContractsPageHeader>
            <Title>Договоры</Title>
            <UiButton label={'Фильтровать'} onClick={() => {
               setActiveFilter(!activeFilter);
            }} />
         </ContractsPageHeader>
         {activeFilter && <FilterContracts />}
         <UiTable
            headers={['Название', 'Номер договора', 'Сумма', 'Срок поставки', 'Состояние', 'Дата составления', 'Дата подписания', 'Дата закрытия']}
            data={[
               ['Манипулятор гидравлический Столин', '№12345-45', '50 000', '90 рабочих дней', 'подписан', '18.01.2025', '18.01.2025', '18.01.2025'],
               ['Манипулятор гидравлический Столин', '№12345-45', '50 000', '90 рабочих дней', 'подписан', '18.01.2025', '18.01.2025', '18.01.2025'],
               ['Манипулятор гидравлический Столин', '№12345-45', '50 000', '90 рабочих дней', 'подписан', '18.01.2025', '18.01.2025', '18.01.2025'],
            ]}
         />
      </ContractsPageContainer>
   );
};