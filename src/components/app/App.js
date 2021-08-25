


import {BrowserRouter,Route} from 'react-router-dom';

import Header from "../../parts/header/Header.js";
import Footer from "../../parts/footer/Footer.js";

import Inicio from "../../pages/inicio/Inicio.js";
import Nosotros from '../../pages/nosotros/Nosotros.js';
import Servicios from "../../pages/servicios/Servicios";
import Contactenos from '../../pages/contactenos/Contactenos.js';


import whatsapp from "./media/whatsapp.png";



import './style.css';

import  ScrollToTop from "../scrollToTop/ScrollToTop.js";


export default function App (){

        return(
            <>

            

            <BrowserRouter>
                    
            <ScrollToTop/>

              <Header/>

                    <Route exact path="/inicio" component={Inicio}/>
                    <Route exact path="/nosotros" component={Nosotros}/>
                    <Route exact path="/contactenos" component={Contactenos}/>
                    <Route exact path="/servicios" component={Servicios}/>
                    
                    
                   
                    <Route exact path="/" component={Inicio}/>
                   <div className="iconWhatsapp">

                        <a target="_blank" href="https://api.whatsapp.com/send?phone=+573004606535&amp;text=Hola,&nbsp;estoy&nbsp; interesado&nbsp;en&nbsp;tus&nbsp;servicios.">
                            
                            <img src={whatsapp} />
                            
                        </a>
                        
                    </div>
                    
               <Footer />
            
            </BrowserRouter>
              
            
            </>
        );
    
}

 