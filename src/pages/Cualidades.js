import {
    Link
} from "react-router-dom";


function Cualidades() {

    return (
        <div className="cualidades">
            <h1 className="">Bienvenid@ Usuario <i class="fas fa-child"></i> </h1> 
            <br />
            <p> Nicole tiene unas cualidades muy maravillosas y las conoceremos ahora </p>

            <div className="habi-per">
            <br />
                        <ol type="">
                            <li className="ha-nombre"><span > Liderazgo</span></li>
                            <p> Durante su vida, ha desempeñado cargos que le han logrado crecer a nivel profesionar y personlas </p>
                        <br />
                            <li className="ha-nombre"><span > Persistencia</span></li>
                            <p> Se ha destacado por ser una persona que no se rinde, siempre es persistente </p>
                        <br />
                            <li className="ha-nombre"><span > Trabajo en Equipo</span></li>
                            <p> El trabajo en equipo es una de las grandes cualidades, aveces puede ser un poco irritante pero eso es lo que la hace crecer como persona </p>
                        <br />
                        </ol>

                        <h3 className="txtHabilidades"> <Link to="/portafolio">Volver al portafolio</Link></h3>

                    </div>

        </div>
    );
}

export default Cualidades;