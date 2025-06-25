'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';


function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  //No dropdown menus in the simplified navigation
  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-100" href="#">
          <Image src="/assets/imgs/isotipo_nexus.png" alt="logo" width={1200} height={800} priority/>    
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
