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

type UiDropdownProps = {
   items: string[];
   onSelect: (item: string) => void;
   label?: string;
   placeholder?: string
};

export const UiDropdown: FC<UiDropdownProps> = (props) => {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedItem, setSelectedItem] = useState<string | null>(null);

   const toggleDropdown = () => {
      setIsOpen(!isOpen);
   };

   const handleItemClick = (item: string) => {
      setSelectedItem(item);
      setIsOpen(false);
      props.onSelect(item);
   };

   return (
      <UiDropdownContainer>
         {props.label && <UiDropdownLabel>{props.label}</UiDropdownLabel>}
         <UiDropdownInner>
            <UiDropdownMain onClick={toggleDropdown} isOpen={isOpen}>
               {selectedItem || props.placeholder || 'Выберите вариант из списка'}
               <ArrowDropDown />
            </UiDropdownMain>
            <UiDropdownList isOpen={isOpen}>
               {props.items.map((item) => (
                  <UiDropdownItem key={item} onClick={() => handleItemClick(item)}>
                     {item}
                  </UiDropdownItem>
               ))}
            </UiDropdownList>
         </UiDropdownInner>
      </UiDropdownContainer>
   );
};