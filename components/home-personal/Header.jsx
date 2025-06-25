'use client';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Header() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.header',
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power2.out' }
    );
    return () => tl.kill();
  }, []);

  return (
    <div
      className="header"
      style={{
        height: '75vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url("/assets/imgs/header/fondo_nexus.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        zIndex: 1,
      }}
    />
  );
}

export default Header;