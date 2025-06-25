'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

function Clients() {
return (
    <section className="my-skills section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3>
                Estamos orgullosos de colaborar con una<br />
                <span className="opacity-7">amplia variedad de empresas.</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="row md-marg">
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/brands/tym.png" alt="" />
                </div>
              </div>
              <h6 className="fz-18">Trigo y Miel</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/brands/uriel.png" alt="" />
                </div>
              </div>
              <h6 className="fz-18">Colegio Uriel</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/brands/grescoce.png" alt="" />
                </div>
              </div>
              <h6 className="fz-18">Grescoce</h6>
            </div>
          </div>
          {/* <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/s4.png" alt="" />
                </div>
              </div>
              <h6 className="fz-18">WordPress</h6>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-6">
            <div className="item mb-30">
              <div className="box-bord">
                <div className="img">
                  <img src="/assets/imgs/resume/s6.png" alt="" />
                </div>
                <span className="value">85%</span>
              </div>
              <h6 className="fz-18">Graphic Design</h6>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Clients;