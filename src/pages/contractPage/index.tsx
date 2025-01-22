import { FC } from 'react';
import { UiButton, UiTable } from 'ui';
import { Subtitle, Title } from 'styled';
import { ContractPageContainer, ContractPageHeader } from './styled';
import { ContractPageOptions } from 'pages/contractPage/options';

export const ContractPage: FC = () => {
   return (
      <ContractPageContainer>
         <ContractPageHeader>
            <Title>Манипулятор Барановичи</Title>
            <UiButton label={'Редактировать'} />
         </ContractPageHeader>
         <ContractPageOptions />
         <Subtitle>Этапы оплаты</Subtitle>
         <UiTable headers={['Название', 'Процент от суммы', 'Срок получения средств']} data={[
            ['lorem', '40', '5 календарных дней'],
            ['lorem', '40', '5 календарных дней'],
            ['lorem', '40', '5 календарных дней'],
         ]} />
         <Subtitle>Зарегистрированные затраты</Subtitle>
         <UiTable headers={['Дата', 'Описание', 'Сумма']} data={[
            ['15.01.2025', 'lorem', '10 000'],
            ['15.01.2025', 'lorem', '10 000'],
            ['15.01.2025', 'lorem', '10 000'],
         ]} />
         <Subtitle>Поступления</Subtitle>
         <UiTable headers={['Дата', 'Сумма']} data={[
            ['15.01.2025', '10 000'],
            ['15.01.2025', '10 000'],
            ['15.01.2025', '10 000'],
         ]} />
      </ContractPageContainer>
   );
};