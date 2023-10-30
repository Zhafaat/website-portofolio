import { AnimatePresence, motion } from 'framer-motion';
import { Routes, useLocation } from 'react-router-dom'

const Transition = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
        <motion.div key={location.pathname}>
        </motion.div>
    </AnimatePresence>
  )
}

export default Transition