import React,{useState} from 'react';

function Encuestas({ encuestas }) {
    const [respuestas, setRespuestas] = useState({})

    const handleOptionChange = (encuestaId, opcion) => {
        setRespuestas((previeRespuestas) => ({
            ...previeRespuestas,
            [encuestaId]: opcion,
        }));
    };

    return (
    <div>
        <h2>Lista de Encuestas</h2>
            <form>
                {encuestas.map((encuesta) => (
                    <div key={encuesta.id}>
                        <h3>{encuesta.pregunta}</h3>
                        <ul>
                            {encuesta.opciones.map((opcion) => (
                                <li key={opcion}>
                                    <label>
                                        <input
                                        type='radio'
                                        name={"encuesta_${encuesta.id}"}
                                        value={opcion}
                                        checked={respuestas[encuesta.id]=== opcion}
                                        onChange={() => handleOptionChange(encuesta.id, opcion)}
                                        />
                                        {opcion}
                                    </label>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </form>
        </div>
    );
}
export default Encuestas;