import { FileText, ExternalLink, BookOpen, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Research = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="research" className="py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Research Work
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Contributing to the advancement of AI and machine learning through academic research
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass-effect glass-effect-dark rounded-3xl overflow-hidden shadow-2xl hover:shadow-glow-purple transition-all duration-500 group">
          <div className="relative p-8 lg:p-12">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-2xl" />
            </div>

            {/* Header */}
            <div className="flex items-start gap-6 mb-8">
              <motion.div
                className="flex-shrink-0 p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <BookOpen className="w-8 h-8 text-white" />
              </motion.div>
              
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-semibold">
                    IEEE Xplore
                  </span>
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-semibold">
                    Published
                  </span>
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold gradient-text mb-4 group-hover:scale-105 transition-transform duration-300">
                  ChatGPT: Unraveling User Challenges & Proposing Targeted Improvements
                </h3>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 mb-8">
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                Published in IEEE Xplore, this comprehensive research paper explores the challenges
                faced by users when interacting with ChatGPT and proposes targeted
                improvements to enhance user experience and system reliability.
              </p>

              {/* Research Highlights */}
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  className="text-center p-4 glass-effect glass-effect-dark rounded-2xl"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">User Surveys</div>
                </motion.div>
                
                <motion.div
                  className="text-center p-4 glass-effect glass-effect-dark rounded-2xl"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <FileText className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">15</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Key Findings</div>
                </motion.div>
                
                <motion.div
                  className="text-center p-4 glass-effect glass-effect-dark rounded-2xl"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ExternalLink className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold gradient-text">IEEE</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Publication</div>
                </motion.div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 flex-wrap">
              <motion.a
                href="https://ieeexplore.ieee.org/document/10673027/authors#authors"
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                Read Full Paper
                <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </motion.a>
              
              <motion.button
                className="group/btn inline-flex items-center gap-3 px-6 py-3 glass-effect glass-effect-dark border border-blue-500/30 text-blue-600 dark:text-blue-400 rounded-2xl font-semibold hover:shadow-glow transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <BookOpen className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                View Abstract
              </motion.button>
            </div>

            {/* Research Impact */}
            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-semibold gradient-text mb-2">Research Impact</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                This research contributes to the understanding of human-AI interaction patterns and provides
                actionable insights for improving conversational AI systems. The findings have implications
                for future AI development and user experience design.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Research;