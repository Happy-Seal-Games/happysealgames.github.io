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

    // FormSubmit accepts separate file fields; repeated scalar names can lose files.
    form.addEventListener('formdata', (event) => {
      const files = [...(attachment?.files || [])];
      event.formData.delete('attachment');
      files.forEach((file, index) => {
        event.formData.append(index === 0 ? 'attachment' : `attachment_${index + 1}`, file, file.name);
      });
    });

    // Restore the form when returning from FormSubmit with the browser's Back button.
    global.addEventListener('pageshow', (event) => {
      if (!event.persisted) return;
      submit.disabled = false;
      submit.textContent = app.I18n.getCopy().formSubmit;
      status.textContent = '';
      status.className = 'form-status';
    });

    form.addEventListener('submit', async (event) => {
      if (submit.disabled) {
        event.preventDefault();
        return;
      }
      const copy = app.I18n.getCopy();
      const files = [...(attachment?.files || [])];
      const attachmentBytes = files.reduce((total, file) => total + file.size, 0);

      status.className = 'form-status';
      if (attachmentBytes > maxAttachmentBytes) {
        event.preventDefault();
        status.textContent = copy.formTooLarge;
        status.classList.add('is-error');
        attachment?.focus();
        return;
      }

      submit.disabled = true;

      // Upload through FormSubmit's native multipart flow, including its CAPTCHA page.
      // AJAX is kept only for messages without files.
      if (files.length) {
        submit.textContent = copy.formUploading;
        status.textContent = copy.formUploading;
        return;
      }

      event.preventDefault();
      submit.textContent = copy.formSending;
      status.textContent = copy.formSending;

      try {
        const response = await global.fetch(form.dataset.ajaxAction, {
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
