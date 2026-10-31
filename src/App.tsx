import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Globe,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Monitor,
  X,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    number: "01",
    name: "DukaLink",
    type: "BUSINESS SOFTWARE · IN DEVELOPMENT",
    description:
      "A distribution management platform designed to simplify orders, inventory, invoicing, and workflows between distributors and retailers.",
    tags: ["React", "TypeScript", "Express", "SQLite"],
    icon: Layers3,
    image: "/projects/dukalink.png",
    imageAlt: "DukaLink distributor dashboard",
  },
  {
    number: "02",
    name: "Barbershop Website",
    type: "WEB DESIGN · DEMO",
    description:
      "A modern website concept that presents services professionally and makes it easier for customers to enquire through WhatsApp.",
    tags: ["React", "Responsive Design", "WhatsApp"],
    icon: Monitor,
    image: "/projects/barbershop.png",
    imageAlt: "Barbershop website homepage",
  },
  {
    number: "03",
    name: "Service Business Website",
    type: "WEB DEVELOPMENT · CONCEPT",
    description:
      "A clean online presence for a service business, featuring service information, contact details, and a clear enquiry journey.",
    tags: ["Web Design", "Mobile First", "UX"],
    icon: Globe,
    image: "/projects/service-business.png",
    imageAlt: "Service business website homepage",
  },
];

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional, mobile-friendly websites that help businesses showcase their services and receive enquiries.",
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Interactive digital products designed around real workflows and practical business needs.",
  },
  {
    number: "03",
    title: "Frontend Development",
    description:
      "Clean interfaces with thoughtful layouts and responsive experiences across devices.",
  },
  {
    number: "04",
    title: "Backend Integration",
    description:
      "APIs, databases, and application logic that connect an interface to useful functionality.",
  },
];

const pricing = [
  {
    name: "Starter Page",
    price: "KSh 5,000 – 8,000",
    note: "One-time",
    description:
      "A simple landing page so customers can find you and reach you.",
    includes: [
      "Single mobile-friendly page",
      "WhatsApp enquiry button",
      "Services and contact details",
    ],
  },
  {
    name: "Business Website",
    price: "KSh 12,000 – 20,000",
    note: "One-time",
    description: "A full website for a salon, shop, or service business.",
    includes: [
      "Up to 5 pages",
      "Contact form and WhatsApp link",
      "Mobile-first design",
    ],
  },
  {
    name: "Custom System",
    price: "KSh 40,000 – 70,000",
    note: "One-time, scope-based",
    description:
      "Invoicing, bookings, or stock tools built around how you work.",
    includes: [
      "Database and login",
      "Built around your workflow",
      "Testing and handover",
    ],
  },
  {
    name: "Monthly Care",
    price: "KSh 1,000 – 2,000",
    note: "Per month",
    description: "Ongoing help to keep your site running and up to date.",
    includes: [
      "Small fixes and updates",
      "Hosting support",
      "Quick WhatsApp replies",
    ],
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const whatsappLink =
    "https://wa.me/254703305985?text=Hi%20Simon%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20website%20or%20software%20project.";

  return (
    <main className="min-h-screen overflow-hidden bg-[#080d18] text-slate-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080d18]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#home" className="text-xl font-extrabold tracking-tight">
            SM<span className="text-sky-400">.</span>
          </a>

          <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
            <a className="hover:text-white" href="#work">
              Work
            </a>
            <a className="hover:text-white" href="#services">
              Services
            </a>
            <a className="hover:text-white" href="#pricing">
              Pricing
            </a>
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-5 py-2.5 text-white transition hover:border-sky-400/60 hover:bg-sky-400/10"
            >
              Let's talk <ArrowUpRight className="ml-1 inline" size={15} />
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 p-2 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>

          {menuOpen && (
            <div className="absolute left-0 right-0 top-full flex flex-col border-b border-white/10 bg-[#0b1220] p-5 md:hidden">
              {[
                ["Work", "#work"],
                ["Services", "#services"],
                ["Pricing", "#pricing"],
                ["About", "#about"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-3 text-sm text-slate-300 hover:bg-white/5"
                >
                  {label}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto max-w-6xl scroll-mt-24 px-5 pb-24 pt-24 sm:px-8 sm:pb-32 sm:pt-32"
      >
        <div className="absolute -top-20 left-1/3 -z-0 h-72 w-72 rounded-full bg-blue-500/[0.10] blur-[100px]" />

        <div className="relative">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_15px_#34d399]" />
            <span className="text-xs font-medium tracking-[0.18em] text-slate-400 uppercase">
              Independent Developer · Kenya
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl leading-[1.12] font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Turning ideas into
            <span className="block bg-gradient-to-r from-sky-300 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              digital products
            </span>
            that work.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            I'm Simon Macharia, a developer building modern websites and
            practical software solutions for businesses. I care about clean
            design, useful technology, and solving real problems.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Explore my work <ArrowRight size={17} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/[0.05]"
            >
              Let's discuss your project
            </a>
          </div>

          <div className="mt-20 grid max-w-2xl grid-cols-3 border-t border-white/10 pt-6">
            {[
              ["Websites", "For businesses"],
              ["Applications", "For real workflows"],
              ["Experiences", "Built for people"],
            ].map(([title, subtitle], index) => (
              <div
                key={title}
                className={
                  index === 0 ? "" : "border-l border-white/10 pl-4 sm:pl-8"
                }
              >
                <p className="text-sm font-semibold text-white">{title}</p>
                <p className="mt-1 text-xs text-slate-500">{subtitle}</p>
              </div>
            ))}
          </div>

          <a
            href="#work"
            className="mt-12 inline-flex items-center gap-2 text-xs text-slate-500 transition hover:text-sky-300"
          >
            Scroll to selected work <ArrowDown size={14} />
          </a>
        </div>
      </section>

      {/* Selected Work */}
      <section
        id="work"
        className="scroll-mt-24 border-y border-white/[0.07] bg-white/[0.015]"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-sky-400 uppercase">
                Selected work
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Projects & experiments.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              Software in development and website concepts that demonstrate my
              approach to building useful digital experiences.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;

              return (
                <article
                  key={project.number}
                  className={`group overflow-hidden rounded-2xl border border-white/[0.09] bg-[#0d1422] p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30 sm:p-8 ${
                    index === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  {/* Project screenshot */}
                  <div className="mb-7 overflow-hidden rounded-xl border border-white/10 bg-[#080d18]">
                    <img
                      src={project.image}
                      alt={project.imageAlt}
                      className="aspect-video w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/15 bg-sky-400/[0.08] text-sky-300">
                      <Icon size={23} />
                    </div>
                    <span className="font-mono text-xs text-slate-600">
                      {project.number}
                    </span>
                  </div>

                  <p className="mt-7 text-xs font-medium tracking-wide text-sky-300/80">
                    {project.type}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                    {project.name}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[0.08] px-3 py-1.5 text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mt-5 text-xs text-slate-500">
            Demo projects are concepts, not claimed client engagements.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-sky-400 uppercase">
            What I do
          </p>
          <h2 className="max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            Technology should solve problems, not create complexity.
          </h2>

          <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.number}
                className="border-t border-white/10 pt-5"
              >
                <span className="font-mono text-xs text-sky-400">
                  {service.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section
        id="pricing"
        className="scroll-mt-24 border-t border-white/[0.07]"
      >
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-sky-400 uppercase">
            Pricing
          </p>
          <h2 className="max-w-2xl text-3xl leading-tight font-semibold tracking-tight sm:text-4xl">
            Clear prices, no surprises.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Honest starting prices for small businesses. The final quote depends
            on what you need, and I confirm it before any work starts.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pricing.map((plan) => (
              <article
                key={plan.name}
                className="flex flex-col rounded-2xl border border-white/[0.09] bg-[#0d1422] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/30"
              >
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-4 text-xl font-semibold tracking-tight text-sky-300">
                  {plan.price}
                </p>
                <p className="mt-1 text-xs text-slate-500">{plan.note}</p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  {plan.description}
                </p>

                <ul className="mt-5 space-y-2 border-t border-white/10 pt-5 text-xs text-slate-400">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-sky-400">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="mt-5 text-xs text-slate-500">
            50% upfront to start, the balance on delivery. Domain and hosting
            are paid separately.
          </p>
        </div>
      </section>
      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-y border-white/[0.07] bg-white/[0.015]"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
          <div>
            <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-sky-400 uppercase">
              About me
            </p>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Curious by nature.
              <span className="block text-slate-500">A builder by choice.</span>
            </h2>
          </div>

          <div className="space-y-5 text-sm leading-8 text-slate-400">
            <p>
              I'm Simon, a developer interested in the intersection of software
              engineering, business, and useful technology.
            </p>
            <p>
              I'm developing my skills by creating real projects, exploring
              problems businesses face, and learning how to turn ideas into
              software people can use.
            </p>
            <p>
              My approach is simple: understand the problem, build a practical
              solution, test it, and keep improving it.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="relative overflow-hidden rounded-3xl border border-sky-400/20 bg-gradient-to-br from-[#101e34] via-[#0d1728] to-[#0a1220] p-7 sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute -right-20 -top-28 h-72 w-72 rounded-full bg-sky-400/[0.08] blur-3xl" />

            <div className="relative max-w-2xl">
              <p className="mb-3 text-xs font-semibold tracking-[0.2em] text-sky-300 uppercase">
                Have a project in mind?
              </p>

              <h2 className="text-3xl leading-tight font-semibold tracking-tight sm:text-5xl">
                Let's build something useful.
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                Need a business website, have an idea for a digital product, or
                want to discuss a project? I'd be glad to hear about it.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=simacharia50%40gmail.com&su=Project%20enquiry"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
                >
                  <Mail size={17} /> Email me
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-white/[0.05]"
                >
                  <MessageCircle size={17} /> WhatsApp
                </a>
              </div>

              <p className="mt-5 text-xs text-slate-500">
                Prefer a quick conversation? Reach me directly on WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.07]">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} Simon Macharia. Built with intention.
          </p>

          <a className="transition hover:text-white" href="#home">
            Back to top ↑
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
