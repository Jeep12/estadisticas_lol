import './InputPlayer.css'
import LolApiService from '../../services/AccountLolApi'; // Asegúrate de importar tu servicio correctamente
import * as Errors from '../../Utis/EnumError';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { InfoPlayer } from '../infoPlayer/infoPlayer' // Asegúrate de importar correctamente el componente InfoPlayer

export const InputPlayer = () => {
    const [response, setResponse] = useState(null);



    const handleBuscarClick = async () => {
        // Aquí puedes usar los valores de region y nombreUsuario como desees, por ejemplo, mostrarlos en la consola
        let nombre = document.getElementById("nick").value;
        let region = document.getElementById("region").value;
         if (nombre !== '' && region !== '') {
        const result = await LolApiService.buscarJugador(region, nombre);
        setResponse(result); // Actualiza el estado con el resultado de la búsqueda

        if (result === Errors.ERR_BAD_REQUEST) {
            toast.error("Error no existe tal jugador");
        } else {

        }
    } else {
        toast.error("Seleccione una región y nombre");
    }
    }

    return (
        <div className='wrapper-input-player'>
            <div className='inputSearch'>
                <div className='region'>
                    <label>Region</label>
                    <select className='selectRegion' id='region'>
                        <option>LAS</option>


                    </select>
                </div>
                <div className='name'>
                    <label>Nombre</label>
                    <input type='text' id='nick' placeholder='Ingrese su nick'></input>
                </div>
                <div className='buttonSearch'>
                    <button onClick={handleBuscarClick}>Buscar</button>
                </div>

            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

                {/* Renderizar el componente InfoPlayer y pasarle la respuesta como prop */}
                {response && <InfoPlayer response={response} />}

                
        </div>
    );


}
