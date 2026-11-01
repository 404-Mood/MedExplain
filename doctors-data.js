// MedExplain - Doctor Directory Data
// Structured, editable data source for all doctor records.
// All information below is as supplied by the source and marked accordingly.

const doctorsData = [
    // ==================== ORTHOPAEDICS (2) ====================
    {
        id: 1,
        name: "Dr. Shubham Kejriwal",
        nameForSearch: "Shubham Kejriwal",
        category: "Orthopaedics",
        categoryDisplay: "Orthopaedics",
        qualifications: ["MBBS", "MS Orthopaedics"],
        specialisations: ["Orthopaedic Surgeon", "Joint Replacement", "Spine and Pain Management"],
        experienceOverall: "15 years",
        experienceSpecialist: "8 years",
        registrationStatus: "Registration reported as verified in the supplied source. Independent verification is pending.",
        feedback: {
            positivePercent: 99,
            totalRecords: 179,
            note: "Reported figures from supplied source. Awaiting independent verification."
        },
        clinic: "Kejriwal Clinic",
        hospital: null,
        address: "C-1251, Aravali Marg, C Block, Indira Nagar, Lucknow.",
        consultationTimings: [
            "Monday to Saturday: 4:00 PM – 8:00 PM",
            "Sunday: 11:00 AM – 5:00 PM"
        ],
        consultationFee: 700,
        currency: "₹",
        maxWaitingTime: null,
        clinicRating: null,
        hospitalRating: null,
        additionalNotes: [],
        phone: "",
        phoneVerified: false,
        appointmentUrl: "",
        appointmentUrlVerified: false,
        lastVerifiedDate: null,
        email: "",
        emailVerified: false,
        languages: ["English", "Hindi"],
        about: "Orthopaedic surgeon specialising in joint replacement and spine and pain management. 15 years overall experience with 8 years as a specialist."
    },
    {
        id: 2,
        name: "Dr. Shivendra Srivastava",
        nameForSearch: "Shivendra Srivastava",
        category: "Orthopaedics",
        categoryDisplay: "Orthopaedics",
        qualifications: ["MBBS", "MS Orthopaedics"],
        specialisations: ["Orthopaedics", "Joint Replacement"],
        experienceOverall: "26 years",
        experienceSpecialist: "20 years",
        registrationStatus: "Registration reported as verified in the supplied source. Independent verification is pending.",
        feedback: {
            positivePercent: 89,
            totalRecords: 273,
            note: "Reported figures from supplied source. Awaiting independent verification."
        },
        clinic: "Shivendra's Ortho Clinic",
        hospital: null,
        address: "A733, A Block, opposite Convention Center, Indira Nagar, Lucknow.",
        consultationTimings: [
            "Monday to Saturday: 11:00 AM – 3:30 PM",
            "Monday to Saturday: 6:30 PM – 8:45 PM"
        ],
        consultationFee: 700,
        currency: "₹",
        maxWaitingTime: "30 minutes",
        clinicRating: null,
        hospitalRating: null,
        additionalNotes: [],
        phone: "",
        phoneVerified: false,
        appointmentUrl: "",
        appointmentUrlVerified: false,
        lastVerifiedDate: null,
        email: "",
        emailVerified: false,
        languages: ["English", "Hindi"],
        about: "Orthopaedic specialist with 26 years overall experience and 20 years specialist experience. Focus on joint replacement and general orthopaedics."
    },
    // ==================== DENTISTRY & ORAL/MAXILLOFACIAL SURGERY (2) ====================
    {
        id: 3,
        name: "Dr. Indrajeet Singh",
        nameForSearch: "Indrajeet Singh",
        category: "Dentistry & Oral/Maxillofacial Surgery",
        categoryDisplay: "Dentistry & Oral/Maxillofacial Surgery",
        qualifications: ["BDS", "MDS Oral & Maxillofacial Surgery"],
        specialisations: ["Dentist", "Oral and Maxillofacial Surgery", "Cosmetic and Aesthetic Dentistry"],
        experienceOverall: "20 years",
        experienceSpecialist: null,
        registrationStatus: "Registration reported as verified in the supplied source. Independent verification is pending.",
        feedback: {
            positivePercent: 98,
            totalRecords: 93,
            note: "Reported figures from supplied source. Awaiting independent verification."
        },
        clinic: "Dentomax – Dento-Oral & Maxillofacial Clinic",
        hospital: null,
        address: "No. 4A, Kamta, Chowk Ayodhya Road, near Surendra Nagar Gate, before Shaheed Path, Gomti Nagar, Lucknow.",
        consultationTimings: [
            "Monday to Saturday: 10:00 AM – 2:00 PM",
            "Monday to Saturday: 5:30 PM – 8:30 PM",
            "Sunday: 10:00 AM – 5:00 PM"
        ],
        consultationFee: 500,
        currency: "₹",
        maxWaitingTime: null,
        clinicRating: 3,
        hospitalRating: null,
        additionalNotes: [],
        phone: "",
        phoneVerified: false,
        appointmentUrl: "",
        appointmentUrlVerified: false,
        lastVerifiedDate: null,
        email: "",
        emailVerified: false,
        languages: ["English", "Hindi"],
        about: "Dental surgeon with 20 years of experience specialising in oral and maxillofacial surgery and cosmetic and aesthetic dentistry."
    },
    {
        id: 4,
        name: "Dr. Vikas Kumar",
        nameForSearch: "Vikas Kumar",
        category: "Dentistry & Oral/Maxillofacial Surgery",
        categoryDisplay: "Dentistry & Oral/Maxillofacial Surgery",
        qualifications: ["BDS", "MDS Oral & Maxillofacial Surgery"],
        specialisations: ["Oral and Maxillofacial Surgery", "Implantology", "Dentistry"],
        experienceOverall: "19 years",
        experienceSpecialist: null,
        registrationStatus: "Registration reported as verified in the supplied source. Independent verification is pending.",
        feedback: {
            positivePercent: 99,
            totalRecords: 1167,
            note: "Reported figures from supplied source. Awaiting independent verification."
        },
        clinic: "Pushpa Dental Speciality Center",
        hospital: null,
        address: "A-131, LGF, Sahara Plaza, Patrakarpuram, Vikas Khand, near Patrakarpuram Crossing, Gomti Nagar, Lucknow.",
        consultationTimings: [
            "Monday: 11:00 AM – 2:00 PM",
            "Tuesday: 2:00 PM – 5:00 PM and 6:00 PM – 9:00 PM",
            "Wednesday to Saturday: 11:00 AM – 2:00 PM and 6:00 PM – 9:00 PM"
        ],
        consultationFee: 500,
        currency: "₹",
        maxWaitingTime: null,
        clinicRating: 3,
        hospitalRating: null,
        additionalNotes: [],
        phone: "",
        phoneVerified: false,
        appointmentUrl: "",
        appointmentUrlVerified: false,
        lastVerifiedDate: null,
        email: "",
        emailVerified: false,
        languages: ["English", "Hindi"],
        about: "Oral and maxillofacial surgeon with 19 years of experience. Specialises in implantology and general dentistry."
    },
    // ==================== PEDIATRICS & CHILD HEALTH (2) ====================
    {
        id: 5,
        name: "Dr. Jitendra Singh",
        nameForSearch: "Jitendra Singh",
        category: "Pediatrics & Child Health",
        categoryDisplay: "Pediatrics & Child Health",
        qualifications: ["MBBS", "MD Pediatrics"],
        specialisations: ["Pediatrician", "General Physician"],
        experienceOverall: "12 years",
        experienceSpecialist: "5 years",
        registrationStatus: "Registration reported as verified in the supplied source. Independent verification is pending.",
        feedback: {
            positivePercent: null,
            totalRecords: null,
            note: "Feedback data not supplied."
        },
        clinic: null,
        hospital: "Sanjivini Super Speciality Hospital",
        address: "CP 23, Viraj Khand, near Indira Nagar, Gomti Nagar, Lucknow.",
        consultationTimings: [
            "Monday to Saturday: 4:30 PM – 8:30 PM"
        ],
        consultationFee: 600,
        currency: "₹",
        maxWaitingTime: "15 minutes",
        clinicRating: null,
        hospitalRating: 3.5,
        additionalNotes: [
            "The supplied description separately mentions 8 years of clinical experience as a neonatologist/pediatrician, which differs from the 5 years specialist experience reported elsewhere. This discrepancy has been flagged for verification."
        ],
        phone: "",
        phoneVerified: false,
        appointmentUrl: "",
        appointmentUrlVerified: false,
        lastVerifiedDate: null,
        email: "",
        emailVerified: false,
        languages: ["English", "Hindi"],
        about: "Pediatrician and general physician with 12 years overall experience. Note: there is a discrepancy in reported specialist experience (5 years vs 8 years as neonatologist/pediatrician) that requires verification."
    },
    {
        id: 6,
        name: "Dr. Sonali Mahera",
        nameForSearch: "Sonali Mahera",
        category: "Pediatrics & Child Health",
        categoryDisplay: "Pediatrics & Child Health",
        qualifications: ["DCH", "MBBS", "DNB Pediatrics"],
        specialisations: ["Pediatrician", "Pediatric Gastroenterologist", "Gastro-Hepatologist"],
        experienceOverall: "14 years",
        experienceSpecialist: "11 years",
        registrationStatus: "Registration reported as verified in the supplied source. Independent verification is pending.",
        feedback: {
            positivePercent: 100,
            totalRecords: 66,
            note: "Reported figures from supplied source. Awaiting independent verification."
        },
        clinic: "Dr. Sonali Child Care & Gastro Clinic",
        hospital: null,
        address: "Gomti Nagar, Lucknow. Exact street address not supplied.",
        consultationTimings: [
            "Monday to Saturday: 12:00 PM – 2:00 PM",
            "Monday to Saturday: 6:30 PM – 8:30 PM"
        ],
        consultationFee: 1100,
        currency: "₹",
        maxWaitingTime: null,
        clinicRating: 3,
        hospitalRating: null,
        additionalNotes: [],
        phone: "",
        phoneVerified: false,
        appointmentUrl: "",
        appointmentUrlVerified: false,
        lastVerifiedDate: null,
        email: "",
        emailVerified: false,
        languages: ["English", "Hindi"],
        about: "Pediatric gastroenterologist and gastro-hepatologist with 14 years overall experience and 11 years specialist experience."
    },
    // ==================== CARDIOLOGY (3) ====================
    {
        id: 7,
        name: "Dr. Mukesh Jaiswal",
        nameForSearch: "Mukesh Jaiswal",
        category: "Cardiology",
        categoryDisplay: "Cardiology",
        qualifications: ["MBBS", "MD Medicine", "DM Cardiology"],
        specialisations: ["Cardiology"],
        experienceOverall: "14 years",
        experienceSpecialist: null,
        registrationStatus: "Registration reported as verified in the supplied source. Independent verification is pending.",
        feedback: {
            positivePercent: null,
            totalRecords: null,
            note: "Feedback data not supplied."
        },
        clinic: null,
        hospital: "Max Super Speciality Hospital",
        address: "Hanemann Chauraha, Gomti Nagar Number 1, Viraj Khand, Lucknow.",
        consultationTimings: [
            "Monday to Saturday: 9:00 AM – 5:00 PM"
        ],
        consultationFee: 700,
        currency: "₹",
        maxWaitingTime: null,
        clinicRating: null,
        hospitalRating: 4.5,
        additionalNotes: [],
        phone: "",
        phoneVerified: false,
        appointmentUrl: "",
        appointmentUrlVerified: false,
        lastVerifiedDate: null,
        email: "",
        emailVerified: false,
        languages: ["English", "Hindi"],
        about: "Cardiologist with 14 years of experience. Practises at Max Super Speciality Hospital."
    },
    {
        id: 8,
        name: "Dr. Ambukeshwar Singh",
        nameForSearch: "Ambukeshwar Singh",
        category: "Cardiology",
        categoryDisplay: "Cardiology",
        qualifications: ["MBBS", "DM Cardiology"],
        specialisations: ["Cardiology", "Interventional Cardiology"],
        position: "Associate Director & Unit Head – Interventional Cardiology",
        experienceOverall: "15 years",
        experienceSpecialist: "8 years",
        registrationStatus: "Registration reported as verified in the supplied source. Independent verification is pending.",
        feedback: {
            positivePercent: null,
            totalRecords: null,
            note: "Feedback data not supplied."
        },
        clinic: null,
        hospital: "Max Super Speciality Hospital",
        address: "Hanemann Chauraha, Gomti Nagar Number 1, Viraj Khand, Lucknow.",
        consultationTimings: [
            "Monday to Saturday: 9:00 AM – 5:00 PM"
        ],
        consultationFee: 700,
        currency: "₹",
        maxWaitingTime: null,
        clinicRating: null,
        hospitalRating: 4.5,
        additionalNotes: [],
        phone: "",
        phoneVerified: false,
        appointmentUrl: "",
        appointmentUrlVerified: false,
        lastVerifiedDate: null,
        email: "",
        emailVerified: false,
        languages: ["English", "Hindi"],
        about: "Associate Director & Unit Head of Interventional Cardiology with 15 years overall experience and 8 years specialist experience. Practises at Max Super Speciality Hospital."
    },
    {
        id: 9,
        name: "Dr. Lt. Col. R P Singh",
        nameForSearch: "R P Singh",
        category: "Cardiology",
        categoryDisplay: "Cardiology",
        qualifications: ["DNB General Medicine", "MBBS", "DNB Cardiology"],
        specialisations: ["Cardiologist", "Interventional Cardiologist", "Coronary Angiography"],
        experienceOverall: "22 years",
        experienceSpecialist: "4 years",
        registrationStatus: "Registration reported as verified in the supplied source. Independent verification is pending.",
        feedback: {
            positivePercent: 95,
            totalRecords: 39,
            note: "Reported figures from supplied source. Awaiting independent verification."
        },
        clinic: "Aarogyam Superspeciality Heart and Dental Clinic",
        hospital: null,
        address: "3/501, Vastu Khand, near Kathauta Jheel, Lucknow.",
        consultationTimings: [
            "Monday to Friday: 8:00 AM – 11:00 AM",
            "Monday to Friday: 3:00 PM – 9:00 PM",
            "Sunday: 9:00 AM – 2:00 PM"
        ],
        consultationFee: 900,
        currency: "₹",
        maxWaitingTime: "30 minutes",
        clinicRating: 4.5,
        hospitalRating: null,
        additionalNotes: [
            "Described in the supplied source as a retired Army doctor."
        ],
        phone: "",
        phoneVerified: false,
        appointmentUrl: "",
        appointmentUrlVerified: false,
        lastVerifiedDate: null,
        email: "",
        emailVerified: false,
        languages: ["English", "Hindi"],
        about: "Retired Army doctor and interventional cardiologist with 22 years overall experience. Specialises in coronary angiography. Practises at Aarogyam Superspeciality Heart and Dental Clinic."
    }
];

const categoryCounts = {
    "Orthopaedics": 2,
    "Dentistry & Oral/Maxillofacial Surgery": 2,
    "Pediatrics & Child Health": 2,
    "Cardiology": 3
};

const medicalCategories = [
    {
        id: "orthopaedics",
        title: "Orthopaedics",
        description: "Bone, joint, and muscle health including fractures, arthritis, and sports injuries.",
        icon: "🦴",
        count: 2,
        commonTerms: ["Fracture", "Arthritis", "Osteoporosis", "Ligament", "Cartilage"]
    },
    {
        id: "dentistry",
        title: "Dentistry & Oral/Maxillofacial Surgery",
        description: "Dental health, oral hygiene, and surgical procedures of the mouth and jaw.",
        icon: "🦷",
        count: 2,
        commonTerms: ["Cavity", "Root Canal", "Dental Implant", "Wisdom Tooth", "Gingivitis"]
    },
    {
        id: "pediatrics",
        title: "Pediatrics & Child Health",
        description: "Medical care for infants, children, and adolescents including growth and development.",
        icon: "👶",
        count: 2,
        commonTerms: ["Vaccination", "Growth Chart", "Neonatal", "Pediatric Dose", "Developmental Milestone"]
    },
    {
        id: "cardiology",
        title: "Cardiology",
        description: "Heart and blood vessel health including hypertension, heart disease, and cholesterol.",
        icon: "❤️",
        count: 3,
        commonTerms: ["Blood Pressure", "Cholesterol", "ECG", "Angiography", "Arrhythmia"]
    },
];

const medicalTerms = [
    {
        term: "Hemoglobin",
        category: "Blood Test",
        simpleExplanation: "Hemoglobin is a protein in your red blood cells that carries oxygen from your lungs to the rest of your body. Think of it like delivery trucks carrying oxygen to every cell.",
        normalRange: "Men: 13.5-17.5 g/dL, Women: 12.0-15.5 g/dL",
        highMeans: "May indicate dehydration, lung disease, or bone marrow disorders.",
        lowMeans: "May indicate anemia, blood loss, or nutritional deficiency (iron, B12, folate)."
    },
    {
        term: "Blood Pressure",
        category: "Vital Signs",
        simpleExplanation: "Blood pressure is the force of blood pushing against the walls of your arteries. It has two numbers: systolic (pressure when the heart beats) over diastolic (pressure when the heart rests).",
        normalRange: "Less than 120/80 mmHg",
        highMeans: "High blood pressure (hypertension) increases the risk of heart disease, stroke, and kidney problems.",
        lowMeans: "Low blood pressure can cause dizziness, fainting, and may indicate dehydration or other conditions."
    },
    {
        term: "Blood Sugar (Glucose)",
        category: "Diabetes",
        simpleExplanation: "Blood sugar is the amount of glucose in your blood. Glucose is your body's main source of energy. Insulin helps move glucose from blood into cells.",
        normalRange: "Fasting: 70-100 mg/dL, After meal: less than 140 mg/dL",
        highMeans: "High blood sugar may indicate diabetes or prediabetes. Over time, it can damage nerves, eyes, and kidneys.",
        lowMeans: "Low blood sugar can cause shaking, sweating, confusion, and can be dangerous if untreated."
    },
    {
        term: "Cholesterol",
        category: "Lipid Profile",
        simpleExplanation: "Cholesterol is a waxy substance in your blood. Your body needs it to build cells, but too much can clog arteries. There are 'good' (HDL) and 'bad' (LDL) types.",
        normalRange: "Total: less than 200 mg/dL, LDL: less than 100 mg/dL, HDL: 40-60 mg/dL",
        highMeans: "High cholesterol increases the risk of heart disease and stroke by forming plaques in arteries.",
        lowMeans: "Very low cholesterol is uncommon but may be linked to certain health conditions."
    },
    {
        term: "Thyroid (TSH)",
        category: "Hormones",
        simpleExplanation: "TSH (Thyroid Stimulating Hormone) tells your thyroid gland how much hormone to make. The thyroid controls metabolism, energy, and body temperature.",
        normalRange: "0.4-4.0 mIU/L",
        highMeans: "High TSH usually means an underactive thyroid (hypothyroidism), causing fatigue, weight gain, and cold sensitivity.",
        lowMeans: "Low TSH usually means an overactive thyroid (hyperthyroidism), causing weight loss, anxiety, and heat sensitivity."
    },
    {
        term: "Platelet Count",
        category: "Blood Test",
        simpleExplanation: "Platelets are tiny cell fragments that help your blood clot. They rush to the site of a cut to form a plug and stop bleeding.",
        normalRange: "150,000-450,000 per microliter",
        highMeans: "High platelets may increase clotting risk and can be associated with certain disorders.",
        lowMeans: "Low platelets can cause easy bruising and bleeding. It may result from infections, medications, or immune conditions."
    },
    {
        term: "WBC Count",
        category: "Blood Test",
        simpleExplanation: "White Blood Cells (WBCs) are your immune system's soldiers. They fight infections, viruses, and other invaders in your body.",
        normalRange: "4,000-11,000 per microliter",
        highMeans: "High WBC often means your body is fighting an infection, inflammation, or in rare cases, blood disorders.",
        lowMeans: "Low WBC can make you more prone to infections and may be caused by certain medications or conditions."
    },
    {
        term: "Creatinine",
        category: "Kidney Function",
        simpleExplanation: "Creatinine is a waste product from muscle activity. Your kidneys filter it out of the blood. It is a key marker of kidney function.",
        normalRange: "Men: 0.7-1.3 mg/dL, Women: 0.6-1.1 mg/dL",
        highMeans: "High creatinine may indicate reduced kidney function or kidney disease.",
        lowMeans: "Low creatinine is usually not concerning and may relate to low muscle mass."
    },
    {
        term: "ECG / EKG",
        category: "Cardiology",
        simpleExplanation: "An ECG (electrocardiogram) records the electrical activity of your heart. It shows how your heart beats and can detect rhythm problems or signs of a past heart attack.",
        normalRange: "Normal sinus rhythm: 60-100 beats per minute",
        highMeans: "A fast heart rate (tachycardia) on ECG may indicate stress, fever, arrhythmia, or other conditions.",
        lowMeans: "A slow heart rate (bradycardia) may be normal for athletes or may indicate a conduction problem."
    },
    {
        term: "Uric Acid",
        category: "Metabolism",
        simpleExplanation: "Uric acid is a waste product from breaking down purines (found in certain foods). Most of it leaves through urine. Too much can form crystals in joints.",
        normalRange: "Men: 3.5-7.2 mg/dL, Women: 2.6-6.0 mg/dL",
        highMeans: "High uric acid can cause gout (painful joint inflammation) and kidney stones.",
        lowMeans: "Low uric acid is rarely a concern."
    },
    {
        term: "Vitamin D",
        category: "Vitamins",
        simpleExplanation: "Vitamin D helps your body absorb calcium for strong bones. Your skin makes it when exposed to sunlight. Many people are deficient, especially in less sunny climates.",
        normalRange: "30-100 ng/mL (sufficient), 20-29 ng/mL (insufficient)",
        highMeans: "Very high Vitamin D is usually from excessive supplements and can cause calcium buildup.",
        lowMeans: "Low Vitamin D can cause bone pain, muscle weakness, and increased risk of fractures."
    },
    {
        term: "C-Reactive Protein (CRP)",
        category: "Inflammation",
        simpleExplanation: "CRP is a protein made by your liver when there is inflammation in your body. It is a general marker that something may be causing irritation or infection.",
        normalRange: "Less than 1.0 mg/L (low risk), 1.0-3.0 mg/L (moderate risk)",
        highMeans: "High CRP indicates inflammation, which could be from infection, autoimmune disease, or even heart disease risk.",
        lowMeans: "Low CRP is normal and indicates no significant inflammation."
    }
];

// Demo values for report output demonstration
const demoReportValues = [
    { test: "Hemoglobin", value: "11.2", unit: "g/dL", range: "12.0-15.5", status: "low" },
    { test: "WBC Count", value: "7,500", unit: "/uL", range: "4,000-11,000", status: "normal" },
    { test: "Platelet Count", value: "250,000", unit: "/uL", range: "150,000-450,000", status: "normal" },
    { test: "Blood Sugar (Fasting)", value: "98", unit: "mg/dL", range: "70-100", status: "normal" },
    { test: "Creatinine", value: "0.9", unit: "mg/dL", range: "0.6-1.1", status: "normal" },
    { test: "Vitamin D", value: "18", unit: "ng/mL", range: "30-100", status: "low" }
];
