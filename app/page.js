import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import Cursor from '@/components/common/cusor';
import Welcome from '@/components/common/Welcome';
import Footer from '@/components/common/Footer';
import Marq2 from '@/components/common/Marq2';
import Navbar from '@/components/common/Navbar';
import Script from 'next/script';
import Header from '@/components/home-personal/Header';
import Clients from '@/components/common/Clients';

import Blog from '@/components/home-digital-agency/Blog';

import Testimonials from '@/components/home-modern-studio/Testimonials';
import Marq from '@/components/home-personal/Marq';
import About from '@/components/home-personal/About';
import Services from '@/components/home-personal/Services';
import Skills from '@/components/home-personal/Skills';
import Portfolio from '@/components/home-personal/Portfolio';

export const metadata = {
  title: 'Nexus Studio',
  icons: {
    icon: '/assets/imgs/isotipo_nexus.png',
    shortcut: '/assets/imgs/isotipo_nexus.png',
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
    ]),
  },
};

export default function Home() {
  return (
    <div className="home-personal">
      <Welcome />
      {/* <Cursor /> */}
      <ProgressScroll />
      <Lines />
      {/* <Navbar /> */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header />
            {/* <Marq /> */}
            <About />
            <Services />
            <Portfolio />
            {/* <Skills /> */}
           {/* <Testimonials /> */}
            <Clients />
            {/* <Blog /> */}
            {/* <Marq2 /> */}
          </main>
          <Footer />
        </div>
      </div>
      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="/assets/js/ScrollSmoother.min.js"
        strategy="beforeInteractive"
      />

      <Script strategy="beforeInteractive" src="/assets/js/plugins.js"></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/TweenMax.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/charming.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/countdown.js"
      ></Script>

      <Script
        strategy="beforeInteractive"
        src="/assets/js/gsap.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/splitting.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      ></Script>
      <Script
        strategy="beforeInteractive"
        src="/assets/js/imgReveal/imagesloaded.pkgd.min.js"
      ></Script>

      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"
        strategy="beforeInteractive"
      />

      {/* <Script src="/assets/js/smoother-script.js" strategy="lazyOnload" /> */}

      <Script src="/assets/js/scripts.js"></Script>
    </div>
  );
}
