import Ubicacion from '../../components/ubicacion/ubicacion';
import Horario from '../../components/horario/Horario.js';
import Redes from './RedesSociales.js';

import './style.css';


export default function Contactenos(){

    return(

        <div className="contactenos">

            <Horario/>
            <Redes/>
            <Ubicacion/>
        </div>

    );

}