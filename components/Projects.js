import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/loficrypto/repos')
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
      <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {repos.map(repo => (
          <motion.div 
            key={repo.id}
            className="border p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <h3 className="text-xl font-semibold text-purple-700">{repo.name}</h3>
            <p className="mt-2 text-gray-600">{repo.description}</p>
            <a href={repo.html_url} className="mt-4 inline-block text-blue-600 hover:underline">View Repository</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
