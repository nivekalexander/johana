
//import logoMenu from  "../img/menu.svg" ;
import {useState,useEffect} from "react";
import {Link} from "react-router-dom";

import './style.css';

import logo from './media/logo.jpeg';
import menuIcon from './media/menu.svg';



export default function Header() {

  const [navResponsive,setNavResponsive]=useState(false);
  const [navConditional,setNavConditional]=useState(false);


  var logoStyle={
    display:" ",
  };
  var botonStyle={
    flexDirection:"",
    };
  var liStyle={
    padding:"",
  };
  var navStyle={
    display:"flex !important",
  };

  const handleClickMenu=()=>{

    setNavResponsive(!navResponsive);
    setNavConditional(!navConditional);

  };
  
  if(navResponsive){
    var navStyle={
      display:"!important",
    };
    
    logoStyle={
      display:"none",
    };
   botonStyle={

    flexDirection:"row-reverse",
    };
    liStyle={
      padding:"10%",
    };
  }else{
    var navStyle={
      display:"none !important",
    };
    logoStyle={
       display:" ",
    };
    botonStyle={
      flexDirection:"",
    };
    liStyle={
      padding:"",
    };

  }
  
  return (

      <>
        
        <header id ="cabecera" className="header">

            <div id="menu" className={`${navResponsive ? "menu unoPantalla" : "menu dosPantalla" }`}>

              <div id="logo" className="logo" style={logoStyle} >
              <img src={logo} alt="logo"/>
              </div>
              <div id="iconoHeader" className="iconoMenu" style={botonStyle} onClick={handleClickMenu}>
                  <img id="iconoHeaderIcon" src={menuIcon} alt="iconoMenu" />
              </div>
              <nav id="opcionesMenu" className={`${navResponsive?"nav unoNav":"nav"} `} style={navStyle} >
                <ul  className={`${navResponsive?"dosNavUl":"unoNavUl"}`}>
                  
                    <li  style={liStyle} ><Link to="/inicio" onClick={navConditional?handleClickMenu:null}>Inicio</Link></li>
                    <li  style={liStyle}><Link to="/nosotros" onClick={navConditional?handleClickMenu:null}>Nosotros</Link></li>
                    <li  style={liStyle}><Link to="/servicios" onClick={navConditional?handleClickMenu:null}>Servicios</Link></li>
                    <li  style={liStyle}><Link to="/contactenos" onClick={navConditional?handleClickMenu:null}>Contacténos</Link></li>
                    
                </ul>
              </nav>
              

            </div>
            
        </header>

      </>
  );
    
}

