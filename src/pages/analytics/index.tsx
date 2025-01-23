import { FC, useState } from 'react';
import { AnalyticsPageBlock, AnalyticsPageContainer, AnalyticsPagePeriod, AnalyticsPagePeriodLine } from './styled';
import { Subtitle, Title } from 'styled';
import { UiInput, UiTable } from 'ui';

export const AnalyticsPage: FC = () => {
   let [dateFrom, setDateFrom] = useState('');
   let [dateTo, setDateTo] = useState(new Date().toLocaleDateString('ru-RU'));


   return (
      <AnalyticsPageContainer>
         <Title>Аналитика</Title>
         <AnalyticsPagePeriod>
            <Subtitle>Период</Subtitle>
            <AnalyticsPagePeriodLine>
               <div>
                  с
                  <UiInput type={'date'} label={''} onChange={(text) => {
                     setDateFrom(text);
                  }} value={dateFrom} />
               </div>
               <div>
                  по
                  <UiInput type={'date'} label={''} onChange={(text) => {
                     setDateTo(text);
                  }} value={dateTo} />
               </div>
            </AnalyticsPagePeriodLine>
         </AnalyticsPagePeriod>
         <AnalyticsPageBlock>
            <Subtitle>Подписано договоров за указанный период: 8</Subtitle>
            <UiTable headers={['Название', 'Номер договора', 'Дата подписания']}
                     data={[
                        ['Манипулятор Столин', '40', '17.01.2025'],
                        ['Манипулятор Столин', '40', '17.01.2025'],
                     ]} />
         </AnalyticsPageBlock>
         <AnalyticsPageBlock>
            <Subtitle>Закрыто договоров за указанный период: 2</Subtitle>
            <UiTable headers={['Название', 'Номер договора', 'Дата подписания']}
                     data={[
                        ['Манипулятор Столин', '40', '17.01.2025'],
                        ['Манипулятор Столин', '40', '17.01.2025'],
                     ]} />
         </AnalyticsPageBlock>
         <AnalyticsPageBlock>
            <Subtitle>Потрачено всего средств: 25 300</Subtitle>
            <UiTable headers={['Наименование', 'Описание', 'Сумма', 'Дата']}
                     data={[
                        ['Манипулятор Столин', 'lfjlds lkfjs ldfjl kdsjlk f', '40 000', '17.01.2025'],
                        ['Манипулятор Столин', 'lfjlds lkfjs ldfjl kdsjlk f', '40 000', '17.01.2025'],
                     ]} />
         </AnalyticsPageBlock>
      </AnalyticsPageContainer>
   );
};