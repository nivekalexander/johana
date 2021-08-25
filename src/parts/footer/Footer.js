
import './style.css';
import facebook from './media/facebook.png';
import instagram from './media/instagram.png';


export default function Footer (){
    
        

        return(
            
            <>
            
                <footer className="footer">
                    
                        <div className="pie">
                            
                           <div className="contacto">
                                <h3  >Contacténos</h3>
                                <ul className="infoContacto">
                                    
                                    <li>+57 300 460 6535</li>
                                    <li>johanaaramburo@hotmail.com</li>
                                    <li>Telefono Fijo: 553 5556</li>
                                    <li>Valle Del Cauca - Cali</li>
                                </ul>
                           </div>
                           <div className="RedesSociales">
                               <div className="RedesSociales-fotos">
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
                        <div className="copyRight">
                        <h5> Copyright © todos los derechos reservados.  </h5>
                        </div>

                        
                </footer>
            </>  

        );
    

}

