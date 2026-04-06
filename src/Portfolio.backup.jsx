import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StarBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const ratio = window.devicePixelRatio || 1;

      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const stars = Array.from({ length: 300 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 2,
      speed: 0.4 + Math.random() * 0.6,
    }));

    let animationId;

    const animate = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "white";
      stars.forEach((s) => {
        s.y += s.speed;
        if (s.y > height) s.y = 0;
        ctx.fillRect(s.x, s.y, s.size, s.size);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" />;
};


const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const projects = [
  {
    title: "AI Birthday Message Automation",
    tags: ["Python", "UiPath", "OpenAI GPT"],
    steps: [
      "Detect birthdays from data",
      "Trigger UiPath bot",
      "Generate message using GPT",
      "Send email automatically",
      "Log execution + errors",
    ],
  },
  {
    title: "Invoice Processing Automation Bot",
    tags: ["UiPath", "OCR", "Excel"],
    steps: [
      "Detect invoice file",
      "Extract data",
      "Validate fields",
      "Generate report",
      "Send summary",
    ],
  },
  {
    title: "Excel to Email Automation Workflow",
    tags: ["UiPath", "Excel", "SMTP"],
    steps: [
      "Read Excel data",
      "Process each row",
      "Generate personalized email",
      "Send via SMTP",
      "Log status in Excel",
    ],
  },
  {
    title: "Web Portal Data Extraction Bot",
    tags: ["UiPath", "Web Scraping", "Automation"],
    steps: [
      "Login to secure portal",
      "Navigate dynamic pages",
      "Extract structured data",
      "Clean and format data",
      "Export final report",
    ],
  },
];

const ProjectCard = ({ project, isOpen, onClick }) => (
  <motion.button
    type="button"
    className="w-full text-left bg-white/5 border border-white/10 rounded-xl p-6 cursor-pointer backdrop-blur-lg"
    whileHover={{ scale: 1.03 }}
    onClick={onClick}
  >
    <h3 className="text-xl font-semibold">{project.title}</h3>

    <div className="flex gap-2 mt-2 flex-wrap">
      {project.tags.map((tag) => (
        <span key={tag} className="text-xs px-2 py-1 bg-white/10 rounded">
          {tag}
        </span>
      ))}
    </div>

    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4"
        >
          <h4 className="text-sm text-blue-400 mb-2">HOW IT WORKS</h4>
          {project.steps.map((step, i) => (
            <div key={i} className="flex gap-3 mb-2">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-xs">
                {i + 1}
              </div>
              <p className="text-gray-300 text-sm">{step}</p>
            </div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  </motion.button>
);

export default function Portfolio() {
  const [open, setOpen] = useState(null);

  return (
    <div className="relative text-white font-sans min-h-screen z-10">
      <StarBackground />

      <section className="h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-7xl font-bold">VANSH</h1>
        <p className="text-gray-400 mt-4">
          Automation Engineer | RPA Developer | AI Automation
        </p>
        <p className="text-gray-400 mt-4">
          I build intelligent automation systems that eliminate repetitive work and improve efficiency.
          <p className="text-gray-400 mt-4"></p>
           I’m passionate about leveraging AI and RPA to solve real-world problems and create innovative solutions.
        </p>
      </section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="max-w-6xl mx-auto py-20 grid md:grid-cols-2 gap-10 px-6"
      >
        <div>
          <h2 className="text-4xl mb-4">About Me</h2>
          <p className="text-gray-400">
            I am Vansh. I’ve completed my BCA from Maharishi Dayanand University, and I’m currently working as a Senior SME at Concentrix.

During my time in the BPO industry, I gained strong exposure to business processes and customer operations, which made me curious about how repetitive tasks can be automated and optimized.

That’s when I started learning UiPath and automation. I’ve built multiple projects including web scraping, Excel and email automation, and recently an AI-based automation that generates dynamic messages and sends them automatically using GPT and UiPath Orchestrator.

What excites me about automation is the ability to solve real business problems efficiently, and I’m currently focusing on building more structured, scalable workflows to transition into an Automation Engineer role.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {['Automation', 'RPA', 'Python', 'AI'].map((item) => (
            <div key={item} className="bg-white/5 p-6 rounded-lg text-center">
              {item}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <h2 className="text-4xl mb-6">Technical Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            'UiPath',
            'Python',
            'Automation',
            'Excel',
            'AI',
            'Debugging',
          ].map((s) => (
            <div key={s} className="bg-white/5 p-4 rounded">
              {s}
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <h2 className="text-4xl mb-6">Featured Projects</h2>
        <div className="grid gap-6">
          {projects.map((p, i) => (
            <ProjectCard
              key={p.title}
              project={p}
              isOpen={open === i}
              onClick={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="max-w-6xl mx-auto py-20 px-6"
      >
        <h2 className="text-4xl mb-6">Work Experience</h2>
        <div className="bg-white/5 p-6 rounded-xl">
          <h3 className="text-xl">Senior SME / Sr. Representative – Concentrix</h3>
          <p className="text-gray-400 text-sm">2023 – Present</p>
          <ul className="mt-3 text-gray-300 text-sm space-y-1">
            <li>• Managed operations & escalations</li>
            <li>• Improved workflows</li>
            <li>• Trained team members</li>
            <li>• Handled customer inquiries and resolved issues</li>
            <li>• Worked as a DART Representative, handling complex customer cases</li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="max-w-6xl mx-auto py-20 text-center px-6"
      >
        <h2 className="text-4xl mb-4">Get In Touch</h2>
        <p className="text-gray-400">vanshjangid1805@gmail.com</p>
        <p className="text-gray-400">+91 8750981705</p>

        <div className="mt-6">
          <a
            href="Resume.pdf"
            download
            className="px-6 py-2 bg-purple-600 rounded-full hover:bg-purple-700 transition"
          >
            Download Resume
          </a>
        </div>
      </motion.section>
    </div>
  );
}
