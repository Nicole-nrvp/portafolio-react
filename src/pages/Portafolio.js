import './App.css';
import Header from './components/header/Header';
import Mio from './components/mio/Mio'
import Estudio from './components/estudio/Estudio'
import Logros from './components/logros/Logros'
import Premios from './components/premios/Premios'


function App() {
  return (
    <div className="container">
      
      <Header />

      <hr />
      <section className="sesiones">

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

      </section>

    </div>
  );
}
//es necesaro exprtar 
export default App;
