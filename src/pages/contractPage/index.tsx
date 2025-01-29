import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UiButton, UiTable } from 'ui';
import { Subtitle, Title } from 'styled';
import { ContractPageContainer, ContractPageHeader } from './styled';
import { ContractPageOptions } from 'pages/contractPage/options';
import {IStageTypes} from "../../utils";

const dayTypeMap = {
   0: 'календарных',
   1: 'рабочих'
};

export const ContractPage: FC = () => {
   const { id } = useParams<{ id: string }>();
   const [contract, setContract] = useState<any>(null);

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

      fetchContract();
   }, [id]);

   if (!contract) {
      return <div>Loading...</div>;
   }

   const paymentStages = contract.payCondition.map((stage:IStageTypes) => [
      stage.name,
      stage.percent,
      `${stage.time} ${dayTypeMap[stage.dayType]} дней`
   ]);

   return (
      <ContractPageContainer>
         <ContractPageHeader>
            <Title>{contract.name}</Title>
            <UiButton label={'Редактировать'} />
         </ContractPageHeader>
         <ContractPageOptions contract={contract} />
         <Subtitle>Этапы оплаты</Subtitle>
         <UiTable headers={['Название', 'Процент от суммы', 'Срок получения средств']} data={
            paymentStages
         } />
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