import TitleHeader from '../components/TitleHeader';
import { techStackIcons } from '../constants';
import TechIcon from '../components/Models/TechLogo/TechIcon';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo('.tech-card', { y: 50, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.tech-card',
        start: 'top 80%',
      }
    });
  }, []);

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10">
        <TitleHeader
          title="My Preferred Tech Stack"
          sub="🎯 The Skill I Bring to the Table"
        />
        <div className="tech-grid">
          {techStackIcons.map((icon) => (
            <div
              key={icon.name}
              className="tech-card-style tech-card group overflow-hidden xl:rounded-full rounded-lg"
            >
              <div className="tech-card-content flex flex-col items-center gap-2">
                <div className="tech-icon-wrapper">
                  <TechIcon model={icon} />
                </div>
                <div className="heading w-full">{icon.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
