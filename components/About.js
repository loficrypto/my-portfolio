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
      Hello! I'm a passionate developer with a knack for creating dynamic and responsive web applications. With a solid background in JavaScript and frameworks like React and Next.js, I enjoy crafting beautiful and functional user experiences. My journey into coding began with a fascination for problem-solving and a desire to build things from scratch, which led me to constantly explore new technologies and improve my skills.
    </motion.p>
    <motion.p 
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
      className="mt-4 text-gray-600">
      Over the years, I've worked on various projects, ranging from simple landing pages to complex web applications. My goal is to continue growing as a developer, contributing to exciting projects, and collaborating with talented individuals. When I'm not coding, you can find me exploring the outdoors, reading about the latest tech trends, or experimenting with new recipes in the kitchen.
    </motion.p>
  </section>
);

export default About;
