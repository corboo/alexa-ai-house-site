/* eslint-disable @next/next/no-img-element */

const personalities = [
  {
    name: "Nigel Thistledown",
    emoji: "🌿",
    role: "Gardener & Nature Guide",
    image: "https://www.inceptionpoint.ai/wp-content/uploads/2025/08/Nigel_Thistledown_gardening_Blk_1_250.png",
    status: "LIVE",
    description: "Daily garden tips, plant diagnosis, seasonal planting advice, and charming conversation about the natural world.",
  },
  {
    name: "Claire Delish",
    emoji: "🍽️",
    role: "Chef & Nutrition Coach",
    image: "https://www.inceptionpoint.ai/wp-content/uploads/2025/08/Claire_Delish_-Home_Cook_1_250.png",
    status: "Coming Soon",
    description: "Personalized recipes, meal planning, cooking tips, and culinary adventures from around the globe.",
  },
  {
    name: "VV Steele",
    emoji: "👗",
    role: "Fashion & Style Advisor",
    image: "https://www.inceptionpoint.ai/wp-content/uploads/2025/08/Vv-Steele-Gossip-blk-250.png",
    status: "Coming Soon",
    description: "Style guidance, outfit recommendations, trend insights, and confidence-boosting fashion conversations.",
  },
  {
    name: "Olly Bennett",
    emoji: "💪",
    role: "Fitness Coach",
    image: "https://www.inceptionpoint.ai/wp-content/uploads/2025/08/Oly_Bennet_-_Sports_-Blk_1_250.png",
    status: "Coming Soon",
    description: "Workout routines, training motivation, sports chat, and personalized fitness guidance.",
  },
  {
    name: "Pennie Power",
    emoji: "💰",
    role: "Financial Coach",
    image: "https://www.inceptionpoint.ai/wp-content/uploads/2025/08/Pennie_Powers_Money_Blk_250.png",
    status: "Coming Soon",
    description: "Budgeting advice, financial literacy, savings strategies, and money management made approachable.",
  },
];

const roadmap = [
  {
    phase: "Phase 1",
    title: "Nigel MVP",
    status: "current",
    description: "Voice conversation via OAISYS — Nigel Thistledown live in development with seasonal greetings, garden tips, plant diagnosis, and free conversation.",
  },
  {
    phase: "Phase 2",
    title: "Custom Voices (Hume AI)",
    status: "next",
    description: "Replace Alexa TTS with Nigel's actual custom voice via Hume, bringing his personality to life with expressive, character-specific speech.",
  },
  {
    phase: "Phase 3",
    title: "Expand Personality Roster",
    status: "planned",
    description: "Add Claire Delish, VV Steele, Olly Bennett, and more personalities — each with their own invocation and specialty.",
  },
  {
    phase: "Phase 4",
    title: "House Call Game Mode",
    status: "planned",
    description: "Interactive challenges and trivia — gardening quizzes with Nigel, cooking challenges with Claire, style battles with VV.",
  },
  {
    phase: "Phase 5",
    title: "Persistent User Memory",
    status: "planned",
    description: "DynamoDB-backed user profiles — personalities remember your garden, your preferences, your progress across sessions.",
  },
  {
    phase: "Phase 6",
    title: "Proactive Notifications",
    status: "planned",
    description: "Push notifications from personalities — \"Frost warning tonight, protect your tomatoes!\" or \"New recipe inspired by what's in season.\"",
  },
];

const architectureSteps = [
  { label: "Alexa Skill", icon: "🔊" },
  { label: "AWS Lambda", icon: "⚡" },
  { label: "OAISYS API", icon: "🧠" },
  { label: "Personality Engine", icon: "🎭" },
  { label: "Response", icon: "💬" },
];

const visionPoints = [
  {
    icon: "🎯",
    title: "Platform Play",
    description: "Start with Nigel, expand to 7+ AI personalities — Claire Delish (chef), VV Steele (fashion), Olly Bennett (fitness), Anand Bodhi (wellness), Pennie Power (finance), Ava Grey (life coach).",
  },
  {
    icon: "🔊",
    title: "Voice Is the Next Frontier",
    description: "Voice brings AI personalities to life beyond text and podcasts. Natural conversation creates deeper emotional connection and engagement.",
  },
  {
    icon: "📡",
    title: "100M+ Device Distribution",
    description: "Alexa is installed in over 100 million devices worldwide — a massive, built-in distribution channel for AI personality content.",
  },
  {
    icon: "🔄",
    title: "Daily Companion Model",
    description: "Habit loop engagement (daily tips + conversation) plus House Call game mode (interactive challenges) — designed for retention.",
  },
  {
    icon: "💎",
    title: "Multiple Monetization Paths",
    description: "Premium personalities, Alexa ISP (in-skill purchases), cross-promotion to IPAI's podcast network — layered revenue model.",
  },
  {
    icon: "🌀",
    title: "Content Flywheel",
    description: "Podcast listeners → Alexa users → deeper engagement → more podcast listens. Each channel amplifies the others.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--color-navy)]">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-navy)]/90 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://www.inceptionpoint.ai/wp-content/uploads/2025/08/cropped-Inception-Point-Logo-FINAL-RGB.png"
              alt="Inception Point AI"
              className="h-10 w-auto"
            />
            <div className="h-6 w-px bg-[var(--color-border)]" />
            <h1 className="text-xl font-bold text-[var(--color-text-primary)]">
              My AI House
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--color-text-secondary)]">
            <a href="#overview" className="hover:text-[var(--color-gold)] transition-colors">Overview</a>
            <a href="#vision" className="hover:text-[var(--color-gold)] transition-colors">Vision</a>
            <a href="#architecture" className="hover:text-[var(--color-gold)] transition-colors">Architecture</a>
            <a href="#personalities" className="hover:text-[var(--color-gold)] transition-colors">Personalities</a>
            <a href="#roadmap" className="hover:text-[var(--color-gold)] transition-colors">Roadmap</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dots">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-navy)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 px-4 py-1.5 text-sm text-[var(--color-gold)] mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-green-accent)] animate-pulse" />
            Alexa Skill — Live in Development
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Talk to AI Personalities
            <br />
            <span className="text-[var(--color-gold)] gold-glow">Through Alexa</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10">
            Conversational AI companions powered by OAISYS — starting with Nigel Thistledown, your personal gardener and nature guide.
            Ask for garden tips, diagnose plant problems, or just have a chat.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="glass-card rounded-xl px-6 py-3 text-[var(--color-text-primary)]">
              <span className="text-[var(--color-text-muted)] text-sm">Say:</span>{" "}
              <span className="font-semibold">&quot;Alexa, open the garden house&quot;</span>
            </div>
            <div className="glass-card rounded-xl px-6 py-3 text-[var(--color-text-secondary)] text-sm">
              Powered by{" "}
              <span className="text-[var(--color-gold)] font-semibold">OAISYS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section id="overview" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
            Overview
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            What Is My AI House?
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass-card gradient-border rounded-2xl p-8">
            <div className="text-3xl mb-4">🏠</div>
            <h4 className="text-lg font-semibold mb-3 text-[var(--color-text-primary)]">
              AI Personalities on Alexa
            </h4>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              An Alexa skill that lets users have <strong className="text-[var(--color-text-primary)]">real conversations</strong> with IPAI&apos;s AI personalities.
              Starting with Nigel Thistledown — a charming British gardener and nature guide.
            </p>
          </div>
          <div className="glass-card gradient-border rounded-2xl p-8">
            <div className="text-3xl mb-4">🧠</div>
            <h4 className="text-lg font-semibold mb-3 text-[var(--color-text-primary)]">
              Powered by OAISYS
            </h4>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              All personalities run on <strong className="text-[var(--color-text-primary)]">OAISYS</strong>, IPAI&apos;s AI personality platform.
              Deep character models, contextual memory, and natural multi-turn conversation that feels genuinely human.
            </p>
          </div>
          <div className="glass-card gradient-border rounded-2xl p-8">
            <div className="text-3xl mb-4">🌿</div>
            <h4 className="text-lg font-semibold mb-3 text-[var(--color-text-primary)]">
              Daily Companion
            </h4>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Get <strong className="text-[var(--color-text-primary)]">daily garden tips</strong>, diagnose plant problems, get seasonal planting advice, or simply enjoy a friendly conversation.
              Each personality is a specialist you can return to every day.
            </p>
          </div>
        </div>
      </section>

      {/* Vision / Business Case */}
      <section id="vision" className="bg-[var(--color-navy-light)] border-y border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
              The Vision
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold">
              Why This Matters
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visionPoints.map((point) => (
              <div key={point.title} className="glass-card rounded-xl p-6 hover:border-[var(--color-gold)]/30 transition-all duration-300">
                <div className="text-2xl mb-3">{point.icon}</div>
                <h4 className="text-base font-semibold mb-2 text-[var(--color-text-primary)]">
                  {point.title}
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section id="architecture" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
            Architecture
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            How It Works
          </h2>
        </div>

        {/* Architecture Flow */}
        <div className="glass-card rounded-2xl p-8 md:p-12 mb-10">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-2">
            {architectureSteps.map((step, i) => (
              <div key={step.label} className="flex items-center gap-2 md:gap-4">
                <div className="flex flex-col items-center gap-2 min-w-[100px]">
                  <div className="w-16 h-16 rounded-xl bg-[var(--color-navy-lighter)] border border-[var(--color-border)] flex items-center justify-center text-2xl">
                    {step.icon}
                  </div>
                  <span className="text-xs font-medium text-[var(--color-text-secondary)] text-center">
                    {step.label}
                  </span>
                </div>
                {i < architectureSteps.length - 1 && (
                  <span className="text-[var(--color-gold)] text-xl font-bold hidden md:block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Details */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card rounded-xl p-6">
            <h4 className="text-sm font-semibold text-[var(--color-gold)] mb-2">Session Memory</h4>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Natural multi-turn conversation within a session. The personality remembers context from your current interaction for coherent, flowing dialogue.
            </p>
          </div>
          <div className="glass-card rounded-xl p-6">
            <h4 className="text-sm font-semibold text-[var(--color-gold)] mb-2">Extensible Framework</h4>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Add new personalities by adding configuration — each character gets their own invocation, voice, and specialty without changing core infrastructure.
            </p>
          </div>
          <div className="glass-card rounded-xl p-6">
            <h4 className="text-sm font-semibold text-[var(--color-gold)] mb-2">OAISYS Backend</h4>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Powered by the same platform running IPAI&apos;s web chat, podcast personalities, and voice assistants — proven, scalable, and character-rich.
            </p>
          </div>
        </div>
      </section>

      {/* Current Status */}
      <section className="bg-[var(--color-navy-light)] border-y border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
              Current Status
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold">
              Where We Are Now
            </h2>
          </div>
          <div className="glass-card rounded-2xl p-8 md:p-10 max-w-3xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <div className="flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-[var(--color-green-accent)] animate-pulse" />
              <div>
                <h4 className="text-lg font-semibold text-[var(--color-text-primary)]">
                  MVP: Nigel Thistledown — Live in Development
                </h4>
                <p className="text-[var(--color-text-secondary)] mt-1">
                  The first personality is functional and being refined.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Invocation", value: "\"Alexa, open the garden house\"" },
                { label: "Backend", value: "OAISYS API" },
                { label: "Seasonal Greetings", value: "✅ Active" },
                { label: "Garden Tips", value: "✅ Active" },
                { label: "Plant Diagnosis", value: "✅ Active" },
                { label: "Seasonal Planting Guide", value: "✅ Active" },
                { label: "Free Conversation", value: "✅ Active" },
                { label: "Session Memory", value: "✅ Active" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-lg bg-[var(--color-navy)] px-4 py-3">
                  <span className="text-sm text-[var(--color-text-secondary)]">{item.label}</span>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personality Roster */}
      <section id="personalities" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
            Personality Roster
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet the Characters
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-4 max-w-xl mx-auto">
            Each AI personality is a specialist — a daily companion with deep expertise, unique voice, and memorable character.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {personalities.map((p) => (
            <div
              key={p.name}
              className="personality-card glass-card gradient-border rounded-2xl p-6 text-center"
            >
              <div className="relative mx-auto w-28 h-28 mb-5">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-contain rounded-full"
                />
                <div
                  className={`absolute -top-1 -right-1 px-2 py-0.5 text-xs font-bold rounded-full ${
                    p.status === "LIVE"
                      ? "bg-[var(--color-green-accent)] text-[var(--color-navy)]"
                      : "bg-[var(--color-navy-lighter)] text-[var(--color-text-secondary)] border border-[var(--color-border)]"
                  }`}
                >
                  {p.status}
                </div>
              </div>
              <div className="text-2xl mb-1">{p.emoji}</div>
              <h4 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                {p.name}
              </h4>
              <p className="text-sm font-medium text-[var(--color-gold)] mb-3">
                {p.role}
              </p>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
          {/* Coming Soon Placeholder */}
          <div className="personality-card glass-card rounded-2xl p-6 text-center flex flex-col items-center justify-center border border-dashed border-[var(--color-border)]">
            <div className="text-4xl mb-4 opacity-40">+</div>
            <h4 className="text-lg font-bold text-[var(--color-text-secondary)] mb-1">
              More Coming
            </h4>
            <p className="text-sm text-[var(--color-text-muted)]">
              Anand Bodhi (Wellness), Ava Grey (Life Coach), and more from the IPAI personality roster.
            </p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="bg-[var(--color-navy-light)] border-y border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
              Roadmap
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold">
              What&apos;s Next
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            {roadmap.map((item, i) => (
              <div key={item.phase} className="flex gap-6 mb-8 last:mb-0">
                {/* Timeline */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3 h-3 rounded-full flex-shrink-0 ${
                      item.status === "current"
                        ? "bg-[var(--color-green-accent)] shadow-[0_0_12px_rgba(74,222,128,0.4)]"
                        : item.status === "next"
                        ? "bg-[var(--color-gold)] shadow-[0_0_12px_rgba(212,168,71,0.4)]"
                        : "bg-[var(--color-navy-lighter)] border border-[var(--color-border)]"
                    }`}
                  />
                  {i < roadmap.length - 1 && (
                    <div className="w-px flex-1 bg-[var(--color-border)] mt-2" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-gold)]">
                      {item.phase}
                    </span>
                    {item.status === "current" && (
                      <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-[var(--color-green-accent)]/20 text-[var(--color-green-accent)]">
                        Current
                      </span>
                    )}
                    {item.status === "next" && (
                      <span className="px-2 py-0.5 text-xs font-bold rounded-full bg-[var(--color-gold)]/20 text-[var(--color-gold)]">
                        Up Next
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-[var(--color-text-primary)] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="https://www.inceptionpoint.ai/wp-content/uploads/2025/08/cropped-Inception-Point-Logo-FINAL-RGB.png"
              alt="Inception Point AI"
              className="h-8 w-auto opacity-60"
            />
            <span className="text-sm text-[var(--color-text-muted)]">
              © 2026 Inception Point AI
            </span>
          </div>
          <div className="flex items-center gap-6 text-sm text-[var(--color-text-muted)]">
            <span>My AI House — Alexa Skill</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Powered by OAISYS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
