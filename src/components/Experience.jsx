import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Mindful Tech Solutions, Inc.',
    date: 'Aug 2025 — Present',
    bullets: [
      <>Reduced API onboarding time by <strong>60%</strong> for <strong>5+ enterprise development teams</strong> by designing and building a <strong>cloud-native, API-first governance platform</strong> on <strong>AWS</strong> using <strong>Python, Lambda, and API Gateway</strong> across distributed, scalable architectures.</>,
      <>Cut manual provisioning time by <strong>70%</strong> by engineering <strong>event-driven, asynchronous processing workflows</strong> with <strong>Amazon SES, SQS, and DynamoDB</strong> (NoSQL), automating end-to-end access request approvals across the platform.</>,
      <>Secured <strong>3 role tiers</strong> across <strong>2 SSO identity providers</strong> (Entra ID / Ping Identity) with zero authentication vulnerabilities by implementing <strong>multi-tier RBAC</strong> with <strong>AWS Cognito</strong> and <strong>JWT-based token enforcement</strong> applying <strong>security best practices</strong> and data protection measures throughout.</>,
      <>Accelerated feature delivery by <strong>40%</strong> by integrating <strong>Generative AI</strong> and <strong>LLM-based tools</strong> (GitHub Copilot, ChatGPT) into the SDLC, enabling <strong>intelligent automation</strong>, rapid prototyping, and boilerplate generation without compromising code quality.</>,
      <>Enabled reliable API spec storage and retrieval for 5+ Lambda-backed service flows by integrating <strong>AWS S3</strong> for versioned artifact management; monitored and debugged service behavior using <strong>CloudWatch</strong> to maintain production stability.</>
    ],
  },
  {
    role: 'Graduate Teaching Assistant',
    company: 'Kennesaw State University',
    date: 'Aug 2025 — Dec 2025',
    bullets: [
      <>Managed and supported 90+ students across 2–3 course sections, assisting with labs, assignments, and troubleshooting technical challenges.</>,
      <>Facilitated learning sessions and provided one-on-one guidance, helping students strengthen their understanding of core programming and software development concepts.</>,
      <>Collaborated with faculty to grade assignments, track academic performance, and provide feedback to improve student learning outcomes.</>
    ],
  },
  {
    role: 'Graduate Research Assistant',
    company: 'Kennesaw State University',
    date: 'Jan 2025 — Aug 2025',
    bullets: [
      <>Co-authored and presented a peer-reviewed paper on G-XRBT, a gamified VR behavioral training app for dementia care education, at ICICT 2025.</>,
      <>Conducted research and analysis on dementia care training methods, VR-based learning, and non-pharmacological interventions to guide app design and development.</>,
      <>Collaborated with cross-functional teams to design focus group surveys, analyze feedback, and prepare conference materials, including the paper and presentation.</>
    ],
  },
  {
    role: 'Software Developer',
    company: 'Real Variable Digital Asset Services Pvt. Ltd.',
    date: 'Feb 2021 — Dec 2023',
    bullets: [
      <>Delivered <strong>8+ production-grade RESTful microservices</strong> in a service-oriented architecture using <strong>Java 15, Spring Boot, Spring MVC, and Spring Data</strong> by implementing clean repository patterns, DTO mapping, and global exception handling.</>,
      <>Reduced high-traffic endpoint latency across <strong>100K+ daily requests</strong> by designing <strong>SQL data access patterns</strong> using <strong>CQRS</strong>, query optimization, and indexing on <strong>MySQL</strong> data stores.</>,
      <>Shipped <strong>5+ Angular frontend features</strong> adopted by <strong>3+ business stakeholders</strong> using <strong>TypeScript, NgRx, and RxJS</strong>; collaborated with Product Managers and UX designers in agile, 2-week sprint cycles.</>,
      <>Reduced deployment failures by <strong>35%</strong> across microservice environments by contributing to <strong>CI/CD pipelines</strong> via <strong>GitHub Actions</strong> and <strong>Docker</strong> containerization, streamlining build, test, and release workflows.</>,
      <>Achieved <strong>85%+ code coverage</strong> by establishing <strong>Cypress</strong> E2E and <strong>Jest</strong> unit and integration testing standards; participated in <strong>100+ code and design reviews</strong> enforcing architecture, security, and quality benchmarks.</>
    ],
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Experience</p>
          <h2 className="section-title">Where I've Worked</h2>
        </motion.div>

        <div className="experience-timeline">
          {experiences.map((exp, i) => (
            <motion.div
              className="experience-card"
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="experience-header">
                <h3 className="experience-role">{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
                <p className="experience-date">{exp.date}</p>
              </div>
              <ul className="experience-bullets">
                {exp.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
