(function registerContactForm(global) {
  'use strict';

  const app = global.HSG = global.HSG || {};
  const maxAttachmentBytes = 10 * 1024 * 1024;

  function init() {
    const form = document.getElementById('contact-form');
    const submit = document.getElementById('contact-submit');
    const status = document.getElementById('contact-status');
    const attachment = document.getElementById('contact-attachment');
    if (!form || !submit || !status) return;

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      const copy = app.I18n.getCopy();
      const attachmentBytes = [...(attachment?.files || [])].reduce((total, file) => total + file.size, 0);

      status.className = 'form-status';
      if (attachmentBytes > maxAttachmentBytes) {
        status.textContent = copy.formTooLarge;
        status.classList.add('is-error');
        attachment?.focus();
        return;
      }

      submit.disabled = true;
      submit.textContent = copy.formSending;
      status.textContent = copy.formSending;

      try {
        const response = await global.fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });
        const result = await response.json().catch(() => ({}));
        if (!response.ok || result.success === false || result.success === 'false') throw new Error('Submission failed');

        form.reset();
        status.textContent = copy.formSuccess;
        status.classList.add('is-success');
      } catch {
        status.textContent = copy.formError;
        status.classList.add('is-error');
      } finally {
        submit.disabled = false;
        submit.textContent = app.I18n.getCopy().formSubmit;
      }
    });
  }

  app.ContactForm = Object.freeze({ init });
})(window);
