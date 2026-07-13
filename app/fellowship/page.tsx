"use client";

import { useEffect, useRef } from "react";

export default function FellowshipPage() {
  const faqRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // FAQ accordion
    const faqItems = faqRef.current?.querySelectorAll<HTMLDivElement>(".faq-item");
    if (faqItems) {
      faqItems.forEach((item) => {
        const btn = item.querySelector<HTMLButtonElement>(".faq-q");
        const ans = item.querySelector<HTMLDivElement>(".faq-a");
        if (!btn || !ans) return;
        btn.addEventListener("click", () => {
          const isOpen = item.classList.contains("open");
          faqItems.forEach((open) => {
            open.classList.remove("open");
            const a = open.querySelector<HTMLDivElement>(".faq-a");
            if (a) a.style.maxHeight = "";
          });
          if (!isOpen) {
            item.classList.add("open");
            ans.style.maxHeight = ans.scrollHeight + "px";
          }
        });
      });
    }

    // Sticky rail active-phase highlight
    const railItems = railRef.current?.querySelectorAll<HTMLDivElement>(".rail-item");
    const phaseBlocks = document.querySelectorAll<HTMLDivElement>(".phase-block");

    if (railItems && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const id = (entry.target as HTMLElement).id;
              railItems.forEach((r) =>
                r.classList.toggle("active", r.dataset.target === id)
              );
            }
          });
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      phaseBlocks.forEach((block) => observer.observe(block));
      return () => observer.disconnect();
    }
  }, []);

  useEffect(() => {
    // Click rail to jump to phase
    const railItems = railRef.current?.querySelectorAll<HTMLDivElement>(".rail-item");
    if (!railItems) return;
    railItems.forEach((item) => {
      item.addEventListener("click", () => {
        const target = document.getElementById(item.dataset.target ?? "");
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=IBM+Plex+Mono:wght@400;500;600&family=Source+Sans+3:wght@400;500;600;700&display=swap');

        .fw-root {
          --ink: #0C1712;
          --forest: #123524;
          --forest-deep: #081C13;
          --forest-tint: #1B4531;
          --gold: #C6A445;
          --gold-bright: #E0C36B;
          --parchment: #F3EFE4;
          --paper: #FBF9F3;
          --moss: #5C6E5A;
          --line: rgba(198,164,69,0.35);
          --line-dark: rgba(243,239,228,0.16);

          font-family: 'Source Sans 3', sans-serif;
          font-size: 17px;
          line-height: 1.6;
          color: var(--ink);
          background: var(--paper);
          -webkit-font-smoothing: antialiased;
        }

        .fw-root .mono { font-family: 'IBM Plex Mono', monospace; }

        .fw-root .eyebrow {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
          margin-bottom: 18px;
          display: block;
        }

        .fw-root h1, .fw-root h2, .fw-root h3 {
          font-family: 'Fraunces', serif;
          font-weight: 650;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .fw-root .wrap {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .fw-root a { color: inherit; }

        /* ===== HERO ===== */
        .fw-root .hero {
          background: radial-gradient(120% 140% at 15% 0%, var(--forest-tint) 0%, var(--forest) 45%, var(--forest-deep) 100%);
          color: var(--paper);
          padding: 110px 0 0;
          position: relative;
          overflow: hidden;
        }
        .fw-root .hero::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(var(--line-dark) 1px, transparent 1px),
            linear-gradient(90deg, var(--line-dark) 1px, transparent 1px);
          background-size: 64px 64px;
          opacity: 0.5;
          pointer-events: none;
        }
        .fw-root .hero-inner { position: relative; z-index: 1; }
        .fw-root .hero h1 {
          font-size: clamp(40px, 6vw, 68px);
          line-height: 1.06;
          max-width: 820px;
          color: var(--paper);
        }
        .fw-root .hero h1 em {
          font-style: italic;
          color: var(--gold-bright);
        }
        .fw-root .hero .sub {
          max-width: 620px;
          font-size: 19px;
          color: rgba(251,249,243,0.82);
          margin-top: 26px;
        }
        .fw-root .cta-row {
          display: flex;
          gap: 20px;
          align-items: center;
          margin-top: 40px;
          flex-wrap: wrap;
        }
        .fw-root .btn-gold {
          background: var(--gold);
          color: var(--forest-deep);
          font-family: 'IBM Plex Mono', monospace;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 16px 30px;
          border-radius: 2px;
          text-decoration: none;
          display: inline-block;
          transition: background 0.2s ease;
        }
        .fw-root .btn-gold:hover { background: var(--gold-bright); }
        .fw-root .link-ghost {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          letter-spacing: 0.04em;
          color: rgba(251,249,243,0.75);
          text-decoration: none;
          border-bottom: 1px solid rgba(198,164,69,0.5);
          padding-bottom: 2px;
        }

        /* Blueprint pipeline strip */
        .fw-root .pipeline {
          margin-top: 80px;
          position: relative;
          z-index: 1;
          padding-bottom: 46px;
        }
        .fw-root .pipeline-track {
          display: flex;
          justify-content: space-between;
          position: relative;
          padding-top: 8px;
        }
        .fw-root .pipeline-track::before {
          content: "";
          position: absolute;
          top: 7px;
          left: 4%;
          right: 4%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold) 8%, var(--gold) 92%, transparent);
          opacity: 0.6;
        }
        .fw-root .pnode { flex: 1; text-align: center; position: relative; }
        .fw-root .pnode .dot {
          width: 9px; height: 9px;
          border-radius: 50%;
          background: var(--gold);
          margin: 0 auto 14px;
          position: relative;
          z-index: 2;
        }
        .fw-root .pnode .num { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--gold-bright); letter-spacing: 0.06em; }
        .fw-root .pnode .lbl { font-size: 12.5px; color: rgba(251,249,243,0.7); margin-top: 4px; max-width: 130px; margin-inline: auto; }

        /* ===== SECTION SHARED ===== */
        .fw-root section { padding: 100px 0; }
        .fw-root .section-tight { padding: 70px 0; }
        .fw-root .rule {
          height: 1px;
          background: var(--line);
          width: 100%;
        }

        /* WHY */
        .fw-root .why-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 70px;
          align-items: start;
        }
        .fw-root .why-grid h2 { font-size: 36px; line-height: 1.15; color: var(--forest-deep); max-width: 480px; }
        .fw-root .why-grid p { color: #2B3A31; max-width: 500px; }
        .fw-root .pull-quote {
          border-left: 2px solid var(--gold);
          padding-left: 28px;
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: 22px;
          line-height: 1.4;
          color: var(--forest);
        }

        /* OUTCOMES */
        .fw-root .outcomes-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
        }
        .fw-root .outcome-card {
          background: var(--paper);
          padding: 34px 26px;
        }
        .fw-root .outcome-card .tag { font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: var(--gold); letter-spacing: 0.08em; }
        .fw-root .outcome-card h3 { font-size: 19px; margin-top: 14px; color: var(--forest-deep); font-weight: 600; }
        .fw-root .outcome-card p { font-size: 14.5px; color: var(--moss); margin-top: 10px; }

        /* STRUCTURE */
        .fw-root .structure-layout {
          display: grid;
          grid-template-columns: 220px 1fr;
          gap: 60px;
        }
        .fw-root .rail { position: sticky; top: 100px; align-self: start; height: fit-content; }
        .fw-root .rail-item {
          padding: 14px 0 14px 18px;
          border-left: 2px solid var(--line);
          font-family: 'IBM Plex Mono', monospace;
          font-size: 13px;
          color: #8A9A8E;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .fw-root .rail-item .rn { display: block; font-size: 20px; font-family: 'Fraunces', serif; font-style: italic; color: #C6CFC7; }
        .fw-root .rail-item.active {
          border-left-color: var(--gold);
          color: var(--forest-deep);
        }
        .fw-root .rail-item.active .rn { color: var(--forest); }

        .fw-root .phase-block { padding-bottom: 64px; border-bottom: 1px solid var(--line); margin-bottom: 64px; }
        .fw-root .phase-block:last-child { border-bottom: none; margin-bottom: 0; }
        .fw-root .phase-head { display: flex; gap: 18px; align-items: baseline; margin-bottom: 8px; }
        .fw-root .phase-head .rn { font-family: 'Fraunces', serif; font-style: italic; font-size: 30px; color: var(--gold); }
        .fw-root .phase-head h3 { font-size: 26px; color: var(--forest-deep); }
        .fw-root .phase-obj { color: var(--moss); max-width: 640px; margin-bottom: 30px; }
        .fw-root .core-areas { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
        .fw-root .core-area .mono { display: block; font-size: 11.5px; letter-spacing: 0.08em; color: var(--gold); margin-bottom: 8px; text-transform: uppercase; }
        .fw-root .core-area ul { margin: 0; padding-left: 18px; font-size: 14.5px; color: #2B3A31; }
        .fw-root .core-area li { margin-bottom: 4px; }
        .fw-root .outcome-line {
          margin-top: 26px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 12.5px;
          color: var(--forest);
          background: var(--parchment);
          display: inline-block;
          padding: 8px 14px;
          border: 1px solid var(--line);
        }

        /* DARK BAND */
        .fw-root .band-dark {
          background: var(--forest-deep);
          color: var(--paper);
        }
        .fw-root .band-dark h2 { color: var(--paper); }
        .fw-root .band-dark .eyebrow { color: var(--gold-bright); }

        .fw-root .spec-sheet { border-top: 1px solid var(--line-dark); }
        .fw-root .spec-row {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 40px;
          padding: 26px 0;
          border-bottom: 1px solid var(--line-dark);
        }
        .fw-root .spec-row .k { font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.06em; color: var(--gold-bright); text-transform: uppercase; }
        .fw-root .spec-row .v { font-size: 17px; color: rgba(251,249,243,0.92); }
        .fw-root .spec-row .v span.small { display:block; font-size: 13.5px; color: rgba(251,249,243,0.55); margin-top: 4px; }

        /* WHO FOR */
        .fw-root .who-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          margin-top: 40px;
        }
        .fw-root .who-col .mono { color: var(--gold-bright); font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; display:block; margin-bottom: 18px;}
        .fw-root .who-col ul { list-style: none; padding: 0; margin: 0; }
        .fw-root .who-col li {
          padding: 12px 0;
          border-bottom: 1px solid var(--line-dark);
          font-size: 15.5px;
          color: rgba(251,249,243,0.88);
        }
        .fw-root .who-col.no li { color: rgba(251,249,243,0.55); }

        /* LEADERSHIP */
        .fw-root .lead-card {
          display: grid;
          grid-template-columns: 90px 1fr;
          gap: 30px;
          align-items: start;
          margin-top: 30px;
        }
        .fw-root .lead-mark {
          width: 90px; height: 90px;
          border: 1px solid var(--gold);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Fraunces', serif;
          font-size: 30px;
          color: var(--gold-bright);
        }
        .fw-root .lead-card h3 { color: var(--paper); font-size: 22px; }
        .fw-root .lead-card .role { font-family: 'IBM Plex Mono', monospace; font-size: 12px; color: var(--gold-bright); letter-spacing: 0.06em; text-transform: uppercase; margin-top: 4px; display: block; }
        .fw-root .lead-card p { color: rgba(251,249,243,0.8); margin-top: 14px; max-width: 620px; font-size: 15px; }
        .fw-root .lead-note {
          margin-top: 20px;
          font-size: 13.5px;
          color: rgba(251,249,243,0.55);
          font-style: italic;
        }

        /* INVESTMENT */
        .fw-root .invest-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--line-dark); border: 1px solid var(--line-dark); margin-top: 40px; }
        .fw-root .invest-card { background: rgba(251,249,243,0.03); padding: 36px; }
        .fw-root .invest-card .amt { font-family: 'Fraunces', serif; font-size: 42px; color: var(--gold-bright); }
        .fw-root .invest-card .lbl { font-family: 'IBM Plex Mono', monospace; font-size: 12px; letter-spacing: 0.06em; text-transform: uppercase; color: rgba(251,249,243,0.6); margin-top: 6px; display: block; }
        .fw-root .invest-card p { font-size: 14px; color: rgba(251,249,243,0.75); margin-top: 16px; }
        .fw-root .invest-flag {
          margin-top: 20px;
          font-size: 13px;
          color: rgba(251,249,243,0.45);
          border-top: 1px dashed var(--line-dark);
          padding-top: 24px;
        }

        /* APPLICATION PROCESS */
        .fw-root .steps { margin-top: 50px; }
        .fw-root .step-row {
          display: grid;
          grid-template-columns: 70px 1fr;
          gap: 26px;
          padding: 28px 0;
          border-top: 1px solid var(--line);
        }
        .fw-root .step-row:last-child { border-bottom: 1px solid var(--line); }
        .fw-root .step-row .rn { font-family: 'Fraunces', serif; font-style: italic; font-size: 26px; color: var(--gold); }
        .fw-root .step-row h3 { font-size: 18px; color: var(--forest-deep); }
        .fw-root .step-row p { font-size: 15px; color: var(--moss); margin-top: 6px; max-width: 560px; }

        /* FAQ */
        .fw-root .faq-item { border-top: 1px solid var(--line); }
        .fw-root .faq-item:last-child { border-bottom: 1px solid var(--line); }
        .fw-root .faq-q {
          width: 100%;
          text-align: left;
          background: none;
          border: none;
          padding: 22px 0;
          font-family: 'Source Sans 3', sans-serif;
          font-size: 17px;
          font-weight: 600;
          color: var(--forest-deep);
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        .fw-root .faq-q .plus { font-family: 'IBM Plex Mono', monospace; color: var(--gold); font-size: 20px; transition: transform 0.2s ease; }
        .fw-root .faq-item.open .faq-q .plus { transform: rotate(45deg); }
        .fw-root .faq-a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.25s ease;
        }
        .fw-root .faq-a p { font-size: 15px; color: var(--moss); padding-bottom: 22px; max-width: 640px; }

        /* FINAL CTA */
        .fw-root .final-cta {
          background: linear-gradient(120deg, var(--forest) 0%, var(--forest-deep) 100%);
          color: var(--paper);
          text-align: center;
          padding: 110px 0;
        }
        .fw-root .final-cta h2 { font-size: clamp(32px, 5vw, 48px); color: var(--paper); max-width: 720px; margin: 0 auto; }
        .fw-root .final-cta .sub { color: rgba(251,249,243,0.75); margin-top: 18px; max-width: 520px; margin-inline: auto; }
        .fw-root .final-cta .btn-gold { margin-top: 36px; }

        /* RESPONSIVE */
        @media (max-width: 860px) {
          .fw-root .why-grid,
          .fw-root .structure-layout,
          .fw-root .who-grid,
          .fw-root .invest-grid,
          .fw-root .core-areas,
          .fw-root .lead-card { grid-template-columns: 1fr; }
          .fw-root .outcomes-grid { grid-template-columns: 1fr 1fr; }
          .fw-root .rail { position: static; display: flex; overflow-x: auto; gap: 10px; margin-bottom: 20px; }
          .fw-root .rail-item { border-left: none; border-bottom: 2px solid var(--line); padding: 10px 14px; white-space: nowrap; }
          .fw-root .spec-row { grid-template-columns: 1fr; gap: 8px; }
          .fw-root .pipeline-track { flex-wrap: wrap; gap: 20px; }
          .fw-root .pipeline-track::before { display: none; }
        }
        @media (max-width: 560px) {
          .fw-root .outcomes-grid { grid-template-columns: 1fr; }
          .fw-root .wrap { padding: 0 20px; }
        }
      `}</style>

      <div className="fw-root">

        {/* ===== HERO ===== */}
        <div className="hero">
          <div className="wrap hero-inner">
            <span className="eyebrow">Edgewares Operator Fellowship</span>
            <h1>Build capability for <em>the future economy.</em></h1>
            <p className="sub">An intensive, in-person program in Benin City that trains high-potential African talent into globally competitive technical operators and strategic thinkers — in under three months.</p>
            <div className="cta-row">
              <a href="#apply" className="btn-gold">Apply for the Fellowship</a>
              <a href="#structure" className="link-ghost">See how the program works →</a>
            </div>
          </div>
          <div className="wrap pipeline">
            <div className="pipeline-track">
              <div className="pnode"><div className="dot"></div><div className="num">I</div><div className="lbl">Foundation &amp; Mindset</div></div>
              <div className="pnode"><div className="dot"></div><div className="num">II</div><div className="lbl">Technical Depth</div></div>
              <div className="pnode"><div className="dot"></div><div className="num">III</div><div className="lbl">Business Intelligence</div></div>
              <div className="pnode"><div className="dot"></div><div className="num">IV</div><div className="lbl">Execution Labs</div></div>
              <div className="pnode"><div className="dot"></div><div className="num">V</div><div className="lbl">Deployment</div></div>
            </div>
          </div>
        </div>

        {/* ===== WHY THIS EXISTS ===== */}
        <section>
          <div className="wrap why-grid">
            <div>
              <span className="eyebrow">The Problem</span>
              <h2>Africa&apos;s constraint isn&apos;t talent. It&apos;s systems.</h2>
              <p>Every year, brilliant, high-agency young Africans go without the execution infrastructure needed to turn their ability into real capability — structured training, exacting standards, and a clear pathway into opportunity.</p>
              <p>The Edgewares Operator Fellowship exists to close that gap. It is not a course. It is a deliberately engineered pipeline that takes raw potential and produces operators who can think in systems, build real products, and execute under pressure — anywhere in the world.</p>
            </div>
            <div className="pull-quote">
              &quot;The objective is to build the human execution infrastructure required for Africa to compete globally.&quot;
            </div>
          </div>
        </section>

        {/* ===== WHAT YOU BECOME ===== */}
        <section className="section-tight">
          <div className="wrap">
            <span className="eyebrow">The Outcome</span>
            <h2 style={{ fontSize: "32px", color: "var(--forest-deep)", maxWidth: "600px", marginBottom: "40px" }}>By the end of the Fellowship, you don&apos;t just know more. You operate differently.</h2>
          </div>
          <div className="wrap" style={{ padding: "0 32px" }}>
            <div className="outcomes-grid">
              <div className="outcome-card">
                <span className="tag">CLARITY</span>
                <h3>Clarity of Thought</h3>
                <p>Systems thinking, structured communication, and decision frameworks you apply under real pressure.</p>
              </div>
              <div className="outcome-card">
                <span className="tag">CAPABILITY</span>
                <h3>Technical Competence</h3>
                <p>Production-quality skill in a chosen technical track, built by shipping real, working systems.</p>
              </div>
              <div className="outcome-card">
                <span className="tag">INTELLIGENCE</span>
                <h3>Commercial Awareness</h3>
                <p>A working grasp of business models, markets, and growth — how organizations actually create value.</p>
              </div>
              <div className="outcome-card">
                <span className="tag">EXECUTION</span>
                <h3>Execution Capability</h3>
                <p>The discipline and resilience to build under deadline, in a team, with a real deliverable at stake.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== PROGRAM STRUCTURE ===== */}
        <section id="structure">
          <div className="wrap">
            <span className="eyebrow">Program Structure</span>
            <h2 style={{ fontSize: "34px", color: "var(--forest-deep)", maxWidth: "640px", marginBottom: "50px" }}>Five sequential phases. Each one builds directly on the last.</h2>

            <div className="structure-layout">
              <div className="rail" id="rail" ref={railRef}>
                <div className="rail-item active" data-target="phase-1"><span className="rn">I</span>Foundation &amp; Mindset</div>
                <div className="rail-item" data-target="phase-2"><span className="rn">II</span>Technical Depth</div>
                <div className="rail-item" data-target="phase-3"><span className="rn">III</span>Business Intelligence</div>
                <div className="rail-item" data-target="phase-4"><span className="rn">IV</span>Execution Labs</div>
                <div className="rail-item" data-target="phase-5"><span className="rn">V</span>Deployment</div>
              </div>

              <div>
                <div className="phase-block" id="phase-1">
                  <div className="phase-head"><span className="rn">I</span><h3>Foundation &amp; Mindset</h3></div>
                  <p className="phase-obj">Objective: build the intellectual discipline, systems thinking, communication ability, and execution habits every operator needs before touching technical work.</p>
                  <div className="core-areas">
                    <div className="core-area"><span className="mono">Systems Thinking</span><ul><li>Understanding systems and incentives</li><li>Cause-and-effect analysis</li><li>Organizational thinking</li><li>Decision-making frameworks</li></ul></div>
                    <div className="core-area"><span className="mono">Communication &amp; Writing</span><ul><li>Structured thinking</li><li>Business writing</li><li>Technical communication</li><li>Presentation and articulation</li></ul></div>
                    <div className="core-area"><span className="mono">Execution Discipline</span><ul><li>Time management</li><li>Deep work systems</li><li>Accountability systems</li><li>Team collaboration</li></ul></div>
                    <div className="core-area"><span className="mono">Global Awareness</span><ul><li>Technology trends</li><li>Geopolitics</li><li>Global markets</li><li>Future industries</li></ul></div>
                  </div>
                  <div className="outcome-line">OUTCOME → Clarity of thought, execution discipline, strategic awareness, communication confidence</div>
                </div>

                <div className="phase-block" id="phase-2">
                  <div className="phase-head"><span className="rn">II</span><h3>Technical Depth</h3></div>
                  <p className="phase-obj">Objective: develop strong technical capability rooted in real-world engineering and product development. Participants choose a track and build to a production standard.</p>
                  <div className="core-areas">
                    <div className="core-area"><span className="mono">Software Engineering</span><ul><li>Frontend development</li><li>Backend systems</li><li>APIs and databases</li><li>Scalable architecture, testing &amp; deployment</li></ul></div>
                    <div className="core-area"><span className="mono">AI-Assisted Development</span><ul><li>AI development tools &amp; workflows</li><li>Prompt systems</li><li>Automation logic</li><li>Productivity engineering</li></ul></div>
                    <div className="core-area"><span className="mono">Product Engineering</span><ul><li>Product thinking</li><li>User experience</li><li>Product architecture</li><li>Agile execution</li></ul></div>
                    <div className="core-area"><span className="mono">Data &amp; Intelligence Systems</span><ul><li>Data analysis</li><li>Data visualization</li><li>Business intelligence</li><li>Data-driven decision making</li></ul></div>
                  </div>
                  <div className="outcome-line">OUTCOME → Technically competent, execution-oriented, able to build real systems</div>
                </div>

                <div className="phase-block" id="phase-3">
                  <div className="phase-head"><span className="rn">III</span><h3>Business &amp; Strategic Intelligence</h3></div>
                  <p className="phase-obj">Objective: develop business-aware technical operators who understand markets, incentives, and how organizations actually win.</p>
                  <div className="core-areas">
                    <div className="core-area"><span className="mono">Finance &amp; Economics</span><ul><li>Understanding markets</li><li>Financial literacy</li><li>Capital allocation basics</li><li>Economic incentives</li></ul></div>
                    <div className="core-area"><span className="mono">Business Models &amp; Strategy</span><ul><li>How companies make money</li><li>Platform economics</li><li>Market positioning</li><li>Competitive strategy</li></ul></div>
                    <div className="core-area"><span className="mono">Product &amp; Growth Thinking</span><ul><li>Customer psychology</li><li>Growth loops &amp; retention</li><li>Product-market fit</li><li>Monetization</li></ul></div>
                    <div className="core-area"><span className="mono">Operations &amp; Execution</span><ul><li>Process design</li><li>Operational systems</li><li>Workflow optimization</li><li>Team management</li></ul></div>
                  </div>
                  <div className="outcome-line">OUTCOME → Business realities, economic incentives, strategic and commercial thinking</div>
                </div>

                <div className="phase-block" id="phase-4">
                  <div className="phase-head"><span className="rn">IV</span><h3>Execution Labs</h3></div>
                  <p className="phase-obj">Objective: expose participants to real-world execution environments — under deadline, in a team, with a real outcome on the line.</p>
                  <div className="core-areas">
                    <div className="core-area"><span className="mono">Lab Formats</span><ul><li>Startup simulation labs</li><li>Product build sprints</li><li>Operational redesign projects</li></ul></div>
                    <div className="core-area"><span className="mono">Working Under Pressure</span><ul><li>Team execution challenges</li><li>Market research projects</li><li>Public presentation of solutions</li></ul></div>
                  </div>
                  <div className="outcome-line">OUTCOME → Real execution capability, collaborative experience, resilience under pressure</div>
                </div>

                <div className="phase-block" id="phase-5">
                  <div className="phase-head"><span className="rn">V</span><h3>Deployment &amp; Ecosystem Integration</h3></div>
                  <p className="phase-obj">Objective: connect participants to real opportunity. The Fellowship doesn&apos;t end at graduation — it ends at deployment.</p>
                  <div className="core-areas">
                    <div className="core-area"><span className="mono">Pathways</span><ul><li>Join startups</li><li>Work with partner companies</li><li>Join Edgewares internal ventures</li></ul></div>
                    <div className="core-area"><span className="mono">Long-Term Track</span><ul><li>Build your own company</li><li>Become a future mentor or team lead</li></ul></div>
                  </div>
                  <div className="outcome-line">OUTCOME → A real pathway into opportunity, not just a certificate</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FORMAT & LOGISTICS (dark band) ===== */}
        <section className="band-dark">
          <div className="wrap">
            <span className="eyebrow">Format &amp; Logistics</span>
            <h2 style={{ fontSize: "32px", maxWidth: "600px", marginBottom: "10px" }}>What to expect, practically.</h2>
          </div>
          <div className="wrap spec-sheet">
            <div className="spec-row">
              <div className="k">Format</div>
              <div className="v">Fully in-person <span className="small">All sessions, labs, and execution work take place on-site in Benin City, Edo State.</span></div>
            </div>
            <div className="spec-row">
              <div className="k">Duration</div>
              <div className="v">Under 3 months <span className="small">A single, continuous cohort cycle across all five phases.</span></div>
            </div>
            <div className="spec-row">
              <div className="k">Structure</div>
              <div className="v">5 sequential phases <span className="small">Foundation → Technical Depth → Business Intelligence → Execution Labs → Deployment.</span></div>
            </div>
            <div className="spec-row">
              <div className="k">Cohort Size</div>
              <div className="v">Limited seats <span className="small">Intentionally selective — the Fellowship is built for depth, not scale.</span></div>
            </div>
          </div>
        </section>

        {/* ===== WHO THIS IS FOR (dark band continued) ===== */}
        <section className="band-dark section-tight">
          <div className="wrap">
            <span className="eyebrow">Who This Is For</span>
            <h2 style={{ fontSize: "32px", maxWidth: "640px" }}>We&apos;re not looking only for people with experience.</h2>
            <div className="who-grid">
              <div className="who-col">
                <span className="mono">Edgewares is looking for</span>
                <ul>
                  <li>High-agency individuals</li>
                  <li>Curious thinkers</li>
                  <li>Disciplined learners</li>
                  <li>Ambitious builders</li>
                  <li>Problem solvers</li>
                  <li>Resilient executors</li>
                </ul>
              </div>
              <div className="who-col no">
                <span className="mono">This may not be for you if</span>
                <ul>
                  <li>You want a passive, lecture-only experience</li>
                  <li>You&apos;re looking for a credential without doing the work</li>
                  <li>You can&apos;t commit fully, in person, for the full duration</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== LEADERSHIP (dark band continued) ===== */}
        <section className="band-dark section-tight">
          <div className="wrap">
            <span className="eyebrow">Leadership</span>
            <div className="lead-card">
              <div className="lead-mark">OS</div>
              <div>
                <h3>Osarhiemen</h3>
                <span className="role">Founder &amp; Program Lead — Edgewares Holdings</span>
                <p>Osarhiemen founded the Edgewares Operator Fellowship on a single thesis: Africa does not have a talent problem — it has a systems problem. As Founder, Chairman, and CEO of Edgewares Holdings, he leads the Fellowship&apos;s design and delivery, drawing on the same systems-first approach used across the group&apos;s education, technology, and human capital ventures.</p>
                <p className="lead-note">The Fellowship&apos;s facilitator team is currently being expanded to bring in additional specialists across engineering, product, and business strategy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== INVESTMENT (dark band continued) ===== */}
        <section className="band-dark section-tight" id="investment">
          <div className="wrap">
            <span className="eyebrow">Investment</span>
            <h2 style={{ fontSize: "32px", maxWidth: "600px" }}>What it costs to secure your seat.</h2>
            <div className="invest-grid">
              <div className="invest-card">
                <span className="amt">₦5,000</span>
                <span className="lbl">Application Fee</span>
                <p>Covers the review and screening of your application. Non-refundable.</p>
              </div>
              <div className="invest-card">
                <span className="amt">₦65,000</span>
                <span className="lbl">Acceptance Commitment</span>
                <p>Payable on acceptance to secure your seat in the cohort. Covers program delivery, mentorship, and execution lab resources.</p>
              </div>
            </div>
            <p className="invest-flag">Slots are limited per cohort. Full payment terms and refund policy are shared during the application process.</p>
          </div>
        </section>

        {/* ===== APPLICATION PROCESS ===== */}
        <section id="apply">
          <div className="wrap">
            <span className="eyebrow">Application Process</span>
            <h2 style={{ fontSize: "32px", color: "var(--forest-deep)", maxWidth: "600px" }}>Five steps from application to Phase 1.</h2>
            <div className="steps">
              <div className="step-row">
                <span className="rn">1</span>
                <div><h3>Submit your application</h3><p>Complete the application form and pay the ₦5,000 application fee.</p></div>
              </div>
              <div className="step-row">
                <span className="rn">2</span>
                <div><h3>Screening</h3><p>The Edgewares team reviews every application and shortlists candidates for interview.</p></div>
              </div>
              <div className="step-row">
                <span className="rn">3</span>
                <div><h3>Interview</h3><p>A short conversation to assess fit, mindset, and readiness for an intensive, in-person program.</p></div>
              </div>
              <div className="step-row">
                <span className="rn">4</span>
                <div><h3>Acceptance</h3><p>Successful candidates receive an offer and pay the ₦65,000 acceptance commitment to secure their seat.</p></div>
              </div>
              <div className="step-row">
                <span className="rn">5</span>
                <div><h3>Onboarding</h3><p>Begin the Fellowship with orientation, followed by Phase 1: Foundation &amp; Mindset.</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="section-tight">
          <div className="wrap">
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 style={{ fontSize: "32px", color: "var(--forest-deep)", maxWidth: "600px", marginBottom: "30px" }}>Before you apply.</h2>
            <div id="faq-list" ref={faqRef}>
              <div className="faq-item">
                <button className="faq-q">Do I need prior technical experience? <span className="plus">+</span></button>
                <div className="faq-a"><p>Not necessarily. What matters more is your agency, discipline, and willingness to think and build under pressure — Phase 1 is designed to bring everyone to a common foundation before technical tracks begin in Phase 2.</p></div>
              </div>
              <div className="faq-item">
                <button className="faq-q">Is the Fellowship fully in-person? <span className="plus">+</span></button>
                <div className="faq-a"><p>Yes. All sessions, labs, and execution work take place on-site in Benin City, Edo State, for the full duration of the program.</p></div>
              </div>
              <div className="faq-item">
                <button className="faq-q">Which technical track should I choose? <span className="plus">+</span></button>
                <div className="faq-a"><p>You&apos;ll choose between Software Engineering, AI-Assisted Development, Product Engineering, or Data &amp; Intelligence Systems in Phase 2, based on your interests and career direction — with guidance from the facilitator team.</p></div>
              </div>
              <div className="faq-item">
                <button className="faq-q">Are the application fee and acceptance commitment refundable? <span className="plus">+</span></button>
                <div className="faq-a"><p>The application fee is non-refundable, as it covers review and screening. Full terms on the acceptance commitment are shared directly with candidates during the application process.</p></div>
              </div>
              <div className="faq-item">
                <button className="faq-q">What happens after I complete the Fellowship? <span className="plus">+</span></button>
                <div className="faq-a"><p>Phase 5 is built specifically to connect you to real opportunity — through partner companies, Edgewares&apos; internal ventures, or a pathway to building your own company.</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <div className="final-cta">
          <div className="wrap">
            <h2>Build the capability. Become the operator.</h2>
            <p className="sub">Limited slots available for the next cohort. Applications are reviewed on a rolling basis.</p>
            <a href="#apply" className="btn-gold">Apply for the Fellowship</a>
          </div>
        </div>

      </div>
    </>
  );
}
