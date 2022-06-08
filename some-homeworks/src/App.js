import './App.css';
import React from 'react';
import PhoneBook from './PhoneBook/PhoneBook'
import { Routes, Route, Link } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { NotFoundPage } from './Pages/NotFoundPage'
import { Layout } from './Layout/Layout'
import { ModalWindow } from './ModalWindow/ModalWindow'
import { Clock } from './Clock/Clock'
import { Tabs } from './Tabs/Tabs'
import tabs from './tabs.json'
import Request from './Request/Request';
 
function App() {
    return (
      <>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='phonebook' element={<PhoneBook />} />
            <Route path='modal' element={<ModalWindow />} />
            <Route path='clock' element={<Clock />} />
            <Route path='tabs' element={<Tabs items={tabs}/>} />
            <Route path='request' element={<Request/>} />
          </Route>
        </Routes>
      </>
    );
  }


export default App;