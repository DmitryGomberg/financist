import React, { FC } from 'react';
import { UiButton } from 'ui/Button';
import { Add } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { AsideButtons, AsideContainer, AsideLink, AsideLinks } from 'components/aside/styled';

export const Aside: FC = () => {
   const navigate = useNavigate();
   return (
      <AsideContainer>
         <AsideLinks>
            <AsideLink active>
               <Link to="">Аналитика за месяц</Link>
            </AsideLink>
            <AsideLink>
               <Link to="">Аналитика за год</Link>
            </AsideLink>
            <AsideLink>
               <Link to="">Договоры</Link>
            </AsideLink>
            <AsideLink>
               <Link to="/journal">Журнал</Link>
            </AsideLink>
            <AsideLink>
               <Link to="">Уведомления
                  <span>2</span>
               </Link>
            </AsideLink>
         </AsideLinks>
         <AsideButtons>
            <UiButton label={'Добавить договор'} contentLeft={<Add />} onClick={() => navigate('/dogovor/create')} />
            <UiButton label={'Добавить запись'} contentLeft={<Add />} onClick={() => navigate('/')} />
         </AsideButtons>
      </AsideContainer>
   );
};
