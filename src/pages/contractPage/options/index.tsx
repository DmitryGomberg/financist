import React, { FC } from 'react';
import { ContractPageOptionsContainer, ContractPageOptionsItem } from './styled';
import {formatDate, formatPrice, IContractTypes} from "../../../utils";

type IContractPageOptionsProps = {
   contract: IContractTypes;
}

export const ContractPageOptions: FC<IContractPageOptionsProps> = (props) => {
   return (
      <ContractPageOptionsContainer>
         <ContractPageOptionsItem>Договор {props.contract.number}</ContractPageOptionsItem>
         <ContractPageOptionsItem><span>Заказчик: </span>“{props.contract.customerName}”</ContractPageOptionsItem>
         <ContractPageOptionsItem><span>Сумма договора: </span>{formatPrice(String(props.contract.price))} BYN</ContractPageOptionsItem>
         <ContractPageOptionsItem><span>Срок поставки: </span>{props.contract.deadline} {props.contract.deadlineType === 'work' ? 'рабочих' : 'календарных'} дней</ContractPageOptionsItem>
         <ContractPageOptionsItem><span>Дата составления договора: </span>{formatDate(props.contract.dateOfCreate)}</ContractPageOptionsItem>
         <ContractPageOptionsItem><span>Дата подписания договора: </span>{props.contract.dateOfWrite ? props.contract.dateOfWrite : 'не подписан'}</ContractPageOptionsItem>
         <ContractPageOptionsItem><span>Дата закрытия договора: </span>{props.contract.dateOfClose ? props.contract.dateOfClose : 'не закрыт'}</ContractPageOptionsItem>
      </ContractPageOptionsContainer>
   );
};