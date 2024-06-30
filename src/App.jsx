import { useState, createContext } from 'react';
import './App.css';
import './ScrollBar.css'
import { RoleTypes } from './utils.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Router from './Router.jsx';

export const GeneralContext = createContext();

export default function App() {
  const [user, setUser] = useState();
  const [userRoleType, setUserRoleType] = useState(RoleTypes.none);

  return (
    <>
      <GeneralContext.Provider value={{ user, setUser, userRoleType, setUserRoleType }}>
        <Navbar />
        <Router />
      </GeneralContext.Provider>
    </>
  );
}
