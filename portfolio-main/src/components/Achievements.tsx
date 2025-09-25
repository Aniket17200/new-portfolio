import { Trophy, Award, Medal, Star, Target, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const achievements = [
  {
    title: 'National IT Quiz',
    organization: 'TCS & Karnataka Govt.',
    description: 'Ranked 3rd in National IT Quiz (500+ participants)',
    icon: Trophy,
    rank: '3rd',
    level: 'National',
    participants: '500+',
    color: 'from-yellow-500 to-orange-500',
    image: 'https://gqupbfgbhvlhwmcwnkun.supabase.co/storage/v1/object/public/resume1/nationalrural_IT_QIZ.jpg'
  },
  {
    title: 'College Hackathon',
    organization: 'College Event',
    description: '2nd Place in College Hackathon (50+ teams)',
    icon: Medal,
    rank: '2nd',
    level: 'College',
    participants: '50+ teams',
    color: 'from-blue-500 to-purple-500',
    image: 'https://gqupbfgbhvlhwmcwnkun.supabase.co/storage/v1/object/public/resume1/collegehackthone.jpeg'
  },
  {
    title: 'Maharashtra Olympiad',
    organization: 'State Level',
    description: 'Maharashtra Olympiad: District Rank 181',
    icon: Award,
    rank: '181',
    level: 'State',
    participants: 'District Level',
    color: 'from-green-500 to-blue-500',
    image: 'https://gqupbfgbhvlhwmcwnkun.supabase.co/storage/v1/object/public/resume1/marashtra_olmpaid.jpg'
  },
  {
    title: 'VCA Cricket Team',
    organization: 'Nagpur Cricket Association',
    description: 'Represented the (VCA) Nagpur Cricket team as an all-rounder, contributing to 10+ matches',
    icon: Star,
    rank: 'All-rounder',
    level: 'Regional',
    participants: '10+ matches',
    color: 'from-purple-500 to-pink-500',
    image: 'https://gqupbfgbhvlhwmcwnkun.supabase.co/storage/v1/object/public/resume1/VCAcricket.jpg'
  },
];

const stats = [
  { label: 'Competitions', value: '4+', icon: Target },
  { label: 'National Rank', value: '3rd', icon: Trophy },
  { label: 'Participants Beat', value: '500+', icon: Users },
];

const Achievements = () => {
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
    <section id="achievements" className="py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
          Achievements & Recognition
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Celebrating milestones and recognition in competitive programming and academic excellence
        </p>
      </motion.div>

      {/* Stats Overview */}
      <motion.div
        className="grid grid-cols-3 gap-6 mb-16 max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            variants={itemVariants}
            className="text-center glass-effect glass-effect-dark rounded-2xl p-6 hover:shadow-glow transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
          >
            <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
            <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Achievements Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {achievements.map((achievement) => (
          <motion.div
            key={achievement.title}
            className="group glass-effect glass-effect-dark rounded-3xl overflow-hidden shadow-xl hover:shadow-glow-purple transition-all duration-500"
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -10 }}
          >
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Achievement Image */}
              <div className="lg:col-span-1 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center p-6">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-auto max-h-64 object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg shadow-lg"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${achievement.color} text-white backdrop-blur-sm rounded-full text-sm font-semibold shadow-lg`}>
                    {achievement.level}
                  </span>
                </div>
              </div>

              {/* Achievement Details */}
              <div className="lg:col-span-2 p-8">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`flex-shrink-0 p-3 bg-gradient-to-br ${achievement.color} rounded-2xl shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <achievement.icon className="w-6 h-6 text-white" />
                    </motion.div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-bold gradient-text mb-2 group-hover:scale-105 transition-transform duration-300">
                        {achievement.title}
                      </h3>

                      <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-3">
                        {achievement.organization}
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                      {achievement.rank}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Position
                    </div>
                  </div>
                </div>

                {/* Participants Info */}
                <div className="flex items-center gap-2 mb-4">
                  <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {achievement.participants}
                  </span>
                </div>

                {/* Description */}
                <div className="relative">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                    {achievement.description}
                  </p>
                </div>

                {/* Achievement Highlight */}
                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl border border-blue-200/50 dark:border-blue-700/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-4 h-4 text-yellow-600 dark:text-yellow-400" />
                    <span className="font-semibold text-gray-900 dark:text-white text-sm">Achievement Highlight</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {achievement.rank === '3rd' && 'Secured top 3 position among 500+ participants nationwide'}
                    {achievement.rank === '2nd' && 'Achieved runner-up position competing against 50+ teams'}
                    {achievement.rank === '181' && 'Qualified at district level in state-wide competition'}
                    {achievement.rank === 'All-rounder' && 'Consistently performed as key player in 10+ competitive matches'}
                  </p>
                </div>
              </div>
            </div>

            {/* Hover Effect Border */}
            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`} />
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.3 }}
        className="text-center mt-16"
      >
      </motion.div>
    </section>
  );
};

export default Achievements;