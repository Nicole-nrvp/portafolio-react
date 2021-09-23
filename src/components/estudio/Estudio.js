//Creacion del componente empiezacomo funcion
import './Estudio.css';

function Estudio() {
    return (
        <div className="estudio">

            <div className="lugar">
                <h3 className="txtTitulo">Educación</h3>

                <label className="txtLugar1">
                    Bogotá D.C - Colombia<br/>
                    Diciembre 2020 - Actualmente
                </label>

                <label className="txtLugar2">
                    Bogotá D.C - Colombia<br/>
                    Febrero 2019 - Noviembre 2020
                </label>

                <label className="txtLugar3">
                    Bogotá D.C - Colombia<br/>
                    Enero 2010 - Diciembre 2021
                </label>
<br/>
                <h3 className="txtLugar4">Otros</h3>

                <label className="txtLugar5">
                    Bogotá D.C - Colombia<br/>
                    Marzo 2021 - Junio 2021
                </label>

            </div>
            < div className="realizado">


                <p className="txtRealizado1">
                    <h3>Tecnólogo en Análisis y Desarrollo de Sistemas de Información</h3>
                    <h5>CGMLTI - SENA</h5>
                    * Sistemas de información, para la sistematización o automatización de procesos.
                </p>
                <br/>
                <p className="txtRealizado">
                    <h3>Programación de Software</h3>
                    <h5>SENA - Articulación con la media</h5>
                    * Cumplimiento de mis objetivos a corto y largo plazo consistentemente.
                </p>
                <br/>
                <p className="txtRealizado">
                    <h3>Bachiller Académico</h3>
                    <h5>Colegio - Alberto Lleras</h5>
                </p>

                <br/>
                <p className="txtRealizado2">
                    <h3>Introducción a la Ingeniería de Sistemas y Computación</h3>
                    <h5>Universidad Nacional de Colombia</h5>
                </p>
                
            </div>

        </div>
    );
}

//Es necesario exportar
export default Estudio;
