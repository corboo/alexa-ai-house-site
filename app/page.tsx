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
    description: "AWS Lambda backend calling OpenAI with Nigel's character bible — Nigel Thistledown live in development with seasonal greetings, garden tips, plant diagnosis, and free conversation.",
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
  { label: "OpenAI API", icon: "🧠" },
  { label: "Nigel's Character Bible", icon: "🎭" },
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
    icon: "🛒",
    title: "Native Product Recommendations",
    description: "Nigel naturally mentions tools, seeds, and products in conversation — Amazon Associates affiliate links appear as companion cards in the Alexa app. Native advertising that feels like genuine help.",
  },
  {
    icon: "💎",
    title: "Multiple Monetization Paths",
    description: "Amazon Associates affiliate revenue, Alexa ISP (in-skill purchases), podcast cross-promotion, and premium personality access — layered revenue model.",
  },
  {
    icon: "🌀",
    title: "Content Flywheel",
    description: "Podcast listeners → Alexa users → deeper engagement → more podcast listens. Each channel amplifies the others.",
  },
];

const revenueProjections = [
  {
    scenario: "Conservative",
    users: "1,000",
    sessionsPerWeek: "2",
    productCardRate: "40%",
    clickRate: "5%",
    conversionRate: "8%",
    avgOrder: "$35",
    commission: "8%",
    monthlyRevenue: "$90",
    annualRevenue: "$1,075",
  },
  {
    scenario: "Moderate",
    users: "10,000",
    sessionsPerWeek: "3",
    productCardRate: "40%",
    clickRate: "5%",
    conversionRate: "8%",
    avgOrder: "$35",
    commission: "8%",
    monthlyRevenue: "$1,344",
    annualRevenue: "$16,128",
  },
  {
    scenario: "Growth",
    users: "50,000",
    sessionsPerWeek: "3",
    productCardRate: "40%",
    clickRate: "5%",
    conversionRate: "8%",
    avgOrder: "$35",
    commission: "8%",
    monthlyRevenue: "$6,720",
    annualRevenue: "$80,640",
  },
  {
    scenario: "Scale (7 Personalities)",
    users: "200,000",
    sessionsPerWeek: "3",
    productCardRate: "40%",
    clickRate: "5%",
    conversionRate: "10%",
    avgOrder: "$40",
    commission: "7%",
    monthlyRevenue: "$48,384",
    annualRevenue: "$580,608",
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
              Nigel&apos;s Garden
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--color-text-secondary)]">
            <a href="#overview" className="hover:text-[var(--color-gold)] transition-colors">Overview</a>
            <a href="#vision" className="hover:text-[var(--color-gold)] transition-colors">Vision</a>
            <a href="#business-case" className="hover:text-[var(--color-gold)] transition-colors">Business Case</a>
            <a href="#associates" className="hover:text-[var(--color-gold)] transition-colors">Associates</a>
            <a href="#revenue" className="hover:text-[var(--color-gold)] transition-colors">Revenue</a>
            <a href="#market" className="hover:text-[var(--color-gold)] transition-colors">Market</a>
            <a href="#docs" className="hover:text-[var(--color-gold)] transition-colors">Docs</a>
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
            Nigel&apos;s Garden — Live on Alexa
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Talk to AI Personalities
            <br />
            <span className="text-[var(--color-gold)] gold-glow">Through Alexa</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10">
            Conversational AI companion powered by OpenAI — Nigel Thistledown, your personal gardener and nature guide.
            Ask for garden tips, diagnose plant problems, or just have a chat in Nigel&apos;s Potting Shed.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="glass-card rounded-xl px-6 py-3 text-[var(--color-text-primary)]">
              <span className="text-[var(--color-text-muted)] text-sm">Say:</span>{" "}
              <span className="font-semibold">&quot;Alexa, open Nigel&apos;s Garden&quot;</span>
            </div>
            <div className="glass-card rounded-xl px-6 py-3 text-[var(--color-text-secondary)] text-sm">
              Powered by{" "}
              <span className="text-[var(--color-gold)] font-semibold">OpenAI + AWS Lambda</span>
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
            What Is Nigel&apos;s Garden?
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
              Powered by OpenAI + Lambda
            </h4>
            <p className="text-[var(--color-text-secondary)] leading-relaxed">
              Nigel runs on <strong className="text-[var(--color-text-primary)]">AWS Lambda</strong> calling OpenAI directly with Nigel&apos;s character bible.
              Deep character modeling, contextual memory, and natural multi-turn conversation that feels genuinely human.
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

      {/* Business Justification */}
      <section id="business-case" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
            Business Justification
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            The Investment Case
          </h2>
        </div>

        {/* Revenue Streams */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="glass-card rounded-xl p-6">
            <div className="text-2xl mb-3">💳</div>
            <h4 className="text-base font-semibold mb-2 text-[var(--color-text-primary)]">
              Alexa In-Skill Purchases
            </h4>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Premium personality access, expanded conversation topics, and exclusive content packs — all purchasable directly within the Alexa skill via ISP.
            </p>
          </div>
          <div className="glass-card rounded-xl p-6">
            <div className="text-2xl mb-3">🎙️</div>
            <h4 className="text-base font-semibold mb-2 text-[var(--color-text-primary)]">
              Podcast Cross-Promotion
            </h4>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              IPAI&apos;s podcast network spans <strong className="text-[var(--color-text-primary)]">5,200+ shows</strong> and <strong className="text-[var(--color-text-primary)]">278K+ episodes</strong>.
              Alexa users flow into the podcast ecosystem and vice versa — a self-reinforcing content flywheel.
            </p>
          </div>
          <div className="glass-card rounded-xl p-6">
            <div className="text-2xl mb-3">🛒</div>
            <h4 className="text-base font-semibold mb-2 text-[var(--color-text-primary)]">
              Amazon Associates Affiliate
            </h4>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Nigel naturally recommends products in conversation — tools, seeds, fertilizers, books. <strong className="text-[var(--color-text-primary)]">Companion cards</strong> appear in the Alexa app with affiliate links.
              Native advertising that feels like genuine help. <strong className="text-[var(--color-text-primary)]">~8% commission</strong> on garden category.
            </p>
          </div>
          <div className="glass-card rounded-xl p-6">
            <div className="text-2xl mb-3">🤝</div>
            <h4 className="text-base font-semibold mb-2 text-[var(--color-text-primary)]">
              Amazon Relationship
            </h4>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              IPAI already has <strong className="text-[var(--color-text-primary)]">published Alexa skills</strong> — Apex NC News Daily and Morning Person Daily Meditations — demonstrating a proven track record on the platform.
            </p>
          </div>
        </div>

        {/* Cost Efficiency */}
        <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
          <h4 className="text-lg font-semibold text-[var(--color-gold)] mb-6 text-center">
            💡 Cost Efficiency — Built to Scale
          </h4>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center justify-between rounded-lg bg-[var(--color-navy)] px-4 py-3">
              <span className="text-sm text-[var(--color-text-secondary)]">AWS Lambda</span>
              <span className="text-sm font-medium text-[var(--color-green-accent)]">~$0.20 / 1M invocations</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-[var(--color-navy)] px-4 py-3">
              <span className="text-sm text-[var(--color-text-secondary)]">OpenAI gpt-4o-mini</span>
              <span className="text-sm font-medium text-[var(--color-green-accent)]">Pennies per conversation</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-[var(--color-navy)] px-4 py-3">
              <span className="text-sm text-[var(--color-text-secondary)]">Infrastructure</span>
              <span className="text-sm font-medium text-[var(--color-green-accent)]">Serverless — zero idle cost</span>
            </div>
            <div className="flex items-center justify-between rounded-lg bg-[var(--color-navy)] px-4 py-3">
              <span className="text-sm text-[var(--color-text-secondary)]">Marginal cost per user</span>
              <span className="text-sm font-medium text-[var(--color-green-accent)]">Near zero at scale</span>
            </div>
          </div>
        </div>
      </section>

      {/* Amazon Associates Integration */}
      <section id="associates" className="bg-[var(--color-navy-light)] border-y border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
              Monetization Engine
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold">
              Amazon Associates Integration
            </h2>
            <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto">
              Native product recommendations that feel like genuine gardening advice — because they are.
              Nigel mentions products naturally; affiliate cards appear in the Alexa app.
            </p>
          </div>

          {/* How It Works Flow */}
          <div className="glass-card gradient-border rounded-2xl p-8 md:p-10 mb-10">
            <h4 className="text-lg font-semibold text-[var(--color-gold)] mb-6 text-center">
              How It Works
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-2">
              {[
                { icon: "🗣️", label: "User asks gardening question" },
                { icon: "🌿", label: "Nigel responds naturally" },
                { icon: "🔍", label: "Product matcher scans response" },
                { icon: "📱", label: "Card pushed to Alexa app" },
                { icon: "🛒", label: "User taps → Amazon purchase" },
                { icon: "💰", label: "~8% commission earned" },
              ].map((step, i, arr) => (
                <div key={step.label} className="flex items-center gap-2 md:gap-3">
                  <div className="flex flex-col items-center gap-2 min-w-[100px]">
                    <div className="w-14 h-14 rounded-xl bg-[var(--color-navy)] border border-[var(--color-border)] flex items-center justify-center text-xl">
                      {step.icon}
                    </div>
                    <span className="text-xs font-medium text-[var(--color-text-secondary)] text-center leading-tight">
                      {step.label}
                    </span>
                  </div>
                  {i < arr.length - 1 && (
                    <span className="text-[var(--color-gold)] text-lg font-bold hidden md:block">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Example Conversation */}
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="glass-card rounded-xl p-6">
              <h4 className="text-sm font-semibold text-[var(--color-gold)] mb-4">💬 Example Conversation</h4>
              <div className="space-y-4 text-sm">
                <div className="flex gap-3">
                  <span className="text-[var(--color-text-muted)] flex-shrink-0">User:</span>
                  <span className="text-[var(--color-text-secondary)] italic">&quot;My tomatoes are looking yellow, what should I do?&quot;</span>
                </div>
                <div className="flex gap-3">
                  <span className="text-[var(--color-green-accent)] flex-shrink-0">Nigel:</span>
                  <span className="text-[var(--color-text-primary)]">&quot;Ah, yellowing tomatoes — that can often mean they&apos;re lacking in nutrients, particularly nitrogen. A good balanced <strong>tomato feed</strong> can help perk them right up...&quot;</span>
                </div>
                <div className="rounded-lg bg-[var(--color-navy)] p-3 border border-[var(--color-border)]">
                  <p className="text-xs text-[var(--color-text-muted)] mb-1">📱 Card appears in Alexa App:</p>
                  <p className="text-sm font-semibold text-[var(--color-gold)]">Nigel Recommends: Espoma Organic Tomato-tone</p>
                  <p className="text-xs text-[var(--color-text-secondary)]">A lovely balanced organic feed, perfect for tomatoes and fruiting vegetables.</p>
                  <p className="text-xs text-blue-400 mt-1">amazon.com/dp/B000CSXFG4?tag=...</p>
                </div>
              </div>
            </div>
            <div className="glass-card rounded-xl p-6">
              <h4 className="text-sm font-semibold text-[var(--color-gold)] mb-4">📦 Curated Product Catalog</h4>
              <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                30+ hand-picked products across 9 categories — each with keyword matching for natural conversation triggers.
              </p>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { emoji: "🌱", label: "Fertilizers", count: "4" },
                  { emoji: "🔧", label: "Tools", count: "6" },
                  { emoji: "🪴", label: "Soil", count: "4" },
                  { emoji: "🌻", label: "Seeds", count: "3" },
                  { emoji: "🐛", label: "Pest Control", count: "3" },
                  { emoji: "🏗️", label: "Structures", count: "3" },
                  { emoji: "📚", label: "Books", count: "3" },
                  { emoji: "♻️", label: "Composting", count: "2" },
                  { emoji: "💧", label: "Watering", count: "3" },
                ].map((cat) => (
                  <div key={cat.label} className="rounded-lg bg-[var(--color-navy)] p-2 text-center">
                    <div className="text-lg">{cat.emoji}</div>
                    <p className="text-xs text-[var(--color-text-secondary)]">{cat.label}</p>
                    <p className="text-xs text-[var(--color-text-muted)]">{cat.count} items</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why This Works */}
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto">
            <h4 className="text-lg font-semibold text-[var(--color-gold)] mb-4 text-center">
              🎯 Why This Works
            </h4>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start gap-3">
                <span className="text-[var(--color-green-accent)] mt-0.5">✓</span>
                <span className="text-[var(--color-text-secondary)]"><strong className="text-[var(--color-text-primary)]">Not intrusive</strong> — Nigel never says &quot;buy this&quot;; he mentions products the way a real gardener would</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--color-green-accent)] mt-0.5">✓</span>
                <span className="text-[var(--color-text-secondary)]"><strong className="text-[var(--color-text-primary)]">High intent</strong> — Users asking about plant problems are ready to buy solutions</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--color-green-accent)] mt-0.5">✓</span>
                <span className="text-[var(--color-text-secondary)]"><strong className="text-[var(--color-text-primary)]">Trust-based</strong> — Recommendations from a trusted personality convert better than generic ads</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[var(--color-green-accent)] mt-0.5">✓</span>
                <span className="text-[var(--color-text-secondary)]"><strong className="text-[var(--color-text-primary)]">Scalable across personalities</strong> — Claire recommends kitchen gear, VV recommends fashion, Olly recommends fitness equipment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Projections */}
      <section id="revenue" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
            Revenue Projections
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            Conservative Affiliate Revenue Model
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto">
            Amazon Associates revenue from natural product recommendations — assumes conservative click-through and conversion rates.
            Affiliate revenue is additive to ISP, subscription, and partnership revenue streams.
          </p>
        </div>

        {/* Assumptions */}
        <div className="glass-card rounded-xl p-6 mb-8 max-w-3xl mx-auto">
          <h4 className="text-sm font-semibold text-[var(--color-gold)] mb-3">📊 Model Assumptions</h4>
          <div className="grid sm:grid-cols-2 gap-3 text-sm">
            <div className="flex justify-between rounded-lg bg-[var(--color-navy)] px-4 py-2.5">
              <span className="text-[var(--color-text-secondary)]">Product card shown rate</span>
              <span className="text-[var(--color-text-primary)] font-medium">~40% of sessions</span>
            </div>
            <div className="flex justify-between rounded-lg bg-[var(--color-navy)] px-4 py-2.5">
              <span className="text-[var(--color-text-secondary)]">Card click-through rate</span>
              <span className="text-[var(--color-text-primary)] font-medium">5% (conservative)</span>
            </div>
            <div className="flex justify-between rounded-lg bg-[var(--color-navy)] px-4 py-2.5">
              <span className="text-[var(--color-text-secondary)]">Purchase conversion rate</span>
              <span className="text-[var(--color-text-primary)] font-medium">8-10%</span>
            </div>
            <div className="flex justify-between rounded-lg bg-[var(--color-navy)] px-4 py-2.5">
              <span className="text-[var(--color-text-secondary)]">Avg order value (garden)</span>
              <span className="text-[var(--color-text-primary)] font-medium">$35-40</span>
            </div>
            <div className="flex justify-between rounded-lg bg-[var(--color-navy)] px-4 py-2.5">
              <span className="text-[var(--color-text-secondary)]">Commission rate (garden)</span>
              <span className="text-[var(--color-text-primary)] font-medium">~8%</span>
            </div>
            <div className="flex justify-between rounded-lg bg-[var(--color-navy)] px-4 py-2.5">
              <span className="text-[var(--color-text-secondary)]">Sessions per user/week</span>
              <span className="text-[var(--color-text-primary)] font-medium">2-3</span>
            </div>
          </div>
        </div>

        {/* Projection Table */}
        <div className="glass-card gradient-border rounded-2xl p-6 md:p-8 mb-10 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left py-3 px-3 text-[var(--color-text-muted)] font-semibold">Scenario</th>
                <th className="text-right py-3 px-3 text-[var(--color-text-muted)] font-semibold">Active Users</th>
                <th className="text-right py-3 px-3 text-[var(--color-text-muted)] font-semibold">Sessions/Wk</th>
                <th className="text-right py-3 px-3 text-[var(--color-text-muted)] font-semibold">Click Rate</th>
                <th className="text-right py-3 px-3 text-[var(--color-text-muted)] font-semibold">Conversion</th>
                <th className="text-right py-3 px-3 text-[var(--color-text-muted)] font-semibold">Monthly Rev</th>
                <th className="text-right py-3 px-3 text-[var(--color-text-muted)] font-semibold">Annual Rev</th>
              </tr>
            </thead>
            <tbody>
              {revenueProjections.map((row) => (
                <tr key={row.scenario} className="border-b border-[var(--color-border)]/50">
                  <td className="py-3 px-3 font-semibold text-[var(--color-gold)]">{row.scenario}</td>
                  <td className="py-3 px-3 text-right text-[var(--color-text-primary)]">{row.users}</td>
                  <td className="py-3 px-3 text-right text-[var(--color-text-secondary)]">{row.sessionsPerWeek}</td>
                  <td className="py-3 px-3 text-right text-[var(--color-text-secondary)]">{row.clickRate}</td>
                  <td className="py-3 px-3 text-right text-[var(--color-text-secondary)]">{row.conversionRate}</td>
                  <td className="py-3 px-3 text-right text-[var(--color-text-primary)] font-medium">{row.monthlyRevenue}</td>
                  <td className="py-3 px-3 text-right text-[var(--color-green-accent)] font-bold">{row.annualRevenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Revenue Note */}
        <div className="glass-card rounded-xl p-6 max-w-3xl mx-auto text-center">
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            <strong className="text-[var(--color-text-primary)]">Note:</strong> These projections cover <strong className="text-[var(--color-gold)]">Amazon Associates affiliate revenue only</strong>.
            Total revenue potential is significantly higher when combined with Alexa In-Skill Purchases, premium subscriptions,
            podcast cross-promotion, and brand partnerships. Associates revenue is the <strong className="text-[var(--color-text-primary)]">passive base layer</strong> — it grows automatically as user count increases with zero additional effort.
          </p>
        </div>
      </section>

      {/* Market Opportunity */}
      <section id="market" className="bg-[var(--color-navy-light)] border-y border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
              Market Opportunity
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold">
              A Massive, Untapped Market
            </h2>
          </div>

          {/* Big Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-gold)] gold-glow mb-2">100M+</div>
              <p className="text-sm text-[var(--color-text-secondary)]">Alexa-enabled devices worldwide</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-gold)] gold-glow mb-2">$50B+</div>
              <p className="text-sm text-[var(--color-text-secondary)]">Voice AI market projected by 2028</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-gold)] gold-glow mb-2">35%+</div>
              <p className="text-sm text-[var(--color-text-secondary)]">US households with smart speakers</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-gold)] gold-glow mb-2">$48B</div>
              <p className="text-sm text-[var(--color-text-secondary)]">US gardening market size</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-gold)] gold-glow mb-2">55%</div>
              <p className="text-sm text-[var(--color-text-secondary)]">US households that garden</p>
            </div>
            <div className="glass-card rounded-xl p-6 text-center">
              <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-gold)] gold-glow mb-2">40%+</div>
              <p className="text-sm text-[var(--color-text-secondary)]">AI companion app YoY growth</p>
            </div>
          </div>

          {/* Competitive Gap */}
          <div className="glass-card gradient-border rounded-2xl p-8 md:p-10 max-w-4xl mx-auto">
            <h4 className="text-lg font-semibold text-[var(--color-gold)] mb-4 text-center">
              🎯 The Gap: No AI Gardening Personality on Alexa
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3 uppercase tracking-wider">
                  What Exists Today
                </h5>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✕</span>
                    Generic gardening skills with canned responses
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✕</span>
                    No persistent AI personality or character depth
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✕</span>
                    No connection to podcast content libraries
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✕</span>
                    No multi-turn conversational ability
                  </li>
                </ul>
              </div>
              <div>
                <h5 className="text-sm font-semibold text-[var(--color-text-primary)] mb-3 uppercase tracking-wider">
                  What IPAI Brings
                </h5>
                <ul className="space-y-2 text-sm text-[var(--color-text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-green-accent)] mt-0.5">✓</span>
                    Deep AI personality with character bible &amp; voice
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-green-accent)] mt-0.5">✓</span>
                    Persistent, contextual multi-turn conversation
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-green-accent)] mt-0.5">✓</span>
                    5,200+ show podcast content library behind it
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-green-accent)] mt-0.5">✓</span>
                    Expandable to 7+ personality verticals
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section id="docs" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
            Documentation
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical Reference
          </h2>
        </div>

        {/* Skill Architecture Diagram */}
        <div className="glass-card gradient-border rounded-2xl p-8 md:p-10 mb-10">
          <h4 className="text-lg font-semibold text-[var(--color-gold)] mb-6 text-center">
            Skill Architecture — End to End
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-2">
            {[
              { icon: "🗣️", label: "User Speaks" },
              { icon: "🔊", label: "Alexa NLU" },
              { icon: "⚡", label: "Lambda (us-east-1)" },
              { icon: "🧠", label: "OpenAI (gpt-4o-mini)" },
              { icon: "🎭", label: "Nigel Character Response" },
              { icon: "📢", label: "Alexa TTS" },
              { icon: "👂", label: "User Hears Nigel" },
            ].map((step, i, arr) => (
              <div key={step.label} className="flex items-center gap-2 md:gap-3">
                <div className="flex flex-col items-center gap-2 min-w-[90px]">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-navy-lighter)] border border-[var(--color-border)] flex items-center justify-center text-xl">
                    {step.icon}
                  </div>
                  <span className="text-xs font-medium text-[var(--color-text-secondary)] text-center leading-tight">
                    {step.label}
                  </span>
                </div>
                {i < arr.length - 1 && (
                  <span className="text-[var(--color-gold)] text-lg font-bold hidden md:block">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Lambda & Skill Details */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="glass-card rounded-xl p-6">
            <h4 className="text-sm font-semibold text-[var(--color-gold)] mb-4">⚡ Lambda Configuration</h4>
            <div className="space-y-2">
              {[
                { label: "Runtime", value: "Node.js 20.x" },
                { label: "Architecture", value: "arm64 (Graviton)" },
                { label: "Memory", value: "256 MB RAM" },
                { label: "Timeout", value: "30 seconds" },
                { label: "Cost", value: "~$0.20 / 1M requests" },
                { label: "Region", value: "us-east-1" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between rounded-lg bg-[var(--color-navy)] px-4 py-2.5">
                  <span className="text-sm text-[var(--color-text-secondary)]">{item.label}</span>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card rounded-xl p-6">
            <h4 className="text-sm font-semibold text-[var(--color-gold)] mb-4">🔑 Skill Identifiers</h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-[var(--color-text-muted)] mb-1">Skill ID</p>
                <p className="text-sm font-mono text-[var(--color-text-primary)] bg-[var(--color-navy)] rounded-lg px-3 py-2 break-all">
                  amzn1.ask.skill.7a8b4e21-773d-475e-9d8d-7b202c30c11d
                </p>
              </div>
              <div>
                <p className="text-xs text-[var(--color-text-muted)] mb-1">Lambda ARN</p>
                <p className="text-sm font-mono text-[var(--color-text-primary)] bg-[var(--color-navy)] rounded-lg px-3 py-2 break-all">
                  arn:aws:lambda:us-east-1:673066883217:function:nigels-garden-alexa
                </p>
              </div>
              <div>
                <p className="text-xs text-[var(--color-text-muted)] mb-1">Invocation Name</p>
                <p className="text-sm font-mono text-[var(--color-text-primary)] bg-[var(--color-navy)] rounded-lg px-3 py-2">
                  nigels garden
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Intents Table */}
        <div className="glass-card rounded-2xl p-6 md:p-8 mb-10 overflow-x-auto">
          <h4 className="text-sm font-semibold text-[var(--color-gold)] mb-4">🎯 Intent Model — 6 Intents</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left py-3 px-3 text-[var(--color-text-muted)] font-semibold">Intent</th>
                <th className="text-left py-3 px-3 text-[var(--color-text-muted)] font-semibold">Description</th>
                <th className="text-left py-3 px-3 text-[var(--color-text-muted)] font-semibold">Sample Utterance</th>
              </tr>
            </thead>
            <tbody>
              {[
                { intent: "LaunchRequest", desc: "Skill opens — Nigel greets with seasonal, time-aware hello", sample: "\"Alexa, open Nigel's Garden\"" },
                { intent: "TalkToNigelIntent", desc: "Free-form conversation — any topic, Nigel stays in character", sample: "\"Tell me about composting\"" },
                { intent: "GardenTipIntent", desc: "Quick, actionable garden tip for today", sample: "\"Give me a garden tip\"" },
                { intent: "PlantHelpIntent", desc: "Plant diagnosis — describe symptoms, Nigel troubleshoots", sample: "\"My tomato leaves are yellow\"" },
                { intent: "SeasonalIntent", desc: "What to plant right now based on season", sample: "\"What should I plant this month\"" },
                { intent: "AMAZON.HelpIntent", desc: "Explains what Nigel can do and how to interact", sample: "\"Help\"" },
              ].map((row) => (
                <tr key={row.intent} className="border-b border-[var(--color-border)]/50">
                  <td className="py-3 px-3 font-mono text-[var(--color-gold)]">{row.intent}</td>
                  <td className="py-3 px-3 text-[var(--color-text-secondary)]">{row.desc}</td>
                  <td className="py-3 px-3 text-[var(--color-text-primary)] italic">{row.sample}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Session Memory + Testing + Deployment */}
        <div className="grid md:grid-cols-3 gap-6">
          <div className="glass-card rounded-xl p-6">
            <h4 className="text-sm font-semibold text-[var(--color-gold)] mb-3">🧠 Session Memory</h4>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Multi-turn conversation is powered by <strong className="text-[var(--color-text-primary)]">Alexa session attributes</strong>.
              Each conversation stores up to <strong className="text-[var(--color-text-primary)]">20 messages</strong> in the session, passed to OpenAI as conversation history.
              This gives Nigel context within a session — he remembers what you just said and builds on it naturally.
            </p>
          </div>
          <div className="glass-card rounded-xl p-6">
            <h4 className="text-sm font-semibold text-[var(--color-gold)] mb-3">🧪 Testing</h4>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
              <strong className="text-[var(--color-text-primary)]">Alexa Developer Console:</strong> Use the &quot;Test&quot; tab to type or speak utterances directly — best for rapid iteration.
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              <strong className="text-[var(--color-text-primary)]">Physical Device:</strong> Enable the skill on an Echo device linked to your developer account. Say &quot;Alexa, open Nigel&apos;s Garden&quot; for the real experience.
            </p>
          </div>
          <div className="glass-card rounded-xl p-6">
            <h4 className="text-sm font-semibold text-[var(--color-gold)] mb-3">🚀 Deployment</h4>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
              Lambda updates are deployed with a single command:
            </p>
            <div className="bg-[var(--color-navy)] rounded-lg px-3 py-2 font-mono text-xs text-[var(--color-text-primary)] overflow-x-auto">
              aws lambda update-function-code \<br />
              &nbsp;&nbsp;--function-name nigels-garden-alexa \<br />
              &nbsp;&nbsp;--zip-file fileb://lambda.zip
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mt-3">
              Changes take effect immediately — no Alexa skill redeployment needed. The skill endpoint points to the Lambda ARN.
            </p>
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
            <h4 className="text-sm font-semibold text-[var(--color-gold)] mb-2">Lambda + OpenAI Backend</h4>
            <p className="text-sm text-[var(--color-text-secondary)]">
              AWS Lambda calls OpenAI directly with Nigel&apos;s character bible system prompt — lightweight, scalable, and purpose-built for Nigel&apos;s Potting Shed.
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
                { label: "Invocation", value: "\"Alexa, open nigels garden\"" },
                { label: "Backend", value: "AWS Lambda → OpenAI" },
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
            <span>Nigel&apos;s Garden — Alexa Skill</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Powered by OpenAI + AWS Lambda</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
