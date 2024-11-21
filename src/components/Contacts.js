import React, { useState, useRef } from 'react' 
import CustomHook from './CustomHook';

function Contacts() {
const [listContacts] = useState([
  {
    title: 'Phone Number',
    value: '+918569953200',
    link: 'tel:+918569953200'
  },{
    title: 'Email',
    value: 'aayush29ror@gmail.com',
    link: 'mailto:aayush29ror@gmail.com'
  },{
    title: 'LinkedIn',
    value: 'Aayush Choudhary',
    link: 'https://www.linkedin.com/in/aayush-choudhary/'
  }
])
const divs = useRef([]);
const scrollTab = useRef();
CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>
       <div className="title" ref={(el) => el && divs.current.push(el)}>
        Contact Me
       </div>
       <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        Have a project in mind or want to connect? Feel free to reach out—let’s create something amazing together!
       </div>
       <div className="list"  ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <h3>{value.title}</h3>
              <a href={value.link}><div>{value.value}</div></a>
            </div>
          ))
        }
       </div>
    </section>
  )
}
export default Contacts
