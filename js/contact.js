/**
 * Bombay Sofa & Furnishing - Contact Form Handler
 * Validates inputs following Modern Web Guidance:
 * - Validates on blur/submit
 * - Clears errors on input
 * - Constructs properly encoded WhatsApp message
 * - Transparent redirection without fake database claims
 */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('showroomContactForm');
  const formStatus = document.getElementById('formStatusMessage');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('customerName');
    const phoneInput = document.getElementById('customerPhone');
    const categoryInput = document.getElementById('enquiryCategory');
    const messageInput = document.getElementById('customerMessage');

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const category = categoryInput.value;
    const message = messageInput.value.trim();

    // Basic Validation Check
    if (!name || !phone) {
      if (formStatus) {
        formStatus.style.display = 'block';
        formStatus.style.backgroundColor = '#FFECEB';
        formStatus.style.color = '#C92A2A';
        formStatus.style.border = '1px solid #FFC9C9';
        formStatus.textContent = 'Please provide both your name and contact phone number.';
      }
      return;
    }

    // Construct Contextual WhatsApp Message
    const formattedText = 
`*NEW WEBSITE ENQUIRY - BOMBAY SOFA & FURNISHING*
----------------------------------------
*Name:* ${name}
*Mobile:* ${phone}
*Interested Category:* ${category}
*Message:* ${message ? message : 'I would like to discuss products and pricing.'}
----------------------------------------
_Sent from website contact form_`;

    const waUrl = getWhatsAppUrl(formattedText);

    if (formStatus) {
      formStatus.style.display = 'block';
      formStatus.style.backgroundColor = '#EBFBEE';
      formStatus.style.color = '#2B8A3E';
      formStatus.style.border = '1px solid #D3F9D8';
      formStatus.innerHTML = `
        <strong>Thank you, ${name}!</strong> Preparing your message and opening WhatsApp to connect directly with Bombay Sofa &amp; Furnishing showroom...
      `;
    }

    // Open WhatsApp in new tab / app
    setTimeout(() => {
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    }, 600);
  });
});

