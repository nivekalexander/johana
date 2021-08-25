import './style.css';

import foto1 from './media/anyie.png';

export default function Testiomonio(){

    return(

        <div className="testimonio">
            
            <div className="testimonio-titulo">
                <h1>Testimonios</h1>
            </div>
            

            <div className="testimonioPersonas">
                
                <div className="cardPersona">

                    <div className="cardPersona-foto">
                         <img src={foto1}/>
                    </div>
                    <div className="cardPersona-contenido">
                        <div className="cardPersona-testimonio">
                        Si tuviese que elegir una sola palabra para definir el trabajo de la Dra. González y de todo su equipo esa sería: "IMPECABLE". Impecable en el trato al paciente e impecable en su minuciosidad al trabajar.
                        Gracias por vuestra dedicación.
                        </div>
                        <div className="cardPersona-paciente"> 
                        <p>Anyie Tatiana 
                        <h5>Paciente</h5>
                        </p>
                        
                        </div>
                    </div>
                </div>

                <div className="cardPersona">

                    <div className="cardPersona-foto">
                        <img src={foto1}/>
                    </div>
                    <div className="cardPersona-contenido">
                        <div className="cardPersona-testimonio">
                        Si tuviese que elegir una sola palabra para definir el trabajo de la Dra. González y de todo su equipo esa sería: "IMPECABLE". Impecable en el trato al paciente e impecable en su minuciosidad al trabajar.
                        Gracias por vuestra dedicación.
                        </div>
                        <div className="cardPersona-paciente"> 
                        <p>Anyie Tatiana 
                        <h5>Paciente</h5>
                        </p>
                        
                        </div>
                    </div>
                </div>
                
                <div className="cardPersona">

                    <div className="cardPersona-foto">
                        <img src={foto1}/>
                    </div>
                    <div className="cardPersona-contenido">
                        <div className="cardPersona-testimonio">
                        Si tuviese que elegir una sola palabra para definir el trabajo de la Dra. González y de todo su equipo esa sería: "IMPECABLE". Impecable en el trato al paciente e impecable en su minuciosidad al trabajar.
                        Gracias por vuestra dedicación.
                        </div>
                        <div className="cardPersona-paciente"> 
                        <p>Anyie Tatiana 
                        <h5>Paciente</h5>
                        </p>
                        
                        </div>
                    </div>
                </div>
            </div>
        
        </div>

    );


} 