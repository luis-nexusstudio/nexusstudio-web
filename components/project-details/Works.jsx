import React from 'react';

function Works({ items = [] }) {
  return (
    <div className="img-column">
      <div className="container">
        <div className="row">
          {items.map((img, index) => (
            <div key={index} className="col-lg-6">
              <div className="img mb-30">
                <img src={img} alt={`work-${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;