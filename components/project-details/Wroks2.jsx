import React from 'react';

function Wroks2({ data }) {
  return (
    <div className="section-padding pt-0">
      <div className="container">
        <div className="img">
          <img src={data?.image?.header} alt="Header del proyecto" />
        </div>
      </div>
    </div>
  );
}

export default Wroks2;