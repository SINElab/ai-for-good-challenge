(() => {
  const main = document.querySelector('main');
  const sectionOrder = ['#top', '.countdown-band', '#challenge', '#more-than-a-hackathon', '#design-principles', '#participate', '#schedule', '#deliverables', '#submissions', '#resources', '#tools', '#judging', '#awards', '#faq', '#organizers', '#contact', '#sponsors'];
  sectionOrder.forEach((selector) => {
    const section = main?.querySelector(selector);
    if (section) main.append(section);
  });
  const countdown = document.querySelector('#countdown');
  const target = new Date(countdown?.dataset.date || '').getTime();
  const update = () => {
    if (!countdown || Number.isNaN(target)) return;
    const distance = Math.max(0, target - Date.now());
    const values = { days: Math.floor(distance / 86400000), hours: Math.floor(distance / 3600000) % 24, minutes: Math.floor(distance / 60000) % 60, seconds: Math.floor(distance / 1000) % 60 };
    Object.entries(values).forEach(([unit, value]) => { const el = countdown.querySelector(`[data-unit="${unit}"]`); if (el) el.textContent = String(value).padStart(2, '0'); });
  };
  update(); setInterval(update, 1000);
  const contact = document.querySelector('#contact');
  const emailButton = contact?.querySelector('.button-light');
  const contactCopy = contact?.querySelector('.contact-inner > div:first-child');
  if (emailButton && contactCopy) contactCopy.append(emailButton);
  document.querySelectorAll('.schedule-panel').forEach((panel) => {
    const firstRow = panel.querySelector('.schedule-row');
    if (!firstRow || panel.querySelector('.schedule-header')) return;
    const header = document.createElement('div');
    header.className = 'schedule-header';
    header.innerHTML = '<span>Time</span><span>Activity</span><span>Purpose and Expected Output</span>';
    firstRow.before(header);
  });
  document.querySelectorAll('.day-tab').forEach((tab) => tab.addEventListener('click', () => {
    document.querySelectorAll('.day-tab, .schedule-panel').forEach((el) => el.classList.remove('active'));
    tab.classList.add('active'); document.getElementById(tab.dataset.day)?.classList.add('active');
  }));
})();
