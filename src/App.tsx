import './App.css'
import Toolbar from "./components/ToolBar/Toolbar.tsx";
import { Routes, Route, Navigate } from "react-router-dom";
import PageToShow from "./components/PageToShow/PageToShow.tsx";
import AdminPageEdit from "./components/AdminPageEdit/AdminPageEdit.tsx";

const App = () => (
    <>
        <header>
            <Toolbar/>
        </header>

        <main className='container mt-5'>
            <Routes>
                <Route path="/" element={<Navigate to="/pages/about" />}/>
                <Route path="/pages/:pageName" element={<PageToShow/>}/>
                <Route path="/pages/admin" element={<AdminPageEdit/>}/>
            </Routes>
        </main>
    </>
);

export default App
