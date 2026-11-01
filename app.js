// MedExplain - Main Application JavaScript
// Handles navigation, file upload, doctor directory, search, terminology browser, and modals.

(function() {
    'use strict';

    // =========================
    // Navigation
    // =========================
    function initNavigation() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        if (navToggle && navMenu) {
            navToggle.addEventListener('click', function() {
                navMenu.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }
    }

    // =========================
    // Home Dashboard: Categories
    // =========================
    function renderCategories() {
        const grid = document.getElementById('categoriesGrid');
        if (!grid || typeof medicalCategories === 'undefined') return;

        grid.innerHTML = medicalCategories.map(function(cat) {
            const countBadge = cat.count > 0
                ? `<span class="category-count">${cat.count} doctor${cat.count !== 1 ? 's' : ''}</span>`
                : '';
            return `<div class="category-card" data-category="${cat.title}">
                <div class="category-icon">${cat.icon}</div>
                <div class="category-header-row">
                    <h3 class="category-title">${cat.title}</h3>
                    ${countBadge}
                </div>
                <p class="category-description">${cat.description}</p>
                <div class="category-terms">
                    <span class="terms-label">Common terms:</span>
                    ${cat.commonTerms.map(function(t) {
                        return `<span class="term-tag">${t}</span>`;
                    }).join('')}
                </div>
            </div>`;
        }).join('');

        // Add click handlers to category cards
        grid.querySelectorAll('.category-card').forEach(function(card) {
            card.addEventListener('click', function() {
                const category = card.dataset.category;
                window.location.href = 'doctors.html?category=' + encodeURIComponent(category);
            });
        });
    }

    // =========================
    // Home Dashboard: Stats
    // =========================
    function renderStats() {
        const statsGrid = document.getElementById('statsGrid');
        if (!statsGrid || typeof categoryCounts === 'undefined') return;

        const categories = [
            { name: 'Orthopaedics', count: categoryCounts['Orthopaedics'] || 0, icon: '🦴' },
            { name: 'Dentistry & Oral/Maxillofacial Surgery', count: categoryCounts['Dentistry & Oral/Maxillofacial Surgery'] || 0, icon: '🦷' },
            { name: 'Pediatrics & Child Health', count: categoryCounts['Pediatrics & Child Health'] || 0, icon: '👶' },
            { name: 'Cardiology', count: categoryCounts['Cardiology'] || 0, icon: '❤️' }
        ];

        statsGrid.innerHTML = categories.map(function(cat) {
            return `<div class="stat-card" data-category="${cat.name}">
                <div class="stat-icon">${cat.icon}</div>
                <div class="stat-number">${cat.count}</div>
                <div class="stat-label">${cat.name}</div>
            </div>`;
        }).join('');

        statsGrid.querySelectorAll('.stat-card').forEach(function(card) {
            card.addEventListener('click', function() {
                const category = card.dataset.category;
                window.location.href = 'doctors.html?category=' + encodeURIComponent(category);
            });
        });
    }

    // =========================
    // Medical Report: File Upload
    // =========================
    function initReportUpload() {
        const uploadArea = document.getElementById('uploadArea');
        const fileInput = document.getElementById('fileInput');
        const browseBtn = document.getElementById('browseBtn');
        const fileSelected = document.getElementById('fileSelected');
        const fileName = document.getElementById('fileName');
        const fileSize = document.getElementById('fileSize');
        const removeFileBtn = document.getElementById('removeFileBtn');
        const processBtn = document.getElementById('processBtn');
        const processingState = document.getElementById('processingState');
        const pendingState = document.getElementById('pendingState');
        const errorState = document.getElementById('errorState');
        const progressFill = document.getElementById('progressFill');
        const processingText = document.getElementById('processingText');
        const newUploadBtn = document.getElementById('newUploadBtn');
        const errorRetryBtn = document.getElementById('errorRetryBtn');

        if (!uploadArea) return;

        let currentFile = null;

        function formatBytes(bytes) {
            if (bytes === 0) return '0 Bytes';
            const k = 1024;
            const sizes = ['Bytes', 'KB', 'MB', 'GB'];
            const i = Math.floor(Math.log(bytes) / Math.log(k));
            return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
        }

        function hideAllStates() {
            if (uploadArea) uploadArea.parentElement.style.display = 'none';
            if (fileSelected) fileSelected.style.display = 'none';
            if (processingState) processingState.style.display = 'none';
            if (pendingState) pendingState.style.display = 'none';
            if (errorState) errorState.style.display = 'none';
        }

        function showUploadArea() {
            hideAllStates();
            if (uploadArea) uploadArea.parentElement.style.display = 'block';
            currentFile = null;
            if (fileInput) fileInput.value = '';
        }

        function handleFile(file) {
            if (!file) return;
            const validTypes = [
                'application/pdf',
                'image/jpeg',
                'image/jpg',
                'image/png'
            ];
            const validExtensions = ['.pdf', '.jpg', '.jpeg', '.png'];
            const ext = '.' + file.name.split('.').pop().toLowerCase();

            if (!validTypes.includes(file.type) && !validExtensions.includes(ext)) {
                alert('Please upload a PDF, JPG, JPEG, or PNG file.');
                return;
            }

            currentFile = file;
            hideAllStates();
            if (fileSelected) fileSelected.style.display = 'flex';
            if (fileName) fileName.textContent = file.name;
            if (fileSize) fileSize.textContent = formatBytes(file.size);
        }

        // Drag and drop
        if (uploadArea) {
            uploadArea.addEventListener('dragover', function(e) {
                e.preventDefault();
                uploadArea.classList.add('dragover');
            });
            uploadArea.addEventListener('dragleave', function() {
                uploadArea.classList.remove('dragover');
            });
            uploadArea.addEventListener('drop', function(e) {
                e.preventDefault();
                uploadArea.classList.remove('dragover');
                if (e.dataTransfer.files.length > 0) {
                    handleFile(e.dataTransfer.files[0]);
                }
            });
            uploadArea.addEventListener('click', function(e) {
                if (e.target !== browseBtn && !browseBtn.contains(e.target)) {
                    fileInput.click();
                }
            });
        }

        if (browseBtn) {
            browseBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                fileInput.click();
            });
        }
        if (fileInput) {
            fileInput.addEventListener('change', function() {
                if (fileInput.files.length > 0) {
                    handleFile(fileInput.files[0]);
                }
            });
        }
        if (removeFileBtn) {
            removeFileBtn.addEventListener('click', showUploadArea);
        }
        if (newUploadBtn) {
            newUploadBtn.addEventListener('click', showUploadArea);
        }
        if (errorRetryBtn) {
            errorRetryBtn.addEventListener('click', function() {
                if (currentFile) {
                    processFile();
                } else {
                    showUploadArea();
                }
            });
        }

        function processFile() {
            // This frontend has no OCR/PDF extraction service or AI backend connected.
            // Never simulate processing or display sample values as if they came from the selected file.
            hideAllStates();
            if (pendingState) pendingState.style.display = 'block';
        }

        if (processBtn) {
            processBtn.addEventListener('click', processFile);
        }
    }

    // =========================
    // Terminology Browser
    // =========================
    function initTerminologyBrowser() {
        const grid = document.getElementById('termsGrid');
        const input = document.getElementById('termSearchInput');
        if (!grid || typeof medicalTerms === 'undefined') return;

        function renderTerms(filter) {
            var f = (filter || '').toLowerCase();
            var terms = medicalTerms.filter(function(t) {
                return t.term.toLowerCase().indexOf(f) !== -1 ||
                       t.category.toLowerCase().indexOf(f) !== -1 ||
                       t.simpleExplanation.toLowerCase().indexOf(f) !== -1;
            });

            if (terms.length === 0) {
                grid.innerHTML = '<p class="no-terms">No terms found. Try a different search.</p>';
                return;
            }

            grid.innerHTML = terms.map(function(t) {
                return `<div class="term-card">
                    <div class="term-header">
                        <h4>${t.term}</h4>
                        <span class="term-category">${t.category}</span>
                    </div>
                    <p class="term-description">${t.simpleExplanation}</p>
                    <div class="term-details">
                        <p><strong>Normal Range:</strong> ${t.normalRange}</p>
                        <p><strong>High:</strong> ${t.highMeans}</p>
                        <p><strong>Low:</strong> ${t.lowMeans}</p>
                    </div>
                </div>`;
            }).join('');
        }

        renderTerms('');
        if (input) {
            input.addEventListener('input', function() {
                renderTerms(input.value);
            });
        }
    }

    // =========================
    // Doctor Directory
    // =========================
    function getCategoryFromURL() {
        var params = new URLSearchParams(window.location.search);
        return params.get('category') || 'all';
    }

    function renderDoctors(filterText, categoryFilter) {
        const grid = document.getElementById('doctorsGrid');
        const noResults = document.getElementById('noResults');
        const resultsCount = document.getElementById('resultsCount');
        if (!grid || typeof doctorsData === 'undefined') return;

        var ft = (filterText || '').toLowerCase().trim();
        var cf = (categoryFilter || 'all').toLowerCase();

        var filtered = doctorsData.filter(function(doc) {
            var searchTarget = (
                doc.name + ' ' +
                (doc.nameForSearch || '') + ' ' +
                doc.specialisations.join(" ") + ' ' +
                (doc.clinic || '') + ' ' +
                (doc.hospital || '') + ' ' +
                doc.qualifications.join(' ') + ' ' +
                doc.specialisations.join(' ')
            ).toLowerCase();

            var normalizedSearchTarget = searchTarget.replace(/\bdr\.?\s*/g, '');
            var normalizedQuery = ft.replace(/\bdr\.?\s*/g, '').trim();
            var queryWords = normalizedQuery.split(/\s+/).filter(Boolean);
            var matchesText = !normalizedQuery || queryWords.every(function(word) {
                return normalizedSearchTarget.indexOf(word) !== -1;
            });
            var matchesCategory = cf === 'all' || doc.category.toLowerCase() === cf.toLowerCase();
            return matchesText && matchesCategory;
        });

        if (filtered.length === 0) {
            grid.style.display = 'none';
            if (noResults) noResults.style.display = 'block';
            if (resultsCount) resultsCount.textContent = 'No doctors found';
            return;
        }

        grid.style.display = 'grid';
        if (noResults) noResults.style.display = 'none';
        if (resultsCount) {
            resultsCount.textContent = 'Showing ' + filtered.length + ' doctor' + (filtered.length !== 1 ? 's' : '');
        }

        grid.innerHTML = filtered.map(function(doc) {
            var locationText = doc.address.split(',')[0];
            var feedbackHtml = '';
            if (doc.feedback && doc.feedback.positivePercent !== null && doc.feedback.totalRecords !== null) {
                feedbackHtml = `<div class="doctor-feedback">
                    <span class="feedback-percent">${doc.feedback.positivePercent}%</span>
                    <span class="feedback-count">positive (${doc.feedback.totalRecords} reviews)</span>
                </div>`;
            }
            var ratingHtml = '';
            if (doc.clinicRating) {
                ratingHtml = `<div class="doctor-rating">
                    <span class="rating-stars">${'★'.repeat(Math.floor(doc.clinicRating))}${'☆'.repeat(5 - Math.floor(doc.clinicRating))}</span>
                    <span class="rating-value">${doc.clinicRating}/5</span>
                    <span class="rating-label">clinic rating (source-reported)</span>
                </div>`;
            } else if (doc.hospitalRating) {
                ratingHtml = `<div class="doctor-rating">
                    <span class="rating-stars">${'★'.repeat(Math.floor(doc.hospitalRating))}${'☆'.repeat(5 - Math.floor(doc.hospitalRating))}</span>
                    <span class="rating-value">${doc.hospitalRating}/5</span>
                    <span class="rating-label">hospital rating (source-reported)</span>
                </div>`;
            }

            return `<div class="doctor-card" data-id="${doc.id}">
                <div class="doctor-card-header">
                    <div class="doctor-avatar">${doc.name.split(' ').map(function(n){return n[0];}).join('').substring(0,2)}</div>
                    <div class="doctor-card-meta">
                        <h3 class="doctor-name">${doc.name}</h3>
                        <span class="doctor-specialty">${doc.specialisations[0]}</span>
                    </div>
                </div>
                <div class="doctor-card-body">
                    <p class="doctor-qualifications">${doc.qualifications.join(', ')}</p>
                    <p class="doctor-hospital">${doc.clinic || doc.hospital}</p>
                    <p class="doctor-location">${locationText}</p>
                    <p class="doctor-experience">${doc.experienceOverall} overall experience</p>
                    ${feedbackHtml}
                    ${ratingHtml}
                    <p class="doctor-fee">${doc.currency}${doc.consultationFee} consultation fee</p>
                </div>
                <div class="doctor-card-footer">
                    <button class="btn btn-outline btn-sm view-profile-btn" data-id="${doc.id}">View Profile</button>
                </div>
            </div>`;
        }).join('');

        // Attach profile view handlers
        document.querySelectorAll('.view-profile-btn').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                openDoctorModal(parseInt(btn.dataset.id));
            });
        });
        document.querySelectorAll('.doctor-card').forEach(function(card) {
            card.addEventListener('click', function(e) {
                if (e.target.closest('.view-profile-btn')) return;
                openDoctorModal(parseInt(card.dataset.id));
            });
        });
    }

    function initDoctorDirectory() {
        const searchInput = document.getElementById('doctorSearchInput');
        const categoryFilter = document.getElementById('categoryFilter');
        const clearBtn = document.getElementById('clearFiltersBtn');

        // Check URL for category parameter
        var urlCategory = getCategoryFromURL();

        function update() {
            var text = searchInput ? searchInput.value : '';
            var cat = categoryFilter ? categoryFilter.value : 'all';
            // If URL has category and filter hasn't been manually changed, use URL category
            if (urlCategory && urlCategory !== 'all' && categoryFilter && categoryFilter.value === 'all') {
                // Try to match the category
                var options = Array.from(categoryFilter.options);
                var match = options.find(function(o) {
                    return o.value.toLowerCase() === urlCategory.toLowerCase();
                });
                if (match) {
                    categoryFilter.value = match.value;
                    cat = match.value;
                }
                urlCategory = null; // Only apply once
            }
            renderDoctors(text, cat);
        }

        if (searchInput) searchInput.addEventListener('input', update);
        if (categoryFilter) categoryFilter.addEventListener('change', update);
        if (clearBtn) {
            clearBtn.addEventListener('click', function() {
                if (searchInput) searchInput.value = '';
                if (categoryFilter) categoryFilter.value = 'all';
                update();
            });
        }

        update();
    }

    // =========================
    // Doctor Profile Modal
    // =========================
    function openDoctorModal(id) {
        if (typeof doctorsData === 'undefined') return;
        var doc = doctorsData.find(function(d) { return d.id === id; });
        if (!doc) return;

        const modal = document.getElementById('doctorModal');
        const modalBody = document.getElementById('modalBody');
        if (!modal || !modalBody) return;

        var phoneDisplay = doc.phone && doc.phoneVerified
            ? `<a href="tel:${doc.phone}" class="contact-link">${doc.phone}</a>`
            : '<span class="contact-placeholder">Contact details not yet verified</span>';
        var emailDisplay = doc.email && doc.emailVerified
            ? `<a href="mailto:${doc.email}" class="contact-link">${doc.email}</a>`
            : '<span class="contact-placeholder">Email not yet verified</span>';
        var apptDisplay = doc.appointmentUrl && doc.appointmentUrlVerified
            ? `<a href="${doc.appointmentUrl}" target="_blank" class="btn btn-primary">Book Appointment</a>`
            : '<span class="contact-placeholder">Appointment booking not yet verified</span>';

        var callBtn = doc.phone && doc.phoneVerified
            ? `<a href="tel:${doc.phone}" class="btn btn-primary">Call Now</a>`
            : '';

        // Directions link using address
        var directionsLink = doc.address
            ? `<a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(doc.address)}" target="_blank" class="directions-link">Get Directions</a>`
            : '';

        // Feedback display
        var feedbackHtml = '';
        if (doc.feedback && doc.feedback.positivePercent !== null && doc.feedback.totalRecords !== null) {
            feedbackHtml = `<div class="modal-info-item">
                <span class="modal-label">Patient Feedback</span>
                <span class="modal-value">
                    <span class="feedback-percent-large">${doc.feedback.positivePercent}%</span>
                    <span class="feedback-detail">positive (${doc.feedback.totalRecords} records)</span>
                    <span class="source-note">${doc.feedback.note}</span>
                </span>
            </div>`;
        }

        // Rating display
        var ratingHtml = '';
        if (doc.clinicRating) {
            ratingHtml = `<div class="modal-info-item">
                <span class="modal-label">Clinic Rating</span>
                <span class="modal-value">
                    <span class="rating-stars">${'★'.repeat(Math.floor(doc.clinicRating))}${'☆'.repeat(5 - Math.floor(doc.clinicRating))}</span>
                    <span class="rating-value">${doc.clinicRating}/5</span>
                    <span class="source-note">Source-reported figure. Awaiting independent verification.</span>
                </span>
            </div>`;
        } else if (doc.hospitalRating) {
            ratingHtml = `<div class="modal-info-item">
                <span class="modal-label">Hospital Rating</span>
                <span class="modal-value">
                    <span class="rating-stars">${'★'.repeat(Math.floor(doc.hospitalRating))}${'☆'.repeat(5 - Math.floor(doc.hospitalRating))}</span>
                    <span class="rating-value">${doc.hospitalRating}/5</span>
                    <span class="source-note">Source-reported figure. Awaiting independent verification.</span>
                </span>
            </div>`;
        }

        // Additional notes
        var notesHtml = '';
        if (doc.additionalNotes && doc.additionalNotes.length > 0) {
            notesHtml = `<div class="modal-section">
                <h4>Notes</h4>
                <div class="modal-notes">
                    ${doc.additionalNotes.map(function(note) {
                        return `<div class="modal-note-item">&#9888; ${note}</div>`;
                    }).join('')}
                </div>
            </div>`;
        }

        // Position display
        var positionHtml = doc.position
            ? `<div class="modal-info-item">
                <span class="modal-label">Position</span>
                <span class="modal-value">${doc.position}</span>
            </div>`
            : '';

        // Specialist experience
        var specialistExpHtml = doc.experienceSpecialist
            ? `<div class="modal-info-item">
                <span class="modal-label">Specialist Experience</span>
                <span class="modal-value">${doc.experienceSpecialist}</span>
            </div>`
            : '';

        // Waiting time
        var waitingHtml = doc.maxWaitingTime
            ? `<div class="modal-info-item">
                <span class="modal-label">Max Waiting Time</span>
                <span class="modal-value">${doc.maxWaitingTime}</span>
            </div>`
            : '';

        modalBody.innerHTML = `
            <div class="modal-avatar-section">
                <div class="modal-avatar">${doc.name.split(' ').map(function(n){return n[0];}).join('').substring(0,2)}</div>
                <div class="modal-title-block">
                    <h2>${doc.name}</h2>
                    <span class="modal-specialty">${doc.specialisations.join(', ')}</span>
                    <span class="modal-experience">${doc.experienceOverall} overall experience</span>
                </div>
            </div>
            <div class="modal-info-grid">
                <div class="modal-info-item">
                    <span class="modal-label">Qualifications</span>
                    <span class="modal-value">${doc.qualifications.join(', ')}</span>
                </div>
                ${positionHtml}
                <div class="modal-info-item">
                    <span class="modal-label">${doc.clinic ? 'Clinic' : 'Hospital'}</span>
                    <span class="modal-value">${doc.clinic || doc.hospital}</span>
                </div>
                <div class="modal-info-item">
                    <span class="modal-label">Consultation Fee</span>
                    <span class="modal-value">${doc.currency}${doc.consultationFee}</span>
                </div>
                ${specialistExpHtml}
                ${waitingHtml}
                ${feedbackHtml}
                ${ratingHtml}
            </div>
            <div class="modal-section">
                <h4>About</h4>
                <p>${doc.about}</p>
            </div>
            <div class="modal-section">
                <h4>Address</h4>
                <p>${doc.address} ${directionsLink}</p>
            </div>
            <div class="modal-section">
                <h4>Consultation Timings</h4>
                <ul class="timings-list">
                    ${doc.consultationTimings.map(function(t) {
                        return `<li>${t}</li>`;
                    }).join('')}
                </ul>
            </div>
            <div class="modal-section">
                <h4>Languages</h4>
                <p>${doc.languages.join(', ')}</p>
            </div>
            ${notesHtml}
            <div class="modal-section">
                <h4>Registration Status</h4>
                <p class="registration-note">${doc.registrationStatus}</p>
            </div>
            <div class="modal-section">
                <h4>Contact & Appointment</h4>
                <div class="modal-contact-grid">
                    <div class="modal-contact-item">
                        <span class="modal-label">Phone</span>
                        ${phoneDisplay}
                    </div>
                    <div class="modal-contact-item">
                        <span class="modal-label">Email</span>
                        ${emailDisplay}
                    </div>
                    <div class="modal-contact-item">
                        <span class="modal-label">Appointment</span>
                        ${apptDisplay}
                    </div>
                </div>
                <div class="modal-contact-actions">
                    ${callBtn}
                </div>
            </div>
            <div class="modal-notice">
                <p><strong>Note:</strong> This is a prototype directory. Doctor information is for demonstration purposes. All ratings, registration claims, and experience details are source-reported and awaiting independent verification. Contact details and credentials should be independently verified before making any healthcare decisions.</p>
            </div>
        `;

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function initModal() {
        const modal = document.getElementById('doctorModal');
        const closeBtn = document.getElementById('modalClose');
        if (!modal) return;

        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeModal();
        });
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeModal();
        });
    }

    // =========================
    // Initialize on DOM ready
    // =========================
    document.addEventListener('DOMContentLoaded', function() {
        initNavigation();
        renderCategories();
        renderStats();
        initReportUpload();
        initTerminologyBrowser();
        initDoctorDirectory();
        initModal();
    });
})();
