import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink, Code, Layers } from 'lucide-react';

const workExperience = [
    {
        id: 1,
        position: 'Developer Intern',
        company: 'TWJ IT Solution',
        duration: 'June 2024 - December 2024',
        location: 'Pune',
        image: 'https://gqupbfgbhvlhwmcwnkun.supabase.co/storage/v1/object/public/resume1/twj.jpg',
        description: 'Designed and developed a website to enhance user interaction using modern web technologies. Built and integrated RESTful APIs with Express.js to support dynamic front-end functionality. Developed and customized reusable React.js components for a drag-and-drop website builder, enabling customers to create professional websites effortlessly.',
        achievements: [
            'Enhanced user interaction with modern web technologies',
            'Built RESTful APIs with Express.js for dynamic functionality',
            'Developed reusable React.js components for drag-and-drop builder',
            'Enabled customers to create professional websites effortlessly'
        ],
        technologies: ['React.js', 'Express.js', 'RESTful APIs', 'JavaScript', 'Node.js', 'Web Development'],
        type: 'Internship'
    }
];

const WorkExperience = () => {
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
            },
        },
    };

    return (
        <section id="experience" className="py-24" ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                    Work Experience
                </h2>
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Professional journey and hands-on experience in software development
                </p>
            </motion.div>

            <motion.div
                className="max-w-4xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
            >
                {workExperience.map((experience) => (
                    <motion.div
                        key={experience.id}
                        variants={itemVariants}
                        className="group glass-effect glass-effect-dark rounded-3xl overflow-hidden shadow-xl hover:shadow-glow-purple transition-all duration-500"
                        whileHover={{ scale: 1.02, y: -5 }}
                    >
                        <div className="grid lg:grid-cols-3 gap-0">
                            {/* Company Image */}
                            <div className="lg:col-span-1 relative overflow-hidden">
                                <img
                                    src={experience.image}
                                    alt={experience.company}
                                    className="w-full h-64 lg:h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm rounded-full text-sm font-semibold text-white shadow-lg">
                                        {experience.type}
                                    </span>
                                </div>
                            </div>

                            {/* Experience Details */}
                            <div className="lg:col-span-2 p-8 lg:p-12">
                                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold gradient-text mb-2 group-hover:scale-105 transition-transform duration-300">
                                            {experience.position}
                                        </h3>
                                        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                                            {experience.company}
                                        </h4>
                                    </div>

                                    <motion.button
                                        className="p-2 glass-effect glass-effect-dark rounded-xl hover:shadow-glow transition-all duration-300"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <ExternalLink className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                    </motion.button>
                                </div>

                                {/* Duration and Location */}
                                <div className="flex flex-wrap gap-4 mb-6">
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                        <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                        <span className="text-sm font-medium">{experience.duration}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                                        <MapPin className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                        <span className="text-sm font-medium">{experience.location}</span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    {experience.description}
                                </p>

                                {/* Key Achievements */}
                                <div className="mb-6">
                                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                        <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                        Key Achievements
                                    </h5>
                                    <ul className="space-y-2">
                                        {experience.achievements.map((achievement, index) => (
                                            <motion.li
                                                key={index}
                                                className="flex items-start gap-3 text-gray-600 dark:text-gray-300"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0" />
                                                <span className="text-sm leading-relaxed">{achievement}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Technologies */}
                                <div>
                                    <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                        <Code className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                                        Technologies Used
                                    </h5>
                                    <div className="flex flex-wrap gap-2">
                                        {experience.technologies.map((tech) => (
                                            <motion.span
                                                key={tech}
                                                className="px-3 py-1 glass-effect glass-effect-dark rounded-full text-sm font-medium text-blue-600 dark:text-blue-400 hover:shadow-glow transition-all duration-300"
                                                whileHover={{ scale: 1.05, y: -2 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Hover Effect Border */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default WorkExperience;