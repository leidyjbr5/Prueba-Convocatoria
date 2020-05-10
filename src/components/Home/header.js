import React from 'react';

export const Header = () => ( 
  <div className="container">
      <h2>Reporte del Clima</h2>
        <div className="wrap">
          <div className="box">
            <input type="number" name="temperature" id="input-box" placeholder="Temperatura"/>
            <span className='symbol'>°C</span>
          </div>
          <div className="box">
            <input type="number" name="humidity"id="input-box" placeholder="Humedad"/>
            <span className='symbol'>%</span>
          </div>
          <div className="box">
            <input type="string" name="city"id="input-box" placeholder="Ciudad"/>
          </div>
        </div>
        <div className='buttons-container'>
          <div className='button-primary'>
            <input type='button' value='GET' />
          </div>
          <div className='button-primary'>
            <input type='button' value='POST' />
          </div>
        </div>
  </div>
)
