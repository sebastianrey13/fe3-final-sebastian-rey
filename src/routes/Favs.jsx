import React from 'react'
import Card from '../components/Card'
import { useContext, useState, useEffect } from 'react';
import { ContextGlobal } from '../components/utils/global.context';


function Favs() {
  const { theme } = useContext(ContextGlobal);
  // const [favCards, setFavCards] = useState([]);

  // useEffect(() => {
  //   const storedFavCards = JSON.parse(localStorage.getItem('favCards')) || [];
  //   setFavCards(storedFavCards);
  // }, []);

  const storedFavCards = JSON.parse(localStorage.getItem('favCards')) || [];


  return (
    <>
      {/* <div className={`homeBody contenido-${theme}`}>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {favCards.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </div> */}

      <div className={`homeBody contenido-${theme}`}>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          {storedFavCards.map((user) => (
            <Card key={user.id} user={user} />
          ))}
        </div>
      </div>

    </>
  );
}

export default Favs;