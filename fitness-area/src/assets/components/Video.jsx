import React from 'react';
import pubVideo from '../videos/pub.mp4'; 
import '../style/Video.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function VideoPlayer() {
  const { ref, inView } = useInView({
    triggerOnce: false, // L'animation se déclenche seulement une fois
    threshold: 0.2,    // Se déclenche quand 20% de la div est visible
  });

  return (
    <motion.div
      ref={ref}
      className="video"
      initial={{ opacity: 0, y: 50, scale:0.9}} // État initial
      animate={inView ? { opacity: 1, y: 0,scale:1 } : { opacity: 0, y: 50, scale:0.9}} 
      transition={{ duration: 0.8, ease: 'easeOut' }} 
    >
      <video controls>
        <source src={pubVideo} type="video/mp4" />
        Votre navigateur ne supporte pas la balise vidéo.
      </video>
      <span>Sport</span>
    </motion.div>
  );
}

export default VideoPlayer;
