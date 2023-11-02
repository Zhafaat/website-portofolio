// react-router-dom
import { useLocation, useOutlet } from 'react-router-dom'

// components
import TopLeftImg from '../components/TopLeftImg'
import Nav from '../components/Nav'
import Header from '../components/Header'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

// frame motion

function AnimatedOutlet() {
  let [context] = useState(useOutlet());
  return context;
}

const Main = () => {
  const location = useLocation()
  return (
    <AnimatePresence mode='wait'>
      <div 
        key={location.pathname}
        className=' page bg-site text-white bg-cover bg-no-repeat bg-center font-sora relative'>
          <TopLeftImg />
          <Nav />
          <Header />
          <AnimatedOutlet />
      </div>
    </AnimatePresence>
  )
}

export default Main