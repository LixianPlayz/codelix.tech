:root {
  --bg: #07111f;
  --bg-soft: #0d1b2e;
  --panel: rgba(15, 23, 42, 0.72);
  --panel-solid: #111c2e;
  --text: #edf5ff;
  --muted: #9fb3ca;
  --line: rgba(148, 163, 184, 0.22);
  --blue: #67b7ff;
  --blue-deep: #2563eb;
  --cyan: #57e3ff;
  --shadow: 0 24px 80px rgba(0, 0, 0, 0.35);
}

body.light {
  --bg: #eef5ff;
  --bg-soft: #dcecff;
  --panel: rgba(255, 255, 255, 0.78);
  --panel-solid: #ffffff;
  --text: #102033;
  --muted: #53677e;
  --line: rgba(37, 99, 235, 0.15);
  --shadow: 0 24px 70px rgba(37, 99, 235, 0.16);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  color: var(--text);
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at 15% 10%, rgba(87, 227, 255, 0.18), transparent 28rem),
    radial-gradient(circle at 90% 0%, rgba(37, 99, 235, 0.26), transparent 30rem),
    linear-gradient(135deg, var(--bg), var(--bg-soft));
}

body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.035) 1px, transparent 1px);
  background-size: 54px 54px;
  mask-image: linear-gradient(to bottom, black, transparent 80%);
}

.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 0;
  height: 4px;
  z-index: 100;
  background: linear-gradient(90deg, var(--cyan), var(--blue-deep));
}

.sidebar {
  position: fixed;
  inset: 24px auto 24px 24px;
  width: 280px;
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: var(--panel);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow);
}

.brand {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 28px;
}

.brand-mark {
  width: 48px;
  height: 48px;
  display: grid;
  place-items: center;
  border-radius: 16px;
  font-weight: 900;
  color: white;
  background: linear-gradient(135deg, var(--blue), var(--blue-deep));
}

.brand h2 {
  margin: 0;
  font-size: 18px;
}

.brand p {
  margin: 2px 0 0;
  color: var(--muted);
  font-size: 13px;
}

.toc {
  display: grid;
  gap: 8px;
}

.toc a {
  color: var(--muted);
  padding: 11px 13px;
  border-radius: 14px;
  text-decoration: none;
  transition: 0.2s ease;
}

.toc a:hover,
.toc a.active {
  color: var(--text);
  background: rgba(103, 183, 255, 0.12);
}

.theme-toggle {
  width: 100%;
  margin-top: 28px;
  padding: 12px 14px;
  color: white;
  border: 0;
  border-radius: 16px;
  cursor: pointer;
  font-weight: 700;
  background: linear-gradient(135deg, var(--blue-deep), #0ea5e9);
}

.page {
  width: min(960px, calc(100% - 360px));
  margin-left: 340px;
  padding: 36px 28px 80px;
}

.hero {
  min-height: 72vh;
  display: grid;
  align-content: center;
  padding: 40px 0;
}

.eyebrow {
  width: fit-content;
  padding: 8px 13px;
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--cyan);
  background: rgba(87, 227, 255, 0.08);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.hero h1 {
  max-width: 850px;
  margin: 22px 0 18px;
  font-size: clamp(42px, 7vw, 86px);
  line-height: 0.95;
  letter-spacing: -0.07em;
}

.hero p {
  max-width: 650px;
  color: var(--muted);
  font-size: 20px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.primary-btn,
.secondary-btn {
  padding: 14px 18px;
  border-radius: 16px;
  text-decoration: none;
  font-weight: 800;
}

.primary-btn {
  color: white;
  background: linear-gradient(135deg, var(--blue-deep), #0ea5e9);
}

.secondary-btn {
  color: var(--text);
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.04);
}

.panel {
  margin-bottom: 24px;
  padding: 30px;
  border: 1px solid var(--line);
  border-radius: 28px;
  background: var(--panel);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow);
}

.section-heading {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.section-heading span {
  width: 38px;
  height: 38px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  color: var(--cyan);
  background: rgba(87, 227, 255, 0.1);
  font-weight: 900;
}

.section-heading h2 {
  margin: 0;
  font-size: 30px;
  letter-spacing: -0.04em;
}

.panel p {
  color: var(--muted);
}

.email-preview {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 24px 0;
  padding: 18px;
  border-radius: 20px;
  color: var(--cyan);
  background: rgba(2, 6, 23, 0.32);
  border: 1px solid var(--line);
  font-size: clamp(22px, 4vw, 38px);
  font-weight: 900;
}

.grid,
.placement-grid,
.record-list {
  display: grid;
  gap: 16px;
}

.two-columns {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.mini-card,
.placement-grid article,
.record-list article {
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.045);
}

.mini-card h3,
.placement-grid h3,
.record-list h3 {
  margin-top: 0;
}

.steps {
  display: grid;
  gap: 14px;
}

.step {
  display: grid;
  grid-template-columns: 54px 1fr;
  gap: 16px;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.045);
}

.step strong {
  width: 44px;
  height: 44px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  color: white;
  background: linear-gradient(135deg, var(--blue), var(--blue-deep));
}

.step h3 {
  margin: 0 0 4px;
}

.step p {
  margin: 0;
}

.code-card {
  overflow: hidden;
  margin: 20px 0;
  border: 1px solid var(--line);
  border-radius: 22px;
  background: #020617;
}

.code-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid rgba(148, 163, 184, 0.18);
}

.code-top span {
  color: #a5b4fc;
  font-weight: 800;
}

.code-top button,
.reveal-box button {
  border: 0;
  border-radius: 12px;
  padding: 9px 13px;
  color: white;
  cursor: pointer;
  font-weight: 800;
  background: var(--blue-deep);
}

pre {
  margin: 0;
  padding: 18px;
  overflow-x: auto;
}

code {
  color: #7dd3fc;
  font-size: 15px;
}

.placement-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.reveal-box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 18px;
  margin: 22px 0;
  padding: 18px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: rgba(87, 227, 255, 0.08);
}

.email-output {
  margin: 0;
  font-weight: 800;
}

.email-output a {
  color: var(--cyan);
}

.record-list {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.checklist {
  display: grid;
  gap: 12px;
}

.checklist label {
  padding: 15px;
  border: 1px solid var(--line);
  border-radius: 16px;
  color: var(--muted);
  background: rgba(255, 255, 255, 0.04);
}

.checklist input {
  margin-right: 10px;
  accent-color: var(--blue-deep);
}

.faq {
  display: grid;
  gap: 12px;
}

.faq-question {
  width: 100%;
  padding: 17px;
  border: 1px solid var(--line);
  border-radius: 18px;
  color: var(--text);
  text-align: left;
  cursor: pointer;
  font-size: 16px;
  font-weight: 800;
  background: rgba(255, 255, 255, 0.045);
}

.faq-answer {
  display: none;
  padding: 0 17px 17px;
  color: var(--muted);
}

.faq-answer.open {
  display: block;
}

@media (max-width: 980px) {
  .sidebar {
    position: relative;
    inset: auto;
    width: auto;
    margin: 16px;
  }

  .toc {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .page {
    width: 100%;
    margin: 0;
    padding: 12px 16px 60px;
  }

  .hero {
    min-height: auto;
    padding: 42px 0;
  }

  .placement-grid,
  .record-list,
  .two-columns {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 560px) {
  .toc {
    grid-template-columns: 1fr;
  }

  .panel {
    padding: 22px;
  }

  .step {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 42px;
  }
}
