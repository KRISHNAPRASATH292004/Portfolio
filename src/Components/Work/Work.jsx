import React from 'react'
import './Work.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'
const Work = () => {
  return (
    <div className='work' id='work'>
        <div className="work-title">
            <h1>Projects</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
            {mywork_data.map((work,index)=>{
                return(
                    <a href={work.w_link} target="_blank" rel="noopener noreferrer" key={index}><img key={index} src={work.w_img} alt="" /></a> 
                )
            })}
        </div>
    </div>
  )
}

export default Work
