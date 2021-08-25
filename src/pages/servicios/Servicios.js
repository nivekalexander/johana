import React, { useState,useEffect } from 'react';

import datos from "./dataServicios.json";

import "./style.css";

import serviciosImg from "./media/servicios.png";


export default function Servicios(){

    const [data,setData]=useState(datos);

   
    
    

    return(
        <>
        <section className="Servicios">
            <div className="ServiciosHeader">
                <div className="titleServicios">
                <h1>Servicios Dentales</h1>
                </div>
                <div className="iconServicios">
                <img src={serviciosImg}/>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,117.3C384,107,480,53,576,74.7C672,96,768,192,864,218.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                        
            <div className="listaServicios">
    
                {    
               
                data?.map((item) => (
                    
                    <div className="cardBodyServ" key={item.id}>

                        <div className="cardHeaderServ">
                            <img src={item.img}/>
                        </div>
                        <div className="cardContentServ">
                            <h4>{item.title}</h4>
                            <p>{item.content}</p>
                            <h4>{item.price}</h4>
                        </div>

                    </div>                    

                ))
                }            
            </div> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,64L30,74.7C60,85,120,107,180,101.3C240,96,300,64,360,74.7C420,85,480,139,540,160C600,181,660,171,720,144C780,117,840,75,900,64C960,53,1020,75,1080,112C1140,149,1200,203,1260,229.3C1320,256,1380,256,1410,256L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
                

                

        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(54 56 57)" fillOpacity="1" d="M0,64L30,74.7C60,85,120,107,180,101.3C240,96,300,64,360,74.7C420,85,480,139,540,160C600,181,660,171,720,144C780,117,840,75,900,64C960,53,1020,75,1080,112C1140,149,1200,203,1260,229.3C1320,256,1380,256,1410,256L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
        </>        
    );


}