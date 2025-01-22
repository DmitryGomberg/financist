import React, { FC } from 'react';
import { ContractPageOptionsContainer, ContractPageOptionsItem } from './styled';

export const ContractPageOptions: FC = () => {
   return (
      <ContractPageOptionsContainer>
         <ContractPageOptionsItem>Договор №61/mh20</ContractPageOptionsItem>
         <ContractPageOptionsItem><span>Заказчик: </span>“ОАО РОСКОСМОС ПРОДАКШН”</ContractPageOptionsItem>
         <ContractPageOptionsItem><span>Сумма договора: </span>150 000 BYN</ContractPageOptionsItem>
         <ContractPageOptionsItem><span>Срок поставки: </span>90 рабочих дней</ContractPageOptionsItem>
         <ContractPageOptionsItem><span>Дата составления договора: </span>14.01.2025</ContractPageOptionsItem>
         <ContractPageOptionsItem><span>Дата подписания договора: </span>не подписан</ContractPageOptionsItem>
         <ContractPageOptionsItem><span>Дата закрытия договора: </span>не закрыт</ContractPageOptionsItem>
      </ContractPageOptionsContainer>
   );
};