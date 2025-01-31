import { FC } from 'react';
import { TableContractsContainer } from './styled';
import { UiTableCell, UiTableHeader, UiTableRow } from 'ui/Table/styled';
import { useNavigate } from 'react-router-dom';
import { formatDate, formatPrice, IContractTypes, IStageTypes } from 'utils';

type ITableContractsProps = {
   data: IContractTypes[];
   headers: string[];
}

export const TableContracts: FC<ITableContractsProps> = (props) => {
   const navigate = useNavigate();
   const handleRowClick = (id: number) => {
      navigate(`/contracts/${id}`);
   };

   const contractsData = props.data?.map((contract) => [
      contract.name,
      contract.number,
      formatPrice(String(contract.price)),
      `${contract.deadline} ${contract.deadlineType === 'work' ? 'рабочих' : 'календарных'} дней`,
      contract.dateOfClose ? 'закрыт' : contract.dateOfWrite ? 'подписан' : 'создан',
      contract.dateOfCreate ? formatDate(contract.dateOfCreate) : '-',
      contract.dateOfWrite ? formatDate(contract.dateOfWrite) : '-',
      contract.dateOfClose ? formatDate(contract.dateOfClose) : '-',
      contract.id, // Keep the id at the end for navigation purposes
   ]) || [];

   return (
      <TableContractsContainer>
         <thead>
         <UiTableRow>
            {props.headers.map((header, index) => (
               <UiTableHeader key={index}>{header}</UiTableHeader>
            ))}
         </UiTableRow>
         </thead>
         <tbody>
         {contractsData.map((row, rowIndex) => (
            <UiTableRow key={rowIndex} onClick={() => handleRowClick(row[8] as number)} clickable>
               {row.slice(0, -1).map((cell, cellIndex) => (
                  <UiTableCell key={cellIndex}>{String(cell)}</UiTableCell>
               ))}
            </UiTableRow>
         ))}
         </tbody>
      </TableContractsContainer>
   );
};