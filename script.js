const page = document.documentElement;
const progressBar = document.querySelector(".progress-bar");
const navLinks = [...document.querySelectorAll(".toc a")];
const sections = navLinks
  .map(link => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const updateProgress = () => {
  const scrollable = page.scrollHeight - page.clientHeight;
  const progress = scrollable > 0 ? page.scrollTop / scrollable : 0;
  progressBar.style.width = `${progress * 100}%`;
};

const updateActiveLink = () => {
  let currentSection = sections[0];

  for (const section of sections) {
    const top = section.getBoundingClientRect().top;

    if (top <= 140) {
      currentSection = section;
    }
  }

  navLinks.forEach(link => {
    const isCurrent = link.getAttribute("href") === `#${currentSection.id}`;
    link.classList.toggle("active", isCurrent);
  });
};

document.querySelector(".theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

document.querySelector("[data-reveal-email]").addEventListener("click", event => {
  const user = "contact";
  const domain = "yourbusiness";
  const tld = "com";
  const address = `${user}@${domain}.${tld}`;

  document.querySelector(".email-output").innerHTML = `<a href="mailto:${address}">${address}</a>`;
  event.currentTarget.textContent = "Email Revealed";
  event.currentTarget.disabled = true;
});

document.querySelectorAll("[data-copy]").forEach(button => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copy);
    const text = target.innerText.trim();

    try {
      await navigator.clipboard.writeText(text);
      button.textContent = "Copied";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 1200);
    } catch {
      button.textContent = "Failed";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 1200);
    }
  });
});

document.querySelectorAll(".faq-question").forEach(question => {
  question.addEventListener("click", () => {
    question.nextElementSibling.classList.toggle("open");
  });
});

window.addEventListener("scroll", () => {
  updateProgress();
  updateActiveLink();
});

updateProgress();
updateActiveLink();
