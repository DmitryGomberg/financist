import { FC } from 'react';
import { Title } from 'styled';
import { UiButton } from 'ui/Button';
import { JournalPageContainer, JournalPageHeader } from './styled';

export const JournalPage: FC = () => {
   return (
      <JournalPageContainer>
         <JournalPageHeader>
            <Title>Журнал</Title>
            <UiButton label={'Фильтровать'} />
         </JournalPageHeader>
         
      </JournalPageContainer>
   );
};