//Creacion del componente empiezacomo funcion
import './Header.css';

function Header() {
    return (
        <div className="container">
            <div className="containet2">
                <br />
                <div className="titulo">
                    <h3 className="txtTituliContac" >Información Contacto </h3>
                </div>

                <hr className="hreader" />

                <div className="informacion">

                    <div className="info"> <i class="fas fa-envelope"></i>
                        <span className="refnombre"> Correo</span>
                        <p className="refcargo">nicolnrvp@gmail.com</p>
                    </div>

                    <div className="info"> <i class="fal fa-map-marker-alt"></i>
                        <span className="refnombre"> Dirección</span>
                        <p className="refcargo">Kr 112d #139 - 16</p>
                    </div>

                    <div className="info"> <i class="fas fa-phone"></i>
                        <span className="refnombre"> Télefono</span>
                        <p className="refcargo">314509916</p>
                    </div>
                    <div className="info"> <i class="fas fa-calendar-day"></i>
                        <span className="refnombre"> Fecha Nacimiento</span>
                        <p className="refcargo">28/09/2003</p>
                    </div>
                    <div className="info"> <i class="fas fa-flag"></i>
                        <span className="refnombre"> Nacionalidad</span>
                        <p className="refcargo">Colombiana</p>
                    </div>

    </div>

                <hr className="hreader" />

                <div className="habilidades">
                    <h3 className="txtHabilidades">Cualidades </h3>
                    <div className="habi-per">

                        <ol type="">
                            <li className="ha-nombre"><span > Liderazgo</span></li>
                            <li className="ha-nombre"><span > Persistencia</span></li>
                            <li className="ha-nombre"><span > Trabajo en Equipo</span></li>
                        </ol>

                    </div>
                </div>


                <hr className="hreader" />
                <div className="tecnicas-t">
                    <div className="tecnicas-txt">
                    <h3 className="txtHabiTec">Habilidades</h3>
                    </div>
                <div className="tecnicas">

                    
                    
                        <label className="txtLabel" for="file">MySQL - SQL SERVER:</label>
                        <progress className="progreso" id="file" max="100" value="60"></progress>

                        <label className="txtLabel" for="file">JAVA - PHP - JS:</label>
                        <progress className="progreso" id="file" max="100" value="90"></progress>

                        <label className="txtLabel" for="file">BOOSTRAP - CSS:</label>
                        <progress className="progreso" id="file" max="100" value="70"></progress>

                        <label className="txtLabel" for="file">LARAVEL - REACT:</label>
                        <progress className="progreso" id="file" max="100" value="50"> </progress>

                    
                </div>
                </div>
                <hr className="hreader" />
                <div className="idiomas">


                    <h3 className="txtIdioma">Idiomas </h3>
                    <div className="idioma">

                        <ul>
                            <li className="liIdioma">Inglés
                                <ul>
                                    <li className="liQue">Basico</li>
                                </ul>
                            </li>
                            <li className="liIdioma">Español
                                <ul>
                                    <li className="liQue">Nativo</li>
                                </ul>
                            </li>
                        </ul>

                    </div>
                </div>

                <hr className="hreader" />

                <div className="referencias">
                    <h3 className="txtRefencia"> Referencias </h3>
                    <div className="info"> <i class="far fa-envelope"></i>
                        <span className="refnombre"> Lenys7584@gmail.com</span>
                        <p className="refcargo">Madre</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

//Es necesario exportar
export default Header;
