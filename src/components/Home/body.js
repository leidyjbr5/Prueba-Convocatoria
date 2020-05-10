import React from 'react';
import Plotly from "plotly.js-basic-dist";
import createPlotlyComponent from 'react-plotly.js/factory';

export const Body = () =>  { 

  const Plot = createPlotlyComponent(Plotly);

    return (
      <div className = 'plot-container'>    
      <Plot 
        data={[
          {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            y: [13, 15, 18, 22, 15, 20, 18, 22, 16, 15, 13, 18],
            type: 'scattergl',
            marker: {color:'red'},
            name: 'Temp (°C)'
          },
          {
            x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            y: [75, 76, 75, 77, 74, 74, 75, 76, 75, 77, 74, 74],
            type: 'scattergl',
            marker: {color:'blue'},
            name: 'Hum (%)'
          },
        ]}
        layout = {{
          width : '700', height : '400',
          title : 'Seguimiento Anual del Clima',
          legend: {
            x: 1, y: 1, traceorder: 'normal',
            font: {
              family: 'sans-serif', size: 12, color: 'black'
            },
            bgcolor: 'lightgrey',
            bordercolor: 'grey',
            borderwidth: 2,
          }
        }}
      />
      </div>
    );
}