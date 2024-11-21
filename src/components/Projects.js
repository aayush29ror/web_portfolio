import React, { useState, useRef } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas, faLink } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
const [listProjects] = useState([
  {
    name: 'Website Redesign',
    des: 'Visitors were leaving without exploring key features due to unclear navigation and a lack of visual hierarchy. Users had difficulty accessing features on mobile devices because of inconsistent design elements and a lack of responsive layouts',
    mission: 'Redesign for Clarity and Usability, Improved Performance and SEO, and Responsive Design Implementation',
    language: 'HTML5, CSS3, JS, HubSpot',
    images: '/trustnota-1.png',
    link: 'https://trustnota.com',
    CompanyName: 'Trust Nota'
  },
  {
    name: 'UX/UI Design',
    des: 'Templates often fail to perform well on mobile devices, leading to poor user experience and reduced conversions, unoptimized images increase load times, impacting user retention and SEO.',
    mission: 'Minify CSS/JS, Compress images, Optimized forms and Develop responsive designs ',
    language: 'HTML5, CSS3, JS, Figma, Marketo',
    images: '/nitrogenwealth-lp-1.png',
    link: 'https://nitrogenwealth.com/lp/nitrogen-enterprise/',
    CompanyName: 'Nitrogen Wealth'
  },
  {
    name: 'Web Development',
    des: 'The existing site lacked a dedicated section to host and organize webinar-related content. There was no structured way to schedule upcoming webinars or showcase recordings of past events',
    mission: 'Webinar Hub, Brand Representation, Design, Develop and Deploy',
    language: 'HTML5, CSS3, Figma, Squarespace, JS',
    images: '/movement51-org-1.png',
    link: 'https://www.movement51.org/',
    CompanyName: 'Movement51'
  },
  {
    name: 'Landing page template development',
    des: 'Weak CTAs result in low engagement and conversion rates, Templates should integrate seamlessly with HubSpot workflows',
    mission: 'Use A/B-tested layouts, Workflow Automation and Design',
    language: 'HTML5, CSS3, JS, HubSpot',
    images: '/appcast-io-1.png',
    link: 'https://info.appcast.io/-temporary-slug-c27c477a-ef27-4335-b6d4-c800e2f970a4?hs_preview=NWKTXgQw-108246399816',
    CompanyName: 'Appcast io'
  },
  {
    name: 'Email & Landing Page Template Build',
    des: 'Maintaining consistent branding across email and landing pages is often a challenge. Non-technical teams may struggle to edit or update templates, Pervious templates didn`t support dynamic content and fail to deliver personalized user experiences',
    mission: 'Drag-and-Drop modules, Build dynamic tokens and Brand compliance styles, Form Logic',
    language: 'HTML5, CSS3, JS, Marketo',
    images: '/modernhealth_1.png',
    link: 'https://join.modernhealth.com/monthly-workplace-wellness-table-talks.html',
    CompanyName: 'Modern Health'
  },

]);
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Projects
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        I combine creativity and technical expertise to deliver responsive websites, engaging interfaces, and high-performing solutions that balance functionality and aesthetics.
       </div>
       <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
              <a href={value.link} target="_blank" rel="noreferrer"><img src={value.images} alt="" /></a>
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                    <div>
                        <h4>Mission</h4>
                        <div className="des">{value.mission}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                    <div>
                        <h4>Languages</h4>
                        <div className="des">{value.language}</div>
                    </div>
                </div>
                <div className="mission">
                    <div><FontAwesomeIcon icon={faLink} /></div>
                    <div>
                        <div className="des"><a href={value.link} target="_blank" rel="noreferrer">{value.CompanyName}</a></div>
                    </div>
                </div>
              </div>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Projects
