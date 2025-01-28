import { FC, useState } from 'react';
import { Title } from 'styled';
import { UiButton } from 'ui/Button';
import { JournalPageContainer, JournalPageHeader } from './styled';
import { FilterTransactions } from 'components/filters';
import { TableTransactions } from 'components/tableTransactions';

export const JournalPage: FC = () => {
   let [activeFilter, setActiveFilter] = useState(false);
   return (
      <JournalPageContainer>
         <JournalPageHeader>
            <Title>Журнал</Title>
            <UiButton label={'Фильтровать'} onClick={() => {
               setActiveFilter(!activeFilter);
            }} />
         </JournalPageHeader>
         {activeFilter && <FilterTransactions />}
         <TableTransactions />
      </JournalPageContainer>
   );
};