const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.textContent = isOpen ? '×' : '☰';
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

// Replace this with your real email address before publishing.
const portfolioEmail = 'samiullahyounus10@gmail.com';
const emailText = document.getElementById('emailText');
emailText.textContent = portfolioEmail;
emailText.href = `mailto:${portfolioEmail}`;

document.getElementById('copyEmail').addEventListener('click', async (event) => {
  const button = event.currentTarget;
  try {
    await navigator.clipboard.writeText(portfolioEmail);
    button.textContent = 'Copied!';
  } catch {
    button.textContent = 'Use email';
  }
  setTimeout(() => { button.textContent = 'Copy'; }, 1800);
});

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('senderName').value.trim();
  const senderEmail = document.getElementById('senderEmail').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
  const body = encodeURIComponent(`Hi Sami,\n\n${message}\n\nFrom: ${name}\nEmail: ${senderEmail}`);
  document.getElementById('formNote').textContent = 'Opening your email app...';
  window.location.href = `mailto:${portfolioEmail}?subject=${subject}&body=${body}`;
});

// Replace these URLs with your actual profile links before publishing.
document.getElementById('githubLink').href = 'https://github.com/';
document.getElementById('linkedinLink').href = 'https://www.linkedin.com/';
