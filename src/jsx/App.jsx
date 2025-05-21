import React, { /* useState, */useEffect } from 'react';
import '../styles/styles.less';

// Load helpers.
import chartMap from './modules/ChartMap.js';

// const appID = '#app-root-2025-tariffs';

function App() {
  useEffect(() => {
    // Create map
    chartMap();
  }, []);

  return (
    <div className="app">
      <div className="right-content">
        {
          // Controls
        }
        <div id="controls" className="slider-wrapper">
          <div className="slider-stack">
            <div className="slider-labels">
              <span>
                <strong>Pre</strong>
                {' '}
                <br />
                January 2025
              </span>
              <span>
                <strong>During</strong>
                {' '}
                <br />
                90-day pause
              </span>
              <span>
                <strong>After</strong>
                {' '}
                <br />
                90-day pause
              </span>
            </div>
            <input type="range" id="tariff_structureSlider" min="1" max="3" step="1" />
          </div>
        </div>
        {
          // Map Container
        }
        <div id="map_container" />
      </div>
      <noscript>Your browser does not support JavaScript!</noscript>
    </div>
  );
}

export default App;
