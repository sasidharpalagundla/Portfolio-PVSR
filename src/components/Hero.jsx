import { motion } from 'framer-motion';
import { ArrowDown, FileText } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <ParticleBackground />
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            className="hero-greeting"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            SYS.INIT() // WELCOME
          </motion.p>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Venkata Sasidhar <br />Reddy <span className="accent">Palagundla.</span>
          </motion.h1>

          <motion.p
            className="hero-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Software Engineer &nbsp;|&nbsp; Java | Spring Boot | Angular | AWS
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Building and operating production systems with strong backend fundamentals in RESTful APIs, microservices, and cloud-native architectures.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <a href="#contact" className="btn btn-primary" id="hero-cta-contact">
              <FileText size={16} />
              Get in Touch
            </a>
            <a href="#experience" className="btn btn-outline" id="hero-cta-work">
              <ArrowDown size={16} />
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-ticker">
        <div className="hero-ticker-inner">
          <span>JAVA <strong>//</strong> SPRING BOOT <strong>//</strong> ANGULAR <strong>//</strong> AWS <strong>//</strong> MICROSERVICES <strong>//</strong> DOCKER <strong>//</strong> CI/CD <strong>//</strong> GENERATIVE AI <strong>//</strong></span>
          <span>JAVA <strong>//</strong> SPRING BOOT <strong>//</strong> ANGULAR <strong>//</strong> AWS <strong>//</strong> MICROSERVICES <strong>//</strong> DOCKER <strong>//</strong> CI/CD <strong>//</strong> GENERATIVE AI <strong>//</strong></span>
        </div>
      </div>
    </section>
  );
}
