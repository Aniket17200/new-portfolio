import { Mail, Github, Linkedin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    subtitle: 'Drop me a line',
    value: 'aniketgaikwad72002@gmail.com',
    href: 'mailto:aniketgaikwad72002@gmail.com',
    color: 'from-red-500 to-pink-500',
    description: 'Best for detailed discussions and project inquiries'
  },
  {
    icon: Github,
    title: 'GitHub',
    subtitle: 'Check out my code',
    value: '@Aniket17200',
    href: 'https://github.com/Aniket17200',
    color: 'from-gray-700 to-gray-900',
    description: 'Explore my repositories and contributions'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    subtitle: 'Let\'s connect professionally',
    value: 'Aniket Gaikwad',
    href: 'https://www.linkedin.com/in/aniket-gaikwad-804096234',
    color: 'from-blue-600 to-blue-800',
    description: 'Professional networking and career opportunities'
  },
];


const Contact = () => {
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="contact" className="py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Ready to collaborate on exciting projects or discuss innovative ideas? I'd love to hear from you!
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {/* Contact Methods */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div
            variants={itemVariants}
            className="glass-effect glass-effect-dark rounded-3xl p-8 shadow-glow"
          >
            <h3 className="text-2xl font-bold gradient-text mb-6 text-center">Get in Touch</h3>
            <div className="grid md:grid-cols-1 gap-4 max-w-2xl mx-auto">
              {contactMethods.map((method) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group block p-6 glass-effect glass-effect-dark rounded-2xl hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`flex-shrink-0 p-3 bg-gradient-to-br ${method.color} rounded-xl shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <method.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {method.title}
                        </h4>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {method.subtitle}
                        </span>
                      </div>

                      <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 truncate">
                        {method.value}
                      </p>

                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {method.description}
                      </p>
                    </div>

                    <motion.div
                      className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <Send className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Quick Actions & CTA */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >


        </motion.div>
      </div>
    </section>
  );
};

export default Contact;