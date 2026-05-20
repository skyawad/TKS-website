import type { Lang } from "./LanguageContext";

/**
 * Translation dictionary. Flat key-paths (dot-separated) keep lookup simple.
 * English values are the source of truth; Arabic values are professional MSA.
 */
type Dict = Readonly<Record<string, string>>;

const EN: Dict = {
  // Brand / global
  "brand.name": "Techknomatic",
  "brand.tagline": "Data, AI, and managed operations for Gulf enterprise.",

  // Navigation
  "nav.services": "Services",
  "nav.enterpriseAi": "Enterprise AI",
  "nav.platforms": "Platforms",
  "nav.industries": "Industries",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.getStarted": "Get started",
  "nav.skipToContent": "Skip to content",
  "nav.openMenu": "Open menu",
  "nav.closeMenu": "Close menu",
  "nav.home": "Techknomatic home",

  // Services sub-nav
  "services.businessAnalytics": "Business Analytics",
  "services.dataEngineering": "Data Engineering",
  "services.dataAiStrategy": "Data & AI Strategy",
  "services.geospatial": "Geospatial Analytics",
  "services.managed": "Managed Services",

  // Enterprise AI sub-nav
  "eai.assistIq": "AssistIQ",
  "eai.ticketIq": "TicketIQ",
  "eai.callopsAi": "CallOps AI",
  "eai.cxoNexus": "CXO Nexus",

  // Platforms sub-nav
  "platforms.insightSm": "InsightSM",
  "platforms.datapulseIq": "DataPulseIQ",
  "platforms.parseIq": "ParseIQ",
  "platforms.freightIq": "FreightIQ",

  // Industries sub-nav
  "industries.oilGas": "Oil & Gas",
  "industries.insurance": "Insurance",
  "industries.techIt": "Tech & IT Services",
  "industries.manufacturing": "Manufacturing",

  // About sub-nav
  "about.company": "Company & Team",
  "about.partnerships": "Partnerships",
  "about.careers": "Careers",
  "about.faqs": "FAQs",
  "about.customerStories": "Customer Stories",

  // Footer
  "footer.blurb": "Data, AI, and managed operations for Gulf enterprise. Eleven years. One partner. Built for Sunday morning.",
  "footer.practice": "Practice",
  "footer.products": "Products",
  "footer.company": "Company",
  "footer.about": "About",
  "footer.legal": "© {year} Techknomatic Services FZE · DIFC, Dubai",
  "footer.compliance": "UAE PDPL · ISO 27001",
  "footer.preview404": "Preview 404",

  // Language switch
  "lang.en": "EN",
  "lang.ar": "AR",
  "lang.switchToArabic": "Switch to Arabic",
  "lang.switchToEnglish": "Switch to English",
  "lang.fallbackBanner": "This page is available in English only. The Arabic version is coming soon.",

  // Home — hero
  "home.hero.eyebrow": "⚡ New · AI agents for enterprise ops",
  "home.hero.headlineA": "Connect your data, AI,",
  "home.hero.headlineB": "and",
  "home.hero.headlineC": "operations.",
  "home.hero.lead": "Techknomatic builds the data pipelines, AI assistants, and managed operations that keep Gulf enterprises running — from DIFC banks to regional insurers.",
  "home.hero.primary": "Start a conversation",
  "home.hero.secondary": "See our work",
  "home.hero.trust": "Trusted by 120+ enterprises across the Gulf",

  // Home — trust strip
  "home.trust.label": "Trusted across the Gulf —",
  "home.trust.banks": "DIFC banks",
  "home.trust.insurers": "Regional insurers",
  "home.trust.oilGas": "Oil & Gas",
  "home.trust.government": "Government",
  "home.trust.manufacturers": "Manufacturers",

  // Home — Practice section
  "home.practice.eyebrow": "Practice",
  "home.practice.heading": "Everything you need to run on data.",
  "home.practice.sub": "Five practices. One partner. Built for Gulf enterprise.",
  "home.svc.ba.title": "Business Analytics",
  "home.svc.ba.desc": "Qlik & Power BI dashboards your CFO actually opens.",
  "home.svc.de.title": "Data Engineering",
  "home.svc.de.desc": "Pipelines, warehouses, and the plumbing that doesn't break.",
  "home.svc.ai.title": "AI & Data Strategy",
  "home.svc.ai.desc": "Where to actually use AI — and where not to.",
  "home.svc.geo.title": "Geospatial",
  "home.svc.geo.desc": "ESRI Silver Partner. Maps that drive decisions.",
  "home.svc.ms.title": "Managed Services",
  "home.svc.ms.desc": "24/7 ops support for your data stack.",

  // Home — Enterprise AI section
  "home.eai.eyebrow": "Enterprise AI",
  "home.eai.heading": "AI products, ready for Sunday morning.",
  "home.eai.sub": "Four products. Production today.",
  "home.eai.assist.title": "AssistIQ",
  "home.eai.assist.desc": "AI copilot for ops teams.",
  "home.eai.ticket.title": "TicketIQ",
  "home.eai.ticket.desc": "ITSM ticket triage AI.",
  "home.eai.call.title": "CallOps AI",
  "home.eai.call.desc": "Call-center automation.",
  "home.eai.cxo.title": "CXO Nexus",
  "home.eai.cxo.desc": "Executive intelligence.",

  // Home — Industries section
  "home.ind.eyebrow": "Industries",
  "home.ind.heading": "Built for regulated Gulf sectors.",
  "home.ind.ins.title": "Insurance / BFSI",
  "home.ind.ins.desc": "Regulator-grade reporting + AI ops.",
  "home.ind.og.title": "Oil & Gas",
  "home.ind.og.desc": "Field-to-boardroom analytics.",
  "home.ind.it.title": "Tech / IT Services",
  "home.ind.it.desc": "ITSM, ticketing, MSP enablement.",
  "home.ind.mfg.title": "Manufacturing",
  "home.ind.mfg.desc": "Shopfloor → executive intelligence.",

  // Home — Why us
  "home.why.eyebrow": "Why Techknomatic",
  "home.why.heading": "Four reasons CIOs in DIFC pick us — and renew.",
  "home.why.1.title": "Gulf-local depth",
  "home.why.1.body": "UAE-resident leadership. Sunday-Thursday work week. Arabic on demand.",
  "home.why.2.title": "Proven methodology",
  "home.why.2.body": "Eleven years. 120+ enterprise clients. Repeatable delivery.",
  "home.why.3.title": "Less turnaround",
  "home.why.3.body": "From RFP to dashboard in weeks, not quarters.",
  "home.why.4.title": "Real partnerships",
  "home.why.4.body": "ESRI Silver. Microsoft. Qlik. Compliance audited.",

  // Home — Customer stories
  "home.cs.eyebrow": "Customer stories",
  "home.cs.heading": "Real outcomes. Anonymised.",
  "home.cs.1.title": "From spreadsheet hell to executive dashboard in 6 weeks",
  "home.cs.1.summary": "Mid-sized DIFC bank needed regulator-grade reporting fast. We rebuilt their data layer and delivered a Qlik board the CEO opens daily.",
  "home.cs.1.outcome": "-40% reporting cycle",
  "home.cs.2.title": "ESRI deployment for a national infrastructure programme",
  "home.cs.2.summary": "Multi-year geospatial platform standing up monitoring + decision support for a national pipeline operator.",
  "home.cs.2.outcome": "Multi-region rollout",

  // Home — Final CTA
  "home.cta.eyebrow": "Let's talk",
  "home.cta.headlineA": "Let's build the back-office",
  "home.cta.headlineB": "that runs the front-office.",
  "home.cta.sub": "Free 30-min scoping call. Sunday-Thursday, GST.",
  "home.cta.primary": "Start a conversation",

  // Contact — hero
  "contact.hero.eyebrow": "Contact",
  "contact.hero.headlineA": "Let's",
  "contact.hero.headlineB": "build",
  "contact.hero.headlineC": "together.",
  "contact.hero.lead": "Tell us about your challenge. We'll tell you exactly how we'd approach it — within one business day, Sun–Thu.",
  "contact.hero.primary": "Send a message",
  "contact.hero.secondary": "Chat on WhatsApp",

  // Contact — methods
  "contact.method.phone": "Phone",
  "contact.method.phoneNote": "UAE office line · GST business hours",
  "contact.method.whatsapp": "WhatsApp",
  "contact.method.whatsappNote": "Usually the fastest way to reach a human.",
  "contact.method.email": "Email",
  "contact.method.emailNote": "General enquiries.",
  "contact.method.hours": "Business hours",
  "contact.method.hoursNote": "Closed Friday and Saturday. We reply within one business day.",

  // Contact — office
  "contact.office.eyebrow": "Dubai office",
  "contact.office.heading": "Find us in Dubai.",
  "contact.office.sub": "Visits by appointment only. Please request a time via the form above or WhatsApp.",
  "contact.office.addressLabel": "Address",
  "contact.office.placeholder": "Address shown is a placeholder pending stakeholder confirmation.",
  "contact.office.mapPlaceholder": "Map embed will appear here once the office location is confirmed.",

  // Contact — regional
  "contact.regional.eyebrow": "Regional contacts",
  "contact.regional.heading": "Senior UAE-resident team.",
  "contact.regional.sub": "Gulf engagements are led end-to-end by UAE-resident staff. No timezone hand-offs.",
  "contact.regional.partnersLabel": "Regional partners",

  // Contact — careers band
  "contact.careers.label": "Career enquiry?",
  "contact.careers.body": "Email {email} or visit our Careers page.",
  "contact.careers.cta": "See open roles",

  // Contact — final CTA
  "contact.cta.eyebrow": "Prefer WhatsApp?",
  "contact.cta.headline": "So do we.",
  "contact.cta.sub": "Send us a message — we'll reply with a real human, fast.",
  "contact.cta.primary": "Chat on WhatsApp",
  "contact.cta.secondary": "Send a message",

  // Contact form
  "form.heading": "Send us a message",
  "form.name": "Full name",
  "form.company": "Company",
  "form.email": "Work email",
  "form.phone": "Phone (optional)",
  "form.country": "Country",
  "form.countryPlaceholder": "Select a country",
  "form.service": "Service of interest",
  "form.servicePlaceholder": "What can we help with?",
  "form.budget": "Budget range",
  "form.budgetPlaceholder": "Optional — helps us scope right.",
  "form.message": "Message",
  "form.messageHint": "Tell us about your challenge. {min}+ characters.",
  "form.submit": "Send message",
  "form.submitting": "Sending…",
  "form.notice": "By submitting, you agree to be contacted about your enquiry. We respond within one business day (Sun–Thu, GST).",
  "form.required": "Required",
  "form.err.name": "Please tell us your name.",
  "form.err.company": "Please share your company name.",
  "form.err.email": "We need an email to reply to.",
  "form.err.emailFormat": "That email doesn't look right.",
  "form.err.message": "A short paragraph helps us reply usefully — {min}+ characters.",
  "form.err.submit": "Something went wrong sending your message. Please try again or message us on WhatsApp.",
  "form.success.title": "Thank you — your message is in.",
  "form.success.body": "A member of the Gulf team will respond within one business day, Sun–Thu (GST). For anything urgent, the fastest channel is WhatsApp at {wa}.",
  "form.success.reset": "Send another message",
  "form.svc.ba": "Business Analytics",
  "form.svc.de": "Data Engineering",
  "form.svc.ai": "Data & AI Strategy",
  "form.svc.geo": "Geospatial Analytics",
  "form.svc.ms": "Managed Services",
  "form.svc.eai": "Enterprise AI",
  "form.svc.platforms": "Platforms",
  "form.svc.other": "Something else / not sure",
  "form.budget.under50k": "Under USD 50k",
  "form.budget.50to150k": "USD 50k–150k",
  "form.budget.150to500k": "USD 150k–500k",
  "form.budget.500kto1m": "USD 500k–1M",
  "form.budget.over1m": "Over USD 1M",
  "form.budget.discuss": "Prefer to discuss",
  "form.country.uae": "UAE",
  "form.country.ksa": "Saudi Arabia",
  "form.country.bhr": "Bahrain",
  "form.country.kwt": "Kuwait",
  "form.country.qat": "Qatar",
  "form.country.omn": "Oman",
  "form.country.gcc": "Other GCC",
  "form.country.other": "Other",
};

const AR: Dict = {
  // Brand / global
  "brand.name": "تكنوماتيك",
  "brand.tagline": "حلول البيانات والذكاء الاصطناعي والعمليات المُدارة لمؤسسات الخليج.",

  // Navigation
  "nav.services": "الخدمات",
  "nav.enterpriseAi": "الذكاء الاصطناعي للمؤسسات",
  "nav.platforms": "المنصات",
  "nav.industries": "القطاعات",
  "nav.about": "من نحن",
  "nav.contact": "تواصل معنا",
  "nav.getStarted": "ابدأ الآن",
  "nav.skipToContent": "تخطّي إلى المحتوى",
  "nav.openMenu": "فتح القائمة",
  "nav.closeMenu": "إغلاق القائمة",
  "nav.home": "الصفحة الرئيسية لتكنوماتيك",

  // Services
  "services.businessAnalytics": "تحليلات الأعمال",
  "services.dataEngineering": "هندسة البيانات",
  "services.dataAiStrategy": "استراتيجية البيانات والذكاء الاصطناعي",
  "services.geospatial": "التحليلات الجغرافية",
  "services.managed": "الخدمات المُدارة",

  // Enterprise AI
  "eai.assistIq": "أسيست آي كيو",
  "eai.ticketIq": "تيكت آي كيو",
  "eai.callopsAi": "كول أوبس",
  "eai.cxoNexus": "سي إكس أو نيكسس",

  // Platforms
  "platforms.insightSm": "إنسايت إس إم",
  "platforms.datapulseIq": "داتا بالس",
  "platforms.parseIq": "بارس آي كيو",
  "platforms.freightIq": "فريت آي كيو",

  // Industries
  "industries.oilGas": "النفط والغاز",
  "industries.insurance": "التأمين",
  "industries.techIt": "تقنية المعلومات والخدمات",
  "industries.manufacturing": "التصنيع",

  // About
  "about.company": "الشركة والفريق",
  "about.partnerships": "الشراكات",
  "about.careers": "الوظائف",
  "about.faqs": "الأسئلة الشائعة",
  "about.customerStories": "قصص العملاء",

  // Footer
  "footer.blurb": "حلول البيانات والذكاء الاصطناعي والعمليات المُدارة لمؤسسات الخليج. إحدى عشرة سنة من الخبرة. شريك واحد. مصمَّم لصباح الأحد.",
  "footer.practice": "الممارسات",
  "footer.products": "المنتجات",
  "footer.company": "الشركة",
  "footer.about": "من نحن",
  "footer.legal": "© {year} تكنوماتيك سيرفيسز ش.م.م · مركز دبي المالي العالمي، دبي",
  "footer.compliance": "قانون حماية البيانات الإماراتي · أيزو 27001",
  "footer.preview404": "معاينة صفحة 404",

  // Language switch
  "lang.en": "EN",
  "lang.ar": "AR",
  "lang.switchToArabic": "التبديل إلى العربية",
  "lang.switchToEnglish": "Switch to English",
  "lang.fallbackBanner": "هذه الصفحة متاحة حالياً باللغة الإنجليزية فقط. النسخة العربية قريباً.",

  // Home — hero
  "home.hero.eyebrow": "⚡ جديد · وكلاء ذكاء اصطناعي لعمليات المؤسسات",
  "home.hero.headlineA": "اربط بياناتك وذكاءك الاصطناعي",
  "home.hero.headlineB": "مع",
  "home.hero.headlineC": "عملياتك.",
  "home.hero.lead": "تبني تكنوماتيك خطوط بيانات ومساعدين ذكاء اصطناعي وعمليات مُدارة تُبقي مؤسسات الخليج تعمل بسلاسة — من بنوك مركز دبي المالي العالمي إلى شركات التأمين الإقليمية.",
  "home.hero.primary": "ابدأ المحادثة",
  "home.hero.secondary": "اطّلع على أعمالنا",
  "home.hero.trust": "موثوق به من قِبل أكثر من 120 مؤسسة في منطقة الخليج",

  // Home — trust strip
  "home.trust.label": "موثوق به في جميع أنحاء الخليج —",
  "home.trust.banks": "بنوك مركز دبي المالي العالمي",
  "home.trust.insurers": "شركات التأمين الإقليمية",
  "home.trust.oilGas": "النفط والغاز",
  "home.trust.government": "القطاع الحكومي",
  "home.trust.manufacturers": "قطاع التصنيع",

  // Home — Practice section
  "home.practice.eyebrow": "الممارسات",
  "home.practice.heading": "كل ما تحتاجه لإدارة أعمالك بالبيانات.",
  "home.practice.sub": "خمس ممارسات. شريك واحد. مصمَّم لمؤسسات الخليج.",
  "home.svc.ba.title": "تحليلات الأعمال",
  "home.svc.ba.desc": "لوحات Qlik و Power BI يفتحها المدير المالي فعلياً.",
  "home.svc.de.title": "هندسة البيانات",
  "home.svc.de.desc": "خطوط البيانات والمستودعات والبنية التحتية التي لا تتعطل.",
  "home.svc.ai.title": "استراتيجية البيانات والذكاء الاصطناعي",
  "home.svc.ai.desc": "أين تستخدم الذكاء الاصطناعي فعلياً — وأين لا تستخدمه.",
  "home.svc.geo.title": "التحليلات الجغرافية",
  "home.svc.geo.desc": "شريك ESRI الفضي. خرائط تقود اتخاذ القرار.",
  "home.svc.ms.title": "الخدمات المُدارة",
  "home.svc.ms.desc": "دعم تشغيلي على مدار الساعة لبنية البيانات لديك.",

  // Home — Enterprise AI section
  "home.eai.eyebrow": "الذكاء الاصطناعي للمؤسسات",
  "home.eai.heading": "منتجات ذكاء اصطناعي جاهزة منذ صباح الأحد.",
  "home.eai.sub": "أربعة منتجات. في الإنتاج اليوم.",
  "home.eai.assist.title": "أسيست آي كيو",
  "home.eai.assist.desc": "مساعد ذكاء اصطناعي لفرق العمليات.",
  "home.eai.ticket.title": "تيكت آي كيو",
  "home.eai.ticket.desc": "ذكاء اصطناعي لفرز تذاكر إدارة خدمات تقنية المعلومات.",
  "home.eai.call.title": "كول أوبس",
  "home.eai.call.desc": "أتمتة مراكز الاتصال.",
  "home.eai.cxo.title": "سي إكس أو نيكسس",
  "home.eai.cxo.desc": "ذكاء تنفيذي للقيادة.",

  // Home — Industries section
  "home.ind.eyebrow": "القطاعات",
  "home.ind.heading": "مصمَّم للقطاعات الخليجية الخاضعة للتنظيم.",
  "home.ind.ins.title": "التأمين / الخدمات المالية",
  "home.ind.ins.desc": "تقارير بمستوى الجهات الرقابية + عمليات ذكاء اصطناعي.",
  "home.ind.og.title": "النفط والغاز",
  "home.ind.og.desc": "تحليلات من الميدان إلى مجلس الإدارة.",
  "home.ind.it.title": "تقنية المعلومات والخدمات",
  "home.ind.it.desc": "إدارة الخدمات وفرز التذاكر وتمكين مزوّدي الخدمات.",
  "home.ind.mfg.title": "التصنيع",
  "home.ind.mfg.desc": "من أرضية المصنع إلى الذكاء التنفيذي.",

  // Home — Why us
  "home.why.eyebrow": "لماذا تكنوماتيك",
  "home.why.heading": "أربعة أسباب يختارنا من أجلها مدراء تقنية المعلومات في مركز دبي المالي العالمي — ويُجدّدون.",
  "home.why.1.title": "خبرة محلية خليجية",
  "home.why.1.body": "قيادة مقيمة في الإمارات. أسبوع عمل من الأحد إلى الخميس. خدمة باللغة العربية عند الطلب.",
  "home.why.2.title": "منهجية مُجرَّبة",
  "home.why.2.body": "إحدى عشرة سنة. أكثر من 120 عميلاً مؤسسياً. تنفيذ قابل للتكرار.",
  "home.why.3.title": "وقت تنفيذ أقصر",
  "home.why.3.body": "من العرض السعري إلى لوحة المعلومات في أسابيع، لا في أرباع سنوية.",
  "home.why.4.title": "شراكات حقيقية",
  "home.why.4.body": "ESRI الفضي. مايكروسوفت. Qlik. ممتثل للمعايير.",

  // Home — Customer stories
  "home.cs.eyebrow": "قصص العملاء",
  "home.cs.heading": "نتائج حقيقية. بلا ذكر للأسماء.",
  "home.cs.1.title": "من فوضى جداول البيانات إلى لوحة تنفيذية في ستة أسابيع",
  "home.cs.1.summary": "بنك متوسط الحجم في مركز دبي المالي العالمي احتاج إلى تقارير بمستوى الجهات الرقابية بسرعة. أعدنا بناء طبقة البيانات وسلّمنا لوحة Qlik يفتحها الرئيس التنفيذي يومياً.",
  "home.cs.1.outcome": "تقليص دورة التقارير بنسبة 40%",
  "home.cs.2.title": "نشر ESRI لبرنامج بنية تحتية وطنية",
  "home.cs.2.summary": "منصة جغرافية متعددة السنوات لتشغيل المراقبة ودعم القرار لمشغّل خطوط أنابيب وطني.",
  "home.cs.2.outcome": "نشر متعدد المناطق",

  // Home — Final CTA
  "home.cta.eyebrow": "لنتحدّث",
  "home.cta.headlineA": "لنبنِ معاً المكتب الخلفي",
  "home.cta.headlineB": "الذي يُشغّل المكتب الأمامي.",
  "home.cta.sub": "مكالمة استكشافية مجانية لمدة 30 دقيقة. من الأحد إلى الخميس، بتوقيت الخليج.",
  "home.cta.primary": "ابدأ المحادثة",

  // Contact — hero
  "contact.hero.eyebrow": "تواصل معنا",
  "contact.hero.headlineA": "لنبنِ",
  "contact.hero.headlineB": "معاً.",
  "contact.hero.headlineC": "",
  "contact.hero.lead": "أخبرنا عن التحدّي الذي تواجهه، وسنخبرك تماماً بالطريقة التي سنتعامل بها معه — خلال يوم عمل واحد، من الأحد إلى الخميس.",
  "contact.hero.primary": "أرسل رسالة",
  "contact.hero.secondary": "تحدّث عبر واتساب",

  // Contact — methods
  "contact.method.phone": "الهاتف",
  "contact.method.phoneNote": "خط مكتب الإمارات · ساعات العمل بتوقيت الخليج",
  "contact.method.whatsapp": "واتساب",
  "contact.method.whatsappNote": "غالباً هي أسرع طريقة للوصول إلى شخص حقيقي.",
  "contact.method.email": "البريد الإلكتروني",
  "contact.method.emailNote": "للاستفسارات العامة.",
  "contact.method.hours": "ساعات العمل",
  "contact.method.hoursNote": "مغلق الجمعة والسبت. نردّ خلال يوم عمل واحد.",

  // Contact — office
  "contact.office.eyebrow": "مكتب دبي",
  "contact.office.heading": "تجدنا في دبي.",
  "contact.office.sub": "الزيارات بموعد مسبق فقط. يُرجى طلب الموعد عبر النموذج أعلاه أو الواتساب.",
  "contact.office.addressLabel": "العنوان",
  "contact.office.placeholder": "العنوان المعروض هو عنوان مؤقت بانتظار تأكيد من أصحاب الشأن.",
  "contact.office.mapPlaceholder": "ستظهر الخريطة هنا بمجرد تأكيد موقع المكتب.",

  // Contact — regional
  "contact.regional.eyebrow": "جهات الاتصال الإقليمية",
  "contact.regional.heading": "فريق إماراتي مقيم وذو خبرة.",
  "contact.regional.sub": "تُقاد المشاريع الخليجية من البداية إلى النهاية بواسطة موظفين مقيمين في الإمارات. بلا فروقات توقيت.",
  "contact.regional.partnersLabel": "الشركاء الإقليميون",

  // Contact — careers band
  "contact.careers.label": "استفسار وظيفي؟",
  "contact.careers.body": "راسلنا على {email} أو زر صفحة الوظائف.",
  "contact.careers.cta": "عرض الوظائف الشاغرة",

  // Contact — final CTA
  "contact.cta.eyebrow": "تفضّل الواتساب؟",
  "contact.cta.headline": "ونحن كذلك.",
  "contact.cta.sub": "أرسل لنا رسالة — وسنردّ عليك بشخص حقيقي وبسرعة.",
  "contact.cta.primary": "تحدّث عبر واتساب",
  "contact.cta.secondary": "أرسل رسالة",

  // Contact form
  "form.heading": "أرسل لنا رسالة",
  "form.name": "الاسم الكامل",
  "form.company": "الشركة",
  "form.email": "البريد الإلكتروني للعمل",
  "form.phone": "الهاتف (اختياري)",
  "form.country": "الدولة",
  "form.countryPlaceholder": "اختر الدولة",
  "form.service": "الخدمة المهتم بها",
  "form.servicePlaceholder": "بماذا يمكننا مساعدتك؟",
  "form.budget": "نطاق الميزانية",
  "form.budgetPlaceholder": "اختياري — يساعدنا على تحديد النطاق الصحيح.",
  "form.message": "الرسالة",
  "form.messageHint": "أخبرنا عن التحدّي الذي تواجهه. {min}+ حرفاً.",
  "form.submit": "إرسال الرسالة",
  "form.submitting": "جارٍ الإرسال…",
  "form.notice": "بإرسال هذا النموذج، أنت توافق على أن نتواصل معك بخصوص استفسارك. نردّ خلال يوم عمل واحد (من الأحد إلى الخميس، بتوقيت الخليج).",
  "form.required": "حقل مطلوب",
  "form.err.name": "يُرجى إخبارنا باسمك.",
  "form.err.company": "يُرجى مشاركة اسم شركتك.",
  "form.err.email": "نحتاج بريداً إلكترونياً للردّ عليه.",
  "form.err.emailFormat": "صيغة البريد الإلكتروني غير صحيحة.",
  "form.err.message": "فقرة قصيرة تساعدنا على الردّ بشكل مفيد — {min}+ حرفاً.",
  "form.err.submit": "حدث خطأ أثناء إرسال رسالتك. يُرجى المحاولة مرة أخرى أو التواصل عبر الواتساب.",
  "form.success.title": "شكراً — تم استلام رسالتك.",
  "form.success.body": "سيردّ عليك أحد أعضاء فريق الخليج خلال يوم عمل واحد، من الأحد إلى الخميس (بتوقيت الخليج). للأمور العاجلة، أسرع طريقة هي الواتساب على {wa}.",
  "form.success.reset": "إرسال رسالة أخرى",
  "form.svc.ba": "تحليلات الأعمال",
  "form.svc.de": "هندسة البيانات",
  "form.svc.ai": "استراتيجية البيانات والذكاء الاصطناعي",
  "form.svc.geo": "التحليلات الجغرافية",
  "form.svc.ms": "الخدمات المُدارة",
  "form.svc.eai": "الذكاء الاصطناعي للمؤسسات",
  "form.svc.platforms": "المنصات",
  "form.svc.other": "شيء آخر / غير متأكد",
  "form.budget.under50k": "أقل من 50 ألف دولار",
  "form.budget.50to150k": "50–150 ألف دولار",
  "form.budget.150to500k": "150–500 ألف دولار",
  "form.budget.500kto1m": "500 ألف – مليون دولار",
  "form.budget.over1m": "أكثر من مليون دولار",
  "form.budget.discuss": "أفضّل المناقشة",
  "form.country.uae": "الإمارات العربية المتحدة",
  "form.country.ksa": "المملكة العربية السعودية",
  "form.country.bhr": "البحرين",
  "form.country.kwt": "الكويت",
  "form.country.qat": "قطر",
  "form.country.omn": "عُمان",
  "form.country.gcc": "دول الخليج الأخرى",
  "form.country.other": "أخرى",
};

const DICTS: Record<Lang, Dict> = { en: EN, ar: AR };

/**
 * Look up a string by key in the given language. Falls back to English if
 * the Arabic key is missing. Supports simple {placeholder} interpolation.
 */
export function tr(lang: Lang, key: string, vars?: Record<string, string | number>): string {
  const value = DICTS[lang][key] ?? EN[key] ?? key;
  if (!vars) return value;
  return Object.entries(vars).reduce(
    (acc, [k, v]) => acc.replace(new RegExp(`\\{${k}\\}`, "g"), String(v)),
    value,
  );
}
