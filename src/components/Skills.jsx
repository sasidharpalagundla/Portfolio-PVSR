import { motion } from 'framer-motion';
import {
  Code2, Layout, Server, Cloud, Database, Container, BrainCircuit
} from 'lucide-react';

const skillData = [
  {
    title: 'Languages',
    icon: <Code2 size={18} />,
    skills: ['Java (8+)', 'TypeScript', 'JavaScript', 'Python', 'SQL'],
  },
  {
    title: 'Backend',
    icon: <Server size={18} />,
    skills: ['Spring Boot', 'Spring MVC', 'Spring Data', 'Spring Cloud', 'REST APIs', 'GraphQL', 'Node.js', 'FastAPI'],
  },
  {
    title: 'Frontend',
    icon: <Layout size={18} />,
    skills: ['Angular', 'NgRx', 'RxJS', 'Material UI', 'React 18', 'TypeScript', 'SCSS'],
  },
  {
    title: 'AWS',
    icon: <Cloud size={18} />,
    skills: ['Lambda', 'EC2', 'S3', 'RDS', 'Cognito', 'SES', 'ECS', 'SQS/SNS', 'DynamoDB', 'API Gateway', 'CloudFront', 'IAM'],
  },
  {
    title: 'Databases',
    icon: <Database size={18} />,
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Aurora', 'DynamoDB'],
  },
  {
    title: 'DevOps & Tools',
    icon: <Container size={18} />,
    skills: ['Docker', 'Kubernetes (EKS)', 'GitHub Actions', 'Kafka', 'Terraform', 'NGINX', 'Auth0', 'Airflow'],
  },
  {
    title: 'Testing & AI',
    icon: <BrainCircuit size={18} />,
    skills: ['Jest', 'Cypress', 'Unit & Integration Testing', 'GitHub Copilot', 'ChatGPT', 'LLM Integration', 'Generative AI'],
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technical Expertise</h2>
        </motion.div>

        <div className="skills-grid">
          {skillData.map((category, i) => (
            <motion.div
              className="brutal-card skill-category"
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="skill-category-title">
                {category.icon}
                {category.title}
              </div>
              <div className="skill-tags">
                {category.skills.map(skill => (
                  <span className="tag" key={skill}>{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
