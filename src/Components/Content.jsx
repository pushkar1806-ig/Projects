import React, { useState } from 'react';
import Plot from 'react-plotly.js'; 

export default function VectorGraph3D() {
  const [x, setX] = useState(5);
  const [y, setY] = useState(5);
  const [z, setZ] = useState(5);

  const axisLimit = 15;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <div style={{ marginBottom: '10px' }}>
        <label>X: <input type="number" value={x} onChange={e => setX(Number(e.target.value))} style={{ width: '60px', marginRight: '10px' }}/></label>
        <label>Y: <input type="number" value={y} onChange={e => setY(Number(e.target.value))} style={{ width: '60px', marginRight: '10px' }}/></label>
        <label>Z: <input type="number" value={z} onChange={e => setZ(Number(e.target.value))} style={{ width: '60px' }}/></label>
      </div>
      
      <Plot
        data={[
          // Main Vector Line & Arrowhead (Blue)
          { type: 'scatter3d', mode: 'lines', x: [0, x], y: [0, y], z: [0, z], line: { width: 6, color: 'blue' } },
          { type: 'cone', x: [x], y: [y], z: [z], u: [x], v: [y], w: [z], sizemode: 'absolute', sizeref: 1.5, anchor: 'tip', colorscale: [[0, 'blue'], [1, 'blue']], showscale: false },
          
          // X-Axis & Arrowhead (Red)
          { type: 'scatter3d', mode: 'lines', x: [0, axisLimit], y: [0, 0], z: [0, 0], line: { width: 4, color: 'red' } },
          { type: 'cone', x: [axisLimit], y: [0], z: [0], u: [1], v: [0], w: [0], sizemode: 'absolute', sizeref: 1, anchor: 'tip', colorscale: [[0, 'red'], [1, 'red']], showscale: false },
          
          // Y-Axis & Arrowhead (Green)
          { type: 'scatter3d', mode: 'lines', x: [0, 0], y: [0, axisLimit], z: [0, 0], line: { width: 4, color: 'green' } },
          { type: 'scatter3d', mode: 'lines', x: [0, 0], y: [0, axisLimit], z: [0, 0], line: { width: 4, color: 'green' } },
          { type: 'cone', x: [0], y: [axisLimit], z: [0], u: [0], v: [1], w: [0], sizemode: 'absolute', sizeref: 1, anchor: 'tip', colorscale: [[0, 'green'], [1, 'green']], showscale: false },
          
          // Z-Axis & Arrowhead (Purple)
          { type: 'scatter3d', mode: 'lines', x: [0, 0], y: [0, 0], z: [0, axisLimit], line: { width: 4, color: 'purple' } },
          { type: 'cone', x: [0], y: [0], z: [axisLimit], u: [0], v: [0], w: [1], sizemode: 'absolute', sizeref: 1, anchor: 'tip', colorscale: [[0, 'purple'], [1, 'purple']], showscale: false },
        ]}
        layout={{
          width: 700,
          height: 600,
          title: '3D Vector with Axes',
          showlegend: false,
          scene: {
            xaxis: { title: 'X Axis (Red)', range: [-2, axisLimit], showgrid: true },
            yaxis: { title: 'Y Axis (Green)', range: [-2, axisLimit], showgrid: true },
            zaxis: { title: 'Z Axis (Purple)', range: [-2, axisLimit], showgrid: true }
          }
        }}
      />
    </div>
  );
}
