import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);
return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>AAYUSH</span>
            </div>
            <div className="des">
            During my 3 years at a marketing agency, I worked on numerous projects, building a strong foundation in design and development. Skilled in javascript & php programming and use of Adobe Creative Suite, and Figma.
            </div>
            
            <a href="/AayushResume.pdf" target="_blank" rel="noopener noreferrer" className='animation active'>
                Download My CV
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/Pic.jpg" alt="" />
                <div className="info">
                    <div>Designer</div>
                    <div>Developer</div>
                    <div>Marketer</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
