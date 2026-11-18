import avatar from "../assets/panda.jpg";
import styles from "../styles/about.module.css";

export default function Home() {
  return (
    <>
      <section id="about">
        <div className={styles.profileHeader}>
          <img src={avatar} alt="" className={styles.profileAvatar} />
          <div className={styles.profileIdentity}>
            <p className={styles.profileName}>Aron Chiang</p>
            <p className={styles.profileTagline}>
              CS student · Hsinchu, Taiwan
            </p>
          </div>
        </div>
        <div className={styles.profileBio}>
          <p>
            I'm a computer science student at{" "}
            <span className={styles.profileSchool}>
              National Yang Ming Chiao Tung University
            </span>
            , interested in computer networks, distributed systems, and building
            efficient, scalable systems.
          </p>
          <p>
            I enjoy understanding how systems work, experimenting with new
            ideas, and turning research into practical implementations. My
            interests span RDMA, programmable networks, and low-level systems
            engineering.
          </p>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Currently</h2>
        <div className={styles.currentList}>
          <div className={styles.currentItem}>
            <p className={styles.currentItemTag}>Building</p>
            <p className={styles.currentItemDescription}>
              lock management in datacenter through P4 switch.
            </p>
          </div>
          <div className={styles.currentItem}>
            <p className={styles.currentItemTag}>Learning</p>
            <p className={styles.currentItemDescription}>
              Linux kernel networking.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.section} id="projects">
        <h2 className={styles.sectionTitle}>Selected projects</h2>
        <div className={styles.projectList}>
          <div className={styles.projectItem}>
            <p className={styles.projectName}>Multi-Rack Netlock</p>
            <p className={styles.projectDescription}>
              A P4-based distributed lock management system designed for
              scalable and efficient lock coordination across multiple
              datacenter racks.
            </p>
            <p className={styles.projectTag}>
              P4, SDN, Datacenter Networking, Distributed Systems
            </p>
          </div>
          <div className={styles.projectItem}>
            <p className={styles.projectName}>miniRedis</p>
            <p className={styles.projectDescription}>
              A lightweight Redis-like key-value store built from scratch in
              C++, featuring TCP networking, RESP protocol parsing, and basic
              data operations.
            </p>
            <p className={styles.projectTag}>
              C++, TCP/IP, RESP, Socket Programming
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section} id="notes">
        <h2 className={styles.sectionTitle}>Notes</h2>
        <div className={styles.noteList}>
          <div className={styles.noteItem}>
            <p className={styles.noteInfo}>
              <span>Nov 14, 2026</span>
              <span>/</span>
              <span>Distributed Systems</span>
            </p>
            <p className={styles.noteName}>
              Understanding RDMA and Distributed Locking
            </p>
          </div>

          <div className={styles.noteItem}>
            <p className={styles.noteInfo}>
              <span>Sep 18, 2026</span>
              <span>/</span>
              <span>Networking</span>
            </p>
            <p className={styles.noteName}>
              Packet-Level Load Balancing for RDMA Networks
            </p>
          </div>

          <div className={styles.noteItem}>
            <p className={styles.noteInfo}>
              <span>Jul 12, 2026</span>
              <span>/</span>
              <span>Datacenter Networking</span>
            </p>
            <p className={styles.noteName}>
              Understanding Modern Datacenter Network Architecture
            </p>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience & Education</h2>
        <div className={styles.experienceList}>
          <div className={styles.experienceItem}>
            <p className={styles.experienceTime}>2026.01 — 2026.09</p>
            <div className={styles.experienceInfo}>
              <p className={styles.experienceName}>
                Research & Development Intern
              </p>
              <p className={styles.experienceLocation}>CloudMosa</p>
            </div>
          </div>

          <div className={styles.experienceItem}>
            <p className={styles.experienceTime}>2025.07 — 2025.08</p>
            <div className={styles.experienceInfo}>
              <p className={styles.experienceName}>Research Intern</p>
              <p className={styles.experienceLocation}>
                5G Open RAN Research · NYCU
              </p>
            </div>
          </div>

          <div className={styles.experienceItem}>
            <p className={styles.experienceTime}>2023.09 — 2027.06</p>
            <div className={styles.experienceInfo}>
              <p className={styles.experienceName}>B.S. in Computer Science</p>
              <p className={styles.experienceLocation}>
                National Yang Ming Chiao Tung University · Expected 2027
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
