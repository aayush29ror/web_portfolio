import React, { useRef, useState } from 'react' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faFigma, faWordpress } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
const [listSkills] = useState([
  {
    name: 'HTML',
    des: 'Proficient at creating clear, semantic markup for accessibility and SEO optimisation. Experienced in designing webpages that prioritise performance and mobile-first concepts.',
    icon: faHtml5
  },
  {
    name: 'CSS',
    des: 'Adept at creating responsive layouts with contemporary CSS frameworks, Flexbox, and Grid. Proficiency in using animations, transitions, and unique styling to produce aesthetically pleasing designs.',
    icon: faCss3
  },
  {
    name: 'Javascript',
    des: 'Deep understanding of ES6+ syntax for interactive and dynamic features, including form validation, API integration, and DOM manipulation.',
    icon: faJs},
  {
    name: 'ReactJs',
    des: 'Skilled in using React to design reusable components that provide scalable and maintainable user experiences. Adept at using React hooks for lifecycle control and state management.',
    icon: faReact
  },
  {
    name: 'Figma',
    des: 'Competent in using Figma to create wireframes, prototypes, and design mockups. Proficient in converting customer needs into clear, easy-to-use interfaces.',
    icon: faFigma
  },
  {
    name: 'CMS',
    des: 'Knowledgeable about integrating CRM tools for marketing automation, managing processes, creating templates, integrating plugins, and improving site performance for search engines.',
    icon: faWordpress
  }

]);
  return (
    <section className='skills' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Skills
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        With experience across a wide range of tools and platforms, I’m passionate about turning challenges into innovative designs that stand out and drive results.
       </div>
       <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{ value.name }</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills

