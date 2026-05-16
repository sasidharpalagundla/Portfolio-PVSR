import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    featured: 'Featured Project',
    name: 'AWS Serverless API Governance Portal',
    description:
      'A self-service platform for teams to register, request access to, and manage APIs with a full approval workflow. Built with a serverless-first architecture on AWS, featuring role-based access, automated email notifications, and a real-time admin dashboard.',
    tech: [
      'AWS Lambda',
      'FastAPI',
      'Cognito',
      'SES',
      'DynamoDB',
      'S3',
      'React',
      'Vite',
    ],
    link: null,
  },
  {
    featured: 'Full-Stack Project',
    name: 'Vendor Order Management System',
    description:
      'Built a full-stack order management system for tracking order statuses. Reduced technical debt by 30% using reusable components and optimized data handling. Designed robust REST APIs and database schemas, and deployed the production environment on AWS EC2 with Nginx.',
    tech: [
      'Angular',
      'Node.js',
      'MySQL',
      'REST APIs',
      'AWS EC2',
      'Nginx',
    ],
    link: null,
  },
  {
    featured: 'Data Analytics Project',
    name: 'TransAnalytics',
    description:
      'Developed a web application to visualize operational metrics from processed datasets. Integrated backend data pipelines with the frontend for real-time insights utilizing charts, graphs, and datatables. Created configurable dashboards with user-driven views to analyze key performance metrics.',
    tech: [
      'Frontend',
      'Data Pipelines',
      'Data Visualization',
    ],
    link: null,
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Projects</p>
          <h2 className="section-title">What I've Built</h2>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <motion.div
              className="brutal-card project-card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="project-featured">{project.featured}</p>
              <h3 className="project-name">
                {project.name}
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 10 }}>
                    <ExternalLink size={18} />
                  </a>
                )}
              </h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map(t => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
