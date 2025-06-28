import React from 'react';

function Challenge({ category, client, startDate, tools, problematics }) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="info mb-80 pb-20 bord-thin-bottom">
          <div className="row">
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Categoria :</span>
                <h6>{category}</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Cliente :</span>
                <h6>{client}</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item mb-30">
                <span className="opacity-8 mb-5">Fecha de Inicio :</span>
                <h6>{startDate}</h6>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="item">
                <span className="opacity-8 mb-5">Herramientas :</span>
                <h6>{Array.isArray(tools) ? tools.join(', ') : tools}</h6>
              </div>
            </div>
          </div>
        </div>

        {problematics && (
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="row">
                <div className="col-lg-5">
                  <h4 className="mb-50">Objetivo</h4>
                </div>
                <div className="col-lg-7">
                  <div className="text">
                    <p className="fz-18 mb-20">{problematics}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Challenge;