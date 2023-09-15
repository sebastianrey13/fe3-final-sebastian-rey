import React from 'react'
import { useContext, useState, useEffect } from 'react';
import { ContextGlobal } from '../components/utils/global.context';
import { useParams } from 'react-router-dom';
import axios from 'axios'

function Detail() {

  const { theme } = useContext(ContextGlobal);
  const params = useParams();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then(res => {
        setUsers(res.data);
      })
      .catch(error => {
        console.error("Error al obtener datos de la API: ", error);
      });
  }, []);

  return (
    <>
      <div className={`detail homeBody contenido-${theme}`}>
        <h1>Detalles Dentista id {users.id} </h1>
        <div className='detailDiv'>
          <table>
            <tbody>
              <tr>
                <td className='columna1'>Nombre</td>
                <td>{users.name}</td>
              </tr>
              <tr>
                <td className='columna1'>Email</td>
                <td>{users.email}</td>
              </tr>
              <tr>
                <td className='columna1'>Phone</td>
                <td>{users.phone}</td>
              </tr>
              <tr>
                <td className='columna1'>Website</td>
                <td>{users.website}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Detail