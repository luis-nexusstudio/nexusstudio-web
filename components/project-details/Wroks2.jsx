import React from 'react';
import Image from 'next/image';

function Wroks2({ data }) {
  return (
    <div className="section-padding pt-0">
      <div className="container">
        <div className="img">
          <Image
          src={data?.image?.header}
          alt="Full project"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          priority
          />
          {/* <Image src={data?.image?.header} alt="" width={1200} height={800} priority/> */}
        </div>
      </div>
    </div>
  );
}

export default Wroks2;