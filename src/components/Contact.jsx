import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label" style={{ justifyContent: 'center' }}>Contact</p>
          <h2 className="contact-title">Let's Connect</h2>
          <p className="contact-description">
            I'm always open to new opportunities and interesting projects.
            Whether you have a question or just want to say hi — my inbox is open.
          </p>
        </motion.div>

        <motion.div
          className="contact-links"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <a href="mailto:pvsr.jobs@gmail.com" className="contact-link" id="contact-email">
            <Mail size={16} />
            pvsr.jobs@gmail.com
            <ArrowUpRight size={14} />
          </a>
          <a href="tel:+919866710174" className="contact-link" id="contact-phone">
            <Phone size={16} />
            (+91) 9866710174
            <ArrowUpRight size={14} />
          </a>
          <a
            href="https://www.linkedin.com/in/venkata-sasidhar-reddy-palagundla-46412420b"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            id="contact-linkedin"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
            LinkedIn
            <ArrowUpRight size={14} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a href="mailto:pvsr.jobs@gmail.com" className="btn btn-primary" id="contact-cta">
            <Mail size={16} />
            Say Hello
          </a>
        </motion.div>
      </div>

      <footer className="footer">
        <p>Designed & Built by Sasidhar Palagundla &nbsp;•&nbsp; © {new Date().getFullYear()}</p>
      </footer>
    </section>
  );
}
