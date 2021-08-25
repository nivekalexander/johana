import './style.css';


export default function Ubicacion(){

    return(
        <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgb(83 86 87)" fillOpacity="1" d="M0,64L30,74.7C60,85,120,107,180,101.3C240,96,300,64,360,74.7C420,85,480,139,540,160C600,181,660,171,720,144C780,117,840,75,900,64C960,53,1020,75,1080,112C1140,149,1200,203,1260,229.3C1320,256,1380,256,1410,256L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>

        <div className="mapa padding-abajo color-letra-blanco">
            
            <h2>Encuéntranos En</h2>
            <iframe className="google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.92110581832236!2d-76.562310111035!3d3.41398166773871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a40fdb604531%3A0x3c2ace9a801490b0!2sCl%C3%ADnica%20Odontol%C3%B3gica%20Dra%20Johana%20Aramburo%20Garcia!5e0!3m2!1ses!2sco!4v1619213638407!5m2!1ses!2sco" loading="lazy"></iframe>
        </div>  
        </>
    );

}