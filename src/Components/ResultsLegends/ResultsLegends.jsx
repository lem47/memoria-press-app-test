/* eslint-disable max-len */
import React from 'react';
import './ResultsLegends.scss';

export const ResultsLegends = () => (
  <div className="ResultsLegends__legends">
    <div className="ResultsLegends__legend">
      <p>Score</p>
      <div className="ResultsLegends__legendValue">
        <div
          className="ResultsLegends__legendPoint"
          style={{ backgroundColor: '#4285F4' }}
        />
        <p style={{ color: '#4285F4' }}>90%+ accuracy</p>
      </div>
      <div className="ResultsLegends__legendValue">
        <div
          className="ResultsLegends__legendPoint"
          style={{ backgroundColor: '#0F9D58' }}
        />
        <p style={{ color: '#0F9D58' }}>80 - 89% accuracy</p>
      </div>
      <div className="ResultsLegends__legendValue">
        <div
          className="ResultsLegends__legendPoint"
          style={{ backgroundColor: '#E2B534' }}
        />
        <p style={{ color: '#E2B534' }}>50 - 79% accuracy</p>
      </div>
      <div className="ResultsLegends__legendValue">
        <div
          className="ResultsLegends__legendPoint"
          style={{ backgroundColor: '#DB4437' }}
        />
        <p style={{ color: '#DB4437' }}>Below 50% accuracy</p>
      </div>
    </div>
    <div className="ResultsLegends__legend">
      <p>Speed</p>
      <div className="ResultsLegends__legendValue">
        <div
          className="ResultsLegends__legendPoint"
          style={{ backgroundColor: '#4285F4' }}
        />
        <p style={{ color: '#4285F4' }}>Above expected</p>
      </div>
      <div className="ResultsLegends__legendValue">
        <div
          className="ResultsLegends__legendPoint"
          style={{ backgroundColor: '#0F9D58' }}
        />
        <p style={{ color: '#0F9D58' }}>As expected</p>
      </div>
      <div className="ResultsLegends__legendValue">
        <div
          className="ResultsLegends__legendPoint"
          style={{ backgroundColor: '#DB4437' }}
        />
        <p style={{ color: '#DB4437' }}>Below expected</p>
      </div>
    </div>
  </div>
);
