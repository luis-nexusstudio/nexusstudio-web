import React from 'react';
import Image from 'next/image';


function About() {
  return (
    <section className="about-author section-padding">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                 <Image
                  src="/assets/imgs/header/p0.jpg"
                  alt="icon programs"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                  priority
                  />
                {/* <Image src="/assets/imgs/header/p0.jpg" alt="Banner" width={1200} height={800} priority/> */}
              </div>
              <span className="icon">
                <Image
                  src="/assets/imgs/resume/icon1.png"
                  alt="icon programs"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                  priority
                  />
                {/* <Image src="/assets/imgs/resume/icon1.png" alt="Banner" width={1200} height={800} priority/> */}
              </span>
              <span className="icon">
                <Image
                  src="/assets/imgs/resume/icon2.png"
                  alt="icon programs"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                  priority
                  />
                {/* <Image src="/assets/imgs/resume/icon2.png" alt="Banner" width={1200} height={800} priority/> */}
              </span>
              <span className="icon">
                <Image
                  src="/assets/imgs/resume/s6.png"
                  alt="icon programs"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                  priority
                  />
                {/* <Image src="/assets/imgs/resume/s6.png" alt="Banner" width={1200} height={800} priority/> */}
              </span>
              <span className="icon">
                <Image
                  src="/assets/imgs/resume/s2.png"
                  alt="icon programs"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-auto"
                  priority
                  />
                {/* <Image src="/assets/imgs/resume/s2.png" alt="Banner" width={1200} height={800} priority/> */}
              </span>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">Acerca de nosotros</h6>
              <div className="text">
                <h4 className="mb-30">
                  <span className="fw-200">
                  En <strong>Nexus Studio</strong> desarrollamos soluciones tecnológicas que transforman la manera en que las empresas operan, se comunican y crecen
                  </span>{' '}
                </h4>
                <p>
                  Nuestro enfoque va más allá de entregar un producto: acompañamos al cliente en todo el proceso,
                  desde la conceptualización hasta la implementación y el crecimiento.
                  Creemos en construir relaciones duraderas basadas en confianza, calidad y resultados.
                </p>

                <div className="numbers mt-50">
                  <div className="row lg-marg">
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">100%</h3>
                          <h6 className="p-color sub-title">
                            Clientes satisfechos
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <Image
                            src="/assets/imgs/arw1.png"
                            alt="arrow img"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                            priority
                            />
                            {/* <Image src="/assets/imgs/arw1.png" alt="Banner" width={1200} height={800} priority/> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">10</h3>
                          <h6 className="p-color sub-title">
                            Proyectos Concluidos
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                             <Image
                            src="/assets/imgs/arw1.png"
                            alt="arrow img"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                            priority
                            />
                            {/* <Image src="/assets/imgs/arw1.png" alt="Banner" width={1200} height={800} priority/> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
