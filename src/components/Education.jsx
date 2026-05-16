import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    degree: 'Master of Science in Computer Science',
    school: 'Kennesaw State University',
    location: 'Georgia, USA',
    // date: '2024 — 2025',
    gpa: '3.83 / 4.0',
  },
  {
    degree: 'Bachelor of Technology (B.Tech)',
    school: 'Vellore Institute of Technology (VIT)',
    location: 'Andhra Pradesh, India',
    // date: '2018 — 2022',
    gpa: '3.85 / 4.0',
  },
];

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic Background</h2>
        </motion.div>

        <div className="education-grid">
          {education.map((edu, i) => (
            <motion.div
              className="brutal-card education-card"
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: 'var(--tag-bg)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', flexShrink: 0
                }}>
                  <GraduationCap size={20} style={{ color: 'var(--accent)' }} />
                </div>
                <div>
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-school">{edu.school}</p>
                  <p className="education-meta">{edu.location} &nbsp;•&nbsp; {edu.date}</p>
                  <div className="education-gpa">
                    <Award size={14} />
                    GPA: {edu.gpa}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
