import axios from 'axios';

const LolApiService = {
    buscarJugador: async (region, nombreUsuario) => {
        try {
            // Realizar la solicitud al servidor de Express
            const response = await axios.get(`http://localhost:2777/api/lol/getSummoner`, {
                params: {
                    region: region,
                    riotId: nombreUsuario
                }
            });
            
            // Verificar si la solicitud fue exitosa
          
            // Devolver los datos del jugador obtenidos del servidor
            return response.data;
        } catch (error) {
            return error.code;
        }
    }
};


export default LolApiService;
