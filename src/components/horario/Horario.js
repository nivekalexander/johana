import './style.css';

import cantactenosImg from './media/contactenos.png';
import calendarioImg from './media/calendario.png';

export default function Horario(){

    return(

        <div className="horario">
           <h1>Horario De Atención</h1>
           <div className="horario-content">
                <div className="horario-imgOne">
                    <div className="horario-imagen">
                        <img src={cantactenosImg}/>
                    </div>
                    
                </div>
                <div className="horario-marco b-left b-right">

                    <div className="horario-dia b-left">
                        <label><h2>Lunes</h2></label>
                        <label>8 am - 6 pm</label>
                    </div>
                    <div className="horario-dia">
                        <label><h2>Martes</h2></label>
                        <label>8 am - 6 pm</label>
                    </div> 
                    <div className="horario-dia">
                        <label><h2>Miercoles</h2></label>
                        <label>8 am - 6 pm</label>  
                    </div> 
                    <div className="horario-dia">
                        <label><h2>Jueves</h2></label>
                        <label>8 am - 6 pm</label>
                    </div> 
                    <div className="horario-dia b-right">
                        <label><h2>Viernes</h2></label>
                        <label>8 am- 6 pm</label>
                    </div>

                 

                </div>
                <div className="horario-imgtwo">
                    <div className="horario-imagen">
                        <img src={calendarioImg}/>
                    </div>
                    
                </div> 
            </div>
        </div>

    );

}