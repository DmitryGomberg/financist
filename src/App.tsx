import React from 'react';
import {UiButton} from "ui/Button";
import {AcUnit} from "@mui/icons-material";

function App() {
   return (
      <UiButton label={'Войти'} contentLeft={<AcUnit />} />
   );
}

export default App;
