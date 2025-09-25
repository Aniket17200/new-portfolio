import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FinalProject = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="final-project" className="py-20" ref={ref}>
      <motion.h2
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        Final Year Project
      </motion.h2>
      <motion.div
        className="w-full aspect-video rounded-xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <iframe
          src="https://drive.google.com/file/d/1dnBo0xkhkI7JjISIpdvU-UPKMmGJm5BP/view"
          allow="autoplay"
          className="w-full h-full"
        ></iframe>
      </motion.div>
    </section>
  );
};

export default FinalProject;