/* =========================================================================
   WEST COBB CRUSH 2032 — SITE CHROME (shared header / nav / footer)
   -------------------------------------------------------------------------
   Every page includes this file plus two empty mount points:
     <div id="site-header-mount"></div>
     <div id="site-footer-mount"></div>
   and sets <body data-page="home|our-story|team|coaches|schedule|
   crush-stories|media|sponsors|become-a-sponsor|contact|community"> so the
   matching nav link gets marked active. Add a new page by adding one entry
   to NAV_LINKS below — every page's header/footer updates automatically.
   ========================================================================= */

const NAV_LINKS = [
  { key: "home", label: "Home", href: "index.html" },
  { key: "our-story", label: "Our Story", href: "our-story.html" },
  { key: "team", label: "Team", href: "team.html" },
  { key: "coaches", label: "Coaches", href: "coaches.html" },
  { key: "schedule", label: "Schedule", href: "schedule.html" },
  { key: "crush-stories", label: "Crush Stories", href: "crush-stories.html" },
  { key: "media", label: "Media", href: "media.html" },
  { key: "sponsors", label: "Sponsors", href: "sponsors.html" },
  { key: "contact", label: "Contact", href: "contact.html" },
];

const SPONSOR_CTA = { label: "Become a Sponsor", href: "become-a-sponsor.html" };

(function () {
  "use strict";

  function escapeHtml(str) {
    if (str === undefined || str === null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function headerHtml(activeKey) {
    const desktopLinks = NAV_LINKS.map((l) => `<a href="${l.href}"${l.key === activeKey ? ' aria-current="page" class="is-active"' : ""}>${escapeHtml(l.label)}</a>`).join("");
    const mobileLinks = NAV_LINKS.map((l) => `<li><a href="${l.href}" class="js-close-menu"${l.key === activeKey ? ' aria-current="page"' : ""}>${escapeHtml(l.label)}</a></li>`).join("");

    return `
<a class="skip-link" href="#main">Skip to content</a>

<div class="status-ribbon">
  <strong>PROTOTYPE / CONCEPT SITE</strong> — Not yet an official West Cobb Crush / West Cobb Girls Softball page &middot; Pending leadership review &amp; approval
</div>

<header class="site-header">
  <div class="nav">
    <a class="brand" href="index.html" aria-label="West Cobb Crush 2032 home">
      <span class="brand-mark" aria-hidden="true">WC</span>
      <span class="brand-text">
        <span class="line1">WEST COBB CRUSH</span>
        <span class="line2">CLASS OF 2032</span>
      </span>
    </a>

    <nav class="nav-links" aria-label="Primary">${desktopLinks}</nav>

    <a class="btn btn-gold btn-sm nav-cta" href="${SPONSOR_CTA.href}">${escapeHtml(SPONSOR_CTA.label)}</a>

    <button class="nav-toggle" id="navToggle" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
    </button>
  </div>
</header>

<div class="mobile-menu" id="mobileMenu">
  <div class="mobile-menu-head">
    <span class="brand-text">
      <span class="line1" style="color:#fff;">WEST COBB CRUSH</span>
      <span class="line2">CLASS OF 2032</span>
    </span>
    <button class="mobile-menu-close" id="mobileMenuClose" aria-label="Close menu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  </div>
  <ul>${mobileLinks}</ul>
  <a href="${SPONSOR_CTA.href}" class="btn btn-gold btn-block mobile-cta js-close-menu">${escapeHtml(SPONSOR_CTA.label)}</a>
</div>
`;
  }

  function footerHtml() {
    return `
<footer class="site-footer" id="footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <span class="brand-text">
          <span class="line1" style="color:#fff; font-size:1.1rem;">WEST COBB CRUSH</span>
          <span class="line2">CLASS OF 2032</span>
        </span>
        <p>A team-level storytelling, athlete-development and sponsorship platform built to complement — not replace — the West Cobb Girls Softball / West Cobb Crush organization.</p>
        <div class="footer-social" aria-label="Social media links (placeholders)">
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
          <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="4"/><polygon points="10 9 15 12 10 15"/></svg></a>
        </div>
      </div>

      <div class="footer-col">
        <h4>Team</h4>
        <ul>
          <li><a href="our-story.html">Our Story</a></li>
          <li><a href="our-story.html#road">Road to 2032</a></li>
          <li><a href="team.html">Team</a></li>
          <li><a href="coaches.html">Coaches</a></li>
          <li><a href="schedule.html">Schedule</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Community</h4>
        <ul>
          <li><a href="crush-stories.html">Crush Stories</a></li>
          <li><a href="media.html">Media</a></li>
          <li><a href="community.html">Community</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Partner With Us</h4>
        <ul>
          <li><a href="sponsors.html">Sponsors</a></li>
          <li><a href="become-a-sponsor.html">Become a Sponsor</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <span>&copy; 2026 West Cobb Crush 2032. Concept prototype — all rights reserved by respective owners.</span>
      <span class="legal-note">Concept prototype for West Cobb Crush 2032 &ndash; Woodman. Final branding, content, sponsorship structure and public launch are subject to team and organizational approval.</span>
    </div>
  </div>
</footer>
`;
  }

  function initMobileMenu() {
    const $ = (sel) => document.querySelector(sel);
    const $all = (sel) => Array.from(document.querySelectorAll(sel));
    const navToggle = $("#navToggle");
    const mobileMenu = $("#mobileMenu");
    const mobileMenuClose = $("#mobileMenuClose");

    function openMenu() {
      mobileMenu.classList.add("open");
      navToggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    }
    function closeMenu() {
      mobileMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    navToggle && navToggle.addEventListener("click", openMenu);
    mobileMenuClose && mobileMenuClose.addEventListener("click", closeMenu);
    $all(".js-close-menu").forEach((el) => el.addEventListener("click", closeMenu));
  }

  // Anything marked aria-disabled="true" is intentionally inert (a feature
  // that doesn't exist yet in this prototype) — stop the click.
  function initDisabledLinks() {
    document.addEventListener("click", function (e) {
      const target = e.target.closest('[aria-disabled="true"]');
      if (target) e.preventDefault();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    const headerMount = document.getElementById("site-header-mount");
    const footerMount = document.getElementById("site-footer-mount");
    const activeKey = document.body.getAttribute("data-page") || "";

    if (headerMount) headerMount.outerHTML = headerHtml(activeKey);
    if (footerMount) footerMount.outerHTML = footerHtml();

    initMobileMenu();
    initDisabledLinks();
  });
})();
