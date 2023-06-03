import { Route, Routes } from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar.tsx';
import { ToastContainer } from 'react-toastify';
import {Container} from "semantic-ui-react";
import AccountsPage from './pages/AccountsPage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';
import PasswordGeneratorPage from './pages/PasswordGeneratorPage.tsx';
import { useState } from 'react';
import { AccountGetAllDto } from './types/AccountTypes.ts';

const dummyAccounts:AccountGetAllDto[]= [
    {
        Id:"12345",
        Title:"Yemek Sepeti bam bam",
        Url:"www.yemeksepeti.com",
        IsFavourite:false,
        UserId:"iamthebestdeveloper",
        UserName:"aybiskobebisko",
        Password:"bebis1234",
        Categories:[],
        ShowPassword:false,

    },
    {
        Id:"12345",
        Title:"Getir",
        Url:"www.getir.com",
        IsFavourite:false,
        UserId:"iamthebestdeveloper",
        UserName:"aybiskobebisko",
        Password:"bebis1234",
        Categories:[],
        ShowPassword:false,
    }
];

function App() {
    const [accounts, setAccounts] = useState<AccountGetAllDto[]>(dummyAccounts);

    return (
        <>
            <ToastContainer/>
            <NavBar accounts={accounts}/>
            <Container className="App">
                <Routes>
                    <Route path="/" element={<PasswordGeneratorPage/>}/>
                    <Route path="/accounts" element={<AccountsPage accounts={accounts} setAccounts={setAccounts}/>}/>
                    <Route path="/*" element={<NotFoundPage/>}/>
                </Routes>
            </Container>
        </>
    )

}

export default App
