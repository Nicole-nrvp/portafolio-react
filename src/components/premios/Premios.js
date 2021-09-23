//Creacion del componente empiezacomo funcion
import './Premios.css';

function Premios() {
    return (
        <div className="premios">

            <div className="premios2">

                <div>
                    <h3 className="txtTitulo">Premios</h3>
                </div>

                <div className="lista">
                    <ol type="">
                        <li><span className="tec-nombre"> Bachiller de Oro en el Colegio - Alberto Lleras Camargo </span></li>
                        <li><span className="tec-nombre"> Premio Mejor Técnico de Software y Programación - Articulación con la media </span></li>
                        <li><span className="tec-nombre"> Reconocimientos a la excelencia </span></li>
                        <li><span className="tec-nombre"> Cumplimiento académico </span></li>
                        <li><span className="tec-nombre"> Cuatro medallas por campeonatos de futbol </span></li>

                    </ol>
                </div>

            </div>

        </div>
    );
}

//Es necesario exportar
export default Premios;
