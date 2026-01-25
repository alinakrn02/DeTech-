// Data terjemahan untuk semua bahasa
const translations = {
  id: {
    // Login Modal
    loginTitle: "Selamat Datang di DeTech",
    usernameLabel: "Nama Pengguna",
    passwordLabel: "Kata Sandi",
    languageLabel: "Pilih Bahasa Lokal",
    languageHint: "Semua konten akan diterjemahkan ke bahasa pilihan Anda",
    voiceBtnText: "Deteksi Bahasa dengan Suara",
    loginBtnText: "Masuk ke Dashboard",
    loginNote: "Bahasa akan direset ke Indonesia saat logout",

    // Header
    appTitle: "DeTech",
    appSubtitle: "Sistem Pintar Pendanaan UMKM Pedesaan",
    welcomeText: "Selamat Datang",
    logoutText: "Keluar",

    // Notifications
    notificationTitle: "Notifikasi",
    markAllRead: "Tandai semua terbaca",
    viewAllNotifications: "Lihat semua notifikasi",

    // Search
    searchPlaceholder: "Cari fitur, bantuan, atau informasi...",
    searchButton: "Cari",

    // Status Bar
    lastLogin: "Login terakhir",
    loginTime: "Hari ini, 10:30",
    currentLanguageLabel: "Bahasa aktif",
    selectedLanguage: "Indonesia",
    notificationLabel: "Notifikasi",
    notificationCount: "3 baru",

    // Dashboard
    dashboardTitle: "Dashboard DeTech",
    dashboardSubtitle:
      "Kelola dan Pantau Semua Aktivitas Kredit Mikro UMKM Anda di Satu Tempat",

    // Stats
    stat1Title: "Kredit Tersedia",
    stat2Title: "Pengajuan Aktif",
    stat3Title: "Kredit Disetujui",
    stat4Title: "Rating Sistem",

    // Cards
    card1Title: "Analisis Kredit AI",
    card1Text:
      "Analisa kecocokan kredit mikro untuk UMKM Anda dengan teknologi AI canggih yang dapat memprediksi kelayakan dengan akurasi 95%.",
    card1BtnText: "Mulai Analisis",
    demoBtnText: "Lihat Demo",
    feature1Text: "Analisis profil bisnis otomatis",
    feature2Text: "Prediksi kelayakan real time",
    feature3Text: "Rekomendasi plafon kredit",

    card2Title: "Pelacakan Integritas",
    card2Text:
      "Awasi integritas dan riwayat kredit mikro Anda dengan sistem yang transparan dan real time monitoring.",
    card2BtnText: "Lihat Riwayat",
    reportBtnText: "Unduh Laporan",
    progress1Label: "Kredit aktif",
    progress2Label: "Pembayaran lancar",

    card3Title: "Asisten Suara AI",
    card3Text:
      "Gunakan asisten suara untuk navigasi dan informasi dalam bahasa daerah Indonesia dengan teknologi speech recognition.",
    card3BtnText: "Aktifkan Suara",
    voiceCommandsBtnText: "Perintah Suara",
    voicePlaceholder: "Katakan perintah atau pertanyaan...",
    langBadge1: "Indonesia",
    langBadge2: "Jawa",
    langBadge3: "Sunda",
    langBadge4: "+5 lainnya",

    // Status Persetujuan Card
    card4Title: "Status Persetujuan",
    card4Text: "Pantau status persetujuan kredit Anda dan cara pencairan dana.",
    step1TitleTimeline: "Pengajuan",
    step1TextTimeline: "Terkirim ke sistem",
    step2TitleTimeline: "Review AI",
    step2TextTimeline: "Analisis oleh sistem AI",
    step3TitleTimeline: "Operator",
    step3TextTimeline: "Verifikasi oleh operator",
    step4TitleTimeline: "Pencairan",
    step4TextTimeline: "Dana ditransfer",
    checkStatusBtnText: "Cek Status",
    detailsBtnText: "Detail",

    // Pencairan Dana
    disbursementTitle: "Pencairan Dana Kredit",
    disbursementSubtitle: "Cara mendapatkan dana kredit yang telah disetujui",
    method1Title: "Transfer Bank",
    method1Desc: "Dana langsung ke rekening bank Anda",
    method1Time: "1-2 hari kerja",
    method1Fee: "Gratis biaya",
    method2Title: "E-Wallet",
    method2Desc: "Instan ke GoPay, OVO, Dana, dll",
    method2Time: "Instan",
    method2Fee: "Rp 2.500",
    method3Title: "Tunai di Lokasi",
    method3Desc: "Ambil tunai di kantor kami",
    method3Time: "1 hari kerja",
    method3Fee: "Rp 5.000",
    method4Title: "Kirim via POS",
    method4Desc: "Dikirim ke alamat Anda",
    method4Time: "2-3 hari",
    method4Fee: "Rp 10.000",
    formTitle: "Form Pencairan Dana",
    amountLabelForm: "Jumlah Dana",
    methodLabelForm: "Metode Pencairan",
    bankAccountLabel: "Nomor Rekening",
    bankNameLabel: "Nama Bank",
    accountNameLabel: "Nama Pemilik Rekening",
    ewalletNumberLabel: "Nomor E-Wallet",
    ewalletTypeLabel: "Jenis E-Wallet",
    addressLabel: "Alamat Pengiriman",
    notesLabel: "Catatan (Opsional)",
    cancelDisbursementBtn: "Batal",
    submitDisbursementText: "Ajukan Pencairan",

    // Additional Features
    additionalFeaturesTitle: "Fitur Tambahan Lengkap",
    additionalFeaturesDesc:
      "Akses semua fitur pendukung untuk pengelolaan kredit mikro yang optimal",
    featureItem1Title: "Kalkulator Kredit",
    featureItem1Text: "Hitung cicilan dan bunga dengan mudah",
    featureItem2Title: "Edukasi Finansial",
    featureItem2Text: "Materi edukasi keuangan untuk UMKM",
    featureItem3Title: "Konsultasi Online",
    featureItem3Text: "Konsultasi dengan ahli keuangan",
    featureItem4Title: "Perlindungan Data",
    featureItem4Text: "Keamanan data dengan enkripsi AES-256",
    miniCalcText: "Cicilan: Rp 500.000/bln",
    progressTextLabel: "Materi terselesaikan",
    consultantStatus: "3 konsultan online",
    securityStatus: "Aman 100%",

    // Footer
    footerTagline: "Membangun UMKM Pedesaan dengan Teknologi Cerdas",
    footerLinksTitle: "Tautan Cepat",
    footerLink1: "Tentang Kami",
    footerLink2: "Kebijakan Privasi",
    footerLink3: "Syarat & Ketentuan",
    footerLink4: "Bantuan & FAQ",
    footerContactTitle: "Kontak",
    copyrightText: "© 2026 DeTech. Semua hak dilindungi. | Versi 2.1.0",
    badge1Text: "Aman & Terenkripsi",
    badge2Text: "99.9% Uptime",
    badge3Text: "15+ Bahasa",

    // Analysis Modal
    analysisModalTitle: "Analisis Kredit AI",
    step1Title: "Data UMKM",
    step1Text: "Mengumpulkan informasi bisnis Anda",
    step2Title: "Analisis AI",
    step2Text: "Menganalisis dengan algoritma machine learning",
    step3Title: "Hasil",
    step3Text: "Rekomendasi kredit dan plafon",
    formSectionTitle: "Informasi UMKM",
    businessNameLabel: "Nama Usaha",
    businessTypeLabel: "Jenis Usaha",
    businessType1: "Retail/Pedagang",
    businessType2: "Makanan & Minuman",
    businessType3: "Kerajinan Tangan",
    businessType4: "Jasa",
    businessType5: "Pertanian",
    businessAgeLabel: "Usia Usaha (tahun)",
    revenueLabel: "Pendapatan Bulanan (Rp)",
    descriptionLabel: "Deskripsi Usaha",
    descriptionPlaceholder: "Jelaskan usaha Anda secara singkat...",
    progressText: "Memulai analisis...",
    cancelBtn: "Batal",
    startAnalysisBtnText: "Mulai Analisis AI",

    // Results Modal
    resultsModalTitle: "Hasil Analisis",
    resultStatus: "DISETUJUI",
    resultMessage: "Usaha Anda layak mendapatkan kredit mikro",
    detail1Label: "Plafon Kredit Disarankan",
    creditLimit: "Rp 15.000.000",
    detail2Label: "Bunga per Tahun",
    interestRate: "9.5%",
    detail3Label: "Tenor Maksimal",
    loanTenor: "24 Bulan",
    detail4Label: "Cicilan per Bulan",
    monthlyPayment: "Rp 687.500",
    insightsTitle: "Wawasan AI:",
    insight1Text:
      "Usaha Anda memiliki potensi pertumbuhan 35% dalam 12 bulan ke depan berdasarkan data sejenis.",
    insight2Text:
      "Rekomendasi: Alokasikan 60% kredit untuk inventory dan 40% untuk marketing.",
    processTitle: "Proses Persetujuan:",
    processDescription:
      "Kredit Anda perlu diverifikasi oleh operator kami. Proses ini memakan waktu 1-2 hari kerja.",
    operatorNotesTitle: "Catatan Operator:",
    operatorNotesText:
      "Dokumen akan diperiksa oleh tim verifikasi kami. Pastikan data yang dimasukkan valid.",
    closeResultsBtn: "Tutup",
    applyCreditBtnText: "Ajukan Kredit Ini",

    // Calculator Modal
    calculatorModalTitle: "Kalkulator Kredit",
    calcAmountLabel: "Jumlah Pinjaman (Rp)",
    calcTenorLabel: "Tenor (bulan)",
    calcInterestLabel: "Bunga per Tahun (%)",
    calculateBtn: "Hitung Cicilan",
    monthlyResultLabel: "Cicilan per Bulan",
    totalResultLabel: "Total Pembayaran",
    interestResultLabel: "Total Bunga",

    // Education Modal
    educationModalTitle: "Pusat Edukasi Finansial",
    tabBasic: "Dasar Keuangan",
    tabCredit: "Manajemen Kredit",
    tabInvestment: "Investasi UMKM",
    tabTax: "Pajak & Legal",
    lesson1Title: "Pengelolaan Arus Kas",
    lesson1Desc: "Belajar mengatur pemasukan dan pengeluaran usaha",
    lesson1Time: "15 menit",
    lesson1Progress: "100%",
    lesson2Title: "Pembukuan Sederhana",
    lesson2Desc: "Teknik pencatatan keuangan untuk UMKM",
    lesson2Time: "20 menit",
    lesson2Progress: "65%",
    lesson3Title: "Analisis Break Even Point",
    lesson3Desc: "Menghitung titik impas usaha Anda",
    lesson3Time: "25 menit",
    lesson3Progress: "0%",
    lesson4Title: "Memahami Bunga & Cicilan",
    lesson4Desc: "Jenis-jenis bunga dan cara menghitung cicilan",
    lesson4Time: "18 menit",
    lesson4Progress: "100%",
    lesson5Title: "Tips Mendapatkan Kredit",
    lesson5Desc: "Strategi meningkatkan kelayakan kredit",
    lesson5Time: "22 menit",
    lesson5Progress: "0%",
    quizTitle: "Kuis Finansial",
    quizDesc: "Uji pengetahuan Anda dengan kuis interaktif",
    startQuizBtn: "Mulai Kuis",

    // Consultation Modal
    consultationModalTitle: "Konsultasi Online",
    consultantListTitle: "Konsultan Tersedia",
    consultant1Name: "Budi Santoso, S.E.",
    consultant1Specialty: "Ahli Keuangan UMKM",
    consultant1Status: "Online",
    consultant2Name: "Dr. Sari Wijaya, M.M.",
    consultant2Specialty: "Konsultan Bisnis",
    consultant2Status: "Online",
    consultant3Name: "AI Assistant",
    consultant3Specialty: "Asisten AI 24/7",
    consultant3Status: "Online",
    topicsTitle: "Topik Konsultasi",
    topic1: "Pengajuan Kredit",
    topic2: "Pembukuan",
    topic3: "Perpajakan",
    topic4: "Investasi",
    topic5: "Lainnya",
    currentConsultantName: "AI Assistant",
    currentConsultantStatus: "Mengetik...",
    welcomeMessage:
      "Halo! Saya DeTech. Saya siap membantu Anda dengan pertanyaan tentang kredit mikro, keuangan UMKM, atau topik lainnya. Ada yang bisa saya bantu?",
    chatPlaceholder: "Ketik pesan Anda di sini...",
    quick1: "Cara pengajuan kredit",
    quick2: "Perhitungan bunga",
    quick3: "Dokumen yang diperlukan",

    // History Modal
    historyModalTitle: "Riwayat Kredit",
    filterLabel: "Filter:",
    filterAll: "Semua",
    filterActive: "Aktif",
    filterPaid: "Lunas",
    filterOverdue: "Terlambat",
    periodLabel: "Periode:",
    periodAll: "Semua Waktu",
    periodMonth: "Bulan Ini",
    periodQuarter: "3 Bulan Terakhir",
    periodYear: "Tahun Ini",
    thDate: "Tanggal",
    thType: "Jenis",
    thAmount: "Jumlah",
    thStatus: "Status",
    thAction: "Aksi",
    summaryTotalLabel: "Total Kredit",
    summaryActiveLabel: "Kredit Aktif",
    summaryPaidLabel: "Kredit Lunas",
    closeHistoryBtn: "Tutup",
    exportBtnText: "Ekspor ke Excel",

    // Demo Modal
    demoModalTitle: "Demo Analisis Kredit AI",
    demoVideoText: "Video demo akan ditampilkan di sini",
    demoStepsTitle: "Langkah-langkah Demo:",
    demoStep1: "Input data UMKM",
    demoStep2: "Analisis otomatis oleh AI",
    demoStep3: "Hasil dan rekomendasi",
    demoStep4: "Pengajuan kredit",
    demoFeaturesTitle: "Fitur yang Ditunjukkan:",
    demoFeature1: "AI Prediction Engine",
    demoFeature2: "Visual Analytics",
    demoFeature3: "Real time Processing",
    demoFeature4: "Secure Data Handling",
    startDemoBtnText: "Mulai Demo Langsung",
  },

  en: {
    loginTitle: "Welcome to DeTech",
    usernameLabel: "Username",
    passwordLabel: "Password",
    languageLabel: "Choose Local Language",
    languageHint: "All content will be translated to your chosen language",
    voiceBtnText: "Detect Language with Voice",
    loginBtnText: "Go to Dashboard",
    loginNote: "Language will be reset to Indonesian on logout",

    appTitle: "DeTech",
    appSubtitle: "Smart MSME Funding System",
    welcomeText: "Welcome",
    logoutText: "Logout",

    notificationTitle: "Notifications",
    markAllRead: "Mark all as read",
    viewAllNotifications: "View all notifications",

    searchPlaceholder: "Search features, help, or information...",
    searchButton: "Search",

    lastLogin: "Last login",
    loginTime: "Today, 10:30",
    currentLanguageLabel: "Active language",
    selectedLanguage: "English",
    notificationLabel: "Notifications",
    notificationCount: "3 new",

    dashboardTitle: "DeTech Dashboard",
    dashboardSubtitle:
      "Manage and monitor all your MSME micro credit activities in one place",

    stat1Title: "Available Credit",
    stat2Title: "Active Applications",
    stat3Title: "Approved Credit",
    stat4Title: "System Rating",

    // ... untuk singkatnya, semua key lain di-copy dari 'id' dengan terjemahan English
    // Dalam implementasi asli, semua key harus diterjemahkan
    card1Title: "AI Credit Analysis",
    card1Text:
      "Analyze micro credit suitability for your MSME with advanced AI technology that can predict eligibility with 95% accuracy.",
    card1BtnText: "Start Analysis",
    demoBtnText: "View Demo",
    feature1Text: "Automatic business profile analysis",
    feature2Text: "Real time eligibility prediction",
    feature3Text: "Credit limit recommendations",

    // dan seterusnya untuk semua key...
  },

  jv: {
    loginTitle: "Sugeng Rawuh ing DeTech",
    usernameLabel: "Jeneng Pangguna",
    passwordLabel: "Sandi",
    languageLabel: "Pilih Basa Lokal",
    languageHint:
      "Kabeh konten bakal diterjemahake menyang basa sing sampeyan pilih",
    voiceBtnText: "Deteksi Basa nganggo Swara",
    loginBtnText: "Mlebu Dashboard",
    loginNote: "Basa bakal direset dadi Indonesia nalika metu",

    appTitle: "DeTech",
    appSubtitle: "Sistem Pinter Pendanaan UMKM Pedesaan",
    welcomeText: "Sugeng Rawuh",
    logoutText: "Metu",

    notificationTitle: "Pemberitahuan",
    markAllRead: "Tandhi kabeh wis diwaca",
    viewAllNotifications: "Deleng kabeh pemberitahuan",

    searchPlaceholder: "Golek fitur, pitulungan, utawa informasi...",
    searchButton: "Golek",

    lastLogin: "Login pungkasan",
    loginTime: "Dina iki, 10:30",
    currentLanguageLabel: "Basa aktif",
    selectedLanguage: "Basa Jawa",
    notificationLabel: "Pemberitahuan",
    notificationCount: "3 anyar",

    // ... semua key lainnya copy dari 'id' dan diterjemahkan ke Jawa
  },

  su: {
    loginTitle: "Wilujeng Sumping di DeTech",
    usernameLabel: "Nami Pamaké",
    passwordLabel: "Kata Sandi",
    languageLabel: "Pilih Basa Lokal",
    languageHint: "Sakabéh eusi bakal ditarjamahkeun kana basa anu dipilih",
    voiceBtnText: "Deteksi Basa ku Sora",
    loginBtnText: "Asup ka Dashboard",
    loginNote: "Basa bakal direset ka Indonesia nalika kaluar",

    appTitle: "DeTech",
    appSubtitle: "Sistem Pinter Pendanaan UMKM Pedesaan",
    welcomeText: "Wilujeng Sumping",
    logoutText: "Kaluar",

    notificationTitle: "Bewara",
    markAllRead: "Tandaan sakabéh geus dibaca",
    viewAllNotifications: "Tingali sakabéh bewara",

    searchPlaceholder: "Paluruh fitur, pitulungan, atanapi inpormasi...",
    searchButton: "Paluruh",

    lastLogin: "Login panungtungan",
    loginTime: "Dinten ieu, 10:30",
    currentLanguageLabel: "Basa aktif",
    selectedLanguage: "Basa Sunda",
    notificationLabel: "Bewara",
    notificationCount: "3 anyar",

    dashboardTitle: "Dashboard DeTech",
    dashboardSubtitle:
      "Kelola jeung awas sakabéh kagiatan kirédit mikro UMKM Anjeun di hiji tempat",

    stat1Title: "Kirédit Sadia",
    stat2Title: "Pangajuan Aktip",
    stat3Title: "Kirédit Disatujuan",
    stat4Title: "Rating Sistem",

    card1Title: "Analisis Kirédit AI",
    card1Text:
      "Analisa kasaluyuan kirédit mikro pikeun UMKM Anjeun kalawan téknologi AI canggih anu bisa ngaramal kalayakan kalawan akurasi 95%.",
    card1BtnText: "Mimitian Analisis",
    demoBtnText: "Tingali Demo",
    feature1Text: "Analisis profil bisnis otomatis",
    feature2Text: "Prediksi kalayakan real time",
    feature3Text: "Rekomendasi plafon kirédit",
  },
};

// State aplikasi
let currentLanguage = "id";
let isLoggedIn = false;
let currentUser = "";
let recognition = null;
let isListening = false;
let analysisProgress = 0;
let analysisInterval = null;
let notifications = [];
let notificationCount = 3;
let selectedDisbursementMethod = "";
let selectedConsultant = 3; // Default: AI Assistant
let chatMessages = [];
let currentTopic = "";

// Sample notifications data dengan dukungan semua bahasa
const sampleNotifications = {
  id: [
    {
      id: 1,
      title: "Analisis Kredit Selesai",
      message: "Hasil analisis kredit untuk usaha Anda telah siap",
      time: "10 menit yang lalu",
      read: false,
      type: "success",
    },
    {
      id: 2,
      title: "Pembayaran Berhasil",
      message: "Pembayaran cicilan kredit berhasil diproses",
      time: "1 jam yang lalu",
      read: false,
      type: "info",
    },
    {
      id: 3,
      title: "Kredit Disetujui",
      message: "Pengajuan kredit baru Anda telah disetujui",
      time: "2 hari yang lalu",
      read: true,
      type: "success",
    },
    {
      id: 4,
      title: "Reminder Pembayaran",
      message: "Jangan lupa bayar cicilan sebelum tanggal 25",
      time: "3 hari yang lalu",
      read: true,
      type: "warning",
    },
  ],
  en: [
    {
      id: 1,
      title: "Credit Analysis Complete",
      message: "Credit analysis results for your business are ready",
      time: "10 minutes ago",
      read: false,
      type: "success",
    },
    {
      id: 2,
      title: "Payment Successful",
      message: "Credit installment payment processed successfully",
      time: "1 hour ago",
      read: false,
      type: "info",
    },
    {
      id: 3,
      title: "Credit Approved",
      message: "Your new credit application has been approved",
      time: "2 days ago",
      read: true,
      type: "success",
    },
    {
      id: 4,
      title: "Payment Reminder",
      message: "Remember to pay installment before the 25th",
      time: "3 days ago",
      read: true,
      type: "warning",
    },
  ],
  jv: [
    {
      id: 1,
      title: "Analisis Kredit Rampung",
      message: "Hasil analisis kredit kanggo usaha sampeyan wis siap",
      time: "10 menit kepungkur",
      read: false,
      type: "success",
    },
    {
      id: 2,
      title: "Pembayaran Sukses",
      message: "Pembayaran cicilan kredit sukses diproses",
      time: "1 jam kepungkur",
      read: false,
      type: "info",
    },
    {
      id: 3,
      title: "Kredit Disetujoni",
      message: "Pengajuan kredit anyar sampeyan wis disetujoni",
      time: "2 dina kepungkur",
      read: true,
      type: "success",
    },
    {
      id: 4,
      title: "Penginget Pembayaran",
      message: "Aja lali mbayar cicilan sakdurunge tanggal 25",
      time: "3 dina kepungkur",
      read: true,
      type: "warning",
    },
  ],
  su: [
    {
      id: 1,
      title: "Analisis Kirédit Réngsé",
      message: "Hasil analisis kirédit pikeun usaha Anjeun geus siap",
      time: "10 menit kapungkur",
      read: false,
      type: "success",
    },
    {
      id: 2,
      title: "Pembayaran Suksés",
      message: "Pembayaran cicilan kirédit suksés diproses",
      time: "1 jam kapungkur",
      read: false,
      type: "info",
    },
    {
      id: 3,
      title: "Kirédit Disatujuan",
      message: "Pangajuan kirédit anyar Anjeun geus disatujuan",
      time: "2 poe kapungkur",
      read: true,
      type: "success",
    },
    {
      id: 4,
      title: "Panginget Pembayaran",
      message: "Tong hilap mayar cicilan sateuacan tanggal 25",
      time: "3 poe kapungkur",
      read: true,
      type: "warning",
    },
  ],
};

// AI Responses untuk konsultasi dengan dukungan semua bahasa
const aiResponses = {
  id: {
    kredit: {
      question: "Cara pengajuan kredit",
      response:
        "Untuk mengajukan kredit mikro, ikuti langkah berikut:\n\n1. Klik 'Mulai Analisis' pada kartu Analisis KrediAI Nusantara\n2. Isi data UMKM Anda dengan lengkap\n3. Tunggu hasil analisis AI\n4. Jika disetujui, klik 'Ajukan Kredit Ini'\n5. Tunggu verifikasi dari operator (1-2 hari kerja)\n6. Setelah disetujui, pilih metode pencairan dana\n\nDokumen yang diperlukan: KTP, NPWP, Surat Izin Usaha (jika ada), dan laporan keuangan sederhana.",
    },
    bunga: {
      question: "Perhitungan bunga",
      response:
        "Bunga kredit mikro kami adalah 9.5% per tahun (flat).\n\nContoh perhitungan:\n- Pinjaman: Rp 10.000.000\n- Tenor: 12 bulan\n- Bunga per tahun: 9.5%\n- Total bunga: Rp 10.000.000 × 9.5% = Rp 950.000\n- Cicilan per bulan: (Rp 10.000.000 + Rp 950.000) ÷ 12 = Rp 912.500\n\nAnda bisa menggunakan Kalkulator Kredit untuk simulasi yang lebih akurat.",
    },
    dokumen: {
      question: "Dokumen yang diperlukan",
      response:
        "Dokumen yang diperlukan untuk pengajuan kredit mikro:\n\n1. KTP pemohon (fotokopi)\n2. NPWP (jika ada)\n3. Surat Izin Usaha (SIUP/TDP) atau surat keterangan usaha dari kelurahan\n4. Laporan keuangan sederhana 3 bulan terakhir\n5. Fotokopi rekening koran/buku tabungan 3 bulan terakhir\n6. Foto tempat usaha\n\nSemua dokumen dapat diunggah digital melalui aplikasi setelah pengajuan kredit disetujui.",
    },
    default: {
      question: "Pertanyaan umum",
      response:
        "Terima kasih atas pertanyaan Anda. Saya dari DeTech. Saya dapat membantu dengan:\n\n• Pengajuan kredit mikro\n• Perhitungan bunga dan cicilan\n• Persyaratan dokumen\n• Edukasi finansial UMKM\n• Masalah teknis aplikasi\n\nSilakan pilih topik di atas atau tanyakan hal spesifik yang ingin Anda ketahui.",
    },
  },
  en: {
    kredit: {
      question: "How to apply for credit",
      response:
        "To apply for micro credit, follow these steps:\n\n1. Click 'Start Analysis' on the KreditAI Nusantara card\n2. Fill in your MSME data completely\n3. Wait for AI analysis results\n4. If approved, click 'Apply for This Credit'\n5. Wait for operator verification (1-2 business days)\n6. After approval, choose fund disbursement method\n\nRequired documents: ID Card, Tax ID (if any), Business Permit (if available), and simple financial report.",
    },
    bunga: {
      question: "Interest calculation",
      response:
        "Our micro credit interest rate is 9.5% per year (flat).\n\nCalculation example:\n- Loan: Rp 10,000,000\n- Tenor: 12 months\n- Annual interest: 9.5%\n- Total interest: Rp 10,000,000 × 9.5% = Rp 950,000\n- Monthly installment: (Rp 10,000,000 + Rp 950,000) ÷ 12 = Rp 912,500\n\nYou can use the Credit Calculator for more accurate simulations.",
    },
    dokumen: {
      question: "Required documents",
      response:
        "Documents required for micro credit application:\n\n1. Applicant's ID card (copy)\n2. Tax ID (if any)\n3. Business Permit (SIUP/TDP) or business certificate from local government\n4. Simple financial report for last 3 months\n5. Copy of bank statement/savings book for last 3 months\n6. Photo of business location\n\nAll documents can be uploaded digitally through the application after the credit application is approved.",
    },
    default: {
      question: "General question",
      response:
        "Thank you for your question. I am from DeTech. I can help with:\n\n• Micro credit applications\n• Interest and installment calculations\n• Document requirements\n• MSME financial education\n• Technical application issues\n\nPlease select a topic above or ask specific questions you want to know.",
    },
  },
  jv: {
    kredit: {
      question: "Cara pengajuan kredit",
      response:
        "Kanggo ngajokake kredit mikro, tindakna langkah-langkah iki:\n\n1. Klik 'Mulai Analisis' ing kertu Analisis KrediAI Nusantara\n2. Isi data UMKM sampeyan kanthi lengkap\n3. Enteni hasil analisis AI\n4. Yen disetujoni, klik 'Ajokake Kredit Iki'\n5. Enteni verifikasi saka operator (1-2 dina kerja)\n6. Sawise disetujoni, pilih metode pencairan dana\n\nDokumen sing dibutuhake: KTP, NPWP (yen ana), Surat Izin Usaha (yen ana), lan laporan keuangan sederhana.",
    },
    bunga: {
      question: "Perhitungan bunga",
      response:
        "Bunga kredit mikro kita yaiku 9.5% per taun (flat).\n\nConto perhitungan:\n- Pinjaman: Rp 10.000.000\n- Tenor: 12 sasi\n- Bunga per taun: 9.5%\n- Total bunga: Rp 10.000.000 × 9.5% = Rp 950.000\n- Cicilan per sasi: (Rp 10.000.000 + Rp 950.000) ÷ 12 = Rp 912.500\n\nSampeyan bisa nggunakake Kalkulator Kredit kanggo simulasi sing luwih akurat.",
    },
    dokumen: {
      question: "Dokumen sing dibutuhake",
      response:
        "Dokumen sing dibutuhake kanggo pengajuan kredit mikro:\n\n1. KTP pemohon (fotokopi)\n2. NPWP (yen ana)\n3. Surat Izin Usaha (SIUP/TDP) utawa surat keterangan usaha saka kelurahan\n4. Laporan keuangan sederhana 3 sasi kepungkur\n5. Fotokopi rekening koran/buku tabungan 3 sasi kepungkur\n6. Foto panggonan usaha\n\nKabeh dokumen bisa diunggah digital liwat aplikasi sawise pengajuan kredit disetujoni.",
    },
    default: {
      question: "Pitakonan umum",
      response:
        "Matur nuwun kanggo pitakonan sampeyan. Aku saka DeTech. Aku bisa mbantu karo:\n\n• Pengajuan kredit mikro\n• Perhitungan bunga lan cicilan\n• Syarat dokumen\n• Edukasi finansial UMKM\n• Masalah teknis aplikasi\n\nMangga pilih topik ing ndhuwur utawa takon hal spesifik sing pengin sampeyan ngerti.",
    },
  },
  su: {
    kredit: {
      question: "Cara pangajuan kirédit",
      response:
        "Pikeun ngajukeun kirédit mikro, tuturkeun léngkah-léngkah ieu:\n\n1. Klik 'Mimitian Analisis' dina kartu Analisis KrediAI Nusantara\n2. Eusian data UMKM Anjeun kalawan lengkep\n3. Antosan hasil analisis AI\n4. Upami disatujuan, klik 'Ajukan Kirédit Ieu'\n5. Antosan verifikasi ti operator (1-2 poé gawé)\n6. Saatos disatujuan, pilih metode pencairan dana\n\nDokumen anu diperlukeun: KTP, NPWP (upami aya), Surat Izin Usaha (upami aya), sareng laporan kauangan saderhana.",
    },
    bunga: {
      question: "Perhitungan bunga",
      response:
        "Bunga kirédit mikro kami nyaeta 9.5% per taun (flat).\n\nConto perhitungan:\n- Pinjaman: Rp 10.000.000\n- Tenor: 12 bulan\n- Bunga per taun: 9.5%\n- Total bunga: Rp 10.000.000 × 9.5% = Rp 950.000\n- Cicilan per bulan: (Rp 10.000.000 + Rp 950.000) ÷ 12 = Rp 912.500\n\nAnjeun tiasa nganggo Kalkulator Kirédit kanggo simulasi anu langkung akurat.",
    },
    dokumen: {
      question: "Dokumen anu diperlukeun",
      response:
        "Dokumen anu diperlukeun kanggo pangajuan kirédit mikro:\n\n1. KTP pemohon (fotokopi)\n2. NPWP (upami aya)\n3. Surat Izin Usaha (SIUP/TDP) atanapi surat keterangan usaha ti kalurahan\n4. Laporan kauangan saderhana 3 bulan kapungkur\n5. Fotokopi rekening koran/buku tabungan 3 bulan kapungkur\n6. Foto tempat usaha\n\nSadaya dokumen tiasa diunggah digital ngaliwatan aplikasi saatos pangajuan kirédit disatujuan.",
    },
    default: {
      question: "Patarosan umum",
      response:
        "Hatur nuhun kanggo patarosan anjeun. Abdi ti DeTech. Abdi tiasa ngabantosan kalawan:\n\n• Pangajuan kirédit mikro\n• Perhitungan bunga sareng cicilan\n• Sarat dokumen\n• Edukasi kauangan UMKM\n• Masalah teknis aplikasi\n\nMangga pilih topik di luhur atanapi tanyakeun hal spesifik anu hoyong anjeun terang.",
    },
  },
};

// Inisialisasi aplikasi
document.addEventListener("DOMContentLoaded", function () {
  // Setup event listeners
  setupEventListeners();

  // Setup voice recognition
  setupVoiceRecognition();

  // Setup loan amount slider
  setupLoanSlider();

  // Load notifications
  loadNotifications();

  // Initialize chat
  initializeChat();
});

function setupEventListeners() {
  // Login
  document.getElementById("loginBtn").addEventListener("click", handleLogin);

  // Voice button
  document
    .getElementById("voiceBtn")
    .addEventListener("click", toggleVoiceRecognition);

  // Language dropdown
  document
    .getElementById("currentLangBtn")
    .addEventListener("click", toggleLanguageDropdown);

  // Language options
  document.querySelectorAll(".lang-option").forEach((option) => {
    option.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      if (lang === "other") {
        const userLang = prompt("Masukkan nama bahasa yang Anda inginkan:");
        if (userLang && userLang.trim() !== "") {
          changeLanguage("custom", userLang);
        }
      } else {
        changeLanguage(lang);
      }
      toggleLanguageDropdown();
    });
  });

  // Logout
  document.getElementById("logoutBtn").addEventListener("click", handleLogout);

  // Search
  document
    .getElementById("searchButton")
    .addEventListener("click", performSearch);
  document
    .getElementById("searchInput")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        performSearch();
      }
    });

  // Voice toggle
  document
    .getElementById("voiceToggle")
    .addEventListener("click", toggleVoiceAssistant);

  // Notification bell
  document
    .getElementById("notificationBtn")
    .addEventListener("click", toggleNotificationDropdown);
  document
    .getElementById("markAllRead")
    .addEventListener("click", markAllNotificationsRead);

  // Chat input
  document
    .getElementById("chatInput")
    .addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        sendMessage();
      }
    });

  // Close dropdown ketika klik di luar
  document.addEventListener("click", function (event) {
    const langDropdown = document.getElementById("langDropdown");
    const currentLangBtn = document.getElementById("currentLangBtn");
    const notificationDropdown = document.getElementById(
      "notificationDropdown",
    );
    const notificationBtn = document.getElementById("notificationBtn");

    if (
      langDropdown.classList.contains("active") &&
      !currentLangBtn.contains(event.target) &&
      !langDropdown.contains(event.target)
    ) {
      langDropdown.classList.remove("active");
    }

    if (
      notificationDropdown.classList.contains("active") &&
      !notificationBtn.contains(event.target) &&
      !notificationDropdown.contains(event.target)
    ) {
      notificationDropdown.classList.remove("active");
    }
  });
}

function setupVoiceRecognition() {
  if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "id-ID";

    recognition.onresult = function (event) {
      const transcript = event.results[0][0].transcript;
      document.getElementById("languageInput").value = transcript;
      detectLanguageFromVoice(transcript);
    };

    recognition.onerror = function (event) {
      console.error("Speech recognition error", event.error);
      if (document.getElementById("voiceBtn")) {
        document.getElementById("voiceBtn").classList.remove("listening");
      }
      showNotification("Terjadi kesalahan dalam pengenalan suara", "error");
    };

    recognition.onend = function () {
      if (document.getElementById("voiceBtn")) {
        document.getElementById("voiceBtn").classList.remove("listening");
      }
    };
  } else {
    document.getElementById("voiceBtn").innerHTML =
      '<i class="fas fa-microphone-slash"></i> <span id="voiceBtnText">Browser tidak mendukung deteksi suara</span>';
    document.getElementById("voiceBtn").disabled = true;
  }
}

function setupLoanSlider() {
  const loanAmount = document.getElementById("loanAmount");
  const amountDisplay = document.getElementById("amountDisplay");

  if (loanAmount && amountDisplay) {
    loanAmount.addEventListener("input", function () {
      const value = parseInt(this.value);
      amountDisplay.textContent = formatCurrency(value);
    });
  }
}

// Fungsi utama login
function handleLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;
  const language = document.getElementById("languageInput").value.trim();

  if (!username) {
    showNotification("Harap masukkan nama pengguna", "warning");
    return;
  }

  if (!password) {
    showNotification("Harap masukkan kata sandi", "warning");
    return;
  }

  if (!language) {
    showNotification("Harap pilih atau ketik bahasa lokal", "warning");
    return;
  }

  // Simpan user
  currentUser = username;

  // Deteksi bahasa
  detectLanguage(language);

  // Login sukses
  document.getElementById("loginModal").classList.add("hidden");
  document.getElementById("appContent").classList.remove("hidden");

  // Update user info
  updateUserInfo();

  // Update waktu login
  updateLoginTime();

  // Refresh notifications
  loadNotifications();

  isLoggedIn = true;

  showNotification("Login berhasil! Selamat datang di DeTech", "success");
}

function handleLogout() {
  // Reset ke bahasa Indonesia
  changeLanguage("id");

  // Reset form
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("languageInput").value = "";

  // Reset user
  currentUser = "";

  // Tampilkan login modal
  document.getElementById("loginModal").classList.remove("hidden");
  document.getElementById("appContent").classList.add("hidden");

  // Tutup semua modal
  closeAllModals();

  // Reset chat
  chatMessages = [];

  isLoggedIn = false;

  showNotification("Anda telah logout. Bahasa direset ke Indonesia", "info");
}

function toggleLanguageDropdown() {
  document.getElementById("langDropdown").classList.toggle("active");
}

function changeLanguage(langCode, customLangName = "") {
  const targetLang = langCode === "custom" ? "id" : langCode;

  if (translations[targetLang]) {
    // Update semua teks
    for (const [key, value] of Object.entries(translations[targetLang])) {
      const element = document.getElementById(key);
      if (element) {
        element.textContent = value;
      }
    }

    currentLanguage = targetLang;

    // Update tampilan bahasa
    const langNames = {
      id: "Indonesia",
      en: "English",
      jv: "Basa Jawa",
      su: "Basa Sunda",
      custom: customLangName || "Kustom",
    };

    document.getElementById("currentLangText").textContent =
      langNames[targetLang] || "Indonesia";
    document.getElementById("selectedLanguage").textContent =
      langNames[targetLang] || "Indonesia";

    if (langCode === "custom") {
      document.getElementById("selectedLanguage").textContent = customLangName;
    }

    // Update user info jika sudah login
    if (isLoggedIn) {
      updateUserInfo();
    }

    // Update notifications
    loadNotifications();

    // Update notification count
    updateNotificationCount();

    // Update chat jika terbuka
    if (
      document
        .getElementById("consultationModal")
        .classList.contains("hidden") === false
    ) {
      updateChatLanguage();
    }
  }
}

function detectLanguage(languageInput) {
  const input = languageInput.toLowerCase();

  if (
    input.includes("inggris") ||
    input.includes("english") ||
    input.includes("en")
  ) {
    changeLanguage("en");
  } else if (
    input.includes("jawa") ||
    input.includes("jv") ||
    input.includes("basa jawa")
  ) {
    changeLanguage("jv");
  } else if (
    input.includes("sunda") ||
    input.includes("su") ||
    input.includes("basa sunda")
  ) {
    changeLanguage("su");
  } else if (
    input.includes("indonesia") ||
    input.includes("id") ||
    input.includes("bahasa indonesia")
  ) {
    changeLanguage("id");
  } else {
    changeLanguage("id");
    showNotification(
      `Bahasa "${languageInput}" akan segera didukung. Menggunakan bahasa Indonesia.`,
      "info",
    );
  }
}

function detectLanguageFromVoice(transcript) {
  detectLanguage(transcript);
}

function toggleVoiceRecognition() {
  if (!recognition) {
    showNotification("Browser tidak mendukung pengenalan suara", "error");
    return;
  }

  const voiceBtn = document.getElementById("voiceBtn");

  if (isListening) {
    recognition.stop();
    voiceBtn.classList.remove("listening");
    isListening = false;
  } else {
    try {
      recognition.start();
      voiceBtn.classList.add("listening");
      isListening = true;
    } catch (error) {
      console.error("Error starting speech recognition:", error);
      showNotification("Gagal memulai pengenalan suara", "error");
    }
  }
}

function updateUserInfo() {
  // Hanya tampilkan nama, tidak email
  const userNameElement = document.getElementById("userName");
  if (userNameElement) {
    userNameElement.textContent = currentUser;
  }
}

function updateLoginTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const dateString = now.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  const loginTimeElement = document.getElementById("loginTime");
  if (loginTimeElement) {
    loginTimeElement.textContent = `${dateString}, ${timeString}`;
  }
}

function performSearch() {
  const query = document.getElementById("searchInput").value.trim();
  if (query) {
    showNotification(`Mencari: ${query}`, "info");
    // Implementasi pencarian sebenarnya akan di sini
  }
}

function toggleVoiceAssistant() {
  const voiceToggle = document.getElementById("voiceToggle");
  const voiceCommand = document.getElementById("voiceCommand");

  if (isListening) {
    voiceToggle.classList.remove("listening");
    voiceCommand.placeholder =
      translations[currentLanguage].voicePlaceholder ||
      "Katakan perintah atau pertanyaan...";
    isListening = false;
  } else {
    voiceToggle.classList.add("listening");
    voiceCommand.placeholder = "Mendengarkan...";
    isListening = true;

    // Simulasi input suara
    setTimeout(() => {
      const commands = [
        "Cek status kredit saya",
        "Berapa plafon kredit tersedia",
        "Tampilkan riwayat pembayaran",
        "Buka analisis kredit",
      ];
      const randomCommand =
        commands[Math.floor(Math.random() * commands.length)];
      voiceCommand.value = randomCommand;
      showNotification(`Perintah diterima: ${randomCommand}`, "success");
      voiceToggle.classList.remove("listening");
      isListening = false;
    }, 2000);
  }
}

//bagian 2
// Fungsi untuk fitur dashboard
function startCreditAnalysis() {
  document.getElementById("analysisModal").classList.remove("hidden");
  resetAnalysisForm();
}

function closeAnalysisModal() {
  document.getElementById("analysisModal").classList.add("hidden");
  if (analysisInterval) {
    clearInterval(analysisInterval);
    analysisProgress = 0;
  }
}

function resetAnalysisForm() {
  document.getElementById("businessName").value = "";
  document.getElementById("businessType").value = "retail";
  document.getElementById("businessAge").value = "2";
  document.getElementById("monthlyRevenue").value = "";
  document.getElementById("businessDescription").value = "";

  // Reset progress
  analysisProgress = 0;
  document.getElementById("analysisProgress").style.width = "0%";
  document.getElementById("progressPercent").textContent = "0%";
  document.getElementById("progressText").textContent =
    translations[currentLanguage].progressText || "Memulai analisis...";

  // Reset steps
  document.querySelectorAll(".step").forEach((step, index) => {
    if (index === 0) {
      step.classList.add("active");
    } else {
      step.classList.remove("active");
    }
  });
}

function runAnalysis() {
  const businessName = document.getElementById("businessName").value.trim();
  const monthlyRevenue = document.getElementById("monthlyRevenue").value.trim();

  if (!businessName) {
    showNotification("Harap isi nama usaha", "warning");
    return;
  }

  if (!monthlyRevenue) {
    showNotification("Harap isi pendapatan bulanan", "warning");
    return;
  }

  // Update step
  document.querySelectorAll(".step")[0].classList.remove("active");
  document.querySelectorAll(".step")[1].classList.add("active");

  // Simulasi analisis AI
  analysisProgress = 0;
  analysisInterval = setInterval(() => {
    analysisProgress += 5;
    document.getElementById("analysisProgress").style.width =
      analysisProgress + "%";
    document.getElementById("progressPercent").textContent =
      analysisProgress + "%";

    if (analysisProgress === 25) {
      document.getElementById("progressText").textContent =
        "Menganalisis profil bisnis...";
    } else if (analysisProgress === 50) {
      document.getElementById("progressText").textContent =
        "Memproses data keuangan...";
    } else if (analysisProgress === 75) {
      document.getElementById("progressText").textContent =
        "Menerapkan model machine learning...";
      document.querySelectorAll(".step")[1].classList.remove("active");
      document.querySelectorAll(".step")[2].classList.add("active");
    } else if (analysisProgress >= 100) {
      clearInterval(analysisInterval);
      document.getElementById("progressText").textContent = "Analisis selesai!";

      // Tampilkan hasil setelah delay
      setTimeout(() => {
        closeAnalysisModal();
        showResults();
      }, 1000);
    }
  }, 200);
}

function showResults() {
  // Generate hasil acak yang realistis
  const revenue =
    parseInt(document.getElementById("monthlyRevenue").value) || 5000000;
  const creditLimit = Math.min(revenue * 6, 50000000);
  const interestRate = 9.5;
  const tenor = 24;
  const monthlyPayment = calculateMonthlyPayment(
    creditLimit,
    interestRate,
    tenor,
  );

  // Update hasil
  document.getElementById("creditLimit").textContent =
    formatCurrency(creditLimit);
  document.getElementById("monthlyPayment").textContent =
    formatCurrency(monthlyPayment);

  // Tampilkan modal hasil
  document.getElementById("resultsModal").classList.remove("hidden");
}

function calculateMonthlyPayment(principal, annualRate, months) {
  const monthlyRate = annualRate / 100 / 12;
  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  );
}

function closeResultsModal() {
  document.getElementById("resultsModal").classList.add("hidden");
}

function applyForCredit() {
  const creditLimit = document.getElementById("creditLimit").textContent;
  closeResultsModal();
  showNotification(
    `Pengajuan kredit sebesar ${creditLimit} berhasil diajukan! Tim operator kami akan memverifikasi dalam 1-2 hari kerja.`,
    "success",
  );

  // Update approval status
  updateApprovalStatus("submitted");
}

function checkApprovalStatus() {
  showNotification("Memeriksa status persetujuan kredit...", "info");

  // Simulasi pemeriksaan status
  setTimeout(() => {
    const statuses = ["submitted", "ai_review", "operator_review", "approved"];
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    updateApprovalStatus(randomStatus);
    showNotification("Status persetujuan telah diperbarui", "success");
  }, 1500);
}

function updateApprovalStatus(status) {
  const badge = document.getElementById("approvalStatusBadge");
  const steps = document.querySelectorAll(".timeline-step");

  // Reset semua step
  steps.forEach((step) => step.classList.remove("active"));

  // Update berdasarkan status
  switch (status) {
    case "submitted":
      badge.textContent = "Menunggu";
      badge.className = "card-badge pending";
      steps[0].classList.add("active");
      break;
    case "ai_review":
      badge.textContent = "Review AI";
      badge.className = "card-badge pending";
      steps[0].classList.add("active");
      steps[1].classList.add("active");
      break;
    case "operator_review":
      badge.textContent = "Review Operator";
      badge.className = "card-badge pending";
      steps[0].classList.add("active");
      steps[1].classList.add("active");
      steps[2].classList.add("active");
      break;
    case "approved":
      badge.textContent = "Disetujui";
      badge.className = "card-badge approved";
      steps.forEach((step) => step.classList.add("active"));
      break;
    case "rejected":
      badge.textContent = "Ditolak";
      badge.className = "card-badge rejected";
      break;
  }
}

function viewApprovalDetails() {
  showNotification("Menampilkan detail persetujuan kredit...", "info");
  // Bisa dikembangkan untuk menampilkan modal detail
}

// Fungsi Pencairan Dana
function selectDisbursementMethod(method) {
  selectedDisbursementMethod = method;
  const form = document.getElementById("disbursementForm");
  const methodNameElement = document.getElementById("selectedMethod");

  // Sembunyikan semua detail section
  document.getElementById("bankDetailsSection").classList.add("hidden");
  document.getElementById("ewalletDetailsSection").classList.add("hidden");
  document.getElementById("addressDetailsSection").classList.add("hidden");

  // Tampilkan form
  form.classList.remove("hidden");

  // Set metode yang dipilih
  const methodNames = {
    bank: "Transfer Bank",
    ewallet: "E-Wallet",
    cash: "Tunai di Lokasi",
    pos: "Kirim via POS",
  };

  methodNameElement.value = methodNames[method] || method;

  // Tampilkan section yang sesuai
  if (method === "bank") {
    document.getElementById("bankDetailsSection").classList.remove("hidden");
  } else if (method === "ewallet") {
    document.getElementById("ewalletDetailsSection").classList.remove("hidden");
  } else if (method === "pos") {
    document.getElementById("addressDetailsSection").classList.remove("hidden");
  }
}

function cancelDisbursement() {
  document.getElementById("disbursementForm").classList.add("hidden");
  selectedDisbursementMethod = "";
}

function submitDisbursementRequest() {
  const amount = document.getElementById("disbursementAmount").value;
  const method = document.getElementById("selectedMethod").value;

  // Validasi berdasarkan metode
  if (selectedDisbursementMethod === "bank") {
    const bankAccount = document.getElementById("bankAccount").value;
    const accountName = document.getElementById("accountName").value;

    if (!bankAccount || !accountName) {
      showNotification(
        "Harap isi nomor rekening dan nama pemilik rekening",
        "warning",
      );
      return;
    }
  } else if (selectedDisbursementMethod === "ewallet") {
    const ewalletNumber = document.getElementById("ewalletNumber").value;
    if (!ewalletNumber) {
      showNotification("Harap isi nomor e-wallet", "warning");
      return;
    }
  } else if (selectedDisbursementMethod === "pos") {
    const address = document.getElementById("deliveryAddress").value;
    if (!address) {
      showNotification("Harap isi alamat pengiriman", "warning");
      return;
    }
  }

  showNotification(
    `Permintaan pencairan dana sebesar ${amount} via ${method} berhasil diajukan! Dana akan diproses dalam 1-2 hari kerja.`,
    "success",
  );

  // Reset form
  cancelDisbursement();

  // Update status menjadi pencairan
  updateApprovalStatus("approved");
}

// Fungsi History
function viewCreditHistory() {
  document.getElementById("historyModal").classList.remove("hidden");
  loadHistoryData();
}

function closeHistoryModal() {
  document.getElementById("historyModal").classList.add("hidden");
}

function loadHistoryData() {
  const historyData = [
    {
      date: "2025-10-01",
      type: "Kredit Baru",
      amount: "Rp 5.000.000",
      status: "Lunas",
      statusClass: "paid",
    },
    {
      date: "2025-08-15",
      type: "Kredit Tambahan",
      amount: "Rp 10.000.000",
      status: "Aktif",
      statusClass: "active",
    },
    {
      date: "2025-05-20",
      type: "Kredit Modal",
      amount: "Rp 8.000.000",
      status: "Lunas",
      statusClass: "paid",
    },
    {
      date: "2025-03-10",
      type: "Kredit Ekspansi",
      amount: "Rp 15.000.000",
      status: "Aktif",
      statusClass: "active",
    },
    {
      date: "2024-12-05",
      type: "Kredit Awal",
      amount: "Rp 3.000.000",
      status: "Lunas",
      statusClass: "paid",
    },
  ];

  const tbody = document.getElementById("historyTableBody");
  tbody.innerHTML = "";

  let totalCredit = 0;
  let activeCredit = 0;
  let paidCredit = 0;

  historyData.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.date}</td>
            <td>${item.type}</td>
            <td>${item.amount}</td>
            <td><span class="status-badge status-${item.statusClass}">${item.status}</span></td>
            <td><button class="btn-small" onclick="viewDetail('${item.date}')">Detail</button></td>
        `;
    tbody.appendChild(row);

    // Hitung summary
    const amount = parseInt(item.amount.replace(/[^\d]/g, ""));
    totalCredit += amount;

    if (item.statusClass === "active") {
      activeCredit += amount;
    } else if (item.statusClass === "paid") {
      paidCredit += amount;
    }
  });

  // Update summary
  document.getElementById("summaryTotal").textContent =
    formatCurrency(totalCredit);
  document.getElementById("summaryActive").textContent =
    formatCurrency(activeCredit);
  document.getElementById("summaryPaid").textContent =
    formatCurrency(paidCredit);
}

function filterHistory() {
  // Implementasi filter history
  loadHistoryData();
}

function exportHistory() {
  showNotification(
    "Laporan riwayat kredit berhasil diekspor ke Excel",
    "success",
  );
  // Simulasi proses export
  setTimeout(() => {
    showNotification("File Excel telah siap diunduh", "success");
  }, 1500);
}

function downloadReport() {
  showNotification(
    "Laporan sedang diproses dan akan diunduh otomatis...",
    "info",
  );
  // Simulasi proses download
  setTimeout(() => {
    showNotification("Laporan berhasil diunduh!", "success");
  }, 2000);
}

// Fungsi untuk fitur tambahan
function openFeatureModal(feature) {
  if (feature === "calculator") {
    document.getElementById("calculatorModal").classList.remove("hidden");
    calculateLoan(); // Hitung otomatis saat modal dibuka
  } else if (feature === "education") {
    openEducationCenter();
  } else if (feature === "consultation") {
    openConsultation();
  } else if (feature === "security") {
    showNotification(
      "Sistem keamanan AES-256 aktif. Data Anda aman.",
      "success",
    );
  }
}

function closeFeatureModal(feature) {
  if (feature === "calculator") {
    document.getElementById("calculatorModal").classList.add("hidden");
  }
}

function calculateLoan() {
  const amount =
    parseFloat(document.getElementById("calcAmount").value) || 10000000;
  const tenor = parseInt(document.getElementById("calcTenor").value) || 12;
  const interest =
    parseFloat(document.getElementById("calcInterest").value) || 9.5;

  const monthlyRate = interest / 100 / 12;
  const monthlyPayment =
    (amount * monthlyRate * Math.pow(1 + monthlyRate, tenor)) /
    (Math.pow(1 + monthlyRate, tenor) - 1);
  const totalPayment = monthlyPayment * tenor;
  const totalInterest = totalPayment - amount;

  // Update results
  document.getElementById("monthlyResult").textContent =
    formatCurrency(monthlyPayment);
  document.getElementById("totalResult").textContent =
    formatCurrency(totalPayment);
  document.getElementById("interestResult").textContent =
    formatCurrency(totalInterest);

  // Generate amortization table
  generateAmortizationTable(amount, interest, tenor, monthlyPayment);
}

function generateAmortizationTable(
  principal,
  annualRate,
  months,
  monthlyPayment,
) {
  const table = document.getElementById("amortizationTable");
  if (!table) return;

  let html = `
        <h4>Jadwal Angsuran</h4>
        <table>
            <thead>
                <tr>
                    <th>Bulan</th>
                    <th>Angsuran Pokok</th>
                    <th>Bunga</th>
                    <th>Total Angsuran</th>
                    <th>Sisa Pokok</th>
                </tr>
            </thead>
            <tbody>
    `;

  let remaining = principal;
  const monthlyRate = annualRate / 100 / 12;

  for (let i = 1; i <= months; i++) {
    const interest = remaining * monthlyRate;
    const principalPayment = monthlyPayment - interest;
    remaining -= principalPayment;

    if (remaining < 0) remaining = 0;

    html += `
            <tr>
                <td>${i}</td>
                <td>${formatCurrency(principalPayment)}</td>
                <td>${formatCurrency(interest)}</td>
                <td>${formatCurrency(monthlyPayment)}</td>
                <td>${formatCurrency(remaining)}</td>
            </tr>
        `;

    if (i >= 6) {
      // Hanya tampilkan 6 bulan pertama untuk demo
      html += `<tr><td colspan="5" class="text-center">... dan ${months - 6} bulan berikutnya</td></tr>`;
      break;
    }
  }

  html += `</tbody></table>`;
  table.innerHTML = html;
}

// Edukasi Finansial
function openEducationCenter() {
  document.getElementById("educationModal").classList.remove("hidden");
}

function closeEducationModal() {
  document.getElementById("educationModal").classList.add("hidden");
}

function showCategory(category) {
  // Update tabs
  document.querySelectorAll(".category-tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  document.querySelectorAll(".category-content").forEach((content) => {
    content.classList.remove("active");
  });

  // Aktifkan tab dan content yang dipilih
  event.target.classList.add("active");
  document
    .getElementById(
      "category" + category.charAt(0).toUpperCase() + category.slice(1),
    )
    .classList.add("active");
}

function startLesson(lessonId) {
  showNotification(`Memulai pelajaran: ${lessonId}`, "info");
  // Implementasi pelajaran interaktif
}

function startQuiz() {
  showNotification("Memulai kuis finansial...", "info");
  // Implementasi kuis interaktif
}

// Konsultasi Online
function openConsultation() {
  document.getElementById("consultationModal").classList.remove("hidden");
}

function closeConsultationModal() {
  document.getElementById("consultationModal").classList.add("hidden");
}

function initializeChat() {
  // Reset chat messages
  chatMessages = [
    {
      type: "ai",
      message:
        translations[currentLanguage].welcomeMessage ||
        "Halo! Saya AI Assistant dari Kredit Mikro AI.",
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    },
  ];

  renderChatMessages();
}

function updateChatLanguage() {
  // Update chat messages berdasarkan bahasa
  if (chatMessages.length > 0) {
    chatMessages[0].message = translations[currentLanguage].welcomeMessage;
    renderChatMessages();
  }
}

function selectConsultant(consultantId) {
  selectedConsultant = consultantId;

  // Update UI
  document.querySelectorAll(".consultant-card").forEach((card) => {
    card.classList.remove("active");
  });
  event.target.closest(".consultant-card").classList.add("active");

  // Update header chat
  const consultantNames = [
    "",
    "Budi Santoso, S.E.",
    "Dr. Sari Wijaya, M.M.",
    "AI Assistant",
  ];
  const consultantStatuses = ["", "Online", "Online", "Online"];

  document.getElementById("currentConsultantName").textContent =
    translations[currentLanguage]["consultant" + consultantId + "Name"] ||
    consultantNames[consultantId];
  document.getElementById("currentConsultantStatus").textContent =
    translations[currentLanguage]["consultant" + consultantId + "Status"] ||
    consultantStatuses[consultantId];

  // Jika pilih AI Assistant, reset chat
  if (consultantId === 3) {
    initializeChat();
  } else {
    showNotification(
      "Konsultan manusia akan segera merespon pesan Anda",
      "info",
    );
  }
}

function selectTopic(topic) {
  currentTopic = topic;
  document.querySelectorAll(".topic-tag").forEach((tag) => {
    tag.classList.remove("active");
  });
  event.target.classList.add("active");

  // Auto-send topic ke chat jika AI Assistant
  if (selectedConsultant === 3) {
    const topicText =
      translations[currentLanguage][
        "topic" +
          (["kredit", "pembukuan", "pajak", "investasi", "lainnya"].indexOf(
            topic,
          ) +
            1)
      ] || topic;
    sendAIResponse(topic);
  }
}

function sendMessage() {
  const input = document.getElementById("chatInput");
  const message = input.value.trim();

  if (!message) return;

  // Tambah pesan user
  addChatMessage("user", message);
  input.value = "";

  // Jika AI Assistant, beri respon
  if (selectedConsultant === 3) {
    setTimeout(() => {
      const aiResponse = getAIResponse(message);
      addChatMessage("ai", aiResponse);
    }, 1000);
  } else {
    // Simulasi respon konsultan manusia
    setTimeout(() => {
      const responses = [
        "Terima kasih atas pertanyaan Anda. Saya akan membantu menjawabnya.",
        "Saya memahami concern Anda. Mari kita bahas lebih detail.",
        "Pertanyaan yang bagus. Berikut penjelasan dari saya...",
      ];
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];
      addChatMessage("ai", randomResponse);
    }, 2000);
  }
}

function quickResponse(type) {
  const question =
    translations[currentLanguage][
      "quick" + (["kredit", "bunga", "dokumen"].indexOf(type) + 1)
    ] || type;

  // Auto-send ke chat
  const input = document.getElementById("chatInput");
  input.value = question;
  sendMessage();
}

function getAIResponse(userMessage) {
  const lowerMessage = userMessage.toLowerCase();

  // Cek keyword
  if (
    lowerMessage.includes("kredit") ||
    lowerMessage.includes("pinjam") ||
    lowerMessage.includes("ajukan")
  ) {
    return aiResponses[currentLanguage].kredit.response;
  } else if (
    lowerMessage.includes("bunga") ||
    lowerMessage.includes("cicilan") ||
    lowerMessage.includes("hitung")
  ) {
    return aiResponses[currentLanguage].bunga.response;
  } else if (
    lowerMessage.includes("dokumen") ||
    lowerMessage.includes("syarat") ||
    lowerMessage.includes("berkas")
  ) {
    return aiResponses[currentLanguage].dokumen.response;
  } else {
    return aiResponses[currentLanguage].default.response;
  }
}

function sendAIResponse(topic) {
  const response =
    aiResponses[currentLanguage][topic]?.response ||
    aiResponses[currentLanguage].default.response;
  addChatMessage("ai", response);
}

function addChatMessage(type, message) {
  const time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  chatMessages.push({ type, message, time });
  renderChatMessages();
}

function renderChatMessages() {
  const container = document.getElementById("chatMessages");
  if (!container) return;

  container.innerHTML = "";

  chatMessages.forEach((msg) => {
    const messageDiv = document.createElement("div");
    messageDiv.className = `message ${msg.type}-message`;

    const avatarIcon = msg.type === "ai" ? "fa-robot" : "fa-user";

    messageDiv.innerHTML = `
            <div class="message-avatar">
                <i class="fas ${avatarIcon}"></i>
            </div>
            <div class="message-content">
                <p>${msg.message}</p>
                <span class="message-time">${msg.time}</span>
            </div>
        `;

    container.appendChild(messageDiv);
  });

  // Scroll ke bawah
  container.scrollTop = container.scrollHeight;
}

// Demo Modal
function showDemo(type) {
  document.getElementById("demoModal").classList.remove("hidden");
}

function closeDemoModal() {
  document.getElementById("demoModal").classList.add("hidden");
}

function startLiveDemo() {
  closeDemoModal();
  startCreditAnalysis();
  showNotification("Demo langsung dimulai!", "info");
}

// Utility functions
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification-item ${type}`;
  notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
        </div>
        <div class="notification-content">
            <h5>${getNotificationTitle(type)}</h5>
            <p>${message}</p>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">&times;</button>
    `;

  // Add to notification system
  const notificationSystem =
    document.querySelector(".notification-system") ||
    createNotificationSystem();
  notificationSystem.appendChild(notification);

  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

function createNotificationSystem() {
  const system = document.createElement("div");
  system.className = "notification-system";
  document.body.appendChild(system);
  return system;
}

function getNotificationIcon(type) {
  switch (type) {
    case "success":
      return "check-circle";
    case "error":
      return "exclamation-circle";
    case "warning":
      return "exclamation-triangle";
    default:
      return "info-circle";
  }
}

function getNotificationTitle(type) {
  switch (type) {
    case "success":
      return "Berhasil";
    case "error":
      return "Error";
    case "warning":
      return "Peringatan";
    default:
      return "Info";
  }
}

function loadNotifications() {
  notifications =
    sampleNotifications[currentLanguage] || sampleNotifications["id"];
  updateNotificationCount();

  // Update notification list in dropdown
  const notificationList = document.getElementById("notificationList");
  if (notificationList) {
    notificationList.innerHTML = "";

    notifications.forEach((notification) => {
      const notificationItem = document.createElement("div");
      notificationItem.className = `notification-item ${notification.read ? "" : "unread"}`;
      notificationItem.innerHTML = `
                <div class="notification-icon">
                    <i class="fas fa-${getNotificationIcon(notification.type)}"></i>
                </div>
                <div class="notification-content">
                    <h5>${notification.title}</h5>
                    <p>${notification.message}</p>
                    <span class="notification-time">${notification.time}</span>
                </div>
            `;

      notificationItem.addEventListener("click", function () {
        if (!notification.read) {
          notification.read = true;
          notificationItem.classList.remove("unread");
          updateNotificationCount();
        }
        showNotification(`Membuka notifikasi: ${notification.title}`, "info");
      });

      notificationList.appendChild(notificationItem);
    });
  }
}

function updateNotificationCount() {
  const unreadCount = notifications.filter((n) => !n.read).length;
  notificationCount = unreadCount;

  // Update badge
  const badge = document.getElementById("notificationBadge");
  if (badge) {
    badge.textContent = unreadCount;
    badge.style.display = unreadCount > 0 ? "flex" : "none";
  }

  // Update status bar
  const notificationCountElement = document.getElementById("notificationCount");
  if (notificationCountElement) {
    notificationCountElement.textContent =
      unreadCount > 0 ? `${unreadCount} baru` : "Tidak ada";
  }
}

function toggleNotificationDropdown() {
  document.getElementById("notificationDropdown").classList.toggle("active");
}

function markAllNotificationsRead() {
  notifications.forEach((notification) => (notification.read = true));
  updateNotificationCount();
  showNotification(
    "Semua notifikasi telah ditandai sebagai terbaca",
    "success",
  );
  toggleNotificationDropdown();
}

function viewDetail(id) {
  showNotification(`Menampilkan detail untuk ID: ${id}`, "info");
  // Implementasi detail view
}

function formatCurrency(amount) {
  return "Rp " + amount.toLocaleString("id-ID");
}

function closeAllModals() {
  const modals = document.querySelectorAll(".modal-overlay");
  modals.forEach((modal) => {
    if (!modal.classList.contains("hidden")) {
      modal.classList.add("hidden");
    }
  });
}

// Initialize additional event listeners for modals
document.addEventListener("click", function (event) {
  // Close modals when clicking outside
  const modals = document.querySelectorAll(".modal-overlay:not(.hidden)");
  modals.forEach((modal) => {
    if (event.target === modal) {
      if (modal.id === "analysisModal") closeAnalysisModal();
      else if (modal.id === "resultsModal") closeResultsModal();
      else if (modal.id === "calculatorModal") closeFeatureModal("calculator");
      else if (modal.id === "educationModal") closeEducationModal();
      else if (modal.id === "consultationModal") closeConsultationModal();
      else if (modal.id === "historyModal") closeHistoryModal();
      else if (modal.id === "demoModal") closeDemoModal();
    }
  });
});

// Export functions to global scope
window.startCreditAnalysis = startCreditAnalysis;
window.closeAnalysisModal = closeAnalysisModal;
window.runAnalysis = runAnalysis;
window.closeResultsModal = closeResultsModal;
window.applyForCredit = applyForCredit;
window.checkApprovalStatus = checkApprovalStatus;
window.viewApprovalDetails = viewApprovalDetails;
window.viewCreditHistory = viewCreditHistory;
window.closeHistoryModal = closeHistoryModal;
window.exportHistory = exportHistory;
window.downloadReport = downloadReport;
window.selectDisbursementMethod = selectDisbursementMethod;
window.cancelDisbursement = cancelDisbursement;
window.submitDisbursementRequest = submitDisbursementRequest;
window.openFeatureModal = openFeatureModal;
window.closeFeatureModal = closeFeatureModal;
window.calculateLoan = calculateLoan;
window.openEducationCenter = openEducationCenter;
window.closeEducationModal = closeEducationModal;
window.showCategory = showCategory;
window.startLesson = startLesson;
window.startQuiz = startQuiz;
window.openConsultation = openConsultation;
window.closeConsultationModal = closeConsultationModal;
window.selectConsultant = selectConsultant;
window.selectTopic = selectTopic;
window.sendMessage = sendMessage;
window.quickResponse = quickResponse;
window.showDemo = showDemo;
window.closeDemoModal = closeDemoModal;
window.startLiveDemo = startLiveDemo;
window.activateVoiceAssistant = toggleVoiceAssistant;
window.showVoiceCommands = () =>
  showNotification(
    "Perintah suara: 'Analisis kredit', 'Cek status', 'Riwayat', 'Kalkulator'",
    "info",
  );
window.viewDetail = viewDetail;
window.filterHistory = filterHistory;

function toggleVoiceAssistant() {
  const voiceToggle = document.getElementById("voiceToggle");
  const voiceCommand = document.getElementById("voiceCommand");

  if (isListening) {
    voiceToggle.classList.remove("listening");
    voiceCommand.placeholder =
      translations[currentLanguage].voicePlaceholder ||
      "Katakan perintah atau pertanyaan...";
    isListening = false;
    showNotification("Asisten suara dimatikan", "info");
  } else {
    voiceToggle.classList.add("listening");
    voiceCommand.placeholder = "🎤 Mendengarkan...";
    isListening = true;

    // Simulasi input suara
    setTimeout(() => {
      const commands = [
        "Cek status kredit saya",
        "Berapa plafon kredit tersedia",
        "Tampilkan riwayat pembayaran",
        "Buka analisis kredit",
        "Aktifkan kalkulator kredit",
        "Buka konsultasi online",
      ];
      const randomCommand =
        commands[Math.floor(Math.random() * commands.length)];
      voiceCommand.value = randomCommand;
      showNotification(`Perintah diterima: ${randomCommand}`, "success");

      // Reset setelah 3 detik
      setTimeout(() => {
        voiceToggle.classList.remove("listening");
        voiceCommand.placeholder =
          translations[currentLanguage].voicePlaceholder ||
          "Katakan perintah atau pertanyaan...";
        isListening = false;
      }, 3000);
    }, 2000);
  }
}

// Fungsi untuk menampilkan perintah suara
function showVoiceCommands() {
  const commands = [
    "🎯 'Mulai analisis kredit' - Membuka analisis AI",
    "📊 'Cek status kredit' - Memeriksa status",
    "📜 'Tampilkan riwayat' - Menampilkan riwayat kredit",
    "🧮 'Buka kalkulator' - Membuka kalkulator kredit",
    "🎓 'Buka edukasi' - Membuka materi pembelajaran",
    "💬 'Konsultasi AI' - Membuka konsultasi online",
    "💰 'Pencairan dana' - Scroll ke bagian pencairan",
    "🏠 'Dashboard utama' - Kembali ke dashboard",
  ];

  alert("📢 PERINTAH SUARA YANG TERSEDIA:\n\n" + commands.join("\n"));
}

function activateVoiceAssistant() {
  // Tampilkan modal asisten suara
  const modal = document.getElementById("advancedVoiceModal");
  if (modal) {
    modal.classList.remove("hidden");
    showNotification("Asisten Suara AI diaktifkan", "success");
  } else {
    // Fallback ke toggle biasa
    toggleVoiceAssistant();
  }
}

// ================================
// EDUKASI FINANSIAL - JavaScript
// ================================

// Data Materi dalam 4 Bahasa (SIMPAN VERSI INI)
const educationContent = {
  id: {
    educationModalTitle: "Pusat Edukasi Finansial",
    progressTitle: "Progress Belajar Anda",
    progressText: "0 dari 9 materi selesai",
    tabBasicText: "Dasar Keuangan",
    tabCreditText: "Manajemen Kredit",
    tabInvestmentText: "Investasi UMKM",
    tabTaxText: "Pajak & Legal",
    quizTitle: "Kuis Finansial",
    quizDesc: "Uji pengetahuan Anda dengan kuis interaktif",
    startQuizBtnText: "Mulai Kuis",
    lesson1Title: "Pengelolaan Arus Kas",
    lesson1Desc: "Belajar mengatur pemasukan dan pengeluaran usaha",
    lesson1Time: "15 menit",
    lesson2Title: "Pembukuan Sederhana",
    lesson2Desc: "Teknik pencatatan keuangan untuk UMKM",
    lesson2Time: "20 menit",
    lesson3Title: "Analisis Break Even Point",
    lesson3Desc: "Menghitung titik impas usaha Anda",
    lesson3Time: "25 menit",
    lesson4Title: "Memahami Bunga & Cicilan",
    lesson4Desc: "Jenis-jenis bunga dan cara menghitung cicilan",
    lesson4Time: "18 menit",
    lesson5Title: "Tips Mendapatkan Kredit",
    lesson5Desc: "Strategi meningkatkan kelayakan kredit",
    lesson5Time: "22 menit",
    lesson6Title: "Investasi untuk UMKM",
    lesson6Desc: "Mengenal jenis investasi yang cocok untuk usaha kecil",
    lesson6Time: "25 menit",
    lesson7Title: "Strategi Reinvestasi Profit",
    lesson7Desc: "Cara menginvestasikan kembali keuntungan usaha",
    lesson7Time: "20 menit",
    lesson8Title: "Pajak untuk UMKM",
    lesson8Desc: "Memahami kewajiban perpajakan usaha kecil",
    lesson8Time: "30 menit",
    lesson9Title: "Legalitas Usaha",
    lesson9Desc: "Dokumen dan perizinan yang diperlukan",
    lesson9Time: "25 menit",
    prevLessonText: "Sebelumnya",
    nextLessonText: "Berikutnya",
    completeLessonText: "Selesaikan Pelajaran",
    nextQuestionText: "Lanjut",

    lessons: {
      cashflow: {
        title: "Pengelolaan Arus Kas",
        pages: [
          {
            title: "Apa itu Arus Kas?",
            content:
              "Arus kas (cash flow) adalah aliran uang masuk dan keluar dari usaha Anda dalam periode tertentu. Ini mencakup semua pemasukan dan pengeluaran, baik tunai maupun non-tunai.",
            example:
              "🌰 Contoh:\nToko kelontong 'Sumber Rejeki':\n• Pemasukan bulanan: Rp 5.000.000\n• Pengeluaran bulanan: Rp 4.000.000\n• Arus Kas Bersih: Rp 1.000.000 (positif)\n\nIni berarti toko tersebut memiliki kelebihan uang sebesar Rp 1 juta setiap bulan.",
            tips: "💡 Tips Praktis:\n1. Selalu pisahkan uang pribadi dan uang usaha\n2. Catat semua transaksi harian\n3. Review arus kas mingguan\n4. Siapkan dana darurat minimal 3x pengeluaran bulanan",
          },
          {
            title: "Membuat Laporan Arus Kas",
            content:
              "Laporan arus kas sederhana untuk UMKM terdiri dari:\n\nA. Pemasukan (Cash In):\n• Penjualan tunai\n• Piutang yang dibayar\n• Investasi tambahan\n• Pinjaman\n\nB. Pengeluaran (Cash Out):\n• Pembelian bahan baku\n• Gaji karyawan\n• Sewa tempat\n• Listrik, air, internet\n• Angsuran pinjaman",
            example:
              "📊 Format Laporan Sederhana:\n\nBulan: Oktober 2023\nPemasukan: Rp 10.000.000\nPengeluaran: Rp 7.000.000\n-----------------------\nArus Kas Bersih: Rp 3.000.000\n\nSaldo Awal: Rp 2.000.000\nSaldo Akhir: Rp 5.000.000",
            tips: "💡 Tips:\n• Gunakan buku kas atau aplikasi pencatatan\n• Klasifikasikan pengeluaran (operasional, investasi, dll.)\n• Bandingkan dengan bulan sebelumnya",
          },
          {
            title: "Strategi Pengelolaan Arus Kas",
            content:
              "5 Strategi Efektif untuk Arus Kas Sehat:\n\n1. Percepat Penagihan:\n   - Tawarkan diskon untuk pembayaran tunai\n   - Kirim invoice segera setelah pengiriman\n   - Follow up piutang secara rutin\n\n2. Kelola Pengeluaran:\n   - Negosiasi termin pembayaran dengan supplier\n   - Prioritaskan pengeluaran penting\n   - Hindari pembelian impulsif\n\n3. Prediksi Kebutuhan:\n   - Buat proyeksi arus kas 3 bulan ke depan\n   - Identifikasi musiman bisnis\n   - Siapkan untuk masa-masa sepi",
            example:
              "🎯 Contoh Strategi:\nWarung Makan 'Nenek Sari':\n- Menawarkan diskon 5% untuk pembayaran GoPay/OVO\n- Bayar supplier setiap 14 hari (bukan 7 hari)\n- Simpan 20% dari keuntungan untuk dana darurat\n\nHasil: Arus kas meningkat 30% dalam 3 bulan",
            tips: "💡 Kunci Sukses:\n• Konsisten dalam pencatatan\n• Review mingguan bersama keluarga/staf\n• Belajar dari pengalaman bulan sebelumnya",
          },
        ],
        quiz: [
          {
            question: "Apa yang dimaksud dengan arus kas positif?",
            options: [
              "Uang masuk lebih besar dari uang keluar",
              "Uang keluar lebih besar dari uang masuk",
              "Tidak ada transaksi dalam periode tertentu",
              "Semua transaksi dilakukan secara kredit",
            ],
            correct: 0,
            explanation:
              "Arus kas positif terjadi ketika total pemasukan lebih besar dari total pengeluaran dalam periode tertentu.",
          },
          {
            question: "Mengapa penting memisahkan uang pribadi dan uang usaha?",
            options: [
              "Agar lebih mudah mengelola keuangan usaha",
              "Untuk menghindari campur aduk pengeluaran",
              "Membantu analisis profitabilitas yang akurat",
              "Semua jawaban benar",
            ],
            correct: 3,
            explanation:
              "Pemisahan uang membantu semua aspek pengelolaan keuangan usaha dan memberikan gambaran yang jelas tentang performa bisnis.",
          },
          {
            question: "Berapa minimal dana darurat yang disarankan untuk UMKM?",
            options: [
              "1x pengeluaran bulanan",
              "3x pengeluaran bulanan",
              "6x pengeluaran bulanan",
              "12x pengeluaran bulanan",
            ],
            correct: 1,
            explanation:
              "Dana darurat minimal 3x pengeluaran bulanan memberikan cukup waktu untuk mengatasi masalah tanpa mengganggu operasional usaha.",
          },
        ],
      },

      bookkeeping: {
        title: "Pembukuan Sederhana",
        pages: [
          {
            title: "Pengertian Pembukuan",
            content:
              "Pembukuan adalah proses pencatatan transaksi keuangan usaha secara sistematis, teratur, dan berkelanjutan. Ini adalah dasar dari semua keputusan keuangan bisnis.",
            example:
              "📝 Apa yang Dicatat?\n1. Penjualan produk/jasa\n2. Pembelian bahan baku\n3. Pembayaran gaji\n4. Biaya sewa dan utilitas\n5. Penerimaan piutang\n6. Pembayaran hutang\n7. Penyusutan aset",
            tips: "💡 Manfaat Pembukuan:\n• Mengetahui untung rugi\n• Memantau perkembangan usaha\n• Bahan untuk pengajuan kredit\n• Memenuhi kewajiban pajak",
          },
          {
            title: "Sistem Pembukuan Sederhana",
            content:
              "Untuk UMKM, sistem pembukuan yang sederhana sudah cukup:\n\n1. Buku Kas\n   - Catat semua transaksi tunai\n   - Kelompokkan sebagai pemasukan/pengeluaran\n\n2. Buku Bank\n   - Catat semua transaksi melalui bank\n   - Cocokkan dengan rekening koran\n\n3. Buku Persediaan\n   - Catat stok masuk dan keluar\n   - Monitor nilai persediaan\n\n4. Buku Piutang & Hutang\n   - Catat piutang yang belum ditagih\n   - Catat hutang yang belum dibayar",
            example:
              "📅 Contoh Pencatatan Harian:\nTgl: 15 Okt 2023\n• Penjualan tunai: Rp 500.000\n• Beli bahan baku: Rp 200.000\n• Bayar listrik: Rp 150.000\n• Terima pembayaran piutang: Rp 300.000\n\nSaldo akhir: Rp 450.000",
            tips: "💡 Tips Mudah:\n• Catat setiap hari sebelum tidur\n• Simpan semua bukti transaksi\n• Review mingguan dan bulanan",
          },
        ],
        quiz: [
          {
            question: "Apa manfaat utama pembukuan bagi UMKM?",
            options: [
              "Mengetahui kondisi keuangan usaha",
              "Memenuhi kewajiban perpajakan",
              "Membantu pengambilan keputusan",
              "Semua jawaban benar",
            ],
            correct: 3,
            explanation:
              "Pembukuan memberikan manfaat komprehensif untuk manajemen usaha, dari monitoring keuangan hingga kepatuhan pajak.",
          },
          {
            question: "Buku apa yang paling penting untuk usaha kecil?",
            options: [
              "Buku Kas",
              "Buku Bank",
              "Buku Persediaan",
              "Semua penting",
            ],
            correct: 0,
            explanation:
              "Buku Kas adalah yang paling penting karena mencatat semua transaksi tunai yang merupakan tulang punggung usaha kecil.",
          },
        ],
      },

      breakeven: {
        title: "Analisis Break Even Point",
        pages: [
          {
            title: "Apa itu Break Even Point?",
            content:
              "Break Even Point (BEP) atau titik impas adalah titik dimana total pendapatan sama dengan total biaya. Di titik ini, usaha tidak untung dan tidak rugi.",
            example:
              "📈 Rumus Sederhana:\nBEP (unit) = Total Biaya Tetap ÷ (Harga Jual - Biaya Variabel per unit)\n\nContoh:\nBiaya Tetap: Rp 5.000.000/bulan\nHarga Jual: Rp 50.000/unit\nBiaya Variabel: Rp 30.000/unit\n\nBEP = 5.000.000 ÷ (50.000 - 30.000) = 250 unit\n\nArtinya perlu menjual 250 unit untuk impas.",
            tips: "💡 Tips:\n• Hitung BEP sebelum memulai usaha\n• Gunakan sebagai target penjualan minimum\n• Review BEP setiap 3 bulan",
          },
          {
            title: "Cara Menghitung BEP dalam Rupiah",
            content:
              "BEP dalam Rupiah dihitung dengan rumus:\n\nBEP (Rp) = Total Biaya Tetap ÷ (1 - (Total Biaya Variabel ÷ Total Penjualan))\n\nAtau lebih sederhana:\nBEP (Rp) = Total Biaya Tetap ÷ Margin Kontribusi\n\nMargin Kontribusi = (Harga Jual - Biaya Variabel) ÷ Harga Jual",
            example:
              "💰 Contoh Praktis:\nUsaha Kue Kering:\n• Biaya Tetap: Rp 3.000.000/bulan\n• Harga jual: Rp 25.000/pack\n• Biaya variabel: Rp 15.000/pack\n• Margin kontribusi: (25.000 - 15.000) ÷ 25.000 = 0.4 (40%)\n\nBEP (Rp) = 3.000.000 ÷ 0.4 = Rp 7.500.000\n\nArtinya harus mencapai penjualan Rp 7,5 juta per bulan untuk impas.",
            tips: "💡 Strategi:\n• Tingkatkan margin kontribusi\n• Kurangi biaya tetap jika mungkin\n• Tingkatkan volume penjualan",
          },
        ],
        quiz: [
          {
            question: "Apa arti Break Even Point?",
            options: [
              "Titik dimana usaha mulai untung",
              "Titik dimana pendapatan sama dengan biaya",
              "Titik penjualan maksimum",
              "Titik pengeluaran minimum",
            ],
            correct: 1,
            explanation:
              "Break Even Point adalah titik dimana total pendapatan sama dengan total biaya, usaha tidak untung dan tidak rugi.",
          },
          {
            question:
              "Jika biaya tetap Rp 10 juta dan margin kontribusi 30%, berapa BEP dalam Rupiah?",
            options: ["Rp 30 juta", "Rp 33,3 juta", "Rp 25 juta", "Rp 20 juta"],
            correct: 1,
            explanation:
              "BEP = 10.000.000 ÷ 0.3 = Rp 33.333.333 (dibulatkan Rp 33,3 juta)",
          },
        ],
      },
    },

    generalQuiz: [
      {
        question: "Apa tujuan utama pengelolaan arus kas?",
        options: [
          "Memastikan usaha selalu memiliki uang tunai untuk operasional",
          "Membuat laporan untuk pajak",
          "Mencatat semua transaksi",
          "Menghitung keuntungan",
        ],
        correct: 0,
        explanation:
          "Tujuan utama adalah memastikan ketersediaan uang tunai untuk menjalankan operasional usaha sehari-hari.",
      },
      {
        question:
          "Bunga mana yang lebih menguntungkan untuk pinjaman jangka panjang?",
        options: ["Bunga Flat", "Bunga Efektif", "Bunga Anuitas", "Semua sama"],
        correct: 1,
        explanation:
          "Bunga efektif lebih menguntungkan karena dihitung dari sisa pokok pinjaman yang semakin menurun.",
      },
      {
        question: "Dokumen apa yang wajib untuk UMKM berbadan hukum?",
        options: [
          "KTP dan NPWP",
          "SIUP dan TDP",
          "Surat Izin Gangguan",
          "Semua jawaban benar",
        ],
        correct: 3,
        explanation:
          "Semua dokumen tersebut diperlukan untuk UMKM yang sudah berbadan hukum dan beroperasi secara legal.",
      },
    ],
  },

  en: {
    educationModalTitle: "Financial Education Center",
    progressTitle: "Your Learning Progress",
    progressText: "0 of 9 lessons completed",
    tabBasicText: "Basic Finance",
    tabCreditText: "Credit Management",
    tabInvestmentText: "MSME Investment",
    tabTaxText: "Tax & Legal",
    quizTitle: "Financial Quiz",
    quizDesc: "Test your knowledge with interactive quiz",
    startQuizBtnText: "Start Quiz",
    lesson1Title: "Cash Flow Management",
    lesson1Desc: "Learn to manage business income and expenses",
    lesson1Time: "15 minutes",
    lesson2Title: "Simple Bookkeeping",
    lesson2Desc: "Financial recording techniques for MSMEs",
    lesson2Time: "20 minutes",
    lesson3Title: "Break Even Point Analysis",
    lesson3Desc: "Calculate your business break-even point",
    lesson3Time: "25 minutes",
    lesson4Title: "Understanding Interest & Installments",
    lesson4Desc: "Types of interest and how to calculate installments",
    lesson4Time: "18 minutes",
    lesson5Title: "Tips for Getting Credit",
    lesson5Desc: "Strategies to improve credit eligibility",
    lesson5Time: "22 minutes",
    lesson6Title: "Investment for MSMEs",
    lesson6Desc: "Learn suitable investment types for small businesses",
    lesson6Time: "25 minutes",
    lesson7Title: "Profit Reinvestment Strategy",
    lesson7Desc: "How to reinvest business profits",
    lesson7Time: "20 minutes",
    lesson8Title: "Tax for MSMEs",
    lesson8Desc: "Understand tax obligations for small businesses",
    lesson8Time: "30 minutes",
    lesson9Title: "Business Legality",
    lesson9Desc: "Required documents and permits",
    lesson9Time: "25 minutes",
    prevLessonText: "Previous",
    nextLessonText: "Next",
    completeLessonText: "Complete Lesson",
    nextQuestionText: "Continue",

    lessons: {
      cashflow: {
        title: "Cash Flow Management",
        pages: [
          {
            title: "What is Cash Flow?",
            content:
              "Cash flow is the movement of money in and out of your business over a specific period. It includes all income and expenses, both cash and non-cash.",
            example:
              "🌰 Example:\nGrocery Store 'Sumber Rejeki':\n• Monthly income: Rp 5,000,000\n• Monthly expenses: Rp 4,000,000\n• Net Cash Flow: Rp 1,000,000 (positive)\n\nThis means the store has Rp 1 million excess cash every month.",
            tips: "💡 Practical Tips:\n1. Always separate personal and business money\n2. Record all daily transactions\n3. Review cash flow weekly\n4. Prepare emergency fund at least 3x monthly expenses",
          },
        ],
        quiz: [
          {
            question: "What does positive cash flow mean?",
            options: [
              "Money in is greater than money out",
              "Money out is greater than money in",
              "No transactions in the period",
              "All transactions are on credit",
            ],
            correct: 0,
            explanation:
              "Positive cash flow occurs when total income is greater than total expenses in a given period.",
          },
        ],
      },
    },

    generalQuiz: [
      {
        question: "What is the main purpose of cash flow management?",
        options: [
          "Ensure business always has cash for operations",
          "Create reports for tax",
          "Record all transactions",
          "Calculate profit",
        ],
        correct: 0,
        explanation:
          "The main purpose is to ensure cash availability for daily business operations.",
      },
    ],
  },
};

// State untuk Edukasi
let currentEducationLanguage = "id";
let currentLesson = null;
let currentPageIndex = 0;
let currentQuiz = null;
let currentQuestionIndex = 0;
let quizScore = 0;
let completedLessons =
  JSON.parse(localStorage.getItem("completedLessons")) || [];

// ================================
// FUNGSI UTAMA EDUKASI
// ================================

// Fungsi untuk membuka modal edukasi
function openEducationCenter() {
  document.getElementById("educationModal").classList.remove("hidden");
  currentEducationLanguage = currentLanguage; // Sync dengan bahasa aplikasi
  updateEducationUI();
  updateProgress();
}

// Fungsi untuk update UI edukasi berdasarkan bahasa
function updateEducationUI() {
  const langData =
    educationContent[currentEducationLanguage] || educationContent.id;

  if (!langData) return;

  // Update semua teks umum
  const textElements = [
    "educationModalTitle",
    "progressTitle",
    "progressText",
    "tabBasicText",
    "tabCreditText",
    "tabInvestmentText",
    "tabTaxText",
    "quizTitle",
    "quizDesc",
    "startQuizBtnText",
    "lesson1Title",
    "lesson1Desc",
    "lesson1Time",
    "lesson2Title",
    "lesson2Desc",
    "lesson2Time",
    "lesson3Title",
    "lesson3Desc",
    "lesson3Time",
    "lesson4Title",
    "lesson4Desc",
    "lesson4Time",
    "lesson5Title",
    "lesson5Desc",
    "lesson5Time",
    "lesson6Title",
    "lesson6Desc",
    "lesson6Time",
    "lesson7Title",
    "lesson7Desc",
    "lesson7Time",
    "lesson8Title",
    "lesson8Desc",
    "lesson8Time",
    "lesson9Title",
    "lesson9Desc",
    "lesson9Time",
  ];

  textElements.forEach((key) => {
    const element = document.getElementById(key);
    if (element && langData[key]) {
      element.textContent = langData[key];
    }
  });

  // Update bahasa display
  const langNames = {
    id: "Bahasa Indonesia",
    en: "English",
    jv: "Basa Jawa",
    su: "Basa Sunda",
  };
  const langDisplay = document.getElementById("currentEducationLang");
  if (langDisplay) {
    langDisplay.textContent = `Bahasa: ${langNames[currentEducationLanguage] || "Indonesia"}`;
  }

  // Update progress
  updateProgress();
}

// Fungsi untuk update progress
function updateProgress() {
  const totalLessons = 9;
  const completedCount = completedLessons.length;
  const progressPercentage = (completedCount / totalLessons) * 100;

  // Update progress bar
  const progressBar = document.getElementById("overallProgress");
  if (progressBar) {
    progressBar.style.width = `${progressPercentage}%`;
  }

  // Update text
  const progressText = document.getElementById("progressText");
  if (progressText) {
    progressText.textContent = `${completedCount} dari ${totalLessons} materi selesai`;
  }
}

// Fungsi untuk mengganti kategori
function switchCategory(category) {
  // Update tabs
  document.querySelectorAll(".category-tab").forEach((tab) => {
    tab.classList.remove("active");
  });
  event.target.classList.add("active");

  // Update content
  document.querySelectorAll(".category-content").forEach((content) => {
    content.classList.remove("active");
  });

  const categoryId = `category${category.charAt(0).toUpperCase() + category.slice(1)}`;
  const categoryElement = document.getElementById(categoryId);
  if (categoryElement) {
    categoryElement.classList.add("active");
  }
}

// ================================
// FUNGSI PELAJARAN DETAIL
// ================================

// Fungsi untuk memulai pelajaran
function startLesson(lessonId) {
  console.log("Memulai pelajaran:", lessonId);

  // Validasi lessonId
  if (!lessonId) {
    console.error("Lesson ID tidak ditemukan");
    return;
  }

  // Set lesson dan reset page
  currentLesson = lessonId;
  currentPageIndex = 0;

  // Tutup modal edukasi, buka modal detail
  document.getElementById("educationModal").classList.add("hidden");
  document.getElementById("lessonDetailModal").classList.remove("hidden");

  // Muat konten
  setTimeout(() => {
    loadLessonContent();
  }, 50);
}

// FUNGSI LOAD LESSON CONTENT YANG DIPERBAIKI
function loadLessonContent() {
  console.log("=== LOAD LESSON CONTENT ===");
  console.log("Bahasa:", currentEducationLanguage);
  console.log("Lesson ID:", currentLesson);
  console.log("Page Index:", currentPageIndex);

  // Dapatkan data berdasarkan bahasa
  const langData =
    educationContent[currentEducationLanguage] || educationContent.id;

  if (!langData || !langData.lessons) {
    console.error("Data pelajaran tidak ditemukan");
    showNotification("Data pelajaran tidak tersedia", "error");
    return;
  }

  // Dapatkan lesson
  const lesson = langData.lessons[currentLesson];
  if (!lesson) {
    console.error("Lesson tidak ditemukan:", currentLesson);
    console.log("Lessons yang tersedia:", Object.keys(langData.lessons));
    showNotification("Materi belum tersedia", "warning");
    return;
  }

  // Dapatkan page
  const totalPages = lesson.pages ? lesson.pages.length : 0;
  if (totalPages === 0) {
    console.error("Tidak ada halaman dalam lesson ini");
    showNotification("Konten belum tersedia", "warning");
    return;
  }

  // Pastikan page index valid
  if (currentPageIndex >= totalPages) {
    currentPageIndex = totalPages - 1;
  }

  const page = lesson.pages[currentPageIndex];
  if (!page) {
    console.error("Halaman tidak ditemukan:", currentPageIndex);
    return;
  }

  console.log("Page ditemukan:", page.title);

  // 1. Update judul modal
  const titleElement = document.getElementById("lessonDetailTitle");
  if (titleElement) {
    titleElement.textContent = lesson.title || "Detail Pelajaran";
  }

  // 2. Update progress bar
  const progress = ((currentPageIndex + 1) / totalPages) * 100;

  const progressFill = document.getElementById("lessonProgressFill");
  const progressText = document.getElementById("lessonProgressText");
  const pageText = document.getElementById("lessonPageText");

  if (progressFill) {
    progressFill.style.width = `${progress}%`;
  }

  if (progressText) {
    progressText.textContent = `${Math.round(progress)}% selesai`;
  }

  if (pageText) {
    pageText.textContent = `Halaman ${currentPageIndex + 1}/${totalPages}`;
  }

  // 3. Update konten utama
  const pageTitleElement = document.getElementById("lessonPageTitle");
  const contentElement = document.getElementById("lessonContentText");

  if (pageTitleElement) {
    pageTitleElement.textContent = page.title || "Judul Pelajaran";
  }

  if (contentElement) {
    contentElement.innerHTML = formatText(
      page.content || "Konten pelajaran akan segera tersedia...",
    );
  }

  // 4. Update contoh
  const exampleBox = document.getElementById("lessonExampleBox");
  const exampleText = document.getElementById("lessonExampleText");

  if (exampleBox && exampleText) {
    if (page.example) {
      exampleBox.style.display = "block";
      exampleText.innerHTML = formatText(page.example);
    } else {
      exampleBox.style.display = "none";
    }
  }

  // 5. Update tips - FIX: Gunakan ID yang benar
  const tipsBox = document.getElementById("lessonTipsBox");
  const tipsText = document.getElementById("lessonTipsText");

  if (tipsBox && tipsText) {
    if (page.tips) {
      tipsBox.style.display = "block";
      tipsText.innerHTML = formatText(page.tips);
    } else {
      tipsBox.style.display = "none";
    }
  }

  // 6. Update navigasi
  updateLessonNavigation(totalPages);

  console.log("=== LOAD COMPLETE ===");
}

// Fungsi untuk format teks (mengganti \n dengan <br>)
function formatText(text) {
  if (!text) return "";
  return text.replace(/\n/g, "<br>");
}

// Fungsi untuk update navigasi pelajaran
function updateLessonNavigation(totalPages) {
  const prevBtn = document.getElementById("prevLessonBtn");
  const nextBtn = document.getElementById("nextLessonBtn");
  const completeBtn = document.getElementById("completeLessonBtn");

  // Tombol sebelumnya
  if (prevBtn) {
    if (currentPageIndex === 0) {
      prevBtn.classList.add("hidden");
    } else {
      prevBtn.classList.remove("hidden");
    }
  }

  // Tombol berikutnya/complete
  if (nextBtn && completeBtn) {
    if (currentPageIndex === totalPages - 1) {
      nextBtn.classList.add("hidden");
      completeBtn.classList.remove("hidden");
    } else {
      nextBtn.classList.remove("hidden");
      completeBtn.classList.add("hidden");
    }
  }
}

// Fungsi untuk halaman berikutnya
function nextLessonPage() {
  const langData =
    educationContent[currentEducationLanguage] || educationContent.id;
  if (!langData || !langData.lessons || !langData.lessons[currentLesson])
    return;

  const lesson = langData.lessons[currentLesson];
  const totalPages = lesson.pages ? lesson.pages.length : 0;

  if (currentPageIndex < totalPages - 1) {
    currentPageIndex++;
    loadLessonContent();
  }
}

// Fungsi untuk halaman sebelumnya
function prevLessonPage() {
  if (currentPageIndex > 0) {
    currentPageIndex--;
    loadLessonContent();
  }
}

// Fungsi untuk menutup modal detail pelajaran
function closeLessonDetailModal() {
  document.getElementById("lessonDetailModal").classList.add("hidden");
  document.getElementById("educationModal").classList.remove("hidden");
  saveProgress();
}

// Fungsi untuk menyelesaikan pelajaran
function completeLesson() {
  if (!completedLessons.includes(currentLesson)) {
    completedLessons.push(currentLesson);
    saveProgress();
    updateProgress();
    showNotification(
      "Selamat! Anda telah menyelesaikan pelajaran ini.",
      "success",
    );
  }

  // Tawarkan kuis
  const langData =
    educationContent[currentEducationLanguage] || educationContent.id;
  if (
    langData &&
    langData.lessons &&
    langData.lessons[currentLesson] &&
    langData.lessons[currentLesson].quiz
  ) {
    setTimeout(() => {
      if (
        confirm("Apakah Anda ingin mengikuti kuis untuk menguji pemahaman?")
      ) {
        startLessonQuiz(currentLesson);
      } else {
        closeLessonDetailModal();
      }
    }, 500);
  } else {
    closeLessonDetailModal();
  }
}

// Fungsi untuk menyimpan progress
function saveProgress() {
  localStorage.setItem("completedLessons", JSON.stringify(completedLessons));
}

// ================================
// FUNGSI KUIS
// ================================

// Fungsi untuk memulai kuis pelajaran
function startLessonQuiz(lessonId) {
  const langData =
    educationContent[currentEducationLanguage] || educationContent.id;
  if (
    !langData ||
    !langData.lessons ||
    !langData.lessons[lessonId] ||
    !langData.lessons[lessonId].quiz
  )
    return;

  currentQuiz = lessonId;
  currentQuestionIndex = 0;
  quizScore = 0;

  // Update UI
  closeLessonDetailModal();
  setTimeout(() => {
    document.getElementById("quizModal").classList.remove("hidden");
    loadQuizQuestion();
  }, 300);
}

// Fungsi untuk memulai kuis umum
function startGeneralQuiz() {
  const langData =
    educationContent[currentEducationLanguage] || educationContent.id;
  if (!langData || !langData.generalQuiz) return;

  currentQuiz = "general";
  currentQuestionIndex = 0;
  quizScore = 0;

  // Update UI
  document.getElementById("educationModal").classList.add("hidden");
  document.getElementById("quizModal").classList.remove("hidden");
  loadQuizQuestion();
}

// Fungsi untuk menutup modal kuis
function closeQuizModal() {
  document.getElementById("quizModal").classList.add("hidden");
  document.getElementById("educationModal").classList.remove("hidden");
}

// Fungsi untuk memuat pertanyaan kuis
function loadQuizQuestion() {
  const langData =
    educationContent[currentEducationLanguage] || educationContent.id;
  if (!langData) return;

  let questions = [];
  let totalQuestions = 0;

  if (currentQuiz === "general") {
    questions = langData.generalQuiz || [];
    totalQuestions = questions.length;
  } else {
    const lesson = langData.lessons[currentQuiz];
    if (lesson && lesson.quiz) {
      questions = lesson.quiz;
      totalQuestions = questions.length;
    }
  }

  if (questions.length === 0 || currentQuestionIndex >= totalQuestions) {
    showQuizResult();
    return;
  }

  const question = questions[currentQuestionIndex];
  if (!question) return;

  // Update header
  const questionNumber = document.getElementById("quizQuestionNumber");
  const scoreElement = document.getElementById("quizScore");

  if (questionNumber) {
    questionNumber.textContent = `Pertanyaan ${currentQuestionIndex + 1}/${totalQuestions}`;
  }

  if (scoreElement) {
    scoreElement.textContent = `Skor: ${quizScore}`;
  }

  // Update progress
  const progress = (currentQuestionIndex / totalQuestions) * 100;
  const progressFill = document.getElementById("quizProgressFill");
  if (progressFill) {
    progressFill.style.width = `${progress}%`;
  }

  // Update pertanyaan
  const questionText = document.getElementById("quizQuestionText");
  if (questionText) {
    questionText.textContent = question.question;
  }

  // Update opsi jawaban
  const optionsContainer = document.getElementById("quizOptions");
  const feedbackDiv = document.getElementById("quizFeedback");

  if (optionsContainer) {
    optionsContainer.innerHTML = "";
    optionsContainer.classList.remove("hidden");

    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.className = "quiz-option";
      button.innerHTML = `
        <span class="option-letter">${String.fromCharCode(65 + index)}</span>
        <span class="option-text">${option}</span>
      `;
      button.onclick = () => selectQuizOption(index);
      optionsContainer.appendChild(button);
    });
  }

  // Sembunyikan feedback
  if (feedbackDiv) {
    feedbackDiv.classList.add("hidden");
  }
}

// Fungsi untuk memilih opsi kuis
function selectQuizOption(selectedIndex) {
  const langData =
    educationContent[currentEducationLanguage] || educationContent.id;
  if (!langData) return;

  let questions = [];
  if (currentQuiz === "general") {
    questions = langData.generalQuiz || [];
  } else {
    const lesson = langData.lessons[currentQuiz];
    questions = lesson ? lesson.quiz || [] : [];
  }

  if (questions.length === 0) return;

  const question = questions[currentQuestionIndex];
  if (!question) return;

  const options = document.querySelectorAll(".quiz-option");

  // Reset semua opsi
  options.forEach((opt) => {
    opt.classList.remove("selected", "correct", "incorrect");
  });

  // Tandai yang dipilih
  options[selectedIndex].classList.add("selected");

  // Tampilkan feedback
  const feedbackDiv = document.getElementById("quizFeedback");
  const feedbackContent = document.getElementById("feedbackContent");

  if (!feedbackDiv || !feedbackContent) return;

  if (selectedIndex === question.correct) {
    quizScore++;
    options[selectedIndex].classList.add("correct");
    feedbackContent.className = "feedback-content correct";
    feedbackContent.innerHTML = `
      <h5><i class="fas fa-check-circle"></i> Benar!</h5>
      <p>${question.explanation || "Jawaban Anda benar!"}</p>
    `;
  } else {
    options[selectedIndex].classList.add("incorrect");
    if (options[question.correct]) {
      options[question.correct].classList.add("correct");
    }
    feedbackContent.className = "feedback-content incorrect";
    feedbackContent.innerHTML = `
      <h5><i class="fas fa-times-circle"></i> Belum tepat</h5>
      <p>${question.explanation || "Jawaban Anda belum tepat."}</p>
      <div class="correct-answer">
        <i class="fas fa-check"></i> Jawaban yang benar: ${question.options[question.correct]}
      </div>
    `;
  }

  feedbackDiv.classList.remove("hidden");
}

// Fungsi untuk pertanyaan berikutnya
function nextQuizQuestion() {
  const langData =
    educationContent[currentEducationLanguage] || educationContent.id;
  if (!langData) return;

  let totalQuestions = 0;
  if (currentQuiz === "general") {
    totalQuestions = (langData.generalQuiz || []).length;
  } else {
    const lesson = langData.lessons[currentQuiz];
    totalQuestions = lesson ? (lesson.quiz || []).length : 0;
  }

  if (currentQuestionIndex < totalQuestions - 1) {
    currentQuestionIndex++;
    loadQuizQuestion();
  } else {
    // Kuis selesai
    showQuizResult();
  }
}

// Fungsi untuk menampilkan hasil kuis
function showQuizResult() {
  const langData =
    educationContent[currentEducationLanguage] || educationContent.id;
  if (!langData) return;

  let totalQuestions = 0;
  if (currentQuiz === "general") {
    totalQuestions = (langData.generalQuiz || []).length;
  } else {
    const lesson = langData.lessons[currentQuiz];
    totalQuestions = lesson ? (lesson.quiz || []).length : 0;
  }

  const percentage =
    totalQuestions > 0 ? (quizScore / totalQuestions) * 100 : 0;
  const feedbackDiv = document.getElementById("quizFeedback");

  if (!feedbackDiv) return;

  feedbackDiv.innerHTML = `
    <div class="feedback-content ${percentage >= 70 ? "correct" : "incorrect"}">
      <h5><i class="fas fa-trophy"></i> Kuis Selesai!</h5>
      <p>Skor Anda: ${quizScore} dari ${totalQuestions}</p>
      <p>Nilai: ${percentage.toFixed(1)}%</p>
      <p>${percentage >= 70 ? "🎉 Selamat! Anda lulus kuis." : "📚 Anda perlu mempelajari kembali materinya."}</p>
    </div>
    <button class="btn-primary" onclick="closeQuizModal()">
      <i class="fas fa-check"></i> Selesai
    </button>
  `;
}

// ================================
// INISIALISASI SISTEM EDUKASI
// ================================

// Inisialisasi event listeners untuk edukasi
function initEducationSystem() {
  console.log("Inisialisasi sistem edukasi...");

  // event listeners untuk item pelajaran
  document.querySelectorAll(".lesson-item").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      // Cari ID pelajaran
      let lessonId = null;

      // Coba dari onclick attribute
      const onclick = this.getAttribute("onclick");
      if (onclick) {
        const match = onclick.match(/startLesson\('([^']+)'\)/);
        if (match) {
          lessonId = match[1];
        }
      }

      // Jika tidak ditemukan, coba dari data attribute
      if (!lessonId) {
        lessonId = this.getAttribute("data-lesson");
      }

      // Jika masih tidak ditemukan, gunakan mapping
      if (!lessonId) {
        const titleElement = this.querySelector("h4");
        if (titleElement) {
          const title = titleElement.textContent.trim();
          const lessonMap = {
            "Pengelolaan Arus Kas": "cashflow",
            "Cash Flow Management": "cashflow",
            "Pembukuan Sederhana": "bookkeeping",
            "Simple Bookkeeping": "bookkeeping",
            "Analisis Break Even Point": "breakeven",
            "Break Even Point Analysis": "breakeven",
            "Memahami Bunga & Cicilan": "interest",
            "Understanding Interest & Installments": "interest",
          };
          lessonId = lessonMap[title] || "cashflow";
        }
      }

      console.log("Memulai pelajaran:", lessonId);
      if (lessonId) {
        startLesson(lessonId);
      }
    });
  });

  // Load progress
  if (localStorage.getItem("completedLessons")) {
    try {
      completedLessons = JSON.parse(localStorage.getItem("completedLessons"));
      console.log("Progress loaded:", completedLessons);
    } catch (e) {
      console.error("Error loading progress:", e);
      completedLessons = [];
    }
  }
}

// Update progress pada modal edukasi
function updateProgress() {
  const progressBar = document.getElementById("overallProgress");
  const progressText = document.getElementById("progressText");

  if (progressBar && progressText) {
    const totalLessons = 9;
    const completedCount = completedLessons.length;
    const progressPercentage = (completedCount / totalLessons) * 100;

    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `${completedCount} dari ${totalLessons} materi selesai`;
  }
}

// Export fungsi untuk digunakan
window.openEducationCenter = openEducationCenter;
window.closeEducationModal = closeEducationModal;
window.switchCategory = switchCategory;
window.startLesson = startLesson;
window.closeLessonDetailModal = closeLessonDetailModal;
window.nextLessonPage = nextLessonPage;
window.prevLessonPage = prevLessonPage;
window.completeLesson = completeLesson;
window.closeQuizModal = closeQuizModal;
window.nextQuizQuestion = nextQuizQuestion;
window.startGeneralQuiz = startGeneralQuiz;

// Inisialisasi ketika dokumen siap
document.addEventListener("DOMContentLoaded", function () {
  initEducationSystem();

  // Set bahasa default
  if (window.currentLanguage) {
    currentEducationLanguage = window.currentLanguage;
  }

  console.log("Sistem edukasi siap. Bahasa:", currentEducationLanguage);
});

// Fungsi untuk mengubah bahasa edukasi
function changeEducationLanguage(lang) {
  currentEducationLanguage = lang;
  updateEducationUI();
}

// ============================================
// FITUR KEMUDAHAN PEMBAYARAN CICILAN - 4 BAHASA
// ============================================

// Data terjemahan untuk 4 bahasa
const paymentTranslations = {
  id: {
    // Card
    paymentTitle: "Kemudahan Pembayaran Cicilan",
    paymentDescription:
      "Bayar cicilan kredit dengan berbagai metode yang mudah, cepat, dan aman. Pantau jadwal pembayaran dan nikmati kemudahan tanpa harus ke bank.",
    paymentBadge: "Fitur Baru",
    method1Text: "Transfer Bank",
    method2Text: "E-Wallet",
    method3Text: "Virtual Account",
    method4Text: "Auto Debit",
    nextPaymentLabel: "Cicilan Berikutnya",
    amountDueLabel: "Jumlah Tagihan",
    paymentStatusLabel: "Status",
    paymentStatusText: "Aktif",
    paymentHistoryTitle: "Riwayat Pembayaran Terakhir",
    historyMethod1: "Transfer Bank BRI",
    historyMethod2: "GoPay",
    payNowBtnText: "Bayar Sekarang",
    scheduleBtnText: "Jadwal Bayar",
    autoPayBtnText: "Atur Auto Pay",

    // Modal
    paymentModalTitle: "Pembayaran Cicilan Kredit",
    selectMethodTitle: "Pilih Metode Pembayaran",
    bankTransferTitle: "Transfer Bank",
    bankTransferDesc: "Transfer melalui ATM/Mobile/Internet Banking",
    bankTransferFee: "Gratis biaya admin",
    ewalletTitle: "E-Wallet",
    ewalletDesc: "Bayar melalui GoPay, OVO, Dana, dll",
    ewalletFee: "Rp 2.500 admin",
    virtualAccountTitle: "Virtual Account",
    virtualAccountDesc: "Bayar melalui VA bank manapun",
    virtualAccountFee: "Rp 5.000 admin",
    selectBankTitle: "Pilih Bank Anda",
    selectEWalletTitle: "Pilih E-Wallet",
    accountNumberLabel: "Nomor Rekening",
    accountNameLabel: "Nama Pemilik Rekening",
    ewalletNumberLabel: "Nomor E-Wallet",
    payButtonText: "Lanjutkan Pembayaran",
    cancelButtonText: "Batal",

    // Konfirmasi
    paymentSuccessTitle: "Pembayaran Berhasil!",
    paymentSuccessMessage:
      "Pembayaran cicilan kredit Anda telah berhasil diproses. Dana akan dikonfirmasi dalam 1-3 jam kerja.",
    paymentDetailsTitle: "Detail Pembayaran",
    paymentMethodLabel: "Metode Pembayaran",
    paymentDateLabel: "Tanggal Bayar",
    paymentTimeLabel: "Waktu Bayar",
    paymentIdLabel: "ID Transaksi",
    paymentTotalLabel: "Total Dibayar",
    paymentInstruction: "Instruksi Pembayaran",
    bankInstruction:
      "1. Login ke internet/mobile banking\n2. Pilih menu transfer\n3. Masukkan kode virtual account\n4. Konfirmasi pembayaran",
    ewalletInstruction:
      "1. Buka aplikasi e-wallet\n2. Pilih menu pembayaran\n3. Scan QR code\n4. Konfirmasi pembayaran",
    finishButtonText: "Selesai",

    // Jadwal
    scheduleModalTitle: "Jadwal Pembayaran Cicilan",
    remainingInstallments: "Sisa Cicilan",
    totalAmountDue: "Total Tagihan",
    paymentDateColumn: "Tanggal Bayar",
    amountColumn: "Jumlah",
    statusColumn: "Status",
    actionColumn: "Aksi",
    payAction: "Bayar",
    paidStatus: "Lunas",
    dueStatus: "Jatuh Tempo",
    upcomingStatus: "Akan Datang",

    // Auto Payment
    autoPaymentTitle: "Pengaturan Auto Payment",
    autoPaymentDesc:
      "Atur pembayaran otomatis untuk menghindari keterlambatan cicilan.",
    step1Text: "Pilih Bank",
    step2Text: "Atur Tanggal",
    step3Text: "Konfirmasi",
    selectBankLabel: "Pilih Bank untuk Auto Debit",
    paymentDateLabel: "Tanggal Auto Debit",
    accountInfoLabel: "Informasi Rekening",
    confirmTitle: "Konfirmasi Auto Payment",
    confirmMessage: "Apakah Anda yakin ingin mengaktifkan auto payment?",
    activateButton: "Aktifkan Auto Payment",
    setupSuccess: "Auto payment berhasil diaktifkan!",

    // Status
    statusActive: "Aktif",
    statusOverdue: "Terlambat",
    statusUpcoming: "Akan Datang",
  },

  en: {
    paymentTitle: "Easy Installment Payment",
    paymentDescription:
      "Pay credit installments with various easy, fast, and secure methods. Monitor payment schedule and enjoy convenience without going to the bank.",
    paymentBadge: "New Feature",
    method1Text: "Bank Transfer",
    method2Text: "E-Wallet",
    method3Text: "Virtual Account",
    method4Text: "Auto Debit",
    nextPaymentLabel: "Next Installment",
    amountDueLabel: "Amount Due",
    paymentStatusLabel: "Status",
    paymentStatusText: "Active",
    paymentHistoryTitle: "Recent Payment History",
    historyMethod1: "BRI Bank Transfer",
    historyMethod2: "GoPay",
    payNowBtnText: "Pay Now",
    scheduleBtnText: "Payment Schedule",
    autoPayBtnText: "Setup Auto Pay",

    paymentModalTitle: "Credit Installment Payment",
    selectMethodTitle: "Select Payment Method",
    bankTransferTitle: "Bank Transfer",
    bankTransferDesc: "Transfer via ATM/Mobile/Internet Banking",
    bankTransferFee: "No admin fee",
    ewalletTitle: "E-Wallet",
    ewalletDesc: "Pay via GoPay, OVO, Dana, etc",
    ewalletFee: "Rp 2.500 admin fee",
    virtualAccountTitle: "Virtual Account",
    virtualAccountDesc: "Pay via any bank VA",
    virtualAccountFee: "Rp 5.000 admin fee",
    selectBankTitle: "Select Your Bank",
    selectEWalletTitle: "Select E-Wallet",
    accountNumberLabel: "Account Number",
    accountNameLabel: "Account Holder Name",
    ewalletNumberLabel: "E-Wallet Number",
    payButtonText: "Continue Payment",
    cancelButtonText: "Cancel",

    paymentSuccessTitle: "Payment Successful!",
    paymentSuccessMessage:
      "Your credit installment payment has been successfully processed. Funds will be confirmed within 1-3 working hours.",
    paymentDetailsTitle: "Payment Details",
    paymentMethodLabel: "Payment Method",
    paymentDateLabel: "Payment Date",
    paymentTimeLabel: "Payment Time",
    paymentIdLabel: "Transaction ID",
    paymentTotalLabel: "Total Paid",
    paymentInstruction: "Payment Instruction",
    bankInstruction:
      "1. Login to internet/mobile banking\n2. Select transfer menu\n3. Enter virtual account code\n4. Confirm payment",
    ewalletInstruction:
      "1. Open e-wallet app\n2. Select payment menu\n3. Scan QR code\n4. Confirm payment",
    finishButtonText: "Finish",

    scheduleModalTitle: "Installment Payment Schedule",
    remainingInstallments: "Remaining Installments",
    totalAmountDue: "Total Due",
    paymentDateColumn: "Payment Date",
    amountColumn: "Amount",
    statusColumn: "Status",
    actionColumn: "Action",
    payAction: "Pay",
    paidStatus: "Paid",
    dueStatus: "Due",
    upcomingStatus: "Upcoming",

    autoPaymentTitle: "Auto Payment Settings",
    autoPaymentDesc: "Setup automatic payment to avoid late installments.",
    step1Text: "Select Bank",
    step2Text: "Set Date",
    step3Text: "Confirm",
    selectBankLabel: "Select Bank for Auto Debit",
    paymentDateLabel: "Auto Debit Date",
    accountInfoLabel: "Account Information",
    confirmTitle: "Confirm Auto Payment",
    confirmMessage: "Are you sure you want to activate auto payment?",
    activateButton: "Activate Auto Payment",
    setupSuccess: "Auto payment successfully activated!",

    statusActive: "Active",
    statusOverdue: "Overdue",
    statusUpcoming: "Upcoming",
  },

  jv: {
    paymentTitle: "Kemudahan Pembayaran Cicilan",
    paymentDescription:
      "Bayar cicilan kredit nganggo macem-macem metode sing gampang, cepet, lan aman. Awasi jadwal pembayaran lan nikmati kemudahan tanpa perlu menyang bank.",
    paymentBadge: "Fitur Anyar",
    method1Text: "Transfer Bank",
    method2Text: "E-Wallet",
    method3Text: "Virtual Account",
    method4Text: "Auto Debit",
    nextPaymentLabel: "Cicilan Sabanjure",
    amountDueLabel: "Jumlah Tagihan",
    paymentStatusLabel: "Status",
    paymentStatusText: "Aktif",
    paymentHistoryTitle: "Riwayat Pembayaran Pungkasan",
    historyMethod1: "Transfer Bank BRI",
    historyMethod2: "GoPay",
    payNowBtnText: "Bayar Saiki",
    scheduleBtnText: "Jadwal Bayar",
    autoPayBtnText: "Atur Auto Pay",

    paymentModalTitle: "Pembayaran Cicilan Kredit",
    selectMethodTitle: "Pilih Metode Pembayaran",
    bankTransferTitle: "Transfer Bank",
    bankTransferDesc: "Transfer liwat ATM/Mobile/Internet Banking",
    bankTransferFee: "Gratis biaya admin",
    ewalletTitle: "E-Wallet",
    ewalletDesc: "Bayar liwat GoPay, OVO, Dana, dll",
    ewalletFee: "Rp 2.500 admin",
    virtualAccountTitle: "Virtual Account",
    virtualAccountDesc: "Bayar liwat VA bank apa wae",
    virtualAccountFee: "Rp 5.000 admin",
    selectBankTitle: "Pilih Bank Sampeyan",
    selectEWalletTitle: "Pilih E-Wallet",
    accountNumberLabel: "Nomor Rekening",
    accountNameLabel: "Jeneng Pemilik Rekening",
    ewalletNumberLabel: "Nomor E-Wallet",
    payButtonText: "Lanjutke Pembayaran",
    cancelButtonText: "Batal",

    paymentSuccessTitle: "Pembayaran Sukses!",
    paymentSuccessMessage:
      "Pembayaran cicilan kredit sampeyan wis sukses diproses. Dana bakal dikonfirmasi ing 1-3 jam kerja.",
    paymentDetailsTitle: "Detail Pembayaran",
    paymentMethodLabel: "Metode Pembayaran",
    paymentDateLabel: "Tanggal Bayar",
    paymentTimeLabel: "Wektu Bayar",
    paymentIdLabel: "ID Transaksi",
    paymentTotalLabel: "Total Dibayar",
    paymentInstruction: "Instruksi Pembayaran",
    bankInstruction:
      "1. Login menyang internet/mobile banking\n2. Pilih menu transfer\n3. Lebokna kode virtual account\n4. Konfirmasi pembayaran",
    ewalletInstruction:
      "1. Bukak aplikasi e-wallet\n2. Pilih menu pembayaran\n3. Scan QR code\n4. Konfirmasi pembayaran",
    finishButtonText: "Rampung",

    scheduleModalTitle: "Jadwal Pembayaran Cicilan",
    remainingInstallments: "Sisa Cicilan",
    totalAmountDue: "Total Tagihan",
    paymentDateColumn: "Tanggal Bayar",
    amountColumn: "Jumlah",
    statusColumn: "Status",
    actionColumn: "Aksi",
    payAction: "Bayar",
    paidStatus: "Lunas",
    dueStatus: "Jatuh Tempo",
    upcomingStatus: "Arep Teka",

    autoPaymentTitle: "Pengaturan Auto Payment",
    autoPaymentDesc:
      "Atur pembayaran otomatis kanggo nyegah keterlambatan cicilan.",
    step1Text: "Pilih Bank",
    step2Text: "Atur Tanggal",
    step3Text: "Konfirmasi",
    selectBankLabel: "Pilih Bank kanggo Auto Debit",
    paymentDateLabel: "Tanggal Auto Debit",
    accountInfoLabel: "Informasi Rekening",
    confirmTitle: "Konfirmasi Auto Payment",
    confirmMessage: "Apa sampeyan yakin pengin ngaktifake auto payment?",
    activateButton: "Aktifna Auto Payment",
    setupSuccess: "Auto payment sukses diaktifna!",

    statusActive: "Aktif",
    statusOverdue: "Kesuwun",
    statusUpcoming: "Arep Teka",
  },

  su: {
    paymentTitle: "Kemudahan Pembayaran Cicilan",
    paymentDescription:
      "Mayar cicilan kirédit ngagunakeun rupa-rupa métode anu gampang, gancang, sareng aman. Awasi jadwal pembayaran sareng nikmati genah tanpa kedah ka bank.",
    paymentBadge: "Fitur Anyar",
    method1Text: "Transfer Bank",
    method2Text: "E-Wallet",
    method3Text: "Virtual Account",
    method4Text: "Auto Debit",
    nextPaymentLabel: "Cicilan Salajengna",
    amountDueLabel: "Jumlah Tagihan",
    paymentStatusLabel: "Status",
    paymentStatusText: "Aktif",
    paymentHistoryTitle: "Riwayat Pembayaran Panungtungan",
    historyMethod1: "Transfer Bank BRI",
    historyMethod2: "GoPay",
    payNowBtnText: "Mayar Ayeuna",
    scheduleBtnText: "Jadwal Mayar",
    autoPayBtnText: "Atur Auto Pay",

    paymentModalTitle: "Pembayaran Cicilan Kirédit",
    selectMethodTitle: "Pilih Métode Pembayaran",
    bankTransferTitle: "Transfer Bank",
    bankTransferDesc: "Transfer ngaliwatan ATM/Mobile/Internet Banking",
    bankTransferFee: "Gratis biaya admin",
    ewalletTitle: "E-Wallet",
    ewalletDesc: "Mayar ngaliwatan GoPay, OVO, Dana, jsb",
    ewalletFee: "Rp 2.500 admin",
    virtualAccountTitle: "Virtual Account",
    virtualAccountDesc: "Mayar ngaliwatan VA bank mana wae",
    virtualAccountFee: "Rp 5.000 admin",
    selectBankTitle: "Pilih Bank Anjeun",
    selectEWalletTitle: "Pilih E-Wallet",
    accountNumberLabel: "Nomor Rekening",
    accountNameLabel: "Nami Nu Boga Rekening",
    ewalletNumberLabel: "Nomor E-Wallet",
    payButtonText: "Teraskeun Pembayaran",
    cancelButtonText: "Bolay",

    paymentSuccessTitle: "Pembayaran Suksés!",
    paymentSuccessMessage:
      "Pembayaran cicilan kirédit anjeun parantos suksés diproses. Dana bakal dikonfirmasi dina 1-3 jam gawé.",
    paymentDetailsTitle: "Detail Pembayaran",
    paymentMethodLabel: "Métode Pembayaran",
    paymentDateLabel: "Tanggal Mayar",
    paymentTimeLabel: "Waktu Mayar",
    paymentIdLabel: "ID Transaksi",
    paymentTotalLabel: "Total Dibayar",
    paymentInstruction: "Instruksi Pembayaran",
    bankInstruction:
      "1. Login ka internet/mobile banking\n2. Pilih menu transfer\n3. Lebetkeun kode virtual account\n4. Konfirmasi pembayaran",
    ewalletInstruction:
      "1. Buka aplikasi e-wallet\n2. Pilih menu pembayaran\n3. Scan QR code\n4. Konfirmasi pembayaran",
    finishButtonText: "Bérés",

    scheduleModalTitle: "Jadwal Pembayaran Cicilan",
    remainingInstallments: "Sésa Cicilan",
    totalAmountDue: "Total Tagihan",
    paymentDateColumn: "Tanggal Mayar",
    amountColumn: "Jumlah",
    statusColumn: "Status",
    actionColumn: "Aksi",
    payAction: "Mayar",
    paidStatus: "Lunas",
    dueStatus: "Jatuh Tempo",
    upcomingStatus: "Bakal Datang",

    autoPaymentTitle: "Pengaturan Auto Payment",
    autoPaymentDesc: "Atur pembayaran otomatis pikeun nyegah telat cicilan.",
    step1Text: "Pilih Bank",
    step2Text: "Atur Tanggal",
    step3Text: "Konfirmasi",
    selectBankLabel: "Pilih Bank pikeun Auto Debit",
    paymentDateLabel: "Tanggal Auto Debit",
    accountInfoLabel: "Informasi Rekening",
    confirmTitle: "Konfirmasi Auto Payment",
    confirmMessage: "Naha anjeun yakin hoyong ngaktifkeun auto payment?",
    activateButton: "Aktipkeun Auto Payment",
    setupSuccess: "Auto payment suksés diaktipkeun!",

    statusActive: "Aktif",
    statusOverdue: "Telat",
    statusUpcoming: "Bakal Datang",
  },
};

// State untuk pembayaran
let currentPaymentMethod = "bank_transfer";
let selectedPaymentBank = "";
let selectedEWallet = "";
let isAutoPaymentSetup = false;
let paymentData = null;

// Data pembayaran
const paymentSchedule = {
  id: [
    { date: "25 Okt 2023", amount: 687500, status: "upcoming" },
    {
      date: "25 Sep 2023",
      amount: 687500,
      status: "paid",
      method: "Transfer Bank BRI",
    },
    { date: "25 Agt 2023", amount: 687500, status: "paid", method: "GoPay" },
  ],
  en: [
    { date: "25 Oct 2023", amount: 687500, status: "upcoming" },
    {
      date: "25 Sep 2023",
      amount: 687500,
      status: "paid",
      method: "BRI Bank Transfer",
    },
    { date: "25 Aug 2023", amount: 687500, status: "paid", method: "GoPay" },
  ],
  jv: [
    { date: "25 Okt 2023", amount: 687500, status: "upcoming" },
    {
      date: "25 Sep 2023",
      amount: 687500,
      status: "paid",
      method: "Transfer Bank BRI",
    },
    { date: "25 Agt 2023", amount: 687500, status: "paid", method: "GoPay" },
  ],
  su: [
    { date: "25 Okt 2023", amount: 687500, status: "upcoming" },
    {
      date: "25 Sep 2023",
      amount: 687500,
      status: "paid",
      method: "Transfer Bank BRI",
    },
    { date: "25 Agt 2023", amount: 687500, status: "paid", method: "GoPay" },
  ],
};

// Inisialisasi data pembayaran
function initializePaymentData() {
  paymentData = {
    nextPaymentDate: getNextPaymentDate(),
    amountDue: 687500,
    paymentStatus: "active",
    remainingInstallments: 18,
    totalAmountDue: 12375000,
  };

  updatePaymentUI();
}

// Fungsi untuk mendapatkan tanggal pembayaran berikutnya
function getNextPaymentDate() {
  const now = new Date();
  now.setMonth(now.getMonth() + 1);
  return now.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// Update UI pembayaran
function updatePaymentUI() {
  if (!paymentData) return;

  const lang = paymentTranslations[currentLanguage] || paymentTranslations.id;

  // Update informasi pembayaran
  document.getElementById("nextPaymentDate").textContent =
    paymentData.nextPaymentDate;
  document.getElementById("amountDue").textContent = formatCurrency(
    paymentData.amountDue,
  );

  // Update status badge
  const statusBadge = document.getElementById("paymentStatusText");
  if (statusBadge) {
    statusBadge.textContent = lang.statusActive || "Aktif";
  }

  // Update history berdasarkan bahasa
  const schedule = paymentSchedule[currentLanguage] || paymentSchedule.id;
  const historyList = document.querySelector(".history-list");

  if (historyList && schedule && schedule.length >= 2) {
    // Update text history method
    const historyMethod1 = document.getElementById("historyMethod1");
    const historyMethod2 = document.getElementById("historyMethod2");

    if (historyMethod1 && schedule[1]) {
      historyMethod1.textContent = schedule[1].method || "Transfer Bank BRI";
    }

    if (historyMethod2 && schedule[2]) {
      historyMethod2.textContent = schedule[2].method || "GoPay";
    }
  }
}

// Fungsi untuk memilih metode pembayaran
function selectPaymentMethod(method) {
  currentPaymentMethod = method;

  // Update UI
  document.querySelectorAll(".method-tag").forEach((tag) => {
    tag.classList.remove("active");
  });

  if (event && event.target) {
    event.target.classList.add("active");
  }

  // Update badge jika auto debit
  const badge = document.querySelector(".payment-status-badge");
  if (badge) {
    if (method === "autodebit") {
      badge.textContent =
        paymentTranslations[currentLanguage]?.method4Text || "Auto Debit";
    } else {
      badge.textContent =
        paymentTranslations[currentLanguage]?.statusActive || "Aktif";
    }
  }
}

// Update semua terjemahan pembayaran
function updateAllPaymentTranslations() {
  const lang = paymentTranslations[currentLanguage] || paymentTranslations.id;

  // Update semua teks berdasarkan ID
  const elements = [
    "paymentTitle",
    "paymentDescription",
    "paymentBadge",
    "method1Text",
    "method2Text",
    "method3Text",
    "method4Text",
    "nextPaymentLabel",
    "amountDueLabel",
    "paymentStatusLabel",
    "paymentStatusText",
    "paymentHistoryTitle",
    "historyMethod1",
    "historyMethod2",
    "payNowBtnText",
    "scheduleBtnText",
    "autoPayBtnText",
  ];

  elements.forEach((id) => {
    const element = document.getElementById(id);
    if (element && lang[id]) {
      element.textContent = lang[id];
    }
  });

  // Update payment data juga
  updatePaymentUI();
}

// Fungsi untuk membuka modal pembayaran
function openPaymentModal() {
  const lang = paymentTranslations[currentLanguage] || paymentTranslations.id;

  const modalHTML = `
    <div id="paymentModal" class="modal-overlay">
      <div class="payment-modal">
        <div class="modal-header">
          <h3>${lang.paymentModalTitle}</h3>
          <button class="close-modal" onclick="closePaymentModal()">&times;</button>
        </div>
        
        <div class="payment-form">
          <div class="payment-amount">
            <h4>${lang.amountDueLabel}</h4>
            <div class="payment-total">${formatCurrency(paymentData?.amountDue || 687500)}</div>
            <div class="payment-due">${lang.nextPaymentLabel}: ${paymentData?.nextPaymentDate || "25 Okt 2023"}</div>
          </div>
          
          <div class="payment-method-selection">
            <h4>${lang.selectMethodTitle}</h4>
            <div class="method-options">
              <div class="method-option ${currentPaymentMethod === "bank_transfer" ? "selected" : ""}" onclick="selectPaymentMethodOption('bank_transfer')">
                <div class="method-icon">
                  <i class="fas fa-university"></i>
                </div>
                <div class="method-details">
                  <h5>${lang.bankTransferTitle}</h5>
                  <p>${lang.bankTransferDesc}</p>
                  <span class="method-fee free">${lang.bankTransferFee}</span>
                </div>
              </div>
              
              <div class="method-option ${currentPaymentMethod === "ewallet" ? "selected" : ""}" onclick="selectPaymentMethodOption('ewallet')">
                <div class="method-icon">
                  <i class="fas fa-mobile-alt"></i>
                </div>
                <div class="method-details">
                  <h5>${lang.ewalletTitle}</h5>
                  <p>${lang.ewalletDesc}</p>
                  <span class="method-fee charged">${lang.ewalletFee}</span>
                </div>
              </div>
              
              <div class="method-option ${currentPaymentMethod === "virtual_account" ? "selected" : ""}" onclick="selectPaymentMethodOption('virtual_account')">
                <div class="method-icon">
                  <i class="fas fa-qrcode"></i>
                </div>
                <div class="method-details">
                  <h5>${lang.virtualAccountTitle}</h5>
                  <p>${lang.virtualAccountDesc}</p>
                  <span class="method-fee charged">${lang.virtualAccountFee}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="payment-actions">
            <button class="btn-secondary" onclick="closePaymentModal()">
              ${lang.cancelButtonText}
            </button>
            <button class="btn-primary" onclick="processPayment()">
              <i class="fas fa-lock"></i>
              ${lang.payButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Hapus modal lama jika ada
  const existingModal = document.getElementById("paymentModal");
  if (existingModal) {
    existingModal.remove();
  }

  document.body.insertAdjacentHTML("beforeend", modalHTML);
}

// Fungsi untuk memilih metode di modal
function selectPaymentMethodOption(method) {
  currentPaymentMethod = method;

  document.querySelectorAll(".method-option").forEach((option) => {
    option.classList.remove("selected");
  });

  if (event && event.target) {
    event.target.closest(".method-option").classList.add("selected");
  }
}

// Fungsi untuk menutup modal
function closePaymentModal() {
  const modal = document.getElementById("paymentModal");
  if (modal) {
    modal.remove();
  }
}

// Fungsi untuk memproses pembayaran
function processPayment() {
  const lang = paymentTranslations[currentLanguage] || paymentTranslations.id;

  showNotification(`${lang.payNowBtnText}...`, "info");

  setTimeout(() => {
    // Simulasi pembayaran sukses
    showPaymentConfirmation();
    closePaymentModal();

    // Update next payment date
    paymentData.nextPaymentDate = getNextPaymentDate();
    updatePaymentUI();

    showNotification("Pembayaran berhasil diproses!", "success");
  }, 2000);
}

// Fungsi untuk menampilkan konfirmasi
function showPaymentConfirmation() {
  const lang = paymentTranslations[currentLanguage] || paymentTranslations.id;
  const now = new Date();

  const confirmationHTML = `
    <div id="paymentConfirmationModal" class="modal-overlay">
      <div class="payment-modal">
        <div class="payment-confirmation">
          <div class="confirmation-icon">
            <i class="fas fa-check"></i>
          </div>
          
          <h3>${lang.paymentSuccessTitle}</h3>
          <p>${lang.paymentSuccessMessage}</p>
          
          <div class="payment-details-summary">
            <h4>${lang.paymentDetailsTitle}</h4>
            <div class="confirmation-detail">
              <span class="label">${lang.paymentMethodLabel}</span>
              <span class="value">${getPaymentMethodName()}</span>
            </div>
            <div class="confirmation-detail">
              <span class="label">${lang.paymentDateLabel}</span>
              <span class="value">${now.toLocaleDateString()}</span>
            </div>
            <div class="confirmation-detail">
              <span class="label">${lang.paymentIdLabel}</span>
              <span class="value">TRX${Date.now().toString().slice(-10)}</span>
            </div>
            <div class="confirmation-detail total">
              <span class="label">${lang.paymentTotalLabel}</span>
              <span class="value">${formatCurrency(paymentData.amountDue)}</span>
            </div>
          </div>
          
          <button class="btn-primary" onclick="closePaymentConfirmation()">
            <i class="fas fa-check"></i>
            ${lang.finishButtonText}
          </button>
        </div>
      </div>
    </div>
  `;

  // Hapus modal lama jika ada
  const oldModal = document.getElementById("paymentConfirmationModal");
  if (oldModal) oldModal.remove();

  document.body.insertAdjacentHTML("beforeend", confirmationHTML);
}

// Fungsi untuk mendapatkan nama metode pembayaran
function getPaymentMethodName() {
  const lang = paymentTranslations[currentLanguage] || paymentTranslations.id;

  switch (currentPaymentMethod) {
    case "bank_transfer":
      return lang.bankTransferTitle;
    case "ewallet":
      return lang.ewalletTitle;
    case "virtual_account":
      return lang.virtualAccountTitle;
    default:
      return lang.bankTransferTitle;
  }
}

// Fungsi untuk menutup konfirmasi
function closePaymentConfirmation() {
  const modal = document.getElementById("paymentConfirmationModal");
  if (modal) {
    modal.remove();
  }
}

// Fungsi untuk melihat jadwal pembayaran
function viewPaymentSchedule() {
  const lang = paymentTranslations[currentLanguage] || paymentTranslations.id;
  const schedule = paymentSchedule[currentLanguage] || paymentSchedule.id;

  const scheduleHTML = `
    <div id="scheduleModal" class="modal-overlay">
      <div class="payment-modal">
        <div class="modal-header">
          <h3>${lang.scheduleModalTitle}</h3>
          <button class="close-modal" onclick="closeScheduleModal()">&times;</button>
        </div>
        
        <div class="payment-form">
          <div class="payment-amount">
            <h4>${lang.remainingInstallments}</h4>
            <div class="payment-total">${paymentData?.remainingInstallments || 18}</div>
            <div class="payment-due">${lang.totalAmountDue}: ${formatCurrency(paymentData?.totalAmountDue || 12375000)}</div>
          </div>
          
          <div class="payment-method-selection">
            <h4>${lang.paymentDateColumn}</h4>
            <div class="method-options">
              ${schedule
                .map(
                  (item, index) => `
                <div class="method-option ${item.status === "upcoming" ? "selected" : ""}">
                  <div class="method-icon">
                    <i class="fas ${item.status === "paid" ? "fa-check-circle success" : "fa-calendar-alt"}"></i>
                  </div>
                  <div class="method-details">
                    <h5>${item.date}</h5>
                    <p>${formatCurrency(item.amount)}</p>
                    <span class="method-fee ${item.status === "paid" ? "free" : "charged"}">
                      ${lang[item.status + "Status"] || item.status}
                    </span>
                  </div>
                  ${
                    item.status === "upcoming"
                      ? `
                    <button class="btn-small" onclick="payInstallment('${item.date}', ${item.amount})">
                      ${lang.payAction}
                    </button>
                  `
                      : ""
                  }
                </div>
              `,
                )
                .join("")}
            </div>
          </div>
          
          <div class="payment-actions">
            <button class="btn-primary" onclick="closeScheduleModal()">
              <i class="fas fa-check"></i>
              ${lang.finishButtonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Hapus modal lama jika ada
  const oldModal = document.getElementById("scheduleModal");
  if (oldModal) oldModal.remove();

  document.body.insertAdjacentHTML("beforeend", scheduleHTML);
}

// Fungsi untuk membayar dari jadwal
function payInstallment(date, amount) {
  const lang = paymentTranslations[currentLanguage] || paymentTranslations.id;
  showNotification(
    `${lang.payAction} ${date}: ${formatCurrency(amount)}`,
    "info",
  );
  closeScheduleModal();
  setTimeout(() => {
    openPaymentModal();
  }, 500);
}

// Fungsi untuk menutup modal jadwal
function closeScheduleModal() {
  const modal = document.getElementById("scheduleModal");
  if (modal) {
    modal.remove();
  }
}

// Fungsi untuk mengatur auto payment
function setupAutoPayment() {
  const lang = paymentTranslations[currentLanguage] || paymentTranslations.id;

  const autoPaymentHTML = `
    <div id="autoPaymentModal" class="modal-overlay">
      <div class="payment-modal">
        <div class="modal-header">
          <h3>${lang.autoPaymentTitle}</h3>
          <button class="close-modal" onclick="closeAutoPaymentModal()">&times;</button>
        </div>
        
        <div class="payment-form">
          <div class="payment-amount">
            <h4>${lang.autoPaymentDesc}</h4>
          </div>
          
          <div class="payment-method-selection">
            <div class="form-group">
              <label>${lang.selectBankLabel}</label>
              <select class="form-control">
                <option value="">${lang.selectBankTitle}</option>
                <option value="bca">BCA</option>
                <option value="bni">BNI</option>
                <option value="bri">BRI</option>
                <option value="mandiri">Mandiri</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>${lang.paymentDateLabel}</label>
              <select class="form-control">
                <option value="5">Tanggal 5</option>
                <option value="10">Tanggal 10</option>
                <option value="15">Tanggal 15</option>
                <option value="20">Tanggal 20</option>
                <option value="25" selected>Tanggal 25</option>
              </select>
            </div>
            
            <div class="form-group">
              <label>${lang.accountInfoLabel}</label>
              <input type="text" class="form-control" placeholder="${lang.accountNumberLabel}">
              <input type="text" class="form-control" placeholder="${lang.accountNameLabel}" style="margin-top: 10px;">
            </div>
          </div>
          
          <div class="payment-actions">
            <button class="btn-secondary" onclick="closeAutoPaymentModal()">
              ${lang.cancelButtonText}
            </button>
            <button class="btn-primary" onclick="activateAutoPayment()">
              <i class="fas fa-bolt"></i>
              ${lang.activateButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  // Hapus modal lama jika ada
  const oldModal = document.getElementById("autoPaymentModal");
  if (oldModal) oldModal.remove();

  document.body.insertAdjacentHTML("beforeend", autoPaymentHTML);
}

// Fungsi untuk mengaktifkan auto payment
function activateAutoPayment() {
  const lang = paymentTranslations[currentLanguage] || paymentTranslations.id;

  if (confirm(lang.confirmMessage)) {
    isAutoPaymentSetup = true;
    selectPaymentMethod("autodebit");
    showNotification(lang.setupSuccess, "success");
    closeAutoPaymentModal();
  }
}

// Fungsi untuk menutup modal auto payment
function closeAutoPaymentModal() {
  const modal = document.getElementById("autoPaymentModal");
  if (modal) {
    modal.remove();
  }
}

// Inisialisasi ketika dokumen siap
document.addEventListener("DOMContentLoaded", function () {
  initializePaymentData();
  updateAllPaymentTranslations();

  // Override fungsi changeLanguage untuk update terjemahan pembayaran
  const originalChangeLanguage = window.changeLanguage;
  if (originalChangeLanguage) {
    window.changeLanguage = function (...args) {
      originalChangeLanguage.apply(this, args);
      updateAllPaymentTranslations();
    };
  }
});

// Export semua fungsi ke global scope
window.selectPaymentMethod = selectPaymentMethod;
window.openPaymentModal = openPaymentModal;
window.viewPaymentSchedule = viewPaymentSchedule;
window.setupAutoPayment = setupAutoPayment;
window.selectPaymentMethodOption = selectPaymentMethodOption;
window.closePaymentModal = closePaymentModal;
window.processPayment = processPayment;
window.payInstallment = payInstallment;
window.closeScheduleModal = closeScheduleModal;
window.activateAutoPayment = activateAutoPayment;
window.closeAutoPaymentModal = closeAutoPaymentModal;
window.closePaymentConfirmation = closePaymentConfirmation;
