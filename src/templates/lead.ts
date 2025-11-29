export const LEAD_TEMPLATE = ({
  name,
  email,
  phone,
  company,
  subject,
  note,
  receivedAt,
}: {
  name: string
  email: string
  phone: string
  company?: string
  subject: string
  note: string
  receivedAt: string
}) => `<!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: 'Arial', sans-serif;
                  line-height: 1.6;
                  color: #333;
                  max-width: 600px;
                  margin: 0 auto;
                  padding: 20px;
                }
                .header {
                  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                  color: white;
                  padding: 30px;
                  border-radius: 10px 10px 0 0;
                  text-align: center;
                }
                .header h1 {
                  margin: 0;
                  font-size: 28px;
                }
                .content {
                  background: #f9f9f9;
                  padding: 30px;
                  border-radius: 0 0 10px 10px;
                }
                .field {
                  margin-bottom: 20px;
                  background: white;
                  padding: 15px;
                  border-radius: 8px;
                  border-left: 4px solid #667eea;
                }
                .field-label {
                  font-weight: bold;
                  color: #667eea;
                  font-size: 12px;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                  margin-bottom: 5px;
                }
                .field-value {
                  color: #333;
                  font-size: 16px;
                }
                .note-section {
                  background: white;
                  padding: 20px;
                  border-radius: 8px;
                  border-left: 4px solid #764ba2;
                  margin-top: 20px;
                }
                .footer {
                  text-align: center;
                  margin-top: 30px;
                  padding-top: 20px;
                  border-top: 2px solid #e0e0e0;
                  color: #666;
                  font-size: 12px;
                }
              </style>
            </head>
            <body>
              <div class="header">
                <h1>🎉 New Lead</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="field-label">Name</div>
                  <div class="field-value">${name}</div>
                </div>

                <div class="field">
                  <div class="field-label">Email</div>
                  <div class="field-value">
                    <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">
                      ${email}
                    </a>
                  </div>
                </div>

                <div class="field">
                  <div class="field-label">Phone</div>
                  <div class="field-value">
                    <a href="tel:${phone}" style="color: #667eea; text-decoration: none;">
                      ${phone}
                    </a>
                  </div>
                </div>

                ${
                  company
                    ? `
                <div class="field">
                  <div class="field-label">Company</div>
                  <div class="field-value">${company}</div>
                </div>
                `
                    : ""
                }

                <div class="field">
                  <div class="field-label">Subject</div>
                  <div class="field-value">${subject}</div>
                </div>

                <div class="note-section">
                  <div class="field-label">Message</div>
                  <div class="field-value" style="white-space: pre-wrap;">${note}</div>
                </div>

                <div class="footer">
                  <p>This email was sent from your website's contact form.</p>
                  <p>Received at: ${receivedAt}</p>
                </div>
              </div>
            </body>
          </html>`;