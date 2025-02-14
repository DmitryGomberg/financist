import {FC, useEffect, useState} from 'react';
import {ETransactionType, formatDateForMySQL, IContractTypes, ITransactionTypes} from 'utils';
import {UiRadio} from 'ui/Radio';
import {UiDropdown} from 'ui/Dropdown';
import {UiInput} from 'ui/Input';
import {UiButton} from 'ui/Button';
import {CreateTransactionPageContainer, CreateTransactionPageLine, CreateTransactionPageType} from './styled';
import {RadioCheckboxWrapper, Subtitle, Title} from '../../styled';
import {useNavigate} from "react-router-dom";

export const CreateTransactionPage: FC = () => {
   let [type, setType] = useState<ETransactionType>(ETransactionType.get);
   let [category, setCategory] = useState<IContractTypes>();
   let [date, setDate] = useState<string>('');
   let [sum, setSum] = useState<string>('');
   let [descr, setDescr] = useState<string>('');
   let [provider, setProvider] = useState<string>('');
   const [contracts, setContracts] = useState([]);

   const handleRadioMore = () => {
      setType(ETransactionType.get);
   };
   const handleRadioLess = () => {
      setType(ETransactionType.send);
   };

   useEffect(() => {
      const fetchContracts = async () => {
         try {
            const response = await fetch('http://localhost:4565/contracts/names', {
               method: 'GET',
               headers: {
                  'Content-Type': 'application/json',
               }
            });
            if (!response.ok) {
               throw new Error(`Ошибка при получении договоров: ${response.status}`);
            }
            const data = await response.json();
            setContracts(data);
         } catch (error) {
            console.error(error);
         }
      };

      fetchContracts();
   }, []);

   const addTransaction = async (transaction: ITransactionTypes) => {
      try {
         const response = await fetch('http://localhost:4565/transactions', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
            },
            body: JSON.stringify(transaction),
         });

         if (!response.ok) {
            throw new Error(`Ошибка при добавлении транзакции: ${response.status}`);
         } else {
            setSum('');
            setDescr('');
            alert('Транзакция добавлена');
         }
      } catch (error) {
         console.error('Ошибка:', error);
      }
   };

   const handleClick = () => {
      if (!(!category || !date || !sum)){
         const transaction = {
            id: Date.now(),
            type: type === ETransactionType.get ? 'get' : 'send',
            contractId: category.id,
            date: formatDateForMySQL(new Date(date)),
            price: Number(sum),
            description: descr,
            provider: provider,
         };

         addTransaction(transaction);
      }else{
         alert('Заполните обязательные поля')
      }
   }

   return (
      <CreateTransactionPageContainer>
         <Title>Добавить запись +</Title>
         <CreateTransactionPageType>
            <Subtitle>Выберите тип записи</Subtitle>
            <RadioCheckboxWrapper>
               <UiRadio label={'Поступление'} checked={type === ETransactionType.get} onChange={handleRadioMore} />
               <UiRadio label={'Затраты'} checked={type === ETransactionType.send} onChange={handleRadioLess} />
            </RadioCheckboxWrapper>
         </CreateTransactionPageType>
         <UiDropdown
            items={contracts.slice().reverse()}
            onSelect={(item) => setCategory(item)}
            placeholder={'Выберите вариант из списка'} label={'Выберите договор'}
         />
         <CreateTransactionPageLine>
            <UiInput
               type={'date'}
               value={date}
               onChange={(text) => setDate(text)}
               label={'Дата'} />
            <UiInput
               type={'number'}
               value={sum}
               placeholder={'0'}
               onChange={(val) => setSum(val)}
               label={'Сумма'} />
         </CreateTransactionPageLine>
         <CreateTransactionPageLine>
            <UiInput
               onChange={(text) => setDescr(text)}
               value={descr}
               label={'Примечание'}
               placeholder={'Введите примечание'}
            />
            <UiInput
               onChange={(text) => setProvider(text)}
               value={provider}
               label={'Поставщик'}
               placeholder={'Введите поставщика'}
            />
         </CreateTransactionPageLine>
         <UiButton label={'Создать запись'} onClick={handleClick}/>
      </CreateTransactionPageContainer>
   );
};