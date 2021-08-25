

import fotoJohana from "./media/fotoJohana.png";
import diploma from './media/diploma.jpg';
import consultorioFoto from './media/fotoConsultorio.jpg';

import dienteFoto from './media/diente.png';

import './style.css';


export default function Nosotros(){


    return(
        <div className="nosotros">
             
            <div className="personal">
                <div className="personal-info padding-lados">

                    <div className="fotoPerfil">
                            <img src={fotoJohana} />
                    </div>
                    
                    <div className="descripcion">
                            <h1>Dra. Johana Aramburo Garcia</h1>
                            <p>
                           
                                Hola mi nombre es johana, soy odontologa de la universidad del valle,llevo laborando en el 
                                campo odontológico más de 8 años brindando la mejor experiencia a mis clientes, trabajando 
                                con la mejor atención y disposición posible para dar un servicio inolvidable.
                                Me gusta lo que hago porque no hay nada más satisfactorio que verte sonreir con seguridad.
                            </p>
                           
                   </div>
                   </div>
                </div>
                <div className="mision color-letra-blanco">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,64L48,80C96,96,192,128,288,117.3C384,107,480,53,576,74.7C672,96,768,192,864,218.7C960,245,1056,203,1152,197.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                        <div className="mision-content padding-lados">
                            <div className="slider-mision">
                                <img src={consultorioFoto}  />
                            </div>
                            <div className="content-mision  ">
                                
                                <h2>Misión</h2><br/>
                                
                                <p>
                                Prestar servicios de salud oral de alta calidad y excelencia,orientados fundamentalmente a la promoción de la salud y prevención de enfermedades, garantizando una labor social a nuestros pacientes brindándoles una 
                                asistencia odontológica integral mediante un excelente servicio y una atención personalizada.
                                </p>
                                
                            </div>
                        </div>

                        <div className="vision-content padding-lados color-letra-blanco">
                            
                            <div className="content-vision  ">
                                <h2>Visión</h2>
                                <p>
                                Ser el primer consultorio odontologico privado, habilitado en la comuna 20.Líder en prestación de servicios odontológicos de la zona oeste de cali proporcionando bienestar integral 
                                en la salud oral a nuestros usuarios con una excelente calidad de servicios, constante un mejoramiento y responsabilidad social.
                                </p>
                            </div>
                            <div className="foto-vision">
                                <img src={consultorioFoto}  />
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,64L30,74.7C60,85,120,107,180,101.3C240,96,300,64,360,74.7C420,85,480,139,540,160C600,181,660,171,720,144C780,117,840,75,900,64C960,53,1020,75,1080,112C1140,149,1200,203,1260,229.3C1320,256,1380,256,1410,256L1440,256L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path></svg>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(83 86 87)" fillOpacity="1" d="M0,64L30,74.7C60,85,120,107,180,101.3C240,96,300,64,360,74.7C420,85,480,139,540,160C600,181,660,171,720,144C780,117,840,75,900,64C960,53,1020,75,1080,112C1140,149,1200,203,1260,229.3C1320,256,1380,256,1410,256L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
                
                <div className="certificados">

                    <img src={dienteFoto}/> 

                    <div className="certificadosFotos">
                        <div className="diploma">
                                <img src={diploma}/>
                        </div>
                        <div className="atencion">
                                <img src={diploma}/>
                        </div>
                    </div>
                    
                </div>



            

        </div>

    );

}