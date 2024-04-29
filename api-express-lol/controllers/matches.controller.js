let fs = require('fs');
const axios = require('axios');

let path = require('path');


exports.searchMatches = async (req, res) => {
    try {
        const { puuid } = req.query; // Obtener region y puuid de los parámetros de la solicitud


        const headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
            "Accept-Language": "es-ES,es;q=0.7",
            "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
            "Origin": "https://developer.riotgames.com",
            "X-Riot-Token": "RGAPI-364e6ff2-fa5b-41b8-a641-bc30661ec539"
        };
      
        const response = await axios.get(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20`,{ headers });
        if (!response.data) {
            throw new Error('Error al buscar partidas');
        }

        return res.status(200).json(response.data); // Devolver los datos del jugador como respuesta
    } catch (error) {
        return res.status(404).json({ error: 'Error en la búsqueda de partidas' });
    }
}