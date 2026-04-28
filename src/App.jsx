import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  Github,
  Sparkles,
  Layers,
  Bone,
  Wand2,
  Download,
  Code2,
  Image as ImageIcon,
  Zap,
  RotateCcw,
  ChevronRight,
  Copy,
  Check,
} from "lucide-react";

const parts = [
  { id: "head", label: "Head", x: 50, y: 12, w: 20, h: 18, r: "rounded-full", note: "Separate head layer for facial switch, blink, mouth shapes, and head turn control." },
  { id: "neck", label: "Neck", x: 56, y: 31, w: 8, h: 8, r: "rounded-lg", note: "Hidden connector inserted into torso cavity so the head can rotate smoothly." },
  { id: "torso", label: "Torso", x: 45, y: 37, w: 30, h: 27, r: "rounded-3xl", note: "Main chest layer with rounded shoulder sockets and clean overlap zones." },
  { id: "hip", label: "Hip", x: 48, y: 63, w: 24, h: 14, r: "rounded-2xl", note: "Pelvis base overlaps the upper legs to avoid broken seams during walk cycles." },
  { id: "armL", label: "Left Arm", x: 29, y: 39, w: 13, h: 33, r: "rounded-full", note: "Upper and lower arm use soft circular elbow overlap for natural bending." },
  { id: "armR", label: "Right Arm", x: 78, y: 39, w: 13, h: 33, r: "rounded-full", note: "Round shoulder cap hides rotation seams under the sleeve area." },
  { id: "legL", label: "Left Leg", x: 47, y: 78, w: 10, h: 33, r: "rounded-full", note: "Thigh overlaps under the shorts. Knee area stays rounded for bone rotation." },
  { id: "legR", label: "Right Leg", x: 63, y: 78, w: 10, h: 33, r: "rounded-full", note: "Ankle joint uses hidden rounded caps so the foot can rotate cleanly." },
];

const projectCards = [
  {
    icon: Bone,
    title: "Moho Rig Blueprint",
    desc: "Interactive rigging guide for 2D character body-part separation.",
    tag: "Animation Tool",
  },
  {
    icon: Layers,
    title: "Layer Split Preview",
    desc: "Visualize hidden overlap zones before exporting PNG layers.",
    tag: "2D Pipeline",
  },
  {
    icon: Wand2,
    title: "Prompt Generator",
    desc: "Generate anti-hallucination prompts for clean character cut-out sheets.",
    tag: "AI Utility",
  },
];

const prompts = {
  clean: "Cut apart the original character into rig-ready body parts while preserving exact style, colors, proportions, and 3/4 view. Use rounded hidden overlap joints at shoulders, elbows, hips, knees, and ankles. No redesign. Transparent PNG.",
  blueprint: "Create a technical Moho Pro rigging blueprint poster showing separated body parts, hidden overlap zones, circular joints, bone pivots, and clean white vector line art on a cobalt-blue blueprint grid.",
  enhance: "Enhance the character for animation production: sharper outline, clean edges, no white halo, crisp PNG quality, flat vector-like color, no blur, no texture change, preserve original design exactly.",
};

function App() {
  const [active, setActive] = useState("torso");
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedPrompt, setSelectedPrompt] = useState("clean");
  const [copied, setCopied] = useState(false);
  const activePart = useMemo(() => parts.find((p) => p.id === active), [active]);

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompts[selectedPrompt]);
      setCopied(true);
      setTimeout(() => setCopied(false), 1300);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-500 blur-[120px]" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-violet-600 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-fuchsia-500 blur-[140px]" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 shadow-lg ring-1 ring-white/15 backdrop-blur">
            <Bone className="h-6 w-6 text-cyan-300" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200/80">Portfolio Lab</p>
            <h1 className="text-xl font-bold">MotionRig Studio</h1>
          </div>
        </div>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/15 md:flex"
        >
          <Github className="h-4 w-4" /> GitHub Ready
        </a>
      </header>

      <main className="relative z-10 mx-auto grid max-w-7xl gap-8 px-6 pb-16 pt-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100"
          >
            <Sparkles className="h-4 w-4" /> Lightweight creative app for animation portfolios
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-7 max-w-3xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl"
          >
            Build character rigs that look clean, smooth, and production-ready.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            A unique portfolio app that demonstrates 2D rigging concepts, hidden overlap joints,
            prompt engineering, and animation pipeline thinking in one interactive visual experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#rig-preview" className="group inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:scale-[1.03]">
              Explore App <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => setIsPlaying((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              {isPlaying ? "Pause Demo" : "Play Demo"}
            </button>
          </motion.div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {projectCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.article
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.35 + i * 0.08 }}
                  className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.1]"
                >
                  <Icon className="h-7 w-7 text-cyan-200" />
                  <p className="mt-4 text-xs font-bold uppercase tracking-[0.25em] text-violet-200">{card.tag}</p>
                  <h3 className="mt-2 text-lg font-bold">{card.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{card.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="rig-preview" className="relative scroll-mt-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-3 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">Live Rig Preview</p>
                <h3 className="mt-1 text-2xl font-black">Body-Part Map</h3>
              </div>
              <button
                onClick={() => setActive("torso")}
                className="rounded-full border border-white/10 bg-white/10 p-3 transition hover:bg-white/15"
                aria-label="Reset selected rig part"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            </div>

            <div className="grid gap-4 p-3 md:grid-cols-[1fr_0.9fr]">
              <div className="relative min-h-[520px] overflow-hidden rounded-[1.5rem] border border-cyan-300/15 bg-slate-900/80">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(103,232,249,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(103,232,249,0.07)_1px,transparent_1px)] bg-[size:26px_26px]" />
                <div className="absolute inset-6 rounded-[1.25rem] border border-cyan-300/10" />

                {parts.map((part, index) => (
                  <motion.button
                    key={part.id}
                    onClick={() => setActive(part.id)}
                    animate={
                      isPlaying
                        ? {
                            y: [0, index % 2 ? 8 : -8, 0],
                            rotate: active === part.id ? [0, 3, -3, 0] : 0,
                          }
                        : { y: 0, rotate: 0 }
                    }
                    transition={{ duration: 3 + index * 0.1, repeat: Infinity, ease: "easeInOut" }}
                    className={`absolute ${part.r} border transition ${
                      active === part.id
                        ? "border-cyan-200 bg-cyan-300/40 shadow-[0_0_40px_rgba(103,232,249,0.45)]"
                        : "border-white/20 bg-white/15 hover:bg-white/25"
                    }`}
                    style={{ left: `${part.x}%`, top: `${part.y}%`, width: `${part.w}%`, height: `${part.h}%` }}
                    aria-label={`Select ${part.label}`}
                  />
                ))}

                <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M61 35 C62 43, 64 48, 60 58" stroke="rgba(103,232,249,.45)" strokeWidth=".35" fill="none" strokeDasharray="2 2" />
                  <path d="M53 66 C51 72, 49 76, 51 88" stroke="rgba(216,180,254,.45)" strokeWidth=".35" fill="none" strokeDasharray="2 2" />
                  <path d="M68 66 C70 72, 72 76, 70 88" stroke="rgba(216,180,254,.45)" strokeWidth=".35" fill="none" strokeDasharray="2 2" />
                </svg>

                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/10 bg-slate-950/70 p-4 backdrop-blur">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePart?.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                    >
                      <p className="text-xs uppercase tracking-[0.25em] text-cyan-200">Selected Layer</p>
                      <h4 className="mt-1 text-xl font-black">{activePart?.label}</h4>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{activePart?.note}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-yellow-200" />
                    <h4 className="font-bold">Why this app is unique</h4>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    It shows creative-technical skill: design taste, animation knowledge, UI thinking,
                    and prompt engineering in a single GitHub project.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-5">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Code2 className="h-5 w-5 text-cyan-200" />
                      <h4 className="font-bold">Prompt Toolkit</h4>
                    </div>
                    <button
                      onClick={copyPrompt}
                      className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-bold transition hover:bg-white/15"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.keys(prompts).map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedPrompt(key)}
                        className={`rounded-2xl px-3 py-2 text-xs font-bold capitalize transition ${
                          selectedPrompt === key ? "bg-cyan-300 text-slate-950" : "bg-white/10 text-white hover:bg-white/15"
                        }`}
                      >
                        {key}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-6 text-slate-300">
                    {prompts[selectedPrompt]}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                    <ImageIcon className="h-6 w-6 text-violet-200" />
                    <p className="mt-3 text-3xl font-black">8+</p>
                    <p className="text-sm text-slate-300">Rig parts mapped</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-5">
                    <Download className="h-6 w-6 text-cyan-200" />
                    <p className="mt-3 text-3xl font-black">100%</p>
                    <p className="text-sm text-slate-300">Static deploy ready</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
