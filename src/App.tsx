import React, {useEffect, useState} from 'react';
import './App.css';
import {Header} from "./Header/Header";
import {Home} from "./components/Home/Home";
import {BrowserRouter, Redirect, Route, useHistory} from "react-router-dom";
import {About} from './components/About/About';
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Contacts} from "./components/Contacts/Contacts";
import {MobileMenu} from "./components/mobile/MobileMenu";

function App() {
    const [customStyle, setCustomStyle] = useState<string>("main")
    const [customRedirect, setCustomRedirect] = useState<number>(0)
    //const [customRedirect, setCustomRedirect] = useState<string>("")

    useEffect(() => {
        setTimeout(() => setCustomStyle("main_after"), 2000)

    }, [])


    let history = useHistory();





    const clb = () => {
        if (window.innerWidth <= 999) {
            setCustomRedirect(window.innerWidth)

        }else {
             setCustomRedirect(window.innerWidth)
            //  history.push("/home");

        }
        console.log (window.innerWidth)
    }

    useEffect(() => {
        setCustomRedirect(window.innerWidth)
        window.addEventListener("resize", clb);
        return () => {
            window.removeEventListener("resize", clb)
        }
    }, [])



    return (
        <BrowserRouter>
            <div className="App">
                <div className={customStyle}>

                    <Header/>
                    {customRedirect < 999
                        ?
                        <Route path="/" render={() => <Redirect to="/"/>}/>
                        :
                        <Route path="/" render={() => <Redirect to="/home"/>}/>
                    }

                    <MobileMenu/>

                    {/*{!customRedirect && <Route exact path="/" render={() => <Redirect to="/home"/>}/>}*/}

                    <Route path="/home" render={()=> <Home clb ={clb}/> }/>
                    <Route path="/about" component={About}/>
                    <Route path="/portfolio" component={Portfolio}/>
                    <Route path="/contacts" component={Contacts}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
