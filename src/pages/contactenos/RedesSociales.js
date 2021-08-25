
import RedesImg from './media/redesImg.png';
import facebook from '../../parts/footer/media/facebook.png';
import instagram from '../../parts/footer/media/instagram.png';
 

import './style.css';


export default function RedesSociales(){

    return(



        <div  className="redes-content">
            <div className="redes-content-titulo">
                <h1>Redes Sociales</h1>
            </div>
            <div className="redes-content-img">
                <div className="redes-Img">

                    <img src={RedesImg} />

                </div>
                <div className="fondoLiquid-content"  >
                   

                    <div className="redes-icons">
                    
                            
                        <div className="redesSociales-fotos">

                            <div className="facebook">
                                <a target="_blank" href="https://web.facebook.com/leidyjohanaa">
                                    <img  src={facebook} alt="facebook"/>
                                </a>
                            </div>

                            <div className="instagram">
                                <a target="_blank" href="https://instagram.com/odaramburo?igshid=9ii9gk3260wi">
                                    <img src={instagram} alt="instagram"/>
                                </a>
                            </div>

                            </div>
                    </div>
                </div>
            </div>
        </div>
        


    );

}