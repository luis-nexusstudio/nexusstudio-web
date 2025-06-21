'use client';
import React, { useEffect } from 'react';

function Portfolio() {
  function Playing() {
    gsap.registerPlugin(ScrollTrigger);

    const cards = document.querySelectorAll('.cards .card-item');
    let stickDistance = 0;

    const firstCardST = ScrollTrigger.create({
      trigger: cards[0],
      start: 'center center',
    });

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: 'bottom bottom',
    });

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025;
      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: '50% ' + (lastCardST.start + stickDistance),
      });

      ScrollTrigger.create({
        trigger: card,
        start: 'center center',
        end: () => lastCardST.start + stickDistance,
        pin: true,
        pinSpacing: false,
        ease: 'none',
        animation: scaleDown,
        toggleActions: 'restart none none reverse',
      });
    });
  }
  useEffect(() => {
    Playing();

    // Clean up function
    return () => {
      // Dispose GSAP ScrollTrigger instances
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, []);
  return (
    <section className="work-card section-padding pb-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Portafolio</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Nuestros <span className="fw-200">proyectos.</span>
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="cards">
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <span className="tag">SwiftUI</span>
                      <span className="tag">XCode</span>
                      <span className="tag">Node.js + Express</span>
                      <span className="tag">Firebase</span>
                    </div>
                    <h4>Ya Despega App</h4>
                  </div>
                  <div>
                    <p>
                      Plataforma digital completa para la venta y gestión de boletos de eventos que integra pagos seguros con Mercado Pago y un sistema robusto de gestión de usuarios mediante Firebase.
                    </p>                   
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/nexus_1.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <span className="tag">Automatizaciones</span>
                      <span className="tag">Make</span>
                      <span className="tag">Integraciones</span>
                    </div>
                    <h4>Flujo automatizado de prospectos para ADT</h4>
                  </div>
                  <div>
                    <p>
                      Automatización completa que conecta el formulario de una landing page con el sistema de llamadas predictivo. Cada lead se transfiere automáticamente en tiempo real, eliminando tareas manuales y acelerando el contacto comercial.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/2/nexus_2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <span className="tag">Automatizaciones</span>
                      <span className="tag">Web</span>
                      <span className="tag">Integraciones</span>
                    </div>
                    <h4>Encuestas Caja Popular</h4>
                  </div>
                  <div>
                    <p>
                      Sistema completo de encuestas telefónicas que se conecta con el marcador predictivo. Según los objetivos del cliente (por ciudad o estado), la automatización detiene las llamadas automáticamente al alcanzar el número de respuestas positivas establecido.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/3/nexus_3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          {/* <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Design
                      </a>
                    </div>
                    <h4>Cutter mobile app</h4>
                  </div>
                  <div>
                    <p>
                      We’re a full stack firm that can help you from strategy to
                      launch, and anywhere in between.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-item sub-bg">
            <div className="row">
              <div className="col-lg-5">
                <div className="cont">
                  <div>
                    <div className="mb-15">
                      <a href="/portfolio-grid" className="tag">
                        Figma
                      </a>
                      <a href="/portfolio-grid" className="tag">
                        Web Design
                      </a>
                    </div>
                    <h4>Cutter mobile app</h4>
                  </div>
                  <div>
                    <p>
                      We’re a full stack firm that can help you from strategy to
                      launch, and anywhere in between.
                    </p>
                    <a href="/project-details" className="underline mt-15">
                      <span className="text main-color sub-title">
                        View Details <i className="ti-arrow-top-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="img">
                  <img src="/assets/imgs/works/1/5.jpg" alt="" />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="sec-bottom mt-100">
        <div className="main-bg d-flex align-items-center">
          <h6 className="fz-14 fw-400">
            <span className="fw-600">Clientes que han confiado en nosotros</span>
          </h6>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
