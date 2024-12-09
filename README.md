# QR Scanner Extension

## Project Overview

The **QR Scanner Extension** is a lightweight browser extension designed to efficiently scan QR codes. Users can upload images, screenshots, or videos containing QR codes, and the extension processes them to extract the embedded information, such as URLs, contact details, or text. The extension is built using modern web technologies and adheres to the Chrome Manifest V3 framework.

---
Usage
---
For users looking to install and use the QR Scanner extension on Microsoft Edge or Chrome, you can visit the following link:

QR Scanner Extension - Microsoft Edge Addons
---
## Features

1. **QR Code Scanning**
   - Supports scanning QR codes from uploaded images, screenshots, or video frames.
   - Detects and extracts encoded information efficiently.

2. **Simple UI**
   - User-friendly popup interface to interact with the extension.

3. **Cross-Browser Compatibility**
   - Designed to work on Chromium-based browsers (Google Chrome, Edge, etc.).

4. **Localization**
   - Multilingual support with localization files.

5. **Offline Enabled**
   - Can work offline for local QR code processing.

---

## Technologies Used

### **Frontend**
- **HTML:** Structure of the popup interface and permissions page.
- **CSS:** Styling for popup and responsive UI.

### **Backend Logic**
- **JavaScript:** Core logic for QR code scanning and background services.

### **Third-party Libraries**
- **QR Scanner Library:** Handles QR code decoding (`qr-scanner.min.js`).
- **Bootstrap & Font Awesome:** Enhances UI/UX design.

### **Manifest Configuration**
- **JSON:** Defines extension permissions, actions, and metadata.

---

## Folder Structure

```plaintext
QR-Scanner-Extension/
├── assets/                 # Images and icons
│   ├── icons/
│   └── samples/
├── css/                    # Stylesheets
├── js/                     # JavaScript logic
│   ├── services/           # Service scripts
├── libs/                   # Libraries and dependencies
│   ├── qr-scanner/
│   ├── fontawesome/
├── _locales/               # Localization files
├── manifest.json           # Manifest file
├── permission.html         # Permissions interface
└── popup.html              # Main popup UI
