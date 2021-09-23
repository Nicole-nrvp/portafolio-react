
import Header from '../components/header/Header';
import Mio from '../components/mio/Mio';
import Estudio from '../components/estudio/Estudio';
import Logros from '../components/logros/Logros';
import Premios from '../components/premios/Premios';


function Portafolio() {
  return (
    <div className="containerTT">
      
      <Header />
      

      <hr />
      <section className="sesiones">
      <div className="ContenedorTT2">
        <div className="miosesion">
          <Mio />
        </div>

        <div className="estudiosesion">
          <Estudio />
        </div>


        <hr />  

        <div className="logrossesion">
          <Logros />
        </div>

        <hr />

        <div className="premiossesion">
          <Premios />
        </div>

        <hr />
        </div>
      </section>
      
    </div>
  );
}
//es necesaro exprtar 
export default Portafolio;
