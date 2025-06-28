import generateStylesheetObject from '@/common/generateStylesheetsObject';
import Lines from '@/components/common/Lines';
import ProgressScroll from '@/components/common/ProgressScroll';
import LoadingScreen from '@/components/common/loader';
import Footer from '@/components/common/Footer';
import Script from 'next/script';

import Header from '@/components/project-details/Header';
import Challenge from '@/components/project-details/Challenge';
import Works from '@/components/project-details/Works';
import Solution from '@/components/project-details/Solution';
import Wroks2 from '@/components/project-details/Wroks2';
import Next from '@/components/project-details/Next';

import data from '@/data/portfolios/data.json';

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

export async function generateStaticParams() {
  return data.map((proj) => ({ id: proj.id }));
}

export default function ProjectDetails({ params }) {
  const project = data.find((proj) => proj.id === params.id);

  if (!project || !project.image) {
    return <div className="text-center py-32">Proyecto no encontrado</div>;
  }

  const {
    category,
    client,
    dateStart,
    tool,
    problematics,
    informationProject,
    image,
  } = project;

  return (
    <>
      <LoadingScreen />
      <ProgressScroll />
      <Lines />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main className="main-bg o-hidden">
            <Header data={project} />
            <Challenge
              category={category}
              client={client}
              startDate={dateStart}
              tools={tool}
              problematics={problematics}
            />
            <Works items={image.works} />
            <Solution informationProject={informationProject} />
            <Wroks2 data={project} />
            <Next currentId={project.id} data={data} />
          </main>
          <Footer />
        </div>
      </div>

      {/* Scripts externos */}
      <Script src="/assets/js/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/ScrollSmoother.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/plugins.js" strategy="beforeInteractive" />
      <Script src="/assets/js/TweenMax.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/charming.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/countdown.js" strategy="beforeInteractive" />
      <Script src="/assets/js/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/splitting.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/isotope.pkgd.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/imgReveal/imagesloaded.pkgd.min.js" strategy="beforeInteractive" />
      <Script src="/assets/js/scripts.js"></Script>
    </>
  );
}