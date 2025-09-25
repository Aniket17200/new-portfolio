import { Github, ExternalLink, Play, Star } from "lucide-react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "PresentPal - AI-Powered Presentation Assistant",
    description:
      "Innovative platform enabling users to create AI avatars from uploaded images. These avatars present PowerPoint content and engage with audience questions, revolutionizing presentation experiences.",
    techStack: ["React.js", "Python", "OpenAI", "Computer Vision", "TTS"],
    github: "https://github.com/Aniket17200/presentpal",
    youtube: "https://www.youtube.com/embed/sfwcfLuo6x0",
    featured: true,
    metrics: { accuracy: "95%", users: "500+", rating: 4.8 }
  },
  {
    title: "DevSecOps + GitOps Pipeline – Wanderlust Mega Project (GCP)",
    description:
      "Built a secure, production-ready CI/CD pipeline using Jenkins, Docker, Argo CD, and SonarQube for automated deployment to GKE. Enabled real-time monitoring and alerting using Prometheus, Grafana, and Gmail integrations on Google Cloud Platform.",
    techStack: ["Jenkins", "Docker", "Argo CD", "SonarQube", "GKE", "Prometheus", "Grafana", "GCP"],
    github: "https://github.com/Aniket17200/Wanderlust-Mega-Project",
    image: "https://gqupbfgbhvlhwmcwnkun.supabase.co/storage/v1/object/public/resume1/DevSecOps+GitOps.gif",
    metrics: { pipeline: "CI/CD", security: "DevSecOps", monitoring: "Real-time" }
  },
  {
    title: "Retail Store App - Cloud-Native DevOps Project",
    description:
      "Complete retail store sample app with microservices architecture built using Golang, Java, and Node.js. Deployed on Amazon EKS with Terraform IaC, ArgoCD GitOps, Helm charts, and comprehensive monitoring with Prometheus + OpenTelemetry.",
    techStack: ["Golang", "Java", "Node.js", "Amazon EKS", "Terraform", "ArgoCD", "Helm", "Prometheus"],
    github: "https://github.com/Aniket17200/retail-store-sample-app",
    image: "https://gqupbfgbhvlhwmcwnkun.supabase.co/storage/v1/object/public/resume1/EKS.gif",
    metrics: { microservices: "Multi-lang", infrastructure: "IaC", deployment: "GitOps" }
  },
  {
    title: "Crime Prediction Using Machine Learning",
    description:
      "Identified crime hotspots using ML models with 88% accuracy. Implemented Random Forest algorithm for predictive analysis.",
    techStack: ["Python", "Random Forest", "Pandas", "Scikit-learn"],
    github: "#",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    metrics: { accuracy: "88%", dataset: "10K+", performance: "Fast" }
  },
];

const YouTubePlayer = ({ src }: { src: string }) => {
  return (
    <div className="relative group h-full">
      <iframe
        className="w-full h-full min-h-[300px] lg:min-h-[400px] rounded-2xl"
        src={`${src}?autoplay=0&mute=1&enablejsapi=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl pointer-events-none" />
    </div>
  );
};

const Projects = () => {
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
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-24" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-4">
          Featured Projects
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-200 max-w-2xl mx-auto px-4 sm:px-0">
          Showcasing innovative solutions that blend creativity with cutting-edge technology
        </p>
      </motion.div>

      {/* Featured Project - PresentPal */}
      {projects
        .filter((p) => p.featured)
        .map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-20 glass-effect glass-effect-dark rounded-3xl overflow-hidden shadow-2xl hover:shadow-glow-purple transition-all duration-500 group"
          >
            <div className="grid lg:grid-cols-2 gap-0 h-full">
              <div className="aspect-video lg:aspect-auto min-h-[300px] lg:min-h-[500px]">
                <YouTubePlayer src={project.youtube || ""} />
              </div>
              <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-sm font-semibold text-blue-600 dark:text-purple-300">
                    FEATURED PROJECT
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-4 group-hover:scale-105 transition-transform duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-200 mb-6 text-base sm:text-lg leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold gradient-text">{value}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-300 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 glass-effect glass-effect-dark rounded-full text-sm font-medium text-blue-600 dark:text-purple-300 hover:shadow-glow transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                    View Code
                  </motion.a>

                  <motion.button
                    className="group/btn inline-flex items-center gap-2 px-6 py-3 glass-effect glass-effect-dark border border-blue-500/30 dark:border-purple-500/40 text-blue-600 dark:text-purple-300 rounded-2xl font-semibold hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Play className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                    Watch Demo
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

      {/* Other Projects Grid */}
      <motion.div
        className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {projects
          .filter((p) => !p.featured)
          .map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group glass-effect glass-effect-dark rounded-3xl overflow-hidden shadow-xl hover:shadow-glow transition-all duration-500 flex flex-col h-full"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`${project.image?.includes('.gif')
                      ? 'w-full h-auto max-h-full object-contain'
                      : 'w-full h-full object-cover'
                    } group-hover:scale-105 transition-transform duration-500`}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-end">
                    <div className="text-white">
                      <div className="text-sm opacity-80 font-medium">Project Type</div>
                      <div className="font-bold text-lg">
                        {Object.values(project.metrics)[0]}
                      </div>
                    </div>
                    {project.image?.includes('.gif') && (
                      <div className="px-2 py-1 bg-blue-600/80 backdrop-blur-sm rounded text-xs font-semibold text-white">
                        DEMO
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Project Header */}
                <div className="flex items-start justify-between gap-2 mb-4">
                  <h3 className="text-lg font-bold gradient-text group-hover:scale-105 transition-transform duration-300 flex-1 leading-tight">
                    {project.title}
                  </h3>
                  {(project.title.includes('DevSecOps') || project.title.includes('DevOps') || project.title.includes('Cloud-Native')) && (
                    <span className="px-2 py-1 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-semibold rounded-full flex-shrink-0">
                      {project.title.includes('DevSecOps') ? 'DevSecOps' : 'DevOps'}
                    </span>
                  )}
                  {project.title.includes('Machine Learning') && (
                    <span className="px-2 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-semibold rounded-full flex-shrink-0">
                      ML/AI
                    </span>
                  )}
                </div>
                
                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-200 mb-4 text-sm leading-relaxed flex-1">
                  {project.description.length > 140 ? 
                    `${project.description.substring(0, 140)}...` : 
                    project.description
                  }
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs glass-effect glass-effect-dark rounded-full text-blue-600 dark:text-purple-300 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-3 py-1 text-xs text-gray-500 dark:text-gray-300 font-medium">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Project Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-xl">
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-sm font-bold gradient-text">{value}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-300 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl text-sm font-semibold hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    View Code
                  </motion.a>
                  
                  <motion.button
                    className="group/btn px-4 py-3 glass-effect glass-effect-dark border border-blue-500/30 dark:border-purple-500/40 text-blue-600 dark:text-purple-300 rounded-xl text-sm font-semibold hover:shadow-glow transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ExternalLink className="w-4 h-4 group-hover/btn:scale-110 transition-transform duration-300" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default Projects;