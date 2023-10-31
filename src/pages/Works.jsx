import React from 'react'

// components
import Circles from '../components/Circles'
import WorkSlider from '../components/WorkSlider'

const Works = () => {
  return (
    <div>
        <Circles />
        <div>
            <div>
                {/* text */}
                <div>
                    <h2>
                        My Work <span>.</span>
                    </h2>
                    <p>
                    My portfolio illustrates my commitment to staying up-to-date with the latest web development technologies and best practices, resulting in modern and efficient websites.
                    </p>
                </div>
                {/* slider */}
                <div>
                    <WorkSlider />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works