import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Brain, Rocket, Users } from 'lucide-react';

const skills = [
  { name: 'C++', level: 90, category: 'programming' },
  { name: 'Object-Oriented Programming', level: 88, category: 'programming' },
  { name: 'React.js', level: 85, category: 'frontend' },
  { name: 'Express.js', level: 80, category: 'backend' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend' },
  { name: 'Machine Learning', level: 88, category: 'ai' },
  { name: 'Data Structures & Algorithms', level: 90, category: 'programming' },
  { name: 'AWS', level: 75, category: 'devops' },
  { name: 'Docker', level: 70, category: 'devops' },
  { name: 'Terraform', level: 65, category: 'devops' },
  { name: 'GitHub', level: 85, category: 'devops' },
  { name: 'Linux (Ubuntu)', level: 80, category: 'os' },
];

const highlights = [
  {
    icon: Code,
    title: 'Programming Languages',
    description: 'C++, Object-Oriented Programming (OOPs)',
  },
  {
    icon: Brain,
    title: 'Frameworks & Libraries',
    description: 'React.js, Express.js, Tailwind CSS',
  },
  {
    icon: Rocket,
    title: 'DevOps & Cloud Tools',
    description: 'AWS, Docker, Terraform, GitHub',
  },
  {
    icon: Users,
    title: 'Key Areas of Knowledge',
    description: 'Machine Learning, Data Structures and Algorithms',
  },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="about" className="py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          About Me
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Passionate about creating intelligent solutions that bridge the gap between AI and reality
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="glass-effect glass-effect-dark rounded-3xl p-8 shadow-glow">
            <h3 className="text-2xl font-bold gradient-text mb-6">My Journey</h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Aspiring software engineer skilled in C++, Object-Oriented Programming (OOP), 
                React.js, and machine learning. Experienced in developing dynamic React components 
                and leveraging machine learning for innovative solutions.
              </p>
              <p>
                Eager to contribute technical skills and collaborative spirit to deliver 
                cutting-edge software applications. Currently focused on expanding expertise 
                in cloud technologies and DevOps practices while building robust, scalable solutions.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {highlights.map((highlight) => (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                className="glass-effect glass-effect-dark rounded-2xl p-6 hover:shadow-glow transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <highlight.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 text-sm">
                  {highlight.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          <div className="glass-effect glass-effect-dark rounded-3xl p-8 shadow-glow">
            <h3 className="text-2xl font-bold gradient-text mb-8">Technical Skills</h3>

            <div className="space-y-6">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3 }}
                  className="group"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                    </span>
                    <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {[
              { number: '12+', label: 'Technologies' },
              { number: '6+', label: 'Months Experience' },
              { number: '90%', label: 'C++ Proficiency' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="glass-effect glass-effect-dark rounded-2xl p-4 text-center hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl font-bold gradient-text mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;