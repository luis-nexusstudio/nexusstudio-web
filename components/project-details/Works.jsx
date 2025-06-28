import React from 'react';
import Image from 'next/image';


function Works({ items = [] }) {
  return (
    <div className="img-column">
      <div className="container">
        <div className="row">
          {items.map((img, index) => (
            <div key={index} className="col-lg-6">
              <div className="img mb-30">
                <Image
                  src={img}
                  alt="foto trabajos"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                  priority
                />
                {/* <Image src={img} alt="" width={1200} height={800} priority/> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Works;