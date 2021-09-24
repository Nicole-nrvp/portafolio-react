import {
  Link
} from "react-router-dom";


function Error404(){

	return(
	<div className="error">
    <div>
        <i class="fas fa-exclamation-triangle"></i>
        .
         <label className="textError">Error 404 Estás intentando acceder a una página que no existe</label>
        .
        <i class="fas fa-exclamation-triangle"></i>
      </div>

      <div>
        <h3 className="txtHabilidades"><Link to="/home">Volver</Link></h3>
      </div>
      </div>

		);
}

export default Error404;