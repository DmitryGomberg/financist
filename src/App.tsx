import React from 'react';
import {UiButton} from "ui/Button";
import {AcUnit} from "@mui/icons-material";
import {UiCheckbox} from "ui/Checkbox";
import {UiDropdown} from "ui/Dropdown";

function App() {
   return (
      <>
         <UiButton label={'Войти'} contentLeft={<AcUnit />} />
         <UiCheckbox label={'Одобряю'} checked onChange={()=>{}} />
         <UiDropdown items={["gthdsq", 'fdsf', 'fsdf']} onSelect={(item)=>{
            console.log(item)}} />
      </>
   );
}

export default App;
