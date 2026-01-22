const styles = {
  page: {
    maxWidth: 960,
    margin: '0 auto',
    padding: '24px',
    minHeight: '100vh',
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    backgroundColor: '#0b5ed7',
    color: '#ffffff',
    lineHeight: 1.6 as const,
  },
  header: {
    marginBottom: 24,
    textAlign: 'center' as const,
  },
  title: {
    fontSize: '2rem',
    margin: 0,
    color: '#ffffff',
  },
  subtitle: {
    marginTop: 8,
    fontSize: '0.95rem',
    color: '#e2e8f0',
  },
  section: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    border: '1px solid rgba(255,255,255,0.25)',
    padding: '20px',
    marginBottom: '16px',
  },
  h2: {
    fontSize: '1.25rem',
    marginTop: 0,
    marginBottom: 12,
    color: '#ffffff',
  },
  list: {
    paddingLeft: 18,
    margin: '8px 0',
  },
  small: {
    fontSize: '0.95rem',
    color: '#f8fafc',
  },
  footer: {
    marginTop: 24,
    fontSize: '0.9rem',
    color: '#e5e7eb',
    textAlign: 'center' as const,
  },
} as const;

function PrivacyPolicy() {
  return (
    <main style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>LetterZoo Privacy Policy</h1>
        <p style={styles.subtitle}>Last updated: 22 January 2026</p>
      </header>

      <section style={styles.section}>
        <h2 style={styles.h2}>Overview</h2>
        <p style={styles.small}>
          LetterZoo is a children’s educational app designed to make learning
          fun and engaging. It includes ABC learning, Urdu and English lessons,
          Math activities, puzzles, matching games, counting games, small exams
          and tests, painting and signature drawing, audio playback of letters
          and words, and text‑to‑speech features.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>User Accounts & Access</h2>
        <ul style={styles.list}>
          <li style={styles.small}>
            Online login uses Firebase Authentication and requires only name,
            username, and password.
          </li>
          <li style={styles.small}>
            Offline usage requires only a name. App features work similarly
            offline and online (sign‑in is optional/online).
          </li>
          <li style={styles.small}>
            Account/profile and learning data are stored locally on the device.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Data Collection & Usage</h2>
        <ul style={styles.list}>
          <li style={styles.small}>
            Firebase is used only for authentication (sign‑in). No learning
            content, test results, or personal data are saved to Google Firebase
            (Firestore, Realtime Database, or Cloud Storage).
          </li>
          <li style={styles.small}>
            Data is stored locally on the device (e.g., Shared Preferences /
            GetStorage) for test/exam results and app preferences only.
          </li>
          <li style={styles.small}>No sensitive personal data is collected.</li>
          <li style={styles.small}>
            User data is never sold or shared with third parties.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Features</h2>
        <ul style={styles.list}>
          <li style={styles.small}>Online and offline functionality.</li>
          <li style={styles.small}>Audio playback of letters/words (no recording).</li>
          <li style={styles.small}>
            Screenshot and sharing features (user‑initiated only).
          </li>
          <li style={styles.small}>
            Text‑to‑speech using the device’s built‑in TTS.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Permissions</h2>
        <ul style={styles.list}>
          <li style={styles.small}>
            Internet access and network state may be used for Firebase
            Authentication during online sign‑in.
          </li>
          <li style={styles.small}>
            Local use and audio playback/TTS function without special
            permissions.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Children’s Privacy & Compliance</h2>
        <ul style={styles.list}>
          <li style={styles.small}>
            LetterZoo is designed for children and complies with children’s
            privacy regulations such as COPPA and GDPR‑K where applicable.
          </li>
          <li style={styles.small}>
            Parental consent is required where applicable. Parents or guardians
            can review, manage, or request deletion of their child’s local data
            by contacting us or using in‑app controls where available.
          </li>
          <li style={styles.small}>
            Parental controls are provided through app settings and usage is
            intended to be supervised by a parent or guardian.
          </li>
          <li style={styles.small}>
            Security measures protect children’s data: local storage (no cloud
            storage of learning data), TLS encryption during online sign‑in,
            restricted access within the app, and least‑privilege controls.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Data Retention & Deletion</h2>
        <ul style={styles.list}>
          <li style={styles.small}>
            Offline test/exam results are stored locally on the device.
          </li>
          <li style={styles.small}>
            Users can delete their local account/profile and results within the
            app’s settings. You may also request deletion assistance via email.
          </li>
          <li style={styles.small}>
            If you use online sign‑in, you may request deletion of your Firebase
            Authentication account credentials.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Screenshots, Sharing, and Audio</h2>
        <ul style={styles.list}>
          <li style={styles.small}>
            Screenshots and sharing features are user‑initiated only; the app
            does not automatically capture or share content.
          </li>
          <li style={styles.small}>
            Audio playback is available for letters and words to aid learning
            (no audio recording). Text‑to‑speech uses the device’s built‑in
            engine.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Third‑Party Services</h2>
        <p style={styles.small}>
          We use Firebase only for authentication (online sign‑in). No user
          content, test results, or personal data are stored in Google Firebase
          products (Firestore, Realtime Database, or Cloud Storage).
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Changes to This Policy</h2>
        <p style={styles.small}>
          We may update this Privacy Policy from time to time. Material changes
          will be communicated within the app or via an updated policy page. The
          latest version will always be available at this URL.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.h2}>Contact Us</h2>
        <p style={styles.small}>
          For privacy questions or requests, please contact us at{' '}
          <a href="mailto:ah7163259@gmail.com">ah7163259@gmail.com</a>.
        </p>
      </section>

      <footer style={styles.footer}>
        © {new Date().getFullYear()} LetterZoo. All rights reserved.
      </footer>
    </main>
  );
}

export default PrivacyPolicy;
