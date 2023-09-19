import React from 'react'
import './about.scss'
import AboutData from './AboutData'
import Ocean from '../../assets/island.jpg'
import { motion } from "framer-motion"

function About() {
    const transition = {duration: 3, type: "spring"};
  return (
    <div>
        <div className="abt-container py-5">
            <div className="row">
                <motion.div
                 initial={{top: "100rem"}}
                 whileInView={{top : "0rem"}}
                 transition= {transition}
                 className="col-lg-6 d-flex flex-column">
                    {AboutData.map((a)=>(
                        <div key={a.id} className='d-flex gap-3 align-items-center my-4'> 
                        <div className="icon border border-1 p-4 text-light bg-success rounded-circle">
                     {a.icon}
                  </div>
                  <div className="about-text">
                    <h4>{a.title}</h4>
                    <p>{a.desc}</p>
                  </div>
                  </div>
                    ))}
                </motion.div>
                <div className="col-lg-6 ab-right">
                    <img src={Ocean} className='w-100' height={500} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About