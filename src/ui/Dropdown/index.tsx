import React, { FC, useState } from 'react';
import { ArrowDropDown } from '@mui/icons-material';
import {
   UiDropdownContainer,
   UiDropdownInner,
   UiDropdownItem,
   UiDropdownLabel,
   UiDropdownList,
   UiDropdownMain,
} from './styled';
import {IContractTypes} from "../../utils";

type UiDropdownProps = {
   items: IContractTypes[];
   onSelect: (item: IContractTypes) => void;
   label?: string;
   placeholder?: string
};

export const UiDropdown: FC<UiDropdownProps> = (props) => {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedItem, setSelectedItem] = useState<IContractTypes>();

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   const handleItemClick = (item: IContractTypes) => {
      setSelectedItem(item);
      setIsOpen(false);
      props.onSelect(item);
   };

   return (
      <UiDropdownContainer>
         {props.label && <UiDropdownLabel>{props.label}</UiDropdownLabel>}
         <UiDropdownInner>
            <UiDropdownMain onClick={toggleDropdown} isOpen={isOpen}>
               <>
                  {selectedItem ? selectedItem.name : props.placeholder || 'Выберите вариант из списка'}
                  <ArrowDropDown />
               </>
            </UiDropdownMain>
            <UiDropdownList isOpen={isOpen}>
               {props.items.map((item) => (
                  <UiDropdownItem key={item.id} onClick={() => handleItemClick(item)}>
                     {item.name}
                  </UiDropdownItem>
               ))}
            </UiDropdownList>
         </UiDropdownInner>
      </UiDropdownContainer>
   );
};