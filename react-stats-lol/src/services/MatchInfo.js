import axios from 'axios';

const MatchInfo = {
    searchGame: async (idMatch) => {
        try {
            // Realizar la solicitud al servidor de Express
            const response = await axios.get(`http://localhost:2777/api/lol/getMatch`, {
                params: {
                    idGame: idMatch,
                 
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
export default MatchInfo;
