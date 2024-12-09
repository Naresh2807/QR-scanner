# QR Scanner Extension

## Project Overview

The **QR Scanner Extension** is a lightweight browser extension designed to efficiently scan QR codes. Users can upload images, screenshots, or videos containing QR codes, and the extension processes them to extract the embedded information, such as URLs, contact details, or text. The extension is built using modern web technologies and adheres to the Chrome Manifest V3 framework.

---
Usage
---
For users looking to install and use the QR Scanner extension on Microsoft Edge or Chrome, you can visit the following link:

<a href="https://microsoftedge.microsoft.com/addons/detail/qr-scanner/lcjdgaccpmjiombhnkhjjdheejfkhkdm?hl=en-US">QR Scanner Extension - Microsoft Edge Addons</a>

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
```
## Setup Instructions

### 1. Clone or Download
- **Clone the repository:**
  ```bash
  git clone https://github.com/username/QR-Scanner-Extension.git
- Alternatively, download the ZIP file and extract it.

### 2. Load the Extension
- Open Chrome/Edge and navigate to chrome://extensions/.
- Enable Developer Mode in the top-right corner.
- Click on Load unpacked.
- Select the project folder to load the extension.
### 3. Run the Extension
- Click on the extension icon in the browser toolbar to open the popup.
- Upload an image or screenshot containing a QR code.
# Core Files Description

- **manifest.json**  
  The configuration file for the browser extension, defining permissions, icons, actions, and localization.

- **popup.html**  
  Main UI for users to interact with the QR scanner.

- **background.js**  
  Background service script for managing browser-level tasks.

- **popup.js**  
  Contains the logic to process QR code uploads and display results.

- **qr-scanner.min.js**  
  A third-party library for QR code decoding.

- **PermissionService.js**  
  Handles permission requests for accessing browser features.

# How It Works

1. **User Interaction**  
   Users interact with the extension through the popup interface (`popup.html`).  
   Upload an image or capture a frame containing a QR code.

2. **QR Code Decoding**  
   The QR Scanner library (`qr-scanner.min.js`) processes the uploaded file and extracts the embedded data.

3. **Result Display**  
   Decoded information (e.g., URL or text) is displayed in the popup for further action.

# Future Enhancements

- **Real-Time Video Scanning**  
  Enable live video scanning using the webcam.

- **Browser Notifications**  
  Add support for push notifications when specific QR codes are detected.

- **Extended File Formats**  
  Support additional file formats (e.g., PDF) for QR code detection.

- **Integration with Other Services**  
  Allow users to save QR code data directly to contacts, bookmarks, or cloud storage.

# Usage

For users looking to install and use the QR Scanner extension on Microsoft Edge or Chrome, you can visit the following link:  

[QR Scanner Extension - Microsoft Edge Addons](https://example.com)

# Credits

- **Developer**: Naresh Krishnan.M
- **Libraries**:
  - QR Scanner
  - Font Awesome
  - Bootstrap

# Contact Information

- **Email**: [nareshkrishnan.m28@gmail.com](mailto:nareshkrishnan.m28@gmail.com)
- **GitHub**: [Naresh2807](https://github.com/Naresh2807)
