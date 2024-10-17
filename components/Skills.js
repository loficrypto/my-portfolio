import { motion } from 'framer-motion';

const Skills = () => {
  const skills = ["JavaScript", "React", "Next.js", "Tailwind CSS", "Dart", "Flutter", "Python", "Node.js"];
  
  return (
    <section id="skills" className="p-8 bg-gray-100">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl font-bold">
        Skills
      </motion.h2>
      <motion.ul 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-4 space-y-2 list-disc list-inside text-gray-600">
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </motion.ul>
    </section>
  );
};

export default Skills;
