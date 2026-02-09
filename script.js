// ==========================
// TRANSLATIONS
// ==========================
const translations = {
  ar: {
    appName: "أوتوميشن",
    headerTitle: "لوحة تحكم الأتمتة",
    userName: "محمد أحمد",
    userRole: "مدير النظام",

    navDashboard: "لوحة التحكم",
    navLeads: "العملاء المحتملين",
    navForms: "النماذج",
    navCustomers: "العملاء",
    navAutomation: "الأتمتة",
    navSettings: "الإعدادات",

    dashboardTitle: "لوحة التحكم الرئيسية",
    totalLeadsText: "إجمالي العملاء المحتملين",
    totalFormsText: "نموذج نشط",
    conversionRateText: "معدل التحويل",
    timeSavedText: "ساعة وفرت",
    leadsChartTitle: "تحليل العملاء المحتملين",
    conversionChartTitle: "معدلات التحويل",

    leadsTitle: "إدارة العملاء المحتملين",
    addLeadText: "إضافة عميل محتمل",
    filterText: "تصفية",
    exportText: "تصدير",
    leadNameHeader: "الاسم",
    leadEmailHeader: "البريد الإلكتروني",
    leadSourceHeader: "المصدر",
    leadStatusHeader: "الحالة",
    leadDateHeader: "التاريخ",
    leadActionsHeader: "الإجراءات",

    formsTitle: "النماذج والأتمتة",
    createFormText: "إنشاء نموذج جديد",

    customersTitle: "إدارة العملاء",

    automationTitle: "قواعد الأتمتة",
    automationRulesTitle: "القواعد النشطة",
    rule1Title: "إشعار العملاء المحتملين الجدد",
    rule1Desc: "يتم إرسال إشعار فوري عند إرسال نموذج اتصال جديد",
    rule2Title: "متابعة تلقائية بعد 3 أيام",
    rule2Desc: "إرسال بريد إلكتروني للمتابعة للعملاء المحتملين غير المتفاعلين",
    rule3Title: "ترقية العميل المحتمل",
    rule3Desc: "ترقية العميل المحتمل إلى عميل عند إتمام عملية الشراء",

    apiIntegrationTitle: "تكاملات API",
    googleSheetsDesc: "مزامنة تلقائية للعملاء المحتملين مع جداول جوجل",
    slackDesc: "إشعارات فورية في قنوات Slack",
    zapierDesc: "تكامل مع +3000 تطبيق عبر Zapier",
    connected: "متصل",

    settingsTitle: "الإعدادات",
    emailNotificationsLabel: "إشعارات البريد الإلكتروني",
    emailNotificationsText: "تفعيل إشعارات البريد الإلكتروني للعملاء المحتملين الجدد",
    autoFollowupLabel: "المتابعة التلقائية",
    autoFollowupText: "إرسال بريد متابعة تلقائي بعد 3 أيام",
    timezoneLabel: "المنطقة الزمنية",
    dataRetentionLabel: "احتفاظ البيانات",
    saveSettingsText: "حفظ الإعدادات",

    addLeadModalTitle: "إضافة عميل محتمل جديد",
    leadNameLabel: "الاسم الكامل",
    leadEmailLabel: "البريد الإلكتروني",
    leadPhoneLabel: "رقم الهاتف",
    leadSourceLabel: "المصدر",
    leadStatusLabel: "الحالة",
    saveLeadText: "حفظ العميل المحتمل",
    cancelLeadText: "إلغاء",

    placeholderName: "أدخل الاسم الكامل",
    placeholderEmail: "أدخل البريد الإلكتروني",
    placeholderPhone: "أدخل رقم الهاتف",
    searchPlaceholder: "ابحث بالاسم أو البريد...",

    statusNew: "جديد",
    statusContacted: "تم التواصل",
    statusQualified: "مؤهل",
    statusConverted: "تم التحويل",

    sourceWebsite: "الموقع الإلكتروني",
    sourceSocial: "وسائل التواصل الاجتماعي",
    sourceReferral: "إحالة",
    sourceEvent: "فعالية",
    sourceOther: "أخرى",

    submissionsWord: "تقديم",
    lastSubmissionWord: "آخر تقديم:",
    view: "عرض",
    embed: "التضمين",

    customerSince: "عميل منذ:",
    customerValue: "القيمة:",

    timezoneOptions: [
      { value: "+3", label: "(UTC+3) الرياض، الدمام، جدة" },
      { value: "+1", label: "(UTC+1) برلين، باريس، روما" },
      { value: "0", label: "(UTC+0) لندن، دبلن" },
      { value: "-5", label: "(UTC-5) نيويورك، تورونتو" }
    ],
    retentionOptions: [
      { value: "30", label: "30 يوم" },
      { value: "90", label: "90 يوم" },
      { value: "365", label: "سنة واحدة" },
      { value: "forever", label: "للأبد" }
    ],

    darkModeOn: "الوضع الداكن",
    darkModeOff: "الوضع الفاتح",

    pagination: {
      showing: (from,to,total)=> `عرض ${from}-${to} من ${total}`,
      prev: "السابق",
      next: "التالي"
    },

    alerts: {
      leadSaved: "تم حفظ العميل المحتمل بنجاح!",
      requiredFields: "الرجاء ملء الحقول المطلوبة",
      newForm: "سيتم إنشاء نموذج جديد",
      settingsSaved: "تم حفظ الإعدادات بنجاح",
      editLead: (id) => `تعديل العميل المحتمل رقم ${id}`,
      deleteConfirm: "هل أنت متأكد من حذف هذا العميل المحتمل؟",
      leadDeleted: (id) => `تم حذف العميل المحتمل رقم ${id}`,
      exportDone: "تم تصدير ملف CSV بنجاح"
    }
  },

  en: {
    appName: "Automation",
    headerTitle: "Automation Dashboard",
    userName: "Michael Anderson",
    userRole: "System Manager",

    navDashboard: "Dashboard",
    navLeads: "Leads",
    navForms: "Forms",
    navCustomers: "Customers",
    navAutomation: "Automation",
    navSettings: "Settings",

    dashboardTitle: "Main Dashboard",
    totalLeadsText: "Total Leads",
    totalFormsText: "Active Forms",
    conversionRateText: "Conversion Rate",
    timeSavedText: "Hours Saved",
    leadsChartTitle: "Leads Analysis",
    conversionChartTitle: "Conversion Rates",

    leadsTitle: "Leads Management",
    addLeadText: "Add New Lead",
    filterText: "Filter",
    exportText: "Export",
    leadNameHeader: "Name",
    leadEmailHeader: "Email",
    leadSourceHeader: "Source",
    leadStatusHeader: "Status",
    leadDateHeader: "Date",
    leadActionsHeader: "Actions",

    formsTitle: "Forms & Automation",
    createFormText: "Create New Form",

    customersTitle: "Customer Management",

    automationTitle: "Automation Rules",
    automationRulesTitle: "Active Rules",
    rule1Title: "New Lead Notification",
    rule1Desc: "Instant notification when a new contact form is submitted",
    rule2Title: "Auto Follow-up After 3 Days",
    rule2Desc: "Send follow-up email to unresponsive leads",
    rule3Title: "Lead Upgrade",
    rule3Desc: "Upgrade lead to customer upon purchase completion",

    apiIntegrationTitle: "API Integrations",
    googleSheetsDesc: "Automatic lead sync with Google Sheets",
    slackDesc: "Instant notifications in Slack channels",
    zapierDesc: "Integration with 3000+ apps via Zapier",
    connected: "Connected",

    settingsTitle: "Settings",
    emailNotificationsLabel: "Email Notifications",
    emailNotificationsText: "Enable email notifications for new leads",
    autoFollowupLabel: "Auto Follow-up",
    autoFollowupText: "Send automatic follow-up email after 3 days",
    timezoneLabel: "Timezone",
    dataRetentionLabel: "Data Retention",
    saveSettingsText: "Save Settings",

    addLeadModalTitle: "Add New Lead",
    leadNameLabel: "Full Name",
    leadEmailLabel: "Email Address",
    leadPhoneLabel: "Phone Number",
    leadSourceLabel: "Source",
    leadStatusLabel: "Status",
    saveLeadText: "Save Lead",
    cancelLeadText: "Cancel",

    placeholderName: "Enter full name",
    placeholderEmail: "Enter email address",
    placeholderPhone: "Enter phone number",
    searchPlaceholder: "Search by name or email...",

    statusNew: "New",
    statusContacted: "Contacted",
    statusQualified: "Qualified",
    statusConverted: "Converted",

    sourceWebsite: "Website",
    sourceSocial: "Social Media",
    sourceReferral: "Referral",
    sourceEvent: "Event",
    sourceOther: "Other",

    submissionsWord: "submissions",
    lastSubmissionWord: "Last submission:",
    view: "View",
    embed: "Embed",

    customerSince: "Customer since:",
    customerValue: "Value:",

    timezoneOptions: [
      { value: "+3", label: "(UTC+3) Riyadh, Dammam, Jeddah" },
      { value: "+1", label: "(UTC+1) Berlin, Paris, Rome" },
      { value: "0", label: "(UTC+0) London, Dublin" },
      { value: "-5", label: "(UTC-5) New York, Toronto" }
    ],
    retentionOptions: [
      { value: "30", label: "30 days" },
      { value: "90", label: "90 days" },
      { value: "365", label: "1 year" },
      { value: "forever", label: "Forever" }
    ],

    darkModeOn: "Dark Mode",
    darkModeOff: "Light Mode",

    pagination: {
      showing: (from,to,total)=> `Showing ${from}-${to} of ${total}`,
      prev: "Prev",
      next: "Next"
    },

    alerts: {
      leadSaved: "Lead saved successfully!",
      requiredFields: "Please fill in required fields",
      newForm: "New form will be created",
      settingsSaved: "Settings saved successfully",
      editLead: (id) => `Edit lead #${id}`,
      deleteConfirm: "Are you sure you want to delete this lead?",
      leadDeleted: (id) => `Lead #${id} deleted`,
      exportDone: "CSV exported successfully"
    }
  },

  de: {
    appName: "Automatisierung",
    headerTitle: "Automatisierungs-Dashboard",
    userName: "Michael Schmidt",
    userRole: "Systemmanager",

    navDashboard: "Dashboard",
    navLeads: "Leads",
    navForms: "Formulare",
    navCustomers: "Kunden",
    navAutomation: "Automatisierung",
    navSettings: "Einstellungen",

    dashboardTitle: "Haupt-Dashboard",
    totalLeadsText: "Gesamt Leads",
    totalFormsText: "Aktive Formulare",
    conversionRateText: "Konversionsrate",
    timeSavedText: "Stunden gespart",
    leadsChartTitle: "Lead-Analyse",
    conversionChartTitle: "Konversionsraten",

    leadsTitle: "Lead-Verwaltung",
    addLeadText: "Neuen Lead hinzufügen",
    filterText: "Filtern",
    exportText: "Exportieren",
    leadNameHeader: "Name",
    leadEmailHeader: "E-Mail",
    leadSourceHeader: "Quelle",
    leadStatusHeader: "Status",
    leadDateHeader: "Datum",
    leadActionsHeader: "Aktionen",

    formsTitle: "Formulare & Automatisierung",
    createFormText: "Neues Formular erstellen",

    customersTitle: "Kundenverwaltung",

    automationTitle: "Automatisierungsregeln",
    automationRulesTitle: "Aktive Regeln",
    rule1Title: "Neue Lead-Benachrichtigung",
    rule1Desc: "Sofortige Benachrichtigung bei neuen Kontaktformularen",
    rule2Title: "Automatisches Follow-up nach 3 Tagen",
    rule2Desc: "Follow-up-E-Mail an nicht reagierende Leads senden",
    rule3Title: "Lead-Upgrade",
    rule3Desc: "Lead bei Kaufabschluss zum Kunden upgraden",

    apiIntegrationTitle: "API-Integrationen",
    googleSheetsDesc: "Automatische Lead-Synchronisation mit Google Sheets",
    slackDesc: "Sofortige Benachrichtigungen in Slack-Kanälen",
    zapierDesc: "Integration mit 3000+ Apps über Zapier",
    connected: "Verbunden",

    settingsTitle: "Einstellungen",
    emailNotificationsLabel: "E-Mail-Benachrichtigungen",
    emailNotificationsText: "E-Mail-Benachrichtigungen für neue Leads aktivieren",
    autoFollowupLabel: "Automatisches Follow-up",
    autoFollowupText: "Automatische Follow-up-E-Mail nach 3 Tagen senden",
    timezoneLabel: "Zeitzone",
    dataRetentionLabel: "Datenaufbewahrung",
    saveSettingsText: "Einstellungen speichern",

    addLeadModalTitle: "Neuen Lead hinzufügen",
    leadNameLabel: "Vollständiger Name",
    leadEmailLabel: "E-Mail-Adresse",
    leadPhoneLabel: "Telefonnummer",
    leadSourceLabel: "Quelle",
    leadStatusLabel: "Status",
    saveLeadText: "Lead speichern",
    cancelLeadText: "Abbrechen",

    placeholderName: "Vollständigen Namen eingeben",
    placeholderEmail: "E-Mail-Adresse eingeben",
    placeholderPhone: "Telefonnummer eingeben",
    searchPlaceholder: "Nach Name oder E-Mail suchen...",

    statusNew: "Neu",
    statusContacted: "Kontaktiert",
    statusQualified: "Qualifiziert",
    statusConverted: "Konvertiert",

    sourceWebsite: "Website",
    sourceSocial: "Soziale Medien",
    sourceReferral: "Empfehlung",
    sourceEvent: "Veranstaltung",
    sourceOther: "Andere",

    submissionsWord: "Einreichungen",
    lastSubmissionWord: "Letzte Einreichung:",
    view: "Ansehen",
    embed: "Einbetten",

    customerSince: "Kunde seit:",
    customerValue: "Wert:",

    timezoneOptions: [
      { value: "+3", label: "(UTC+3) Riad, Dammam, Dschidda" },
      { value: "+1", label: "(UTC+1) Berlin, Paris, Rom" },
      { value: "0", label: "(UTC+0) London, Dublin" },
      { value: "-5", label: "(UTC-5) New York, Toronto" }
    ],
    retentionOptions: [
      { value: "30", label: "30 Tage" },
      { value: "90", label: "90 Tage" },
      { value: "365", label: "1 Jahr" },
      { value: "forever", label: "Für immer" }
    ],

    darkModeOn: "Dark Mode",
    darkModeOff: "Light Mode",

    pagination: {
      showing: (from,to,total)=> `Anzeige ${from}-${to} von ${total}`,
      prev: "Zurück",
      next: "Weiter"
    },

    alerts: {
      leadSaved: "Lead erfolgreich gespeichert!",
      requiredFields: "Bitte füllen Sie die erforderlichen Felder aus",
      newForm: "Neues Formular wird erstellt",
      settingsSaved: "Einstellungen erfolgreich gespeichert",
      editLead: (id) => `Lead #${id} bearbeiten`,
      deleteConfirm: "Möchten Sie diesen Lead wirklich löschen?",
      leadDeleted: (id) => `Lead #${id} gelöscht`,
      exportDone: "CSV erfolgreich exportiert"
    }
  }
};

// ==========================
// SAMPLE DATA
// ==========================
const leads = [
  { id: 1, name: "Ahmad Mohammed", email: "ahmad@example.com", source: "website", status: "new", date: "2023-10-15" },
  { id: 2, name: "Sarah Ali", email: "sara@example.com", source: "social", status: "contacted", date: "2023-10-14" },
  { id: 3, name: "Khaled Hassan", email: "khaled@example.com", source: "referral", status: "qualified", date: "2023-10-13" },
  { id: 4, name: "Lamia Kamal", email: "lamia@example.com", source: "event", status: "converted", date: "2023-10-12" },
  { id: 5, name: "Omar Reda", email: "omar@example.com", source: "website", status: "new", date: "2023-10-11" },
  { id: 6, name: "Noura Saeed", email: "nora@example.com", source: "social", status: "contacted", date: "2023-10-10" },
  { id: 7, name: "John Miller", email: "john@example.com", source: "website", status: "qualified", date: "2023-10-09" },
  { id: 8, name: "Sophie Klein", email: "sophie@example.com", source: "referral", status: "new", date: "2023-10-08" },
  { id: 9, name: "Ali Hamed", email: "ali@example.com", source: "event", status: "contacted", date: "2023-10-07" },
  { id: 10, name: "Mona Saleh", email: "mona@example.com", source: "other", status: "converted", date: "2023-10-06" },
  { id: 11, name: "Karim Fares", email: "karim@example.com", source: "social", status: "qualified", date: "2023-10-05" },
  { id: 12, name: "Hana Sami", email: "hana@example.com", source: "website", status: "new", date: "2023-10-04" }
];

const forms = [
  { id: 1, name: { ar:"نموذج الاتصال", en:"Contact Form", de:"Kontaktformular" }, submissions: 42, last: { ar:"اليوم", en:"Today", de:"Heute" } },
  { id: 2, name: { ar:"طلب عرض سعر", en:"Quote Request", de:"Angebotsanfrage" }, submissions: 18, last: { ar:"أمس", en:"Yesterday", de:"Gestern" } },
  { id: 3, name: { ar:"طلب تجريبي", en:"Demo Request", de:"Demo-Anfrage" }, submissions: 25, last: { ar:"قبل يومين", en:"2 days ago", de:"vor 2 Tagen" } },
  { id: 4, name: { ar:"استبيان رضا العملاء", en:"Customer Survey", de:"Kundenumfrage" }, submissions: 56, last: { ar:"الأسبوع الماضي", en:"Last week", de:"Letzte Woche" } }
];

const customers = [
  { id: 1, name: { ar:"شركة التقنية المتطورة", en:"Advanced Tech Company", de:"Advanced Tech GmbH" }, email:"info@techco.com", since:"2023-01-15", value:12500 },
  { id: 2, name: { ar:"مؤسسة النهضة", en:"Al-Nahda Foundation", de:"Nahda Stiftung" }, email:"contact@nahda.com", since:"2023-03-22", value:8400 },
  { id: 3, name: { ar:"مجموعة الإبداع", en:"Creativity Group", de:"Kreativgruppe" }, email:"sales@ibdaa.com", since:"2023-05-10", value:15300 },
  { id: 4, name: { ar:"شركة المستقبل", en:"Future Company", de:"Zukunft GmbH" }, email:"info@future.com", since:"2023-07-05", value:9200 }
];

// ==========================
// STATE
// ==========================
let currentLang = localStorage.getItem("dashboardLang") || "ar";
let isDark = localStorage.getItem("dashboardDark") === "1";

// Leads UI state
let searchQuery = "";
let currentPage = 1;
const pageSize = 6;

// DOM
const languageBtn = document.getElementById("languageBtn");
const languageDropdown = document.getElementById("languageDropdown");
const currentLanguage = document.getElementById("currentLanguage");
const currentFlag = document.getElementById("currentFlag");

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const sidebar = document.getElementById("sidebar");
const navLinks = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll(".dashboard-section");

const darkModeBtn = document.getElementById("darkModeBtn");
const darkModeText = document.getElementById("darkModeText");

const leadsSearchInput = document.getElementById("leadsSearchInput");
const exportLeadsBtn = document.getElementById("exportLeadsBtn");

const addLeadBtn = document.getElementById("addLeadBtn");
const addLeadModal = document.getElementById("addLeadModal");
const closeLeadModalBtn = document.getElementById("closeLeadModalBtn");
const cancelLeadBtn = document.getElementById("cancelLeadBtn");
const saveLeadBtn = document.getElementById("saveLeadBtn");

const createFormBtn = document.getElementById("createFormBtn");
const saveSettingsBtn = document.getElementById("saveSettingsBtn");

// Pagination DOM
const paginationInfo = document.getElementById("paginationInfo");
const paginationButtons = document.getElementById("paginationButtons");

// Charts
let leadsChart = null;
let conversionChart = null;

// ==========================
// HELPERS
// ==========================
function cap(s){return s.charAt(0).toUpperCase() + s.slice(1);}

function getMonths(){
  if(currentLang==="ar") return ["يناير","فبراير","مارس","أبريل","مايو","يونيو"];
  if(currentLang==="de") return ["Jan","Feb","Mär","Apr","Mai","Jun"];
  return ["Jan","Feb","Mar","Apr","May","Jun"];
}

function getConversionLabels(){
  const t = translations[currentLang];
  return [t.statusNew, t.statusContacted, t.statusQualified, t.statusConverted];
}

function applyDarkMode(){
  if(isDark) document.body.classList.add("dark");
  else document.body.classList.remove("dark");

  localStorage.setItem("dashboardDark", isDark ? "1" : "0");
  updateDarkModeButton();
}

function updateDarkModeButton(){
  const t = translations[currentLang];
  const icon = darkModeBtn.querySelector("i");
  if(isDark){
    icon.className = "fas fa-sun";
    darkModeText.textContent = t.darkModeOff;
  }else{
    icon.className = "fas fa-moon";
    darkModeText.textContent = t.darkModeOn;
  }
}

// ==========================
// LANGUAGE
// ==========================
function setLanguage(lang){
  currentLang = lang;
  localStorage.setItem("dashboardLang", lang);

  document.body.dir = lang === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lang;

  currentLanguage.textContent = lang === "ar" ? "العربية" : lang === "en" ? "English" : "Deutsch";

  if(lang==="ar"){ currentFlag.style.background="#2ecc71"; currentFlag.style.backgroundImage="none"; }
  if(lang==="en"){ currentFlag.style.background="#3498db"; currentFlag.style.backgroundImage="none"; }
  if(lang==="de"){ currentFlag.style.background="black"; currentFlag.style.backgroundImage="linear-gradient(black, red, yellow)"; }

  updateStaticTexts();
  updateSelects();

  // update leads search placeholder
  leadsSearchInput.placeholder = translations[currentLang].searchPlaceholder;

  // rerender
  renderLeads();
  loadForms();
  loadCustomers();
  updateCharts();
  updateDarkModeButton();

  languageDropdown.classList.remove("show");
}

function updateStaticTexts(){
  const t = translations[currentLang];

  const ids = [
    "appName","headerTitle","userName","userRole",
    "navDashboard","navLeads","navForms","navCustomers","navAutomation","navSettings",
    "dashboardTitle","totalLeadsText","totalFormsText","conversionRateText","timeSavedText",
    "leadsChartTitle","conversionChartTitle",
    "leadsTitle","addLeadText","filterText","exportText",
    "leadNameHeader","leadEmailHeader","leadSourceHeader","leadStatusHeader","leadDateHeader","leadActionsHeader",
    "formsTitle","createFormText",
    "customersTitle",
    "automationTitle","automationRulesTitle","rule1Title","rule1Desc","rule2Title","rule2Desc","rule3Title","rule3Desc",
    "apiIntegrationTitle","googleSheetsDesc","slackDesc","zapierDesc",
    "settingsTitle","emailNotificationsLabel","emailNotificationsText","autoFollowupLabel","autoFollowupText",
    "timezoneLabel","dataRetentionLabel","saveSettingsText",
    "addLeadModalTitle","leadNameLabel","leadEmailLabel","leadPhoneLabel","leadSourceLabel","leadStatusLabel","saveLeadText","cancelLeadText"
  ];

  ids.forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = t[id];
  });

  document.getElementById("connectedText1").textContent = t.connected;
  document.getElementById("connectedText2").textContent = t.connected;
  document.getElementById("connectedText3").textContent = t.connected;

  document.getElementById("leadNameInput").placeholder = t.placeholderName;
  document.getElementById("leadEmailInput").placeholder = t.placeholderEmail;
  document.getElementById("leadPhoneInput").placeholder = t.placeholderPhone;

  const initials = (t.userName || "User").split(" ").map(w=>w[0]).join("").substring(0,2).toUpperCase();
  document.getElementById("userAvatar").textContent = initials;
}

function updateSelects(){
  const t = translations[currentLang];

  const tz = document.getElementById("timezoneSelect");
  tz.innerHTML = "";
  t.timezoneOptions.forEach(opt=>{
    const o = document.createElement("option");
    o.value = opt.value;
    o.textContent = opt.label;
    tz.appendChild(o);
  });

  const dr = document.getElementById("dataRetentionSelect");
  dr.innerHTML = "";
  t.retentionOptions.forEach(opt=>{
    const o = document.createElement("option");
    o.value = opt.value;
    o.textContent = opt.label;
    dr.appendChild(o);
  });

  const src = document.getElementById("leadSourceSelect");
  src.innerHTML = "";
  [
    {value:"website", key:"sourceWebsite"},
    {value:"social", key:"sourceSocial"},
    {value:"referral", key:"sourceReferral"},
    {value:"event", key:"sourceEvent"},
    {value:"other", key:"sourceOther"},
  ].forEach(s=>{
    const o = document.createElement("option");
    o.value = s.value;
    o.textContent = t[s.key];
    src.appendChild(o);
  });

  const st = document.getElementById("leadStatusSelect");
  st.innerHTML = "";
  [
    {value:"new", key:"statusNew"},
    {value:"contacted", key:"statusContacted"},
    {value:"qualified", key:"statusQualified"},
    {value:"converted", key:"statusConverted"},
  ].forEach(s=>{
    const o = document.createElement("option");
    o.value = s.value;
    o.textContent = t[s.key];
    st.appendChild(o);
  });
}

// ==========================
// LEADS (Search + Pagination)
// ==========================
function getFilteredLeads(){
  const q = searchQuery.trim().toLowerCase();
  if(!q) return leads;

  return leads.filter(l=>{
    return (
      l.name.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q)
    );
  });
}

function renderLeads(){
  const t = translations[currentLang];
  const tableBody = document.getElementById("leadsTableBody");
  tableBody.innerHTML = "";

  const filtered = getFilteredLeads();
  const total = filtered.length;

  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  if(currentPage > totalPages) currentPage = totalPages;

  const start = (currentPage - 1) * pageSize;
  const end = Math.min(start + pageSize, total);

  const pageItems = filtered.slice(start, end);

  pageItems.forEach(lead=>{
    const statusKey = "status" + cap(lead.status);
    const sourceKey = "source" + cap(lead.source);

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${lead.name}</td>
      <td>${lead.email}</td>
      <td>${t[sourceKey] || lead.source}</td>
      <td><span class="badge b-${lead.status}">${t[statusKey] || lead.status}</span></td>
      <td>${lead.date}</td>
      <td>
        <button class="btn btn-small btn-secondary" onclick="editLead(${lead.id})"><i class="fas fa-edit"></i></button>
        <button class="btn btn-small btn-secondary" onclick="deleteLead(${lead.id})"><i class="fas fa-trash"></i></button>
      </td>
    `;
    tableBody.appendChild(row);
  });

  // Pagination info
  if(total === 0){
    paginationInfo.textContent = t.pagination.showing(0,0,0);
  }else{
    paginationInfo.textContent = t.pagination.showing(start+1, end, total);
  }

  renderPaginationButtons(totalPages);
}

function renderPaginationButtons(totalPages){
  const t = translations[currentLang];
  paginationButtons.innerHTML = "";

  // Prev
  const prevBtn = document.createElement("button");
  prevBtn.className = "page-btn";
  prevBtn.textContent = "◀ " + t.pagination.prev;
  prevBtn.disabled = currentPage === 1;
  prevBtn.style.opacity = currentPage === 1 ? ".5" : "1";
  prevBtn.addEventListener("click",()=>{
    if(currentPage > 1){
      currentPage--;
      renderLeads();
    }
  });
  paginationButtons.appendChild(prevBtn);

  // Pages
  for(let p=1; p<=totalPages; p++){
    const b = document.createElement("button");
    b.className = "page-btn" + (p === currentPage ? " active" : "");
    b.textContent = p;
    b.addEventListener("click",()=>{
      currentPage = p;
      renderLeads();
    });
    paginationButtons.appendChild(b);
  }

  // Next
  const nextBtn = document.createElement("button");
  nextBtn.className = "page-btn";
  nextBtn.textContent = t.pagination.next + " ▶";
  nextBtn.disabled = currentPage === totalPages;
  nextBtn.style.opacity = currentPage === totalPages ? ".5" : "1";
  nextBtn.addEventListener("click",()=>{
    if(currentPage < totalPages){
      currentPage++;
      renderLeads();
    }
  });
  paginationButtons.appendChild(nextBtn);
}

// ==========================
// CSV EXPORT
// ==========================
function exportLeadsToCSV(){
  const t = translations[currentLang];
  const filtered = getFilteredLeads();

  // CSV headers (localized)
  const headers = [
    t.leadNameHeader,
    t.leadEmailHeader,
    t.leadSourceHeader,
    t.leadStatusHeader,
    t.leadDateHeader
  ];

  const rows = filtered.map(l=>{
    const sourceKey = "source" + cap(l.source);
    const statusKey = "status" + cap(l.status);

    return [
      l.name,
      l.email,
      t[sourceKey] || l.source,
      t[statusKey] || l.status,
      l.date
    ];
  });

  // build CSV
  const escape = (v) => `"${String(v).replace(/"/g,'""')}"`;
  const csv = [
    headers.map(escape).join(","),
    ...rows.map(r=>r.map(escape).join(","))
  ].join("\n");

  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `leads_${currentLang}_${new Date().toISOString().slice(0,10)}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();

  URL.revokeObjectURL(url);

  alert(t.alerts.exportDone);
}

// ==========================
// FORMS / CUSTOMERS
// ==========================
function loadForms(){
  const t = translations[currentLang];
  const grid = document.getElementById("formsGrid");
  grid.innerHTML = "";

  forms.forEach(form=>{
    const name = form.name[currentLang] || form.name.en;
    const last = form.last[currentLang] || form.last.en;

    const card = document.createElement("div");
    card.className = "card box";
    card.innerHTML = `
      <h3>${name}</h3>
      <p><b>${form.submissions}</b> ${t.submissionsWord}</p>
      <p>${t.lastSubmissionWord} <b>${last}</b></p>

      <div class="actions">
        <button class="btn btn-primary btn-small"><i class="fas fa-eye"></i> ${t.view}</button>
        <button class="btn btn-secondary btn-small"><i class="fas fa-code"></i> ${t.embed}</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function loadCustomers(){
  const t = translations[currentLang];
  const list = document.getElementById("customersList");
  list.innerHTML = "";

  customers.forEach(c=>{
    const name = c.name[currentLang] || c.name.en;

    const card = document.createElement("div");
    card.className = "card box";
    card.innerHTML = `
      <h3>${name}</h3>
      <p>${c.email}</p>
      <p>${t.customerSince} <b>${c.since}</b></p>
      <p>${t.customerValue} <b style="color:var(--primary)">$${c.value.toLocaleString()}</b></p>
    `;
    list.appendChild(card);
  });
}

// ==========================
// CHARTS
// ==========================
function initCharts(){
  const leadsCtx = document.getElementById("leadsChart").getContext("2d");
  leadsChart = new Chart(leadsCtx,{
    type:"line",
    data:{
      labels:getMonths(),
      datasets:[{
        label:"Leads",
        data:[65,59,80,81,56,85],
        borderColor:"#4361ee",
        backgroundColor:"rgba(67, 97, 238, 0.12)",
        fill:true,
        tension:.4
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{
        y:{beginAtZero:true,grid:{color:"rgba(0,0,0,.05)"}},
        x:{grid:{color:"rgba(0,0,0,.05)"}}
      }
    }
  });

  const conversionCtx = document.getElementById("conversionChart").getContext("2d");
  conversionChart = new Chart(conversionCtx,{
    type:"doughnut",
    data:{
      labels:getConversionLabels(),
      datasets:[{
        data:[25,30,20,25],
        backgroundColor:["#4cc9f0","#7209b7","#4361ee","#f72585"],
        borderWidth:0
      }]
    },
    options:{
      responsive:true,
      maintainAspectRatio:false,
      plugins:{legend:{position:"bottom"}}
    }
  });
}

function updateCharts(){
  if(!leadsChart || !conversionChart) return;
  leadsChart.data.labels = getMonths();
  leadsChart.update();

  conversionChart.data.labels = getConversionLabels();
  conversionChart.update();
}

// ==========================
// EVENTS
// ==========================
function setupEvents(){
  // language
  languageBtn.addEventListener("click",()=>languageDropdown.classList.toggle("show"));
  document.querySelectorAll(".language-option").forEach(opt=>{
    opt.addEventListener("click",()=>setLanguage(opt.getAttribute("data-lang")));
  });
  document.addEventListener("click",(e)=>{
    if(!languageBtn.contains(e.target) && !languageDropdown.contains(e.target)){
      languageDropdown.classList.remove("show");
    }
  });

  // mobile menu
  mobileMenuBtn.addEventListener("click",()=>sidebar.classList.toggle("active"));

  // navigation
  navLinks.forEach(link=>{
    link.addEventListener("click",(e)=>{
      e.preventDefault();
      navLinks.forEach(l=>l.classList.remove("active"));
      link.classList.add("active");

      const target = link.getAttribute("data-section");
      sections.forEach(s=>s.classList.remove("active"));
      document.getElementById(target+"Section").classList.add("active");

      if(window.innerWidth <= 992) sidebar.classList.remove("active");
    });
  });

  // dark mode
  darkModeBtn.addEventListener("click",()=>{
    isDark = !isDark;
    applyDarkMode();
  });

  // leads search
  leadsSearchInput.addEventListener("input",(e)=>{
    searchQuery = e.target.value;
    currentPage = 1;
    renderLeads();
  });

  // export CSV
  exportLeadsBtn.addEventListener("click",exportLeadsToCSV);

  // modal
  addLeadBtn.addEventListener("click",()=>addLeadModal.classList.add("active"));
  closeLeadModalBtn.addEventListener("click",()=>addLeadModal.classList.remove("active"));
  cancelLeadBtn.addEventListener("click",()=>addLeadModal.classList.remove("active"));
  addLeadModal.addEventListener("click",(e)=>{ if(e.target === addLeadModal) addLeadModal.classList.remove("active"); });

  // save lead
  saveLeadBtn.addEventListener("click",()=>{
    const t = translations[currentLang];

    const name = document.getElementById("leadNameInput").value.trim();
    const email = document.getElementById("leadEmailInput").value.trim();
    const source = document.getElementById("leadSourceSelect").value;
    const status = document.getElementById("leadStatusSelect").value;

    if(!name || !email){
      alert(t.alerts.requiredFields);
      return;
    }

    // push new lead
    const newId = Math.max(...leads.map(x=>x.id)) + 1;
    leads.unshift({
      id: newId,
      name,
      email,
      source,
      status,
      date: new Date().toISOString().slice(0,10)
    });

    alert(t.alerts.leadSaved);

    document.getElementById("leadNameInput").value="";
    document.getElementById("leadEmailInput").value="";
    document.getElementById("leadPhoneInput").value="";

    addLeadModal.classList.remove("active");

    // rerender
    currentPage = 1;
    renderLeads();
  });

  createFormBtn.addEventListener("click",()=>alert(translations[currentLang].alerts.newForm));
  saveSettingsBtn.addEventListener("click",()=>alert(translations[currentLang].alerts.settingsSaved));
}

// ==========================
// GLOBAL FUNCTIONS
// ==========================
window.editLead = function(id){
  alert(translations[currentLang].alerts.editLead(id));
};

window.deleteLead = function(id){
  const t = translations[currentLang];
  if(confirm(t.alerts.deleteConfirm)){
    const idx = leads.findIndex(x=>x.id===id);
    if(idx !== -1) leads.splice(idx,1);
    alert(t.alerts.leadDeleted(id));
    renderLeads();
  }
};

// ==========================
// INIT
// ==========================
document.addEventListener("DOMContentLoaded",()=>{
  applyDarkMode();
  setLanguage(currentLang);
  initCharts();
  setupEvents();

  // initial leads
  leadsSearchInput.placeholder = translations[currentLang].searchPlaceholder;
  renderLeads();
  loadForms();
  loadCustomers();
});
