import React, { FC } from 'react';
import { UiButton } from 'ui/Button';
import { Add } from '@mui/icons-material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AsideButtons, AsideContainer, AsideLink, AsideLinks } from 'components/aside/styled';

export const Aside: FC = () => {
   const navigate = useNavigate();
   const locate = useLocation();
   return (
      <AsideContainer>
         <AsideLinks>
            <AsideLink active={locate.pathname === '/analytics'}>
               <Link to="/analytics">Аналитика</Link>
            </AsideLink>
            <AsideLink active={locate.pathname === '/contracts'}>
               <Link to="/contracts">Договоры</Link>
            </AsideLink>
            <AsideLink active={locate.pathname === '/journal'}>
               <Link to="/journal">Журнал</Link>
            </AsideLink>
            <AsideLink active={locate.pathname === '/notifications'}>
               <Link to="/notifications">Уведомления
                  <span>2</span>
               </Link>
            </AsideLink>
         </AsideLinks>
         <AsideButtons>
            <UiButton label={'Добавить договор'} contentLeft={<Add />}
                      onClick={() => navigate('/contracts/create')} />
            <UiButton label={'Добавить запись'} contentLeft={<Add />} onClick={() => navigate('/')} />
         </AsideButtons>
      </AsideContainer>
   );
};
