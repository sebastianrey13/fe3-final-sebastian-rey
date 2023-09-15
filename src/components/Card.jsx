import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { ContextGlobal } from '../components/utils/global.context';

function Card({ user }) {

  const { theme } = useContext(ContextGlobal);


  const [isFavorite, setIsFavorite] = useState(false);

  // Verifica si la tarjeta es favorita cuando el componente se monta
  useEffect(() => {
    const favCards = JSON.parse(localStorage.getItem('favCards')) || [];
    const isCardFavorite = favCards.some((favUser) => favUser.id === user.id);
    setIsFavorite(isCardFavorite);
  }, [user.id]);


  function addFav() {
    const favCards = JSON.parse(localStorage.getItem('favCards')) || [];

    if (isFavorite) {
      // Si ya es favorito la elimina de localStorage
      const updatedFavCards = favCards.filter((favUser) => favUser.id !== user.id);
      localStorage.setItem('favCards', JSON.stringify(updatedFavCards));
    } else {
      // Si no es fav la agrega
      favCards.push(user);
      localStorage.setItem('favCards', JSON.stringify(favCards));
    }
    // Cambia el estado de favorito para saber que img mostrar
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="card" key={user.id}>
      <img className='img_doctor' src="../../images/doctor.jpg" alt="img_doctor" />
      <h3 className={`h3-${theme}`}><Link to={`/dentist/${user.id}`}>{user.name}</Link></h3>
      <p>{user.username}</p>

      <button onClick={addFav} className="favButton">
        <img src={`../../images/${isFavorite ? 'estrella.png' : 'estrella_sin.png'}`} alt="" />
      </button>
    </div>
  );
}

export default Card;