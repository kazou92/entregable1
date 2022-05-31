import React from 'react'


const Card = ({usersAleatwa,coulorAleatwa,clickButton}) => {
  return (
    <div style={{color:coulorAleatwa }} className='card'>
        <h2>{usersAleatwa.name}</h2>
        <p>{usersAleatwa.address.city}</p>
        <ul>
          <li className='lista
          '><b>Companys'name :</b>{usersAleatwa.company.name}</li>
          <li className='lista
          '><b>Website : </b>{usersAleatwa.website}</li>
          <li className='lista
          '><b>Phone : </b>{usersAleatwa.phone}</li>
        </ul>
        <button onClick={clickButton} style={{backgroundColor:coulorAleatwa}} className='card-btn'>&#62;</button>
    </div>
  )
}

export default Card