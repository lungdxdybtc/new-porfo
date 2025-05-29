import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
  const sectionRef = useRef(null);
  const project1Ref = useRef(null);
  const project2Ref = useRef(null);
  const project3Ref = useRef(null);
  const projects = useRef([]);

  useEffect(() => {
    projects.current = [project1Ref.current, project2Ref.current, project3Ref.current];
    if (projects.current.every(project => project !== null)) {
      projects.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: (index + 1) * 0.3,
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
            },
          }
        );
      });
    }
  }, []);

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <TitleHeader title="My Portfolio & Case Studies" sub="♨️The Journey Behind My Code & Design" />
        <div className="showcaselayout mt-10 relative">
          {/* LEFT */}
          <div className="first-project-wrapper group" ref={project1Ref}>
            <div className="image-wrapper">
              <img src="/public/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>
                Built a scalable full-stack LMS using Next.js, Node.js, and AWS services.
              </h2>
              <ul className="text-white/70 text-sm list-disc list-inside space-y-1">
                <li><strong>Frontend:</strong> Next.js, Redux Toolkit, Tailwind CSS, Shadcn, TypeScript, Framer Motion, React Hook Form, Zod, Stripe.</li>
                <li><strong>Backend:</strong> Node.js, Express.js, Docker, AWS Lambda, API Gateway, DynamoDB, S3, CloudFront.</li>
                <li><strong>Authentication:</strong> Clerk.</li>
                <li><strong>Hosting:</strong> Vercel.</li>
                <a
                  href="https://luwng-learning-ug9q-emlh7m7cr-lurwngs-projects.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  Click to view current project
                </a>
              </ul>

            </div>
          </div>

          {/* RIGHT */}
          <div className="project-list-wrapper overflow-visible group">
            <div className="project" ref={project2Ref}>
              <div className="image-wrapper bg-[#ffe7db]">
                <img
                  src="/public/images/project2.png"
                  alt="Library Management Platform"
                />
              </div>
              <h2>
                Next-Gen SaaS App (Coming Soon)
              </h2>
              <ul className="text-white/70 text-xs list-disc list-inside space-y-1">
                <li><strong>Frontend:</strong> Next.js, Tailwind CSS, TypeScript, Shadcn UI, Framer Motion, React Hook Form, Zod.</li>
                <li><strong>State Management:</strong> Redux Toolkit.</li>
                <li><strong>Backend & Realtime:</strong> Supabase (PostgreSQL, Auth, Realtime).</li>
                <li><strong>Authentication:</strong> Supabase Auth (Magic Link, OAuth, Email/Password).</li>
                <li><strong>Payments & Subscriptions:</strong> Stripe (Checkout, Webhooks, Customer Portal).</li>
                <li><strong>Voice & AI Agent:</strong> Vapi (AI vocal agent for interactive teaching).</li>
                <li><strong>Deployment & Hosting:</strong> Vercel (CI/CD, serverless functions).</li>
              </ul>

            </div>

            <div className="project" ref={project3Ref}>
              <div className="image-wrapper bg-[#ffe7db]">
                <img src="/public/images/project3.png" alt="YC Directory" />
              </div>
              <h2>
                Your Next Productivity Tool
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;