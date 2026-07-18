import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { CustomCursor } from "@/components/CustomCursor";
import { CursorTrail } from "@/components/CursorTrail";
import { Preloader, PRELOAD_TOTAL_MS } from "@/components/Preloader";
import { ParallaxAurora } from "@/components/ParallaxAurora";
import { InteractiveHeadline } from "@/components/InteractiveHeadline";
import { ProjectVisual, type VisualVariant } from "@/components/ProjectVisual";
import { ContactForm } from "@/components/ContactForm";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
head: () => ({
meta: [
{ title: "Vansh Jangid — Applied AI & Automation Engineer" },
],
}),
component: Home,
});

/* ---------- Data ---------- */
const SKILLS_MARQUEE = [
"APPLIED AI",
"PYTHON",
"FASTAPI",
"GEMINI · GPT",
"UIPATH RPA",
"LLM AGENTS",
"AUTOMATION",
"REST APIs",
"PROMPT ENGINEERING",
"IMAP / SMTP",
];

const ZONES = [
{
id: "01",
title: "AI & LLM.",
body: "Production AI systems powered by Gemini and GPT — intent classification, context-aware generation, and RAG-lite retrieval that actually ships. Prompt and context engineering with real evaluation, not vibes.",
tags: ["Gemini API", "GPT", "Prompt Engineering", "AI Agents", "RAG", "Embeddings"],
},
{
id: "02",
title: "Backend.",
body: "Python and FastAPI backends built for automation workloads: strict schemas, retry logic, and clean REST surfaces. SQLite / Supabase for persistence, robust exception handling for 24/7 unattended runs.",
tags: ["Python", "FastAPI", "REST APIs", "SQLite", "Supabase", "JSON Schema"],
},
{
id: "03",
title: "RPA.",
body: "UiPath robots on REFramework with Orchestrator. Email, Excel, PDF, and web automation wired end-to-end with the AI layer — the robot does the boring part, the LLM does the thinking part.",
tags: ["UiPath Studio", "REFramework", "Orchestrator", "Web Scraping", "Excel", "PDF"],
},
{
id: "04",
title: "Ops.",
body: "IMAP/SMTP pipelines, Outlook automation, PDF and Excel data extraction with pdfplumber and openpyxl. Git-based workflows, VS Code, and a mindset that treats reliability as a feature.",
tags: ["IMAP", "SMTP", "pdfplumber", "openpyxl", "Git", "GitHub"],
},
];

const PROJECTS: {
kpi: string;
title: string;
stack: string;
tag: string;
body: string;
href: string;
visual: VisualVariant;
hackathon?: boolean;
}[] = [
{
kpi: "10+ modules",
title: "ProcureMind AI",
stack: "Python · FastAPI · React · Gemini",
tag: "AI PRODUCT",
body: "Enterprise AI procurement platform that transforms BOQ workflows into an intelligent system — AI-assisted pricing, vendor comparison, quotation generation, conversational document analysis, and interactive analytics. Processes BOQ files in minutes instead of hours.",
href: "
https://github.com/Slg-Vansh
",
visual: "product",
hackathon: true,
},
{
kpi: "3hr → 3min",
title: "Intelligent BOQ Pricing System",
stack: "Python · Gemini API · FastAPI · Excel/PDF",
tag: "AI · AUTOMATION",
body: "End-to-end system that ingests construction tender BOQ files from email, normalizes chaotic tabular data with Gemini, prices every line item against a historical database with live fallback, and delivers the final commercial report — cutting a 3–4 hour manual process to under 3 minutes.",
href: "
https://github.com/Slg-Vansh/intelligent-boq-estimation-system
",
visual: "ai",
},
{
kpi: "500+ emails / month",
title: "AI Email Classification & Auto-Response",
stack: "UiPath · FastAPI · LLM · IMAP/SMTP",
tag: "AI · RPA",
body: "Intelligent email ecosystem where UiPath robots monitor inboxes and a FastAPI backend classifies intent with LLMs, generating context-aware replies. Supports cloud LLMs and local Ollama for privacy-sensitive deployments. Zero manual sorting.",
href: "
https://github.com/Slg-Vansh/AI-Email-Classification-Auto-Response-System
",
visual: "ops",
},
{
kpi: "Multi-format",
title: "Invoice Processing Bot",
stack: "UiPath · REFramework · Excel",
tag: "RPA",
body: "Robotic workflow handling multi-format invoice extraction, smart categorization, coupon generation, and standardized Excel reporting with strict data validation gates.",
href: "
https://github.com/Slg-Vansh
",
visual: "rpa",
},
{
kpi: "Fully hands-free",
title: "AI Birthday Email Generator",
stack: "Python · UiPath · GPT",
tag: "AI · AUTOMATION",
body: "Scheduled automation connecting custom database lookups with GPT to craft deeply personalized, context-aware birthday greetings and deliver them completely hands-free on trigger.",
href: "
https://github.com/Slg-Vansh
",
visual: "backend",
},
{
kpi: "Resilient scraping",
title: "Web Portal Data Extraction Bot",
stack: "UiPath · Dynamic Selectors",
tag: "RPA",
body: "Resilient scraper pulling dynamic product pricing, structured customer reviews, and complex seller ratings across unstable web interfaces with robust error handling.",
href: "
https://github.com/Slg-Vansh
",
visual: "scraper",
},
];

const EXPERIENCE = [
{
role: "Senior SME / Sr. Representative – Operations",
company: "Concentrix",
period: "Oct 2023 – Present",
bullets: [
"Identified and automated 2–3 manual workflow bottlenecks using Python and UiPath",
"Managed critical customer operations, consistently exceeding SLA benchmarks",
"Streamlined legacy processes through targeted automation-driven improvements",
"Mentored incoming team members on internal tools and automation workflows",
"Spearheaded performance reporting and team optimization initiatives",
"Handled high-priority technical escalations with consistent resolution rates",
],
},
];

const EDUCATION = [
{
degree: "Bachelor of Computer Applications (BCA)",
institution: "Maharishi Dayanand University, Rohtak",
},
];

const APPROACH = [
{
k: "Listen first.",
v: "Before any code, I work out who it's for and what done actually means. Half the job is asking sharper questions than the brief did.",
},
{
k: "Find the bottleneck.",
v: "Every automation starts with the hour someone doesn't want to spend. I hunt the one repetitive step that quietly drains a team and design around it.",
},
{
k: "Prototype the hard bit.",
v: "LLM prompts, schemas, retry logic — I prove the fragile parts on paper first, while they're still cheap to change.",
},
{
k: "Build it for real.",
v: "Production Python and FastAPI, typed contracts, strict JSON schema validation, and UiPath workflows that survive real inboxes and real PDFs.",
},
{
k: "Sweat the last ten.",
v: "Retries, fallbacks, monitoring, the exception nobody planned for. I'd rather spend an extra week here than ship something almost right.",
},
];

/* ---------- Component ---------- */
export function Home() {
const [loading, setLoading] = useState(true);
const [zone, setZone] = useState(0);

useEffect(() => {
// Failsafe only — the Preloader itself calls onDone right as its exit
// animation finishes. This just guards against onDone never firing.
const t = setTimeout(() => setLoading(false), PRELOAD_TOTAL_MS + 4000);
return () => clearTimeout(t);
}, []);

return (








{loading && setLoading(false)} />}




);}/* ---------- Nav ---------- */function Nav() { const scrollToSection = (id: string, e: React.MouseEvent) => { e.preventDefault(); const target = document.getElementById(id); if (target) { target.scrollIntoView({ behavior: "smooth", block: "start" }); } }; return (




href="#top"
onClick={(e) => scrollToSection("top", e)}
data-cursor="home"
className="-ml-1 font-display text-3xl font-extrabold leading-none tracking-tighter text-[var(--paper)] md:-ml-3 md:text-4xl"
>
VJ.



scrollToSection("work", e)} data-cursor="view">Work
scrollToSection("experience", e)} data-cursor="career">Experience
scrollToSection("about", e)} data-cursor="about">About
scrollToSection("approach", e)} data-cursor="how">Approach
scrollToSection("contact", e)} data-cursor="say hi">Contact



href="/Vansh_Resume_SDE.pdf"
download
data-cursor="download"
className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--paper)]"
>
Resume ↓





);
}

/* ---------- Hero ---------- */
// Reveal is driven by the `start` flag (flips true the instant the preloader
// curtain finishes sliding away) rather than hardcoded absolute delays, so
// the headline cascades in exactly as the main page becomes visible —
// a smooth, single continuous transition instead of two disconnected timers.
const heroWord = {
hidden: {},
show: { transition: { staggerChildren: 0.045, delayChildren: 0.05 } },
};
const heroLetter = {
hidden: { y: "110%", opacity: 0 },
show: {
y: 0,
opacity: 1,
transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
},
};

function Hero({ start }: { start: boolean }) {
const { scrollY } = useScroll();
const y1 = useTransform(scrollY, [0, 500], [0, -80]);

const line1 = "VANSH".split("");
const line2 = "JANGID".split("");

return (




initial={{ opacity: 0, y: 20 }}
animate={start ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
transition={{ duration: 0.6 }}
className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--muted-foreground)]"
>
● Applied AI Engineer · RPA Developer · New Delhi, India



variants={heroWord} initial="hidden" animate={start ? "show" : "hidden"} className="hero-solid block text-[20vw] font-black md:text-[17vw]" > {line1.map((c, i) => ( {c} ))} variants={heroWord} initial="hidden" animate={start ? "show" : "hidden"} className="hero-solid block text-[20vw] font-black md:text-[17vw] text-white translate-x-12 md:translate-x-[16rem] lg:translate-x-[22rem]" > {line2.map((c, i) => ( {c} ))}



initial={{ opacity: 0 }}
animate={start ? { opacity: 1 } : { opacity: 0 }}
transition={{ delay: 0.5, duration: 0.8 }}
className="mt-6 grid grid-cols-1 gap-8 md:mt-10 md:grid-cols-12"
>




I build intelligent automation systems — LLM-powered pipelines, RPA robots, and Python backends that quietly do the work while humans focus on what matters.




Building production-grade AI systems for enterprise automation.








Scroll to explore








);
}

/* ---------- Marquee ---------- */
function Marquee() {
const items = [...SKILLS_MARQUEE, ...SKILLS_MARQUEE];
return (




{items.map((s, i) => (

{s} ✦

))}




);
}

/* ---------- About ---------- */
function About() {
return (








01 / Approach & Vision



Vansh Jangid


Based in New Delhi, India






Real problems deserve real solutions —{" "}
engineered to serve people and move them closer to what they actually need to get done.



I started in BPO operations at Concentrix, where I saw how many hours humans lose to repetitive work — and taught myself to automate all of it. Today I build end-to-end intelligent systems: Python pipelines, FastAPI backends, UiPath robots, and LLM-powered agents that work 24/7. My BOQ pricing system cuts hours of manual work down to under three minutes. My email AI handles 500+ emails a month without a human touching them.








);
}

function RevealText({ children }: { children: React.ReactNode }) {
return (

initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
className="font-display text-3xl font-semibold leading-[1.05] tracking-tight md:text-6xl"
>
{children}

);
}

/* ---------- Manifesto (interactive letter-magnet headline) ---------- */
function Manifesto() {
return (



style={{
backgroundImage:
"radial-gradient(circle, var(--ink) 1px, transparent 1px)",
backgroundSize: "24px 24px",
}}
aria-hidden
/>



initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.6 }}
className="font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--accent-warm)]"
>
✦ Approach & Vision


initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, margin: "-100px" }}
transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
className="mt-8"
>

text="Real problems deserve real solutions, engineered to serve people and move them closer to their goals."
accentWords={["problems", "solutions,", "people", "goals."]}
className="font-display text-4xl font-black uppercase leading-[0.95] tracking-tight md:text-7xl lg:text-8xl"
/>





);
}


/* ---------- Toolkit / Zones ---------- */
function Toolkit({ zone, setZone }: { zone: number; setZone: (n: number) => void }) {
const z = ZONES[zone];
return (






02 / Services & Toolkit





{/* Zone titles */}



• {ZONES.map((zn, i) => (
• data-cursor="switch" onClick={() => setZone(i)} className={`group flex w-full items-baseline gap-4 border-b border-[var(--border)] py-3 text-left transition-colors ${ i === zone ? "text-[var(--ink)]" : "text-[var(--muted-foreground)] hover:text-[var(--ink)]" }`} > {zn.id} {zn.title} {i === zone ? "●" : "○"}
• ))}




{/* Zone content */}

key={z.id}
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.5 }}
className="md:col-span-8"
>

{z.body}



{z.tags.map((t) => (
<