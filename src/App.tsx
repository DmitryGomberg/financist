import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
   ContractPage,
   CreateContractPage,
   CreateTransactionPage,
   EditContractPage,
   EditTransactionPage,
   JournalPage, AnalyticsPage, NotificationsPage,
} from 'pages';
import { Aside, Nav } from 'components';
import { AppContainer, AppMain } from './styled';

function App() {
   return (
      <Router>
         <AppContainer>
            <Nav />
            <AppMain>
               <Aside />
               <Routes>
                  <Route path="/" element={<CreateTransactionPage />} />
                  <Route path="/transaction/edit" element={<EditTransactionPage />} />
                  <Route path="/dogovor/create" element={<CreateContractPage />} />
                  <Route path="/dogovor/:id/edit" element={<EditContractPage />} />
                  <Route path="/dogovor/:id" element={<ContractPage />} />
                  <Route path="/journal" element={<JournalPage />} />
                  <Route path="/analytics" element={<AnalyticsPage />} />
                  <Route path="/notifications" element={<NotificationsPage />} />
               </Routes>
            </AppMain>
         </AppContainer>
      </Router>
   );
}

export default App;