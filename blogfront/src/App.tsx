import React from 'react';
import './App.css';
import ProjetsComponent from "./components/projets/projetsComponent";
import AproposComponent from "./components/Apropos/AproposComponent";
import ContactComponent from "./components/Contact/ContactComponent";
import FooterComponent from "./components/shared/Footer/FooterComponent";
import HomeComponent from "./components/Home/HomeComponent";

function App() {
    return (
        <div className="App">
            <HomeComponent/>
            <AproposComponent/>
            <ContactComponent/>
            <FooterComponent/>
        </div>
    );
}

export default App;