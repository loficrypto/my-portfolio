import { motion } from 'framer-motion';

const About = () => (
  <section id="about" className="p-8 bg-white">
    <motion.h2 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-2xl font-bold">
      About Me
    </motion.h2>
    <motion.p 
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="mt-4 text-gray-600">
      I am a passionate developer with experience in building responsive and dynamic web applications.
    </motion.p>
  </section>
);

export default About;
