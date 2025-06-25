import React from 'react';
import Image from 'next/image';


function Marq() {
  const items = [
    'Diseño Web',
    'Branding',
    'Desarrollo de Software',
    'Marketing Digital',
    'Desarrollo Web',
    'Diseño UI/UX',
    'Desarrollo de Apps'
  ];
  return (
    <section className="marq">
      <div className="main-marq lrg sub-bg pt-20 pb-20 shadow-off">
        <div className="slide-har st1">
          <div className="box">
            {items.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-70 ml-50">
                    <Image src="/assets/imgs/isotipo_nexus.png" alt="" width={1200} height={800} priority/>
                  </span>
                </h4>
              </div>
            ))}
          </div>
          <div className="box">
            {items.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-70 ml-50">
                    <Image src="/assets/imgs/isotipo_nexus.png" alt="" width={1200} height={800} priority/>
                  </span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marq;
