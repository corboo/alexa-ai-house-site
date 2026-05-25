/* eslint-disable @next/next/no-img-element */

const channels = [
  {
    id: "podcasting",
    emoji: "🎙️",
    name: "Podcasting",
    platform: "Megaphone FM",
    status: "LIVE" as const,
    stats: "4 Shows · 31 Episodes · ~100 min",
    description: "The Morning Garden (Mon/Wed/Fri), Nigel's Potting Shed (Tue/Thu), The Seasonal Gardener (Weekly Sat), The Garden Path (Weekly Sun)",
    detail: "Migrated from Spreaker. Distributed to Apple Podcasts, Spotify, and all major platforms.",
    link: null,
    linkLabel: null,
  },
  {
    id: "instagram",
    emoji: "📸",
    name: "Instagram",
    platform: "@nigelthistledown",
    status: "LIVE" as const,
    stats: "~4,400 Followers · 45+ Posts",
    description: "Visual gardening content, tips, and behind-the-scenes from Nigel's garden. API integration for automated publishing.",
    detail: null,
    link: "https://www.instagram.com/nigelthistledown/",
    linkLabel: "Visit Instagram",
  },
  {
    id: "youtube",
    emoji: "📺",
    name: "YouTube",
    platform: "DIY HOME & GARDEN",
    status: "LIVE" as const,
    stats: "Shorts + Long-form",
    description: "Gardening tutorials, seasonal guides, and quick tips in both short-form and long-form video content.",
    detail: null,
    link: "https://www.youtube.com/channel/UCcXcEDIls_yg_B48rtXGmDg",
    linkLabel: "Visit YouTube",
  },
  {
    id: "alexa",
    emoji: "🔊",
    name: "Alexa Skill",
    platform: "Nigel's Garden",
    status: "DEVELOPMENT" as const,
    stats: "Conversational AI · Associates Cards",
    description: "\"Alexa, open Nigel's Garden\" — garden tips, plant diagnosis, and natural product recommendations via Amazon Associates.",
    detail: "Skill ID: amzn1.ask.skill.cee30b52-395b-48fe-baf5-c1998e0c9d77",
    link: "https://alexa-ai-house-site.vercel.app",
    linkLabel: "View Project",
  },
  {
    id: "mcp",
    emoji: "🤖",
    name: "MCP Server",
    platform: "Anthropic MCP",
    status: "BETA" as const,
    stats: "12 Tools · Submitted to Directory",
    description: "Garden planning, voice interaction, seasonal advice, and more — accessible to any MCP-compatible AI client.",
    detail: null,
    link: "https://mcp.inceptionpoint.ai",
    linkLabel: "Landing Page",
  },
  {
    id: "voice",
    emoji: "🗣️",
    name: "Real-Time Voice",
    platform: "Hume AI",
    status: "BETA" as const,
    stats: "Live Conversational AI",
    description: "Talk to Nigel in real time with expressive, character-specific voice powered by a custom Hume voice model.",
    detail: "Custom Voice ID: 3bfd1fc0-a7d2-49ed-8325-4a28891f55ad",
    link: "https://nigel.inceptionpoint.ai",
    linkLabel: "Talk to Nigel",
  },
  {
    id: "tiktok",
    emoji: "🎵",
    name: "TikTok",
    platform: "Not yet created",
    status: "NOT_STARTED" as const,
    stats: "Opportunity",
    description: "Garden shorts, quick tips, seasonal content, and viral gardening moments. Huge potential for organic reach.",
    detail: null,
    link: null,
    linkLabel: null,
  },
  {
    id: "blog",
    emoji: "📝",
    name: "Blog",
    platform: "Not yet created",
    status: "NOT_STARTED" as const,
    stats: "Opportunity",
    description: "SEO-driven long-form garden content, seasonal guides, recipe tie-ins with Claire Delish, and evergreen articles.",
    detail: null,
    link: null,
    linkLabel: null,
  },
];

const connections = [
  {
    from: "🎙️ Podcast",
    to: "📺 YouTube",
    description: "Podcast episodes clipped into YouTube Shorts and long-form video content",
    icon: "✂️",
  },
  {
    from: "📸 Instagram",
    to: "📝 Blog",
    description: "Visual content drives traffic to long-form blog posts and SEO rankings",
    icon: "📈",
  },
  {
    from: "🔊 Alexa",
    to: "🛒 Associates",
    description: "Natural product mentions generate affiliate revenue via Amazon Associates cards",
    icon: "💰",
  },
  {
    from: "🤖 MCP",
    to: "👨‍💻 Developers",
    description: "MCP server enables developer adoption and integration into AI toolchains",
    icon: "🔧",
  },
  {
    from: "🗣️ Voice",
    to: "🎙️ Podcast",
    description: "Voice interactions inform podcast topics and create engaging audio content",
    icon: "🔄",
  },
  {
    from: "📺 YouTube",
    to: "🎵 TikTok",
    description: "YouTube Shorts repurposed as TikTok content for maximum cross-platform reach",
    icon: "🔁",
  },
];

const seoPoints = [
  {
    icon: "🔗",
    title: "Cross-Linking Signals",
    description: "Multi-platform presence creates a web of cross-links — YouTube embeds on blog posts, podcast show notes linking to Instagram, MCP directory listings pointing back to landing pages. Each link reinforces Nigel's authority in Google's eyes.",
  },
  {
    icon: "🏛️",
    title: "Entity Recognition & Knowledge Panel",
    description: "Google rewards entities with consistent, verified presence across platforms. As \"Nigel Thistledown\" appears on YouTube, Apple Podcasts, Instagram, MCP directories, and more — Google begins to recognize him as a real entity. Knowledge Panel potential grows with every new platform.",
  },
  {
    icon: "🎯",
    title: "Multi-Intent Search Coverage",
    description: "Each channel ranks for different search intents — podcasts for \"garden tips audio\", YouTube for \"how to prune roses\", Instagram for visual inspiration, blog for long-form \"when to plant tomatoes in zone 7\". Together, they own the full search landscape.",
  },
  {
    icon: "🗣️",
    title: "Voice Search Capture",
    description: "Alexa captures the growing voice-first search market. When someone asks \"Alexa, how do I fix yellow tomato leaves?\" — Nigel answers. Voice search is projected to account for 50% of all searches, and Nigel is already there.",
  },
  {
    icon: "🤖",
    title: "AI Search — The Next Paradigm",
    description: "MCP presence puts Nigel inside AI assistants — Claude, ChatGPT tool use, and other LLM-powered interfaces. When AI is the search engine, Nigel is already a tool in the toolbox. This is SEO for the post-Google era.",
  },
  {
    icon: "👤",
    title: "Authority Entity Building",
    description: "All channels reinforce \"Nigel Thistledown\" as a recognizable gardening authority. Consistent name, consistent expertise, consistent voice across every platform. Google's E-E-A-T (Experience, Expertise, Authority, Trust) framework rewards exactly this pattern.",
  },
];

const nextChannels = [
  {
    emoji: "🐦",
    name: "Twitter / X",
    rationale: "Garden Twitter is active and engaged — quick tips, seasonal threads, community engagement. Links back to podcast episodes and blog posts. Great for real-time conversation and driving traffic to long-form content.",
    audience: "Active gardeners, plant enthusiasts, garden media",
    effort: "Low",
    impact: "Medium",
  },
  {
    emoji: "🎵",
    name: "TikTok",
    rationale: "Massive gardening community — #GardenTok has billions of views. Short-form video repurposed from YouTube Shorts. Huge organic discovery potential with the algorithm favoring new creators in niche topics.",
    audience: "Younger gardeners, Gen Z/Millennial plant parents",
    effort: "Low (repurposed)",
    impact: "High",
  },
  {
    emoji: "📌",
    name: "Pinterest",
    rationale: "Gardening is one of Pinterest's top categories. Visual pins drive evergreen traffic to blog and YouTube for months or years. High purchase intent audience makes it ideal for Amazon Associates conversions.",
    audience: "Home gardeners, DIY landscapers, seasonal planners",
    effort: "Medium",
    impact: "High",
  },
  {
    emoji: "🌐",
    name: "Blog / Website",
    rationale: "Dedicated nigelthistledown.com or blog section. The SEO foundation for all other channels — long-form articles, garden plans, seasonal guides, and structured data. Every other channel links back here.",
    audience: "Search traffic, long-form readers, SEO",
    effort: "High",
    impact: "Very High",
  },
  {
    emoji: "📧",
    name: "Newsletter / Email",
    rationale: "Direct audience ownership — not dependent on algorithm changes. Weekly garden tips, seasonal reminders, and curated product recommendations. The only channel where you own the relationship entirely.",
    audience: "Loyal followers, repeat visitors, high-value subscribers",
    effort: "Medium",
    impact: "High",
  },
  {
    emoji: "👥",
    name: "Facebook Group",
    rationale: "Community building: \"Nigel's Garden Community\" — Q&A, photo sharing, peer support. Groups drive daily engagement and create a self-sustaining community that generates content organically. Nigel can participate as a character.",
    audience: "Community-oriented gardeners, older demographics",
    effort: "Medium",
    impact: "Medium",
  },
];

const statusConfig = {
  LIVE: { label: "LIVE", color: "bg-[var(--color-green-accent)]", textColor: "text-[var(--color-navy)]", dotColor: "bg-[var(--color-green-accent)]", glowColor: "shadow-[0_0_12px_rgba(74,222,128,0.4)]" },
  BETA: { label: "BETA", color: "bg-[var(--color-gold)]", textColor: "text-[var(--color-navy)]", dotColor: "bg-[var(--color-gold)]", glowColor: "shadow-[0_0_12px_rgba(212,168,71,0.4)]" },
  DEVELOPMENT: { label: "DEV", color: "bg-amber-500", textColor: "text-[var(--color-navy)]", dotColor: "bg-amber-500", glowColor: "shadow-[0_0_12px_rgba(245,158,11,0.4)]" },
  NOT_STARTED: { label: "PLANNED", color: "bg-[var(--color-navy-lighter)]", textColor: "text-[var(--color-text-muted)]", dotColor: "bg-[var(--color-navy-lighter)]", glowColor: "" },
} as const;

// Positions for each channel node around the center hub (desktop)
const nodePositions = [
  { top: "2%",  left: "50%",  translate: "-translate-x-1/2" },           // Podcasting (top center)
  { top: "12%", left: "82%",  translate: "" },                            // Instagram (top right)
  { top: "42%", left: "88%",  translate: "" },                            // YouTube (right)
  { top: "72%", left: "78%",  translate: "" },                            // Alexa (bottom right)
  { top: "85%", left: "50%",  translate: "-translate-x-1/2" },           // MCP (bottom center)
  { top: "72%", left: "5%",   translate: "" },                            // Voice (bottom left)
  { top: "42%", left: "-2%",  translate: "" },                            // TikTok (left)
  { top: "12%", left: "5%",   translate: "" },                            // Blog (top left)
];

export default function NigelMap() {
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
              Nigel&apos;s Map
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-[var(--color-text-secondary)]">
            <a href="/" className="hover:text-[var(--color-gold)] transition-colors">← Home</a>
            <a href="#constellation" className="hover:text-[var(--color-gold)] transition-colors">Constellation</a>
            <a href="#channels" className="hover:text-[var(--color-gold)] transition-colors">Channels</a>
            <a href="#connections" className="hover:text-[var(--color-gold)] transition-colors">Connections</a>
            <a href="#seo" className="hover:text-[var(--color-gold)] transition-colors">SEO</a>
            <a href="#next" className="hover:text-[var(--color-gold)] transition-colors">Next Channels</a>
            <a href="#stats" className="hover:text-[var(--color-gold)] transition-colors">Stats</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-dots">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-navy)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 px-4 py-1.5 text-sm text-[var(--color-gold)] mb-8">
            <span className="inline-block w-2 h-2 rounded-full bg-[var(--color-green-accent)] animate-pulse" />
            8 Channels · 3 Live · 3 Beta · 2 Planned
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Nigel&apos;s Personality
            <br />
            <span className="text-[var(--color-gold)] gold-glow">Distribution Map</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-2xl mx-auto mb-10">
            Every channel, every platform, every connection point — see how Nigel Thistledown reaches audiences across the digital landscape.
          </p>
        </div>
      </section>

      {/* Constellation / Network Map — Desktop Visual */}
      <section id="constellation" className="mx-auto max-w-6xl px-6 py-10 md:py-20">
        <div className="text-center mb-12">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
            Network Map
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            The Constellation
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-4 max-w-xl mx-auto">
            Nigel sits at the center of a growing multi-platform presence. Each node is a distribution channel radiating outward.
          </p>
        </div>

        {/* Constellation Visual — Hidden on mobile, shown md+ */}
        <div className="hidden md:block relative mx-auto" style={{ width: "100%", maxWidth: "900px", height: "700px" }}>
          {/* Connection lines from center to each node */}
          {nodePositions.map((pos, i) => {
            // Calculate approximate center points for CSS lines
            const angles = [270, 315, 0, 45, 90, 135, 180, 225]; // degrees
            const angle = angles[i];
            const lineLength = 220;
            return (
              <div
                key={`line-${i}`}
                className="absolute"
                style={{
                  top: "50%",
                  left: "50%",
                  width: `${lineLength}px`,
                  height: "1px",
                  transformOrigin: "0 0",
                  transform: `rotate(${angle}deg)`,
                  background: `linear-gradient(90deg, var(--color-gold), transparent)`,
                  opacity: channels[i].status === "NOT_STARTED" ? 0.15 : 0.4,
                }}
              />
            );
          })}

          {/* Outer glow ring */}
          <div
            className="absolute rounded-full"
            style={{
              top: "50%",
              left: "50%",
              width: "180px",
              height: "180px",
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(212,168,71,0.12) 0%, transparent 70%)",
            }}
          />

          {/* Center Hub — Nigel Avatar */}
          <div
            className="absolute z-10"
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          >
            <div className="relative">
              <div className="w-28 h-28 rounded-full border-2 border-[var(--color-gold)] p-1 bg-[var(--color-navy)]" style={{ boxShadow: "0 0 30px rgba(212,168,71,0.3), 0 0 60px rgba(212,168,71,0.1)" }}>
                <img
                  src="https://www.inceptionpoint.ai/wp-content/uploads/2025/08/Nigel_Thistledown_gardening_Blk_1_250.png"
                  alt="Nigel Thistledown"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-[var(--color-gold)]">
                NIGEL THISTLEDOWN
              </div>
            </div>
          </div>

          {/* Channel Nodes */}
          {channels.map((channel, i) => {
            const pos = nodePositions[i];
            const status = statusConfig[channel.status];
            return (
              <div
                key={channel.id}
                className="absolute z-10"
                style={{
                  top: pos.top,
                  left: pos.left,
                  ...(pos.translate.includes("-translate-x-1/2") ? { transform: "translateX(-50%)" } : {}),
                }}
              >
                <div className="glass-card rounded-xl p-3 w-[160px] hover:border-[var(--color-gold)]/40 transition-all duration-300 cursor-default group">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{channel.emoji}</span>
                    <span className="text-xs font-bold text-[var(--color-text-primary)] truncate">{channel.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dotColor} ${status.glowColor}`} />
                    <span className={`text-[10px] font-bold ${channel.status === "NOT_STARTED" ? "text-[var(--color-text-muted)]" : channel.status === "LIVE" ? "text-[var(--color-green-accent)]" : "text-[var(--color-gold)]"}`}>
                      {status.label}
                    </span>
                  </div>
                  <p className="text-[10px] text-[var(--color-text-muted)] leading-tight truncate">{channel.platform}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile version — simple list with visual connections */}
        <div className="md:hidden">
          <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full border-2 border-[var(--color-gold)] p-1 bg-[var(--color-navy)]" style={{ boxShadow: "0 0 30px rgba(212,168,71,0.3)" }}>
              <img
                src="https://www.inceptionpoint.ai/wp-content/uploads/2025/08/Nigel_Thistledown_gardening_Blk_1_250.png"
                alt="Nigel Thistledown"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <p className="text-xs font-semibold text-[var(--color-gold)] mt-3">NIGEL THISTLEDOWN</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {channels.map((channel) => {
              const status = statusConfig[channel.status];
              return (
                <div key={channel.id} className="glass-card rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg">{channel.emoji}</span>
                    <span className="text-xs font-bold text-[var(--color-text-primary)]">{channel.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${status.dotColor}`} />
                    <span className={`text-[10px] font-bold ${channel.status === "NOT_STARTED" ? "text-[var(--color-text-muted)]" : channel.status === "LIVE" ? "text-[var(--color-green-accent)]" : "text-[var(--color-gold)]"}`}>
                      {status.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Channel Detail Cards */}
      <section id="channels" className="bg-[var(--color-navy-light)] border-y border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
              Channel Details
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold">
              Every Distribution Point
            </h2>
            <p className="text-[var(--color-text-secondary)] mt-4 max-w-xl mx-auto">
              Deep dive into each channel — status, stats, and what makes it tick.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {channels.map((channel) => {
              const status = statusConfig[channel.status];
              return (
                <div key={channel.id} className="personality-card glass-card gradient-border rounded-2xl p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-navy-lighter)] border border-[var(--color-border)] flex items-center justify-center text-2xl">
                        {channel.emoji}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[var(--color-text-primary)]">{channel.name}</h4>
                        <p className="text-sm text-[var(--color-text-muted)]">{channel.platform}</p>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 text-xs font-bold rounded-full ${status.color} ${status.textColor}`}>
                      {status.label}
                    </span>
                  </div>

                  <div className="rounded-lg bg-[var(--color-navy)] px-4 py-2.5 mb-4">
                    <p className="text-sm font-medium text-[var(--color-gold)]">{channel.stats}</p>
                  </div>

                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-3">
                    {channel.description}
                  </p>

                  {channel.detail && (
                    <p className="text-xs text-[var(--color-text-muted)] font-mono bg-[var(--color-navy)] rounded-lg px-3 py-2 mb-3 break-all">
                      {channel.detail}
                    </p>
                  )}

                  {channel.link && (
                    <a
                      href={channel.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-gold)] hover:text-[var(--color-text-primary)] transition-colors"
                    >
                      {channel.linkLabel} →
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Summary Bar */}
      <section id="stats" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
            Platform Reach
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            By The Numbers
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-gold)] gold-glow mb-2">8</div>
            <p className="text-sm text-[var(--color-text-secondary)]">Distribution Channels</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-gold)] gold-glow mb-2">4,400+</div>
            <p className="text-sm text-[var(--color-text-secondary)]">Instagram Followers</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-gold)] gold-glow mb-2">31</div>
            <p className="text-sm text-[var(--color-text-secondary)]">Podcast Episodes</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-gold)] gold-glow mb-2">12</div>
            <p className="text-sm text-[var(--color-text-secondary)]">MCP Tools Available</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-green-accent)] mb-2">3</div>
            <p className="text-sm text-[var(--color-text-secondary)]">Channels Live</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-gold)] mb-2">3</div>
            <p className="text-sm text-[var(--color-text-secondary)]">In Beta / Development</p>
          </div>
          <div className="glass-card rounded-xl p-6 text-center">
            <div className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-muted)] mb-2">2</div>
            <p className="text-sm text-[var(--color-text-secondary)]">Planned Channels</p>
          </div>
        </div>
      </section>

      {/* Connection Lines — How Channels Feed Each Other */}
      <section id="connections" className="bg-[var(--color-navy-light)] border-y border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
              Content Flywheel
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold">
              How Channels Connect
            </h2>
            <p className="text-[var(--color-text-secondary)] mt-4 max-w-xl mx-auto">
              Each channel amplifies the others — a self-reinforcing flywheel of content and engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {connections.map((conn) => (
              <div key={conn.from + conn.to} className="glass-card rounded-xl p-6 hover:border-[var(--color-gold)]/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-bold text-[var(--color-text-primary)] bg-[var(--color-navy)] rounded-lg px-3 py-1.5 border border-[var(--color-border)]">
                    {conn.from}
                  </span>
                  <span className="text-[var(--color-gold)] text-lg font-bold">→</span>
                  <span className="text-sm font-bold text-[var(--color-text-primary)] bg-[var(--color-navy)] rounded-lg px-3 py-1.5 border border-[var(--color-border)]">
                    {conn.to}
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-lg">{conn.icon}</span>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {conn.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The SEO Flywheel */}
      <section id="seo" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center mb-16">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
            Search Visibility
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold">
            The SEO Flywheel
          </h2>
          <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto">
            Every channel Nigel occupies makes every other channel more discoverable. Multi-platform presence compounds into search authority — from traditional Google to voice and AI search.
          </p>
        </div>

        {/* Visual flywheel diagram */}
        <div className="glass-card gradient-border rounded-2xl p-8 md:p-10 mb-12">
          <h4 className="text-lg font-semibold text-[var(--color-gold)] mb-6 text-center">
            How Multi-Platform Presence Compounds
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-2">
            {[
              { icon: "🌐", label: "Blog ranks in Google" },
              { icon: "📺", label: "YouTube embeds on blog" },
              { icon: "🎙️", label: "Podcast notes link back" },
              { icon: "📸", label: "Instagram drives social proof" },
              { icon: "🤖", label: "MCP adds AI discovery" },
              { icon: "🏛️", label: "Google recognizes entity" },
              { icon: "📈", label: "All channels rank higher" },
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
          <p className="text-center text-xs text-[var(--color-text-muted)] mt-6">
            ↻ The last step feeds back into the first — a true compounding loop
          </p>
        </div>

        {/* SEO Signals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {seoPoints.map((point) => (
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

        {/* Search Intent Coverage Table */}
        <div className="glass-card gradient-border rounded-2xl p-6 md:p-8 overflow-x-auto">
          <h4 className="text-sm font-semibold text-[var(--color-gold)] mb-4">🎯 Search Intent Coverage by Channel</h4>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--color-border)]">
                <th className="text-left py-3 px-3 text-[var(--color-text-muted)] font-semibold">Channel</th>
                <th className="text-left py-3 px-3 text-[var(--color-text-muted)] font-semibold">Search Intent</th>
                <th className="text-left py-3 px-3 text-[var(--color-text-muted)] font-semibold">Example Query</th>
                <th className="text-left py-3 px-3 text-[var(--color-text-muted)] font-semibold">Search Engine</th>
              </tr>
            </thead>
            <tbody>
              {[
                { channel: "🎙️ Podcast", intent: "Audio / Listen", query: "\"garden tips podcast\"", engine: "Apple, Spotify, Google" },
                { channel: "📺 YouTube", intent: "How-to / Visual", query: "\"how to prune roses video\"", engine: "YouTube, Google" },
                { channel: "📸 Instagram", intent: "Inspiration / Visual", query: "\"garden design ideas\"", engine: "Instagram, Google Images" },
                { channel: "📝 Blog", intent: "Long-form / Research", query: "\"when to plant tomatoes zone 7\"", engine: "Google, Bing" },
                { channel: "🔊 Alexa", intent: "Voice / Immediate", query: "\"Alexa, how do I fix yellow leaves\"", engine: "Alexa Voice" },
                { channel: "🤖 MCP", intent: "AI / Tool Use", query: "\"garden planning tool for Claude\"", engine: "AI Assistants" },
              ].map((row) => (
                <tr key={row.channel} className="border-b border-[var(--color-border)]/50">
                  <td className="py-3 px-3 font-semibold text-[var(--color-text-primary)]">{row.channel}</td>
                  <td className="py-3 px-3 text-[var(--color-gold)]">{row.intent}</td>
                  <td className="py-3 px-3 text-[var(--color-text-secondary)] italic">{row.query}</td>
                  <td className="py-3 px-3 text-[var(--color-text-secondary)]">{row.engine}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Next Channels — Future Expansion */}
      <section id="next" className="bg-[var(--color-navy-light)] border-y border-[var(--color-border)]">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">
              Expansion Roadmap
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold">
              Next Channels
            </h2>
            <p className="text-[var(--color-text-secondary)] mt-4 max-w-2xl mx-auto">
              Six high-impact channels on the horizon — each chosen for strategic fit with Nigel&apos;s gardening authority and the existing content flywheel.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nextChannels.map((channel) => (
              <div key={channel.name} className="personality-card glass-card gradient-border rounded-2xl p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[var(--color-navy-lighter)] border border-[var(--color-border)] flex items-center justify-center text-2xl">
                      {channel.emoji}
                    </div>
                    <h4 className="text-lg font-bold text-[var(--color-text-primary)]">{channel.name}</h4>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-[var(--color-navy-lighter)] text-[var(--color-text-muted)] border border-[var(--color-border)]">
                    PLANNED
                  </span>
                </div>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {channel.rationale}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-lg bg-[var(--color-navy)] px-4 py-2.5">
                    <span className="text-xs text-[var(--color-text-muted)]">Target Audience</span>
                    <span className="text-xs font-medium text-[var(--color-text-secondary)]">{channel.audience}</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-[var(--color-navy)] px-4 py-2.5">
                    <span className="text-xs text-[var(--color-text-muted)]">Setup Effort</span>
                    <span className={`text-xs font-bold ${channel.effort === "Low" || channel.effort === "Low (repurposed)" ? "text-[var(--color-green-accent)]" : channel.effort === "Medium" ? "text-[var(--color-gold)]" : "text-amber-500"}`}>
                      {channel.effort}
                    </span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-[var(--color-navy)] px-4 py-2.5">
                    <span className="text-xs text-[var(--color-text-muted)]">Potential Impact</span>
                    <span className={`text-xs font-bold ${channel.impact === "Very High" ? "text-[var(--color-green-accent)]" : channel.impact === "High" ? "text-[var(--color-gold)]" : "text-[var(--color-text-secondary)]"}`}>
                      {channel.impact}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Priority Matrix */}
          <div className="glass-card rounded-2xl p-8 max-w-3xl mx-auto mt-12">
            <h4 className="text-lg font-semibold text-[var(--color-gold)] mb-4 text-center">
              🎯 Recommended Priority Order
            </h4>
            <div className="space-y-3">
              {[
                { rank: "1", name: "Blog / Website", reason: "SEO foundation — every other channel benefits", badge: "bg-[var(--color-green-accent)] text-[var(--color-navy)]" },
                { rank: "2", name: "TikTok", reason: "Lowest effort (repurpose YouTube Shorts), highest discovery", badge: "bg-[var(--color-green-accent)] text-[var(--color-navy)]" },
                { rank: "3", name: "Pinterest", reason: "Evergreen traffic + high purchase intent for Associates", badge: "bg-[var(--color-gold)] text-[var(--color-navy)]" },
                { rank: "4", name: "Newsletter / Email", reason: "Audience ownership — algorithm-proof distribution", badge: "bg-[var(--color-gold)] text-[var(--color-navy)]" },
                { rank: "5", name: "Twitter / X", reason: "Community engagement + real-time garden conversation", badge: "bg-[var(--color-navy-lighter)] text-[var(--color-text-secondary)]" },
                { rank: "6", name: "Facebook Group", reason: "Community building — self-sustaining once established", badge: "bg-[var(--color-navy-lighter)] text-[var(--color-text-secondary)]" },
              ].map((item) => (
                <div key={item.rank} className="flex items-center gap-4 rounded-lg bg-[var(--color-navy)] px-4 py-3">
                  <span className={`flex-shrink-0 w-7 h-7 rounded-full ${item.badge} flex items-center justify-center text-xs font-bold`}>
                    {item.rank}
                  </span>
                  <div className="flex-1">
                    <span className="text-sm font-semibold text-[var(--color-text-primary)]">{item.name}</span>
                    <span className="text-sm text-[var(--color-text-muted)]"> — {item.reason}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Status Legend */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="glass-card gradient-border rounded-2xl p-8 max-w-2xl mx-auto">
          <h4 className="text-lg font-semibold text-[var(--color-gold)] mb-6 text-center">
            Status Legend
          </h4>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 rounded-lg bg-[var(--color-navy)] px-4 py-3">
              <span className="w-3 h-3 rounded-full bg-[var(--color-green-accent)] shadow-[0_0_8px_rgba(74,222,128,0.4)]" />
              <div>
                <span className="text-sm font-semibold text-[var(--color-green-accent)]">LIVE</span>
                <p className="text-xs text-[var(--color-text-muted)]">Active and publicly available</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-[var(--color-navy)] px-4 py-3">
              <span className="w-3 h-3 rounded-full bg-[var(--color-gold)] shadow-[0_0_8px_rgba(212,168,71,0.4)]" />
              <div>
                <span className="text-sm font-semibold text-[var(--color-gold)]">BETA</span>
                <p className="text-xs text-[var(--color-text-muted)]">Functional, in testing / refinement</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-[var(--color-navy)] px-4 py-3">
              <span className="w-3 h-3 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
              <div>
                <span className="text-sm font-semibold text-amber-500">DEVELOPMENT</span>
                <p className="text-xs text-[var(--color-text-muted)]">Actively being built</p>
              </div>
            </div>
            <div className="flex items-center gap-3 rounded-lg bg-[var(--color-navy)] px-4 py-3">
              <span className="w-3 h-3 rounded-full bg-[var(--color-navy-lighter)] border border-[var(--color-border)]" />
              <div>
                <span className="text-sm font-semibold text-[var(--color-text-muted)]">PLANNED</span>
                <p className="text-xs text-[var(--color-text-muted)]">On the roadmap, not yet started</p>
              </div>
            </div>
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
            <a href="/" className="hover:text-[var(--color-gold)] transition-colors">
              ← Back to Nigel&apos;s Garden
            </a>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:inline">Nigel&apos;s Personality Map</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
