import { motion } from 'framer-motion';

export default function About() {
  const highlights = [
    { number: '3+', label: 'Years Experience' },
    { number: '10+', label: 'Projects Delivered' },
    { number: '80K+', label: 'Daily Requests Handled' },
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">About</p>
          <h2 className="section-title">Who I Am</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              I'm a <strong>Full-Stack Software Engineer</strong> with 3+ years of hands-on experience <strong>architecting and delivering end-to-end web applications</strong> using <strong>Angular</strong>, <strong>React</strong>, <strong>Java Spring Boot</strong>, and <strong>AWS</strong>.
            </p>
            <p>
              My expertise bridges the gap between intuitive user experiences and robust backend systems. I specialize in building <strong>responsive UIs</strong> and <strong>scalable microservices</strong>, seamlessly integrating <strong>RESTful APIs</strong> and <strong>SQL/NoSQL</strong> databases while leveraging <strong>Docker</strong> and <strong>CI/CD</strong> pipelines for reliable deployments.
            </p>
            <p>
              I am a collaborative engineer with a quality-first mindset, passionate about integrating <strong>Generative AI</strong> into development workflows and working within agile, cross-functional teams to drive impactful, production-ready solutions.
            </p>
          </motion.div>

          <motion.div
            className="about-highlights"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {highlights.map((h, i) => (
              <div className="brutal-card highlight-card" key={i}>
                <span className="number">{h.number}</span>
                <span className="label">{h.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
