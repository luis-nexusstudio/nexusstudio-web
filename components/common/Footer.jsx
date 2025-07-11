import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <Image
              src="/assets/imgs/isotipo_nexus.png"
              alt="isotipo footer"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              priority
              />
              {/* <Image src="/assets/imgs/isotipo_nexus.png" alt="Banner" width={1200} height={800} priority/> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Contacto</h6>
              <h6 className="mt-30 mb-15">
                <a>info@nexusstudio.com.mx</a>
              </h6>
              <a className="underline">
                <span className="fz-22 main-color">+52 477 (294) 82 85</span>
              </a>
            </div>
          </div>
          {/* <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Useful Links</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="/page-about">About</a>
                </li>
                <li className="mb-15">
                  <a href="/page-services">Services</a>
                </li>
                <li className="mb-15">
                  <a href="/blog-grid-sidebar">Blog</a>
                </li>
                <li>
                  <a href="/page-contact">Contact</a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Redes Sociales</h6>
              {/* <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Your Email" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div> */}
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a className="hover-anim">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a className="hover-anim">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a className="hover-anim">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a className="hover-anim">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">
              ©️ 2025 Nexus Studio{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <Image
        src="/assets/imgs/patterns/pattern_4.png"
        alt="pattern footer"
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto"
        priority
              />
        {/* <Image src="/assets/imgs/patterns/pattern_4.png" alt="Banner" width={1200} height={800} priority/> */}
      </div>
    </footer>
  );
}

export default Footer;