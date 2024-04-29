import axios from 'axios';

const MatchesJugador = {
    searchGames: async (puuid) => {
        try {
            // Realizar la solicitud al servidor de Express
            const response = await axios.get(`http://localhost:2777/api/lol/getMatches`, {
                params: {
                    puuid: puuid,
                 
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
export default MatchesJugador;
