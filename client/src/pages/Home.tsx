import {
  ArrowDownRight,
  ArrowUpRight,
  Bot,
  Check,
  ChevronDown,
  ChevronRight,
  Code2,
  Eye,
  Globe2,
  Layers3,
  LockKeyhole,
  Menu,
  MessageSquareCode,
  MousePointer2,
  Play,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Terminal,
  UsersRound,
  Wifi,
  X,
  Zap,
} from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

const heroImage = "/manus-storage/async-images/6rNzl68JdZex8RBYG6osQI/image-1.webp";
const finalImage = "/manus-storage/async-images/6rNzl68JdZex8RBYG6osQI/image-2.webp";
const logoImage = "/manus-storage/WhatsAppImage2026-11-02at8.46.55AM_c41070e0.jpeg";
const paystackUrl = import.meta.env.VITE_PAYSTACK_PAYMENT_URL as string | undefined;

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
} as const;

const curriculum = [
  {
    number: "01",
    title: "Build your mobile development workspace",
    summary: "Turn the smartphone already in your hand into a practical development environment.",
    icon: Smartphone,
    tint: "blue",
    lessons: [
      "Understanding mobile Vibe Coding",
      "Discovering useful AI coding platforms",
      "Setting up your mobile workspace",
      "Installing and accessing essential tools",
      "Understanding what each tool does",
    ],
  },
  {
    number: "02",
    title: "Master AI prompts and Vibe Coding",
    summary: "Learn how to communicate with AI so your ideas become useful software, not just experiments.",
    icon: MessageSquareCode,
    tint: "mint",
    lessons: [
      "Understanding effective AI prompting",
      "Writing clear development instructions",
      "Generating website structures",
      "Creating attractive interfaces",
      "Asking AI to fix errors",
      "Improving generated projects",
    ],
  },
  {
    number: "03",
    title: "Build real websites and applications",
    summary: "Move beyond prompting and shape complete, interactive digital products.",
    icon: Code2,
    tint: "purple",
    lessons: [
      "Planning your first project",
      "Creating a website",
      "Building application interfaces",
      "Adding interactive functionality",
      "Customizing layouts",
      "Testing and improving your work",
    ],
  },
  {
    number: "04",
    title: "Deploy and share your creations",
    summary: "Take projects from your development workspace to the internet and share them with the world.",
    icon: Rocket,
    tint: "orange",
    lessons: [
      "Understanding deployment",
      "Preparing projects for publishing",
      "Deploying websites",
      "Working with live project links",
      "Sharing your creations online",
    ],
  },
  {
    number: "B",
    title: "Private Telegram learning community",
    summary: "A place to ask questions, share progress and keep moving with other learners.",
    icon: UsersRound,
    tint: "mint",
    lessons: [
      "Connect with other learners",
      "Share projects and progress",
      "Ask questions as you build",
      "Receive learning updates",
      "Participate in discussions",
    ],
  },
];

const faqs = [
  [
    "Can I really learn Vibe Coding with just my Android or iPhone?",
    "Yes! The course teaches you how to use compatible mobile browsers and AI development tools to start building software directly from your smartphone. Some advanced tasks may be easier on a computer.",
  ],
  [
    "Do I need previous programming experience?",
    "No. The course is designed for beginners. You'll learn how to communicate with AI, generate code, understand the development process, and improve your projects.",
  ],
  [
    "Do I need to purchase expensive software?",
    "No expensive software is required to get started. The course introduces accessible tools, including free options. Some platforms may have usage limits or optional paid subscriptions.",
  ],
  [
    "What can I build after taking this course?",
    "You'll learn workflows for creating websites and web applications. Your results will depend on your ideas, practice, and the capabilities of the tools you use.",
  ],
  [
    "How will I receive the course after payment?",
    "After successful payment verification, you'll receive instructions to access the course and join the private Telegram community.",
  ],
  [
    "Is the course suitable for someone who only knows how to use WhatsApp?",
    "Absolutely. The course is beginner-friendly, and you'll be guided through the essential tools and processes step by step.",
  ],
  [
    "Can I learn at my own pace?",
    "Yes. You can follow the lessons at a pace that works for you and revisit the learning materials when necessary.",
  ],
];

const included = [
  "Complete mobile Vibe Coding course",
  "Mobile development environment setup",
  "AI prompting lessons",
  "Website-building tutorials",
  "Application-building tutorials",
  "Deployment lessons",
  "Private Telegram community",
  "Course updates",
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Logo() {
  return (
    <a className="logo-lockup" href="#top" aria-label="ProductProHub home">
      <img className="brand-logo-image" src={logoImage} alt="ProductProHub — Digital Innovation. Real-World Skills." />
    </a>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`eyebrow ${light ? "eyebrow-light" : ""}`}>{children}</p>;
}

function SectionHeading({ eyebrow, title, copy, align = "left" }: { eyebrow: string; title: string; copy?: string; align?: "left" | "center" }) {
  return (
    <div className={`section-heading ${align === "center" ? "section-heading-center" : ""}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function PurchaseButton({ children = "GET THE COURSE", variant = "solid", className = "" }: { children?: ReactNode; variant?: "solid" | "outline" | "light"; className?: string }) {
  const [notice, setNotice] = useState(false);
  const startCheckout = () => {
    if (paystackUrl) {
      window.location.assign(paystackUrl);
      return;
    }
    setNotice(true);
    scrollToId("pricing");
  };

  return (
    <div className={`purchase-control ${className}`}>
      <button type="button" className={`button button-${variant}`} onClick={startCheckout}>
        {children}
        <ArrowUpRight size={16} strokeWidth={1.9} />
      </button>
      <AnimatePresence>
        {notice && (
          <motion.span initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="checkout-note" role="status">
            Checkout link pending configuration.
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

function MiniPhone({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`mini-phone ${className}`} aria-hidden="true">
      <div className="mini-phone-notch" />
      <div className="mini-phone-topline"><span /><span /><span /></div>
      <div className="mini-phone-label">{label}</div>
      <div className="mini-phone-screen-lines"><i /><i /><i /><i /></div>
      <div className="mini-phone-action" />
      <div className="mini-phone-tabbar"><b /><b /><b /></div>
    </div>
  );
}

function FeatureVisual({ kind }: { kind: "web" | "app" | "product" | "deploy" }) {
  const visuals = {
    web: <div className="browser-window"><div className="browser-bar"><span /><span /><span /><small>yourbrand.site</small></div><div className="browser-content"><div className="browser-kicker">CREATIVE STUDIO</div><strong>Make your<br /><em>next move</em></strong><div className="browser-line" /><div className="browser-chip">Explore <ArrowUpRight size={12} /></div></div></div>,
    app: <div className="app-stack"><div className="app-card app-card-back" /><div className="app-card app-card-front"><span className="app-avatar" /><div><b>Project pulse</b><small>All systems clear</small></div><div className="app-bars"><i /><i /><i /></div></div></div>,
    product: <div className="product-grid"><div className="product-tile product-tile-tall"><Sparkles size={18} /><b>Idea<br />to live</b></div><div className="product-tile product-tile-small"><span>01</span><b>Prompt</b></div><div className="product-tile product-tile-small product-tile-mint"><span>02</span><b>Shape</b></div></div>,
    deploy: <div className="deploy-state"><div className="deploy-orbit"><Rocket size={24} /></div><b>Live on the web</b><small>your-project.link</small><span><Check size={12} /> DEPLOYED</span></div>,
  };
  return <div className={`feature-visual feature-${kind}`}>{visuals[kind]}</div>;
}

function AccordionItem({ item, open, onClick }: { item: (typeof curriculum)[number]; open: boolean; onClick: () => void }) {
  const Icon = item.icon;
  return (
    <div className={`curriculum-item ${open ? "curriculum-item-open" : ""}`}>
      <button type="button" className="curriculum-trigger" onClick={onClick} aria-expanded={open}>
        <span className={`module-icon module-icon-${item.tint}`}><Icon size={18} /></span>
        <span className="module-number">{item.number}</span>
        <span className="module-title-wrap"><strong>{item.title}</strong><small>{item.summary}</small></span>
        <span className="module-chevron"><ChevronDown size={18} /></span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.35 }} className="curriculum-panel">
            <div className="curriculum-panel-inner">
              <p className="lesson-label">Inside this module</p>
              <ul>{item.lessons.map((lesson) => <li key={lesson}><span><Check size={13} /></span>{lesson}</li>)}</ul>
              <div className="module-meter"><span />{item.lessons.length} lessons · designed for your phone</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Home() {
  const prefersReducedMotion = useReducedMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openModule, setOpenModule] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [showSticky, setShowSticky] = useState(false);
  const heroCtaRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(([entry]) => setShowSticky(!entry.isIntersecting), { threshold: 0.05 });
    const pricingObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setShowSticky(false);
    }, { threshold: 0.18 });
    if (heroCtaRef.current) heroObserver.observe(heroCtaRef.current);
    if (pricingRef.current) pricingObserver.observe(pricingRef.current);
    return () => { heroObserver.disconnect(); pricingObserver.disconnect(); };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const motionProps = prefersReducedMotion ? {} : { initial: "hidden", whileInView: "visible", viewport: { once: true, amount: 0.14 }, variants: reveal };

  return (
    <div className="site-shell" id="top">
      <header className="site-header">
        <div className="nav-inner">
          <Logo />
          <nav className={`desktop-nav ${menuOpen ? "desktop-nav-open" : ""}`} aria-label="Primary navigation">
            <a href="#experience" onClick={closeMenu}>The experience</a>
            <a href="#curriculum" onClick={closeMenu}>Curriculum</a>
            <a href="#audience" onClick={closeMenu}>Who it's for</a>
            <a href="#faq" onClick={closeMenu}>FAQ</a>
          </nav>
          <div className="nav-actions">
            <PurchaseButton className="nav-cta" variant="outline">Get the course</PurchaseButton>
            <button className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero-section" id="experience">
          <div className="hero-grid-line hero-grid-line-left" />
          <div className="hero-grid-line hero-grid-line-right" />
          <div className="hero-content site-container">
            <motion.div className="hero-copy" initial={prefersReducedMotion ? undefined : { opacity: 0, y: 22 }} animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.75, delay: 0.12 }}>
              <Eyebrow><span className="eyebrow-pulse" />The future of building software is in your hands.</Eyebrow>
              <h1>Your smartphone is all you need to start <span>building software with AI.</span></h1>
              <p className="hero-lede">Learn how to use AI Vibe Coding to create real websites, web applications, and digital products directly from your Android or iPhone — even if you've never written a single line of code.</p>
              <p className="hero-subcopy">You don't need an expensive laptop. You need your smartphone, an internet connection, and the right AI workflow.</p>
              <div className="hero-ctas" ref={heroCtaRef}>
                <PurchaseButton>Start building for ₦7,000</PurchaseButton>
                <button className="text-link" type="button" onClick={() => scrollToId("curriculum")}>Explore the curriculum <ArrowDownRight size={17} /></button>
              </div>
              <div className="trust-row"><span><Check size={13} /> Smartphone-friendly learning</span><span><Check size={13} /> Beginner-friendly lessons</span><span><Check size={13} /> Publish real projects</span></div>
            </motion.div>
            <motion.div className="hero-visual-wrap" initial={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96 }} animate={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.24 }}>
              <div className="hero-orbit hero-orbit-one" /><div className="hero-orbit hero-orbit-two" />
              <div className="hero-index">01 <span>/</span> START HERE</div>
              <img className="hero-phone-image" src={heroImage} alt="Illustrative smartphone showing an AI coding workspace and website preview" />
              <div className="float-card float-card-prompt"><div className="float-card-icon"><MessageSquareCode size={14} /></div><div><small>Prompt accepted</small><strong>Build landing page</strong></div><span className="float-card-live">LIVE</span></div>
              <div className="float-card float-card-deploy"><div className="deploy-check"><Check size={14} /></div><div><small>Deployment</small><strong>Project is live</strong></div><ArrowUpRight size={14} /></div>
              <div className="float-card float-card-code"><Terminal size={14} /><span>generating<span className="typing-dots">...</span></span></div>
              <div className="hero-caption"><span className="caption-line" />Your idea, in motion.</div>
            </motion.div>
          </div>
          <div className="scroll-cue"><span>Scroll to explore</span><div /></div>
        </section>

        <section className="problem-section section-pad" id="problem">
          <div className="site-container">
            <motion.div {...motionProps} className="problem-intro"><div><Eyebrow>02 / THE SHIFT</Eyebrow><h2>How many great ideas have you abandoned because you don't own a laptop?</h2></div><p>Maybe you've always wanted to become a software developer. Perhaps you have an idea for an app, an online business, or a website. But every time you think about starting, the same limitations come up.</p></motion.div>
            <div className="pain-grid">
              {["I can't learn programming without a laptop.", "Coding is too complicated for a complete beginner.", "I have amazing app ideas, but I don't know how to build them.", "I have to wait until I can afford a computer."].map((pain, i) => <motion.div {...motionProps} transition={{ duration: 0.72, delay: i * 0.08 }} className="pain-card" key={pain}><span>0{i + 1}</span><p>“{pain}”</p><ArrowUpRight size={17} /></motion.div>)}
            </div>
            <motion.div {...motionProps} className="shift-callout"><div className="shift-mark"><Zap size={19} /></div><div><Eyebrow>AI has changed the way software is built.</Eyebrow><p>With AI-powered development tools, you can describe what you want to create, guide AI through the development process, review generated code, improve your project, and publish your creations. This approach is known as <em>Vibe Coding.</em></p></div><strong>Stop waiting for the perfect equipment.<br /><span>Start with what you have.</span></strong></motion.div>
          </div>
        </section>

        <section className="showcase-section section-pad section-dark" id="showcase">
          <div className="site-container">
            <motion.div {...motionProps} className="section-heading showcase-heading"><Eyebrow light>03 / THE OUTPUT</Eyebrow><h2>From smartphone user<br /><span>to AI-powered creator.</span></h2><p>Not another theory-heavy course. A practical starting point for building things you can see, share and keep improving.</p></motion.div>
            <div className="feature-grid">
              {[{ number: "01", title: "Professional websites", copy: "Create attractive websites for businesses, personal brands, and online projects.", kind: "web" as const }, { number: "02", title: "Web applications", copy: "Learn how to build interactive web applications with AI assistance.", kind: "app" as const }, { number: "03", title: "Digital products", copy: "Turn ideas into functional digital experiences.", kind: "product" as const }, { number: "04", title: "Live project deployment", copy: "Publish your projects online and share them with the world.", kind: "deploy" as const }].map((item, i) => <motion.article {...motionProps} transition={{ duration: 0.72, delay: i * 0.08 }} className={`feature-card feature-card-${item.kind}`} key={item.number}><div className="feature-card-top"><span>{item.number}</span><ArrowUpRight size={17} /></div><FeatureVisual kind={item.kind} /><h3>{item.title}</h3><p>{item.copy}</p></motion.article>)}
            </div>
            <div className="illustrative-note"><span><Eye size={14} /> Illustrative interface examples</span><p>Visuals on this page show the kind of work you can learn to create. They are not fabricated student projects.</p></div>
          </div>
        </section>

        <section className="curriculum-section section-pad" id="curriculum">
          <div className="site-container curriculum-layout">
            <motion.div {...motionProps} className="curriculum-intro"><Eyebrow>04 / THE PATH</Eyebrow><h2>Everything you need to start building with AI from your phone.</h2><p>A structured, beginner-friendly learning experience that takes you from setting up your mobile workspace to building and publishing your own projects.</p><div className="curriculum-side-note"><span>5</span><div><strong>focused modules</strong><small>from first prompt to live project</small></div></div></motion.div>
            <div className="curriculum-list">{curriculum.map((item, i) => <AccordionItem key={item.number} item={item} open={openModule === i} onClick={() => setOpenModule(openModule === i ? -1 : i)} />)}</div>
          </div>
        </section>

        <section className="audience-section section-pad" id="audience">
          <div className="site-container">
            <motion.div {...motionProps} className="audience-heading"><div><Eyebrow>05 / YOUR STARTING POINT</Eyebrow><h2>You don't need to be a programmer to start.</h2></div><p>If you have curiosity, creativity, and a smartphone, you have a place to start.</p></motion.div>
            <div className="audience-grid">{[{ label: "Students & beginners", copy: "People who want to enter the technology industry and begin learning software development.", icon: Smartphone }, { label: "Aspiring entrepreneurs", copy: "People who want to turn their business ideas into digital products.", icon: Rocket }, { label: "Creative thinkers", copy: "People with ideas for websites and applications but no coding background.", icon: Sparkles }, { label: "Future freelancers", copy: "People interested in learning how to create digital projects for potential clients.", icon: UsersRound }].map((item, i) => { const Icon = item.icon; return <motion.div {...motionProps} transition={{ duration: 0.72, delay: i * 0.08 }} className="audience-card" key={item.label}><span className="audience-icon"><Icon size={19} /></span><span className="audience-number">0{i + 1}</span><h3>{item.label}</h3><p>{item.copy}</p><ArrowUpRight size={16} /></motion.div>; })}</div>
          </div>
        </section>

        <section className="difference-section section-pad section-dark">
          <div className="site-container difference-layout">
            <motion.div {...motionProps} className="difference-visual"><div className="difference-glow" /><MiniPhone label="VIBE / BUILD" /><div className="difference-float difference-float-one"><Bot size={15} /><span>AI-assisted</span></div><div className="difference-float difference-float-two"><Wifi size={15} /><span>Works mobile-first</span></div><div className="difference-rail"><span>LEARN A NEW WAY TO BUILD</span><i /></div></motion.div>
            <motion.div {...motionProps} className="difference-copy"><Eyebrow light>06 / THE DIFFERENCE</Eyebrow><h2>Learn a new way to build. <span>Not just another technology course.</span></h2><div className="benefit-list">{["Learn using a device you already own.", "Follow a practical, structured learning process.", "Discover accessible AI development tools.", "Learn through real project workflows.", "Understand how to publish your work.", "Connect with a community of fellow learners."].map((benefit, i) => <div key={benefit}><span>{String(i + 1).padStart(2, "0")}</span><p>{benefit}</p><Check size={14} /></div>)}</div></motion.div>
          </div>
        </section>

        <section className="pricing-section section-pad" id="pricing" ref={pricingRef}>
          <div className="site-container">
            <motion.div {...motionProps} className="pricing-header"><div><Eyebrow>07 / THE OFFER</Eyebrow><h2>Your next big idea<br /><span>starts here.</span></h2></div><p>Get the knowledge and practical guidance to begin building websites and applications using AI from your smartphone.</p></motion.div>
            <motion.div {...motionProps} className="pricing-card"><div className="pricing-card-main"><div className="pricing-micro"><span className="status-dot" /> Introducing the Mobile Vibe Coding Masterclass</div><p className="regular-label">Regular price <del>₦15,000</del></p><div className="price-row"><strong>₦7,000</strong><span>launch price</span></div><p className="price-note">The current launch price is ₦7,000. It will increase to ₦10,000 after the current launch allocation is filled.</p><PurchaseButton className="pricing-cta">Get instant access — ₦7,000</PurchaseButton><div className="secure-note"><LockKeyhole size={15} /> Secure payment powered by Paystack · debit card · bank transfer · USSD where supported</div>{!paystackUrl && <div className="config-banner" role="note"><ShieldCheck size={16} /><span><strong>Checkout configuration pending.</strong> Add the real Paystack payment URL as <code>VITE_PAYSTACK_PAYMENT_URL</code> before launch. No payment is simulated here.</span></div>}</div><div className="pricing-included"><Eyebrow>What is included?</Eyebrow><ul>{included.map((item) => <li key={item}><span><Check size={13} /></span>{item}</li>)}</ul><div className="pricing-stamp"><Sparkles size={16} /><span>Build from where you are.</span></div></div></motion.div>
          </div>
        </section>

        <section className="proof-section section-pad section-dark">
          <div className="site-container proof-layout"><motion.div {...motionProps} className="proof-copy"><Eyebrow light>08 / REAL PROOF, WHEN READY</Eyebrow><h2>Let the work speak<br /><span>when the work is real.</span></h2><p>This area is intentionally ready for the instructor story, course preview video, actual project demonstrations and verified student feedback. No credentials, testimonials or outcomes are invented here.</p><div className="proof-placeholder"><Play size={15} /><span>Course preview video placeholder</span><small>Add the real asset before launch</small></div></motion.div><motion.div {...motionProps} className="proof-board"><div className="proof-board-top"><span>PROOF / 00</span><span>NAME-BASED IDENTITY</span></div><div className="proof-avatar proof-name-mark" aria-label="Instructor MUSA UWAYS"><span>MUSA<br />UWAYS</span></div><h3>MUSA UWAYS</h3><p>Name-based instructor identity. Add a professional biography when ready.</p><div className="proof-lines"><i /><i /><i /></div><div className="proof-footer"><span>Verified proof only</span><ShieldCheck size={15} /></div></motion.div></div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="site-container faq-layout"><motion.div {...motionProps} className="faq-heading"><Eyebrow>09 / QUESTIONS</Eyebrow><h2>Questions?<br /><span>We have answers.</span></h2><p>Still curious? The clearest next step is to begin with what you have.</p><button type="button" className="text-link" onClick={() => scrollToId("pricing")}>See the offer <ChevronRight size={16} /></button></motion.div><div className="faq-list">{faqs.map(([question, answer], i) => <div className={`faq-item ${openFaq === i ? "faq-item-open" : ""}`} key={question}><button type="button" onClick={() => setOpenFaq(openFaq === i ? -1 : i)} aria-expanded={openFaq === i}><span>{String(i + 1).padStart(2, "0")}</span><strong>{question}</strong><ChevronDown size={17} /></button><AnimatePresence initial={false}>{openFaq === i && <motion.div className="faq-answer" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32 }}><p>{answer}</p></motion.div>}</AnimatePresence></div>)}</div></div>
        </section>

        <section className="final-section section-pad" id="final-cta">
          <div className="site-container final-card"><div className="final-copy"><Eyebrow>10 / YOUR NEXT MOVE</Eyebrow><h2>Your next big idea could start with the <span>phone in your hand.</span></h2><p>You don't have to wait until you own a laptop. You don't have to spend years learning traditional programming before experimenting with AI-powered development. Your journey starts today.</p><div className="final-price"><strong>₦7,000</strong><span>Regular price: <del>₦15,000</del></span></div><PurchaseButton variant="light">Yes! I want to start building.</PurchaseButton><small className="final-reassurance"><LockKeyhole size={13} /> Secure checkout · Beginner-friendly · Smartphone-focused learning</small></div><div className="final-visual"><img src={finalImage} alt="Illustrative smartphone showing a completed website ready to publish" /><div className="final-visual-label"><span className="status-dot" /> PROJECT / READY TO SHIP</div></div></div>
        </section>
      </main>

      <footer className="site-footer"><div className="site-container footer-grid"><div className="footer-brand"><Logo /><p>Empowering the next generation of creators to build with AI.</p></div><div className="footer-links"><div><span>Explore</span><a href="#top">Home</a><a href="#curriculum">Curriculum</a><a href="#experience">About the course</a><a href="#faq">FAQs</a></div><div><span>Notes</span><a href="#pricing">Contact</a><a href="#footer-policy">Privacy policy</a><a href="#footer-policy">Terms & conditions</a><a href="#footer-policy">Refund policy</a></div></div></div><div className="site-container footer-bottom" id="footer-policy"><span>© {new Date().getFullYear()} Mobile Vibe Code Academy</span><span>Built for curious minds, one phone at a time.</span></div></footer>

      <AnimatePresence>{showSticky && <motion.div className="mobile-sticky" initial={{ y: 90 }} animate={{ y: 0 }} exit={{ y: 90 }}><div><span>Mobile Vibe Masterclass</span><strong>₦7,000</strong></div><PurchaseButton>Get access</PurchaseButton></motion.div>}</AnimatePresence>
    </div>
  );
}

export default Home;
