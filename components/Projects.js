import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/YOUR_USERNAME/repos')
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <section id="projects" className="p-8 bg-white">
      <motion.h2 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl font-bold">
        Projects
      </motion.h2>
      <ul className="mt-4 space-y-4">
        {repos.map(repo => (
          <motion.li 
            key={repo.id} 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="border p-4 rounded">
            <a href={repo.html_url} className="text-blue-600">{repo.name}</a>
            <p>{repo.description}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
