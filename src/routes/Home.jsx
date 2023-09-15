import React from 'react'
import Card from '../components/Card'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { ContextGlobal } from '../components/utils/global.context';

function Home() {

  const { theme } = useContext(ContextGlobal);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        setUsers(res.data);
      })
      .catch(error => {
        console.error("Error al obtener datos de la API: ", error);
      });
  }, []);


  return (
    <main className={`homeBody contenido-${theme}`} >
      <h1>Home</h1>
      <div className='card-grid'>
        {users.map(user => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </main>
  )
}

export default Home