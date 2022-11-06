import axios from 'axios';
import React, { useEffect, useState } from 'react';


const ResidentInfo = ({residents}) => {

    const [characters, setCharacter] = useState({})


    useEffect(() => {
        axios.get(residents)
            .then(res => setCharacter(res.data))
    }, [])

    console.log(characters);

    return (
        <>
        <div className='divCharacters'>
            <li >
                <img className='image' src={characters.image} alt="" />
                <div className='status'>
                {(() => {
            if (characters.status === "Dead") {
              return (
                <div
                  className={`status-dead`}
                >
                  {characters.status}
                </div>
              );
            } else if (characters.status === "Alive") {
              return (
                <div
                  className={`status-alive`}
                >
                  {characters.status}
                </div>
              );
            } else {
              return (
                <div
                  className={`unknown`}
                >
                  {characters.status}
                </div>
              );
            }
          })()}
                </div>
                <div className='infoCharacters'>
                    <h3 className='nameCharacter'>{characters.name}</h3>
                    <div className='hr'></div>
                    <div>
                        <p className='properties'>TYPE</p>
                        <p className='features'>{characters.type}</p>
                    </div>
                    <div>
                        <p className='properties'>ORIGIN</p>
                        <p className='features'>{characters.origin?.name}</p>
                    </div>
                    <div>
                        <p className='properties'>EPISODES WHERE APPEAR:</p>
                        <p className='features'>{characters.episode?.length}</p>
                    </div>
                </div>
            </li>
           
        </div>
       
        </>
    );
};

export default ResidentInfo;