//Creacion del componente empiezacomo funcion
import './Mio.css';
import foto from "./nicol.PNG";

function Mio() {
    return (
        <div className="mio">
            <div className="mio-2">

                <div className="nombre">
                    <h1> <span className="nombre">Nicole </span> Valentina Romero Polo</h1>
                </div>

                <div className="estudiante">
                    <h3 className="txtEstudiante">Estudiante</h3>
                </div>

                <div className="objetivo">
                    <p className="txtObjetivo"> 
                        Uno de mis objetivos profesionales se adapta a las necesidades de
                        evolucionar y mejorar dentro de la empresa donde me desarrolle como
                        profesional, en la que pueda poner en práctica todos mis conocimientos,
                        que me brinde la oportunidad de alcanzar todas mis metas trazadas, y que
                        me ofrezca la oportunidad de crecer en el área laboral, personal e intelectual.
                        Durante mi vida he recibido logros significantes que han marcado lo que hoy
                        es mi historia, por ser excelente persona, superando constantemente mis
                        objetivos personales y laborales.
                    </p>
                </div>

            </div>

            <div className="foto">
                <img src={foto} alt="Foto Nicole" />
            </div>

        </div>
    );
}

//Es necesario exportar
export default Mio;
