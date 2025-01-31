import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UiButton, UiTable } from 'ui';
import { Subtitle, Title } from 'styled';
import { ContractPageContainer, ContractPageHeader } from './styled';
import { ContractPageOptions } from 'pages/contractPage/options';
import {formatDate, formatPrice, IStageTypes, ITransactionTypes} from "../../utils";

const dayTypeMap = {
   0: 'календарных',
   1: 'рабочих'
};

export const ContractPage: FC = () => {
   const { id } = useParams<{ id: string }>();
   const [contract, setContract] = useState<any>();
   const [expenses, setExpenses] = useState<any>()
   const [receipts, setReceipts] = useState<any>()

   useEffect(() => {
      const fetchContract = async () => {
         try {
            const response = await fetch(`http://localhost:4565/contracts/${id}`);
            if (!response.ok) {
               throw new Error(`Error fetching contract: ${response.status}`);
            }
            const data = await response.json();
            setContract(data);
         } catch (error) {
            console.error(error);
         }
      };

      const fetchExpenses = async () => {
         try {
            const response = await fetch(`http://localhost:4565/contracts/${id}/expenses`);
            if (!response.ok) {
               throw new Error(`Error fetching expenses: ${response.status}`);
            }
            const data = await response.json();
            setExpenses(data);
         } catch (error) {
            console.error(error);
         }
      };

      const fetchReceipts = async () => {
         try {
            const response = await fetch(`http://localhost:4565/contracts/${id}/receipts`);
            if (!response.ok) {
               throw new Error(`Error fetching receipts: ${response.status}`);
            }
            const data = await response.json();
            setReceipts(data);
         } catch (error) {
            console.error(error);
         }
      };

      fetchContract();
      fetchExpenses();
      fetchReceipts();
   }, [id]);

   if (!contract) {
      return <div>Loading...</div>;
   }

   const paymentStages = contract.payCondition?.map((stage: IStageTypes) => [
      stage.name,
      stage.percent,
      `${stage.time} ${dayTypeMap[stage.dayType]} дней`
   ]) || [];
   const expensesData = expenses?.map((expense: ITransactionTypes) => [
      formatDate(expense.date),
      expense.description,
      formatPrice(String(expense.price))
   ]) || [];
   const receiptsData = receipts?.map((expense: ITransactionTypes) => [
      formatDate(expense.date),
      expense.description,
      formatPrice(String(expense.price))
   ]) || [];

   return (
      <ContractPageContainer>
         <ContractPageHeader>
            <Title>{contract.name}</Title>
            <UiButton label={'Редактировать'} />
         </ContractPageHeader>
         <ContractPageOptions contract={contract} />
         <Subtitle>Этапы оплаты</Subtitle>
         <UiTable headers={['Название', 'Процент от суммы %', 'Срок получения средств']} data={paymentStages} />
         <Subtitle>Зарегистрированные затраты</Subtitle>
         <UiTable headers={['Дата', 'Описание', 'Сумма BYN']} data={expensesData} />
         <Subtitle>Поступления</Subtitle>
         <UiTable headers={['Дата', 'Описание', 'Сумма BYN']} data={receiptsData} />
      </ContractPageContainer>
   );
};