import { AnimatePresence } from 'framer-motion';
import { Routes, useLocation } from 'react-router-dom'

const Transition = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>

        </Routes>
    </AnimatePresence>
  )
}

export default Transition