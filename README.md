# MedExplain website

A static, responsive healthcare-education and doctor-discovery prototype assembled from the six Sakana-generated files.

## Files
- `index.html` — homepage and medical-category navigation
- `doctors.html` — searchable doctor directory and profile modal
- `report.html` — local file-selection interface and medical terminology browser
- `doctors-data.js` — editable doctor records, categories and terminology data
- `app.js` — navigation, filtering, profile modal and upload-interface behaviour
- `styles.css` — responsive visual styling

## Run locally
1. Extract this folder.
2. Open a terminal in this folder.
3. Run `python -m http.server 8000`
4. Open `http://localhost:8000` in a browser.

You can also open `index.html` directly, but using a local server is more reliable.

## What works in this prototype
- Homepage navigation and category cards
- Four doctor categories with nine supplied profiles
- Search by doctor name, specialty, qualification and clinic/hospital
- Category filtering and combined search + category filtering
- Individual doctor profile modal with supplied timings, fees and addresses
- Map directions link generated from each supplied address
- Common medical-terminology browser and search
- PDF/JPG/JPEG/PNG file selection and drag-and-drop UI

## What is NOT connected
- The report page only selects a file locally in the browser. It does not upload, read, extract, OCR or analyse the selected file.
- No AI medical-report explanation backend is connected. A secure backend, PDF text extraction/OCR and an AI service would need to be designed and reviewed before implementation.
- Doctor phone numbers, email addresses and booking links are intentionally blank because verified details were not supplied.
- No live database, authentication, hosting or admin panel is included.

## Data and safety notes
Doctor details, ratings, registration claims, fees and timings are based on user-supplied source information and have not been independently verified. One supplied pediatric experience entry contains a discrepancy, which remains flagged in the profile. Do not present the directory as an endorsement or as proof of current availability.

Use only fictional demo reports while testing. Do not upload real patient records until a qualified supervisor has reviewed consent, privacy, security, retention and backend handling. This prototype is educational and does not diagnose or prescribe. In India, call 112 for emergencies.
