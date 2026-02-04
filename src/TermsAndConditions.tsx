const styles = {
  page: {
    maxWidth: 960,
    margin: '0 auto',
    padding: '24px',
    minHeight: '100vh',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    backgroundColor: '#ffffff',
    color: '#111827',
    lineHeight: 1.6 as const,
  },
  header: {
    marginBottom: 24,
    textAlign: 'center' as const,
  },
  title: {
    fontSize: '2rem',
    margin: 0,
    color: '#111827',
  },
  subtitle: {
    marginTop: 8,
    fontSize: '0.95rem',
    color: '#6b7280',
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    border: '1px solid #e5e7eb',
    padding: '20px',
    marginBottom: '16px',
  },
  h2: {
    fontSize: '1.25rem',
    marginTop: 0,
    marginBottom: 12,
    color: '#111827',
  },
  list: {
    paddingLeft: 18,
    margin: '8px 0',
  },
  small: {
    fontSize: '0.95rem',
    color: '#374151',
  },
  footer: {
    marginTop: 24,
    fontSize: '0.9rem',
    color: '#6b7280',
    textAlign: 'center' as const,
  },
} as const;

function TermsAndConditions() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>LetterZoo Terms & Conditions</h1>
        <p style={styles.subtitle}>Last updated: 22 January 2026</p>
      </header>

      

      <section style={styles.section}>
        <h2 style={styles.h2}>Eligibility & Parental Supervision</h2>
        <ul style={styles.list}>
          <li style={styles.small}>
            LetterZoo is designed for children. Use should be under parent or
            guardian supervision.
          </li>
          <li style={styles.small}>
            Parental consent may be required where applicable.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Offline Profile & Local Data</h2>
        <ul style={styles.list}>
          <li style={styles.small}>
            Users create an offline profile (e.g., name). No server‑side
            account is required.
          </li>
          <li style={styles.small}>
            All learning/test data and preferences are stored locally on the
            device. No data is stored in Google Firebase, Firestore, Realtime
            Database, or Cloud Storage.
          </li>
          <li style={styles.small}>
            You can delete your local profile and results via in‑app settings.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>No Ads & No Third‑Party Content</h2>
        <p style={styles.small}>
          The app does not display ads. It does not integrate third‑party
          content or services such as YouTube or Netflix. No external media
          platforms are embedded, in line with children’s safety policies.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>App Features</h2>
        <ul style={styles.list}>
          <li style={styles.small}>
            Offline learning features (ABC, Urdu/English, Math, puzzles,
            matching, counting, tests, painting/signature drawing).
          </li>
          <li style={styles.small}>
            Audio playback for letters/words. Recording feature is not
            included.
          </li>
          <li style={styles.small}>Works offline with local data.</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Children’s Privacy Compliance</h2>
        <p style={styles.small}>
          LetterZoo complies with children’s privacy regulations such as COPPA
          and GDPR‑K where applicable. Local storage protects children’s data;
          there is no cloud storage of learning/test data.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>User Responsibilities</h2>
        <ul style={styles.list}>
          <li style={styles.small}>
            Use the app lawfully. Malicious activity, reverse engineering,
            unauthorized copying, or misuse is prohibited.
          </li>
          <li style={styles.small}>
            Content is for educational use; commercial use requires prior
            written permission.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Intellectual Property</h2>
        <p style={styles.small}>
          All app content, graphics, and materials are the intellectual
          property of LetterZoo. You receive a limited, non‑transferable
          license for personal educational use.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Disclaimer & Limitation of Liability</h2>
        <ul style={styles.list}>
          <li style={styles.small}>
            The app is provided “as is” without warranties. LetterZoo is not
            liable for indirect, incidental, special, or consequential damages.
          </li>
          <li style={styles.small}>
            Managing and backing up local data is the user’s responsibility.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Changes to Terms</h2>
        <p style={styles.small}>
          These Terms may be updated from time to time. Significant changes
          will be communicated in the app or on this page.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Contact Us</h2>
        <p style={styles.small}>
          For questions or requests, email: <a href="mailto:ah7163259@gmail.com">ah7163259@gmail.com</a>.
        </p>
      </section>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} LetterZoo. All rights reserved.
      </footer>
    </main>
  );
}

export default TermsAndConditions;
