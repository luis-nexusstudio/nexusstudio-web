'use client';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import data from '@/data/portfolios/data.json';
import React, { useEffect } from 'react';
import Link from 'next/link';


function Next({ currentId }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const currentIndex = data.findIndex((proj) => proj.id === currentId);
  const prevProject = data[currentIndex - 1] || data[data.length - 1];
  const nextProject = data[currentIndex + 1] || data[0];

  return (
    <section className="next-project sub-bg">
      <div className="container-fluid rest">
        <div className="row">
          <div className="col-md-6 rest">
            <div
              className="text-left box bg-img"
              data-background={prevProject.image.header}
            >
              <div className="cont d-flex align-items-center">
                <div>
                  <span className="mr-30 fz-30 ti-arrow-left"></span>
                </div>
                <div>
                  <h6 className="sub-title fz-16 mb-5">Anterior Proyecto</h6>
                  <Link href={`/project-details/${prevProject.id}`} className="fz-40 fw-600 stroke">
                      {nextProject.client}
                  </Link> 
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 rest">
            <div
              className="text-right d-flex box bg-img"
              data-background={nextProject.image.header}
            >
              <div className="ml-auto">
                <div className="cont d-flex align-items-center">
                  <div>
                    <h6 className="sub-title fz-16 mb-5">Siguiente Proyecto</h6>
                    <Link href={`/project-details/${nextProject.id}`} className="fz-40 fw-600 stroke">
                      {nextProject.client}
                    </Link> 
                  </div>
                  <div>
                    <span className="ml-30 fz-30 ti-arrow-right"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <a className="all-works-butn text-center">
          <span className="ti-view-grid fz-24 mb-10"></span>
          <span className="d-block fz-12 text-u ls1">Explora Más</span>
        </a>
      </div>
    </section>
  );
}

export default Next;
