import {
    Link
} from "react-router-dom";


function Home() {

    return (
        <div className="container">
            <h1 className="">Bienvenid@ Usuario <i class="fas fa-child"></i> </h1>
            <br/>
            <h1><Link to="/portafolio">Ir al portafolio <i class="fas fa-address-book"></i></Link></h1>
        </div>
    );
}

export default Home;