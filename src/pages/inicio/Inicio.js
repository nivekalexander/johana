import './style.css';
import fotoQuienSomos from './media/fotoConsultorioIlustracion.png';

import Ubicacion from '../../components/ubicacion/ubicacion';

import Testimonio from '../../components/testimonio/testimonio';

export default function Inicio (){
    

        return (
            <div className="inicio">

            
                <section className="content-inicio padding-arriba"> 
                    
                    <div className="content-quienSomos padding-lados">

                            
                            <div className="contenido-quienSomos">
                                <div>
                                    <h1>Consultorio Odontológico<br/>Johana Aramburo</h1>
                                </div>
                                <div>   
                                    <p>Trabajamos día a día con excelencia para el cuidado de tu salud dental, porque para nosotros verte sonreír con seguridad es lo más importante.</p>
                                </div>
                
                            </div>
                            <div className="foto-quienSomos">
                                <img src={fotoQuienSomos}/> 
                               
                                
                                
                                 
                               
                            </div>
                        
                    </div>

                    
                    <Testimonio/>
                    
                </section> 
            

             

                <Ubicacion/>
                 
            </div>
            
        );
   
}

