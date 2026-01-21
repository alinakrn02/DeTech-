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
