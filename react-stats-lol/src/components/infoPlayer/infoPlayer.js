import React, { useEffect, useState } from 'react';
import './infoPlayer.css';
import MatchesJugador from '../../services/MatchesPlayer';
import MatchInfo from '../../services/MatchInfo';
import Accordion from 'react-bootstrap/Accordion';

export const InfoPlayer = ({ response }) => {
    const [partidasIds, setPartidasIds] = useState([]);
    const [partidasDetalladas, setPartidasDetalladas] = useState([]);

    useEffect(() => {
        async function getMatchs() {
            if (response) {
                let puuid = response.puuid;
                const idsPartidas = await MatchesJugador.searchGames(puuid);
                setPartidasIds(idsPartidas);
                console.log(idsPartidas);
            }
        }

        getMatchs(); // Llamada a la función dentro del useEffect

        // No es necesario retornar una función de limpieza en este caso
    }, [response]);



    useEffect(() => {
        async function obtenerPartidasDetalladas() {
            const partidasDetalladasPromises = partidasIds.map(async idPartida => {
                return await MatchInfo.searchGame(idPartida);
            });

            const partidasDetalladas = await Promise.all(partidasDetalladasPromises);
            setPartidasDetalladas(partidasDetalladas);
        }

        obtenerPartidasDetalladas();
    }, [partidasIds]);
    console.log(partidasDetalladas);
    return (
        <div className='infoPlayer'>
          
                {partidasDetalladas.map((partida, index) => (
                    <div className='wrapper-game' key={partida.metadata.matchId}>
                        <Accordion className='accordion'>
                            <Accordion.Item eventKey={index.toString()}> {/* Usar el índice como parte del eventKey */}
                                <Accordion.Header>Partida #{index + 1}</Accordion.Header>
                                <Accordion.Body>
                                    <p>ID de partida: {partida.metadata.matchId}</p>
                                    <p>Tipo de juego: {partida.info.gameMode}</p>
                                    <p>Duración: {partida.info.gameDuration} segundos</p>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                ))}

           
        </div>
    );
};
