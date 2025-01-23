import { FC } from 'react';
import { TableTransactionsContainer, TableTransactionsEdit } from './styled';
import { UiTableCell, UiTableHeader, UiTableRow } from 'ui/Table/styled';
import { Edit } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const TableTransactions: FC = () => {
   let data = [
      ['Манипулятор Столин', '№ 16165-23', 'Поступление', 'It is a long established', '50 000', '16.01.2025'],
      ['Манипулятор Столин', '№ 16165-23', 'Списание', 'It is a long established', '50 000', '16.01.2025'],
      ['Манипулятор Столин', '№ 16165-23', 'Поступление', 'It is a long established', '50 000', '16.01.2025'],
   ];
   const navigate = useNavigate();
   const handleEdit = () => {
      navigate('/transaction/edit');
   };
   return (
      <TableTransactionsContainer>
         <thead>
         <UiTableRow>
            <UiTableHeader key={1}>Наименование</UiTableHeader>
            <UiTableHeader key={2}>Номер договора</UiTableHeader>
            <UiTableHeader key={3}>Тип</UiTableHeader>
            <UiTableHeader key={4}>Описание</UiTableHeader>
            <UiTableHeader key={5}>Сумма</UiTableHeader>
            <UiTableHeader key={6}>Дата</UiTableHeader>
         </UiTableRow>
         </thead>
         <tbody>
         {data.map((row, rowIndex) => (
            <UiTableRow key={rowIndex}>
               {row.map((cell, cellIndex) => (
                  <UiTableCell key={cellIndex}>{cell}</UiTableCell>
               ))}
               <TableTransactionsEdit onClick={handleEdit}>
                  <Edit />
               </TableTransactionsEdit>
            </UiTableRow>
         ))}
         </tbody>
      </TableTransactionsContainer>
   );
};