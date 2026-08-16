/* =========================================================================
   WEST COBB CRUSH 2032 — REUSABLE RENDER LIBRARY
   -------------------------------------------------------------------------
   Data-driven render functions shared across every page. Each page's own
   short inline script calls only the pieces it needs (see the bottom of
   any .html file). Nothing here is page-specific — add a player/story/
   sponsor/photo in data.js and every page that renders that list picks it
   up automatically.
   ========================================================================= */
window.Site = (function () {
  "use strict";

  const $ = (sel, ctx) => (ctx || document).querySelector(sel);
  const $all = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));

  function escapeHtml(str) {
    if (str === undefined || str === null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  /* ---------------------------------------------------------------------
     TEAM HIGHLIGHTS (impact strip) — used on Home + Sponsors
  --------------------------------------------------------------------- */
  function renderHighlights(gridId, list) {
    const grid = document.getElementById(gridId || "impactGrid");
    const items = list || (typeof TEAM_HIGHLIGHTS !== "undefined" ? TEAM_HIGHLIGHTS : null);
    if (!grid || !items) return;
    grid.innerHTML = items.map((item) => {
      const verified = item.status === "verified";
      const display = item.type === "stat" ? item.value : item.label;
      const valueClass = item.type === "stat" ? "" : "impact-value--label";
      const subLabel = item.type === "stat" ? item.label : "";
      const note = verified ? (item.note || "Verified") : "Pending Confirmation";
      return `
        <div class="impact-tile ${verified ? "verified" : ""}">
          <div class="impact-value ${valueClass} ${verified ? "" : "placeholder"}">${escapeHtml(display)}</div>
          ${subLabel ? `<div class="impact-label">${escapeHtml(subLabel)}</div>` : ""}
          <div class="impact-note">${escapeHtml(note)}</div>
        </div>
      `;
    }).join("");
  }

  /* ---------------------------------------------------------------------
     COMPACT HIGHLIGHT STRIP — Home (photo-forward alternative to the
     boxed impact grid; same honesty rules apply, just lighter-weight)
  --------------------------------------------------------------------- */
  const trophyIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4z"/><path d="M7 5H4a1 1 0 0 0-1 1c0 2.5 1.5 4 4 4M17 5h3a1 1 0 0 1 1 1c0 2.5-1.5 4-4 4"/></svg>`;
  const calendarIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>`;

  function renderImpactStrip(stripId, list) {
    const strip = document.getElementById(stripId || "impactStrip");
    const items = list || (typeof TEAM_HIGHLIGHTS !== "undefined" ? TEAM_HIGHLIGHTS : null);
    if (!strip || !items) return;
    strip.innerHTML = items.map((item) => {
      const verified = item.status === "verified";
      const display = item.type === "stat" ? `${item.value} ${item.label}` : item.label;
      const status = verified ? (item.note || "Verified") : "Pending Confirmation";
      const icon = item.label && item.label.toLowerCase().indexOf("years") > -1 ? calendarIcon : trophyIcon;
      return `
        <div class="is-item ${verified ? "verified" : ""}">
          <span class="is-icon">${icon}</span>
          <span class="is-text">
            <span class="is-value">${escapeHtml(display)}</span>
            <span class="is-status">${escapeHtml(status)}</span>
          </span>
        </div>
      `;
    }).join("");
  }

  /* ---------------------------------------------------------------------
     PLAYER SPOTLIGHT — big magazine-style feature card (Home)
     Only ever renders fields that exist in data.js — never invents a
     fact about a player. Rotates by picking the first PLAYERS entry
     unless a specific player is passed in.
  --------------------------------------------------------------------- */
  function renderSpotlight(containerId, player) {
    const wrap = document.getElementById(containerId || "spotlight");
    const p = player || (typeof PLAYERS !== "undefined" ? PLAYERS[0] : null);
    if (!wrap || !p) return;
    const facts = [];
    if (p.yearsWithCrush) facts.push({ label: "Years with Crush", value: p.yearsWithCrush });
    if (p.funFact) facts.push({ label: "Fun Fact", value: p.funFact });
    if (p.achievement) facts.push({ label: "Achievement", value: p.achievement });

    wrap.innerHTML = `
      <div class="spotlight-card">
        <div class="spotlight-media">
          <img src="${p.photo}" alt="${escapeHtml(p.displayName)}, jersey number ${escapeHtml(p.number)}" loading="lazy">
          <span class="sp-number">#${escapeHtml(p.number)}</span>
        </div>
        <div class="spotlight-body">
          <span class="kicker">Player Spotlight</span>
          <h3>${escapeHtml(p.displayName)}</h3>
          ${p.position ? `<span class="sp-position">${escapeHtml(p.position)}</span>` : ""}
          <dl class="spotlight-facts">
            ${facts.map((f) => `<div><dt>${escapeHtml(f.label)}</dt><dd>${escapeHtml(f.value)}</dd></div>`).join("")}
          </dl>
          <p class="spotlight-note">Spotlight rotates through the roster each update. Full player profiles — with more detail, once approved by each family — are on the way.</p>
        </div>
      </div>
    `;
  }

  /* ---------------------------------------------------------------------
     THEY GREW UP TOGETHER — signature section (Home + Our Story)
  --------------------------------------------------------------------- */
  function thenNowPanelHtml(entry, altText) {
    if (!entry) return "";
    return `
      <img src="${entry.photo}" alt="${escapeHtml(altText)} — ${escapeHtml(entry.date)}" loading="lazy">
      <span class="tn-label">${escapeHtml(entry.label)}</span>
      <span class="tn-date">${escapeHtml(entry.date)}</span>
    `;
  }

  function renderGrowthStory() {
    if (typeof GROWTH_STORY === "undefined") return;

    const kicker = $("#growthKicker");
    const heading = $("#growthHeading");
    const copy = $("#growthCopy");
    if (kicker) kicker.textContent = GROWTH_STORY.kicker;
    if (heading) heading.innerHTML = GROWTH_STORY.heading;
    if (copy) copy.textContent = GROWTH_STORY.copy;

    const thenPanel = $("#thenPanel");
    const nowPanel = $("#nowPanel");
    if (thenPanel) thenPanel.innerHTML = thenNowPanelHtml(GROWTH_STORY.then, "West Cobb Crush team, early in their journey together");
    if (nowPanel) nowPanel.innerHTML = thenNowPanelHtml(GROWTH_STORY.now, "West Cobb Crush team, more recently, together on the same field");

    const mosaic = $("#growthMosaic");
    if (mosaic && GROWTH_STORY.mosaic) {
      mosaic.innerHTML = GROWTH_STORY.mosaic.map((tile) => `
        <div class="mosaic-tile ${tile.photo ? "" : "empty"}">
          ${tile.photo ? `<img src="${tile.photo}" alt="${escapeHtml(tile.tag)} — ${escapeHtml(tile.caption)}" loading="lazy">` : ""}
          <span class="mo-tag">${escapeHtml(tile.tag)}</span>
          <div class="mo-scrim"></div>
          <p class="mo-caption">${escapeHtml(tile.caption)}</p>
        </div>
      `).join("");
    }
  }

  /* ---------------------------------------------------------------------
     ROAD TO 2032 — horizontal preview scroller (Home)
  --------------------------------------------------------------------- */
  function renderTimeline(scrollerId, eras) {
    const scroller = document.getElementById(scrollerId || "timelineScroller");
    const list = eras || (typeof TIMELINE_ERAS !== "undefined" ? TIMELINE_ERAS : null);
    if (!scroller || !list) return;
    scroller.innerHTML = list.map((era) => `
      <article class="timeline-card ${era.capstone ? "capstone" : ""}">
        <div class="tl-media ${era.photo ? "" : "empty"}">
          ${era.photo
            ? `<img src="${era.photo}" alt="${escapeHtml(era.title)} — ${escapeHtml(era.date)}" loading="lazy">`
            : `<span>${era.capstone ? "Class of 2032" : "Photo &amp; milestone slot open"}</span>`}
          <span class="tl-tag">${escapeHtml(era.tag)}</span>
        </div>
        <div class="tl-body">
          <span class="tl-date">${escapeHtml(era.date)}</span>
          <h3>${escapeHtml(era.title)}</h3>
          <p>${escapeHtml(era.copy)}</p>
          ${era.story
            ? `<a class="tl-story" href="${era.story}">Read the story &rarr;</a>`
            : `<span class="tl-story" aria-disabled="true">Read the story — soon</span>`}
        </div>
      </article>
    `).join("");
  }

  /* ---------------------------------------------------------------------
     ROAD TO 2032 — photographic journey strip (Home preview)
     Circular photo stops on a connecting line — the visual teaser.
     Full write-ups live on Our Story; this links out rather than
     repeating paragraph text for every stop.
  --------------------------------------------------------------------- */
  function renderJourneyStrip(stripId, eras) {
    const strip = document.getElementById(stripId || "journeyStrip");
    const list = eras || (typeof TIMELINE_ERAS !== "undefined" ? TIMELINE_ERAS : null);
    if (!strip || !list) return;
    strip.innerHTML = list.map((era) => `
      <div class="js-stop ${era.capstone ? "js-capstone" : ""} ${era.future ? "js-future" : ""}">
        <div class="js-photo ${era.photo ? "" : "empty"}">
          ${era.photo
            ? `<img src="${era.photo}" alt="${escapeHtml(era.title)} — ${escapeHtml(era.date)}" loading="lazy">`
            : `<span>${era.capstone ? "2032" : era.future ? escapeHtml(era.date) : "Photo open"}</span>`}
        </div>
        <span class="js-dot" aria-hidden="true"></span>
        <span class="js-tag">${escapeHtml(era.tag)}</span>
        <span class="js-date">${escapeHtml(era.date)}</span>
        <span class="js-title">${escapeHtml(era.title)}</span>
      </div>
    `).join("");
  }

  /* ---------------------------------------------------------------------
     ROAD TO 2032 — full vertical timeline (Our Story page)
     Alternates sides on wide screens; stacks single-column on mobile.
     Built to keep accepting new eras every season — just add to
     TIMELINE_ERAS in data.js, no markup changes needed.
  --------------------------------------------------------------------- */
  function renderTimelineFull(containerId, eras) {
    const wrap = document.getElementById(containerId || "fullTimeline");
    const list = eras || (typeof TIMELINE_ERAS !== "undefined" ? TIMELINE_ERAS : null);
    if (!wrap || !list) return;
    wrap.innerHTML = list.map((era, i) => `
      <div class="ft-row ${i % 2 === 0 ? "ft-left" : "ft-right"} ${era.capstone ? "ft-capstone" : ""} ${era.future ? "ft-future" : ""}" data-reveal>
        <div class="ft-dot" aria-hidden="true"></div>
        <div class="ft-card">
          <div class="ft-media ${era.photo ? "" : "empty"}">
            ${era.photo
              ? `<img src="${era.photo}" alt="${escapeHtml(era.title)} — ${escapeHtml(era.date)}" loading="lazy">`
              : era.future
                ? `<span class="ft-future-year">${escapeHtml(era.date)}</span>`
                : `<span>${era.capstone ? "Class of 2032" : "Photo &amp; milestone slot open"}</span>`}
          </div>
          <div class="ft-body">
            <span class="ft-tag">${escapeHtml(era.tag)}</span>
            <span class="ft-date">${escapeHtml(era.date)}</span>
            <h3>${escapeHtml(era.title)}</h3>
            <p>${escapeHtml(era.copy)}</p>
            ${era.story
              ? `<a class="tl-story" href="${era.story}">Read the story &rarr;</a>`
              : `<span class="tl-story" aria-disabled="true">Read the story — soon</span>`}
          </div>
        </div>
      </div>
    `).join("");
  }

  /* ---------------------------------------------------------------------
     MEET THE CRUSH — PLAYER CARDS (Home preview + full Team page)
  --------------------------------------------------------------------- */
  const chevronIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`;

  function renderRoster(gridId, players) {
    const grid = document.getElementById(gridId || "rosterGrid");
    const list = players || (typeof PLAYERS !== "undefined" ? PLAYERS : null);
    if (!grid || !list) return;
    const prefix = gridId || "roster";
    grid.innerHTML = list.map((p, i) => {
      if (p.comingSoon || !p.photo) {
        return `
          <article class="player-card pc-coming" id="${prefix}-player-${i}">
            <div class="pc-coming-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.9 6.3L21 9l-4.8 4.5L17.5 21 12 17.6 6.5 21l1.3-7.5L3 9l6.1-.7z"/></svg>
            </div>
            <div class="pc-body">
              <div class="pc-name">Welcome to the Crush</div>
              <div class="pc-position">${escapeHtml(p.position || "Player announcement coming soon")}</div>
            </div>
          </article>
        `;
      }
      return `
      <article class="player-card" id="${prefix}-player-${i}">
        <span class="pc-pending">Concept</span>
        <img src="${p.photo}" alt="${escapeHtml(p.displayName)}, jersey number ${escapeHtml(p.number)}" loading="lazy">
        <div class="pc-scrim"></div>
        <span class="pc-number">${escapeHtml(p.number)}</span>
        <div class="pc-body">
          <div class="pc-name">${escapeHtml(p.displayName)}</div>
          ${p.position ? `<div class="pc-position">${escapeHtml(p.position)}</div>` : ""}
        </div>
        <div class="pc-more" id="${prefix}-player-${i}-more">
          <dl>
            ${p.yearsWithCrush ? `<div><dt>Years with Crush</dt><dd>${escapeHtml(p.yearsWithCrush)}</dd></div>` : ""}
            ${p.funFact ? `<div><dt>Fun Fact</dt><dd>${escapeHtml(p.funFact)}</dd></div>` : ""}
            ${p.achievement ? `<div><dt>Achievement</dt><dd>${escapeHtml(p.achievement)}</dd></div>` : ""}
          </dl>
        </div>
        <button type="button" class="pc-more-toggle" aria-expanded="false" aria-controls="${prefix}-player-${i}-more" aria-label="Show more about ${escapeHtml(p.displayName)}">${chevronIcon}</button>
      </article>
    `;
    }).join("");

    $all(".pc-more-toggle", grid).forEach((btn) => {
      btn.addEventListener("click", function () {
        const card = btn.closest(".player-card");
        const isOpen = card.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
      });
    });
  }

  /* ---------------------------------------------------------------------
     COACHES — big magazine cards for lead staff, simple cards for support
  --------------------------------------------------------------------- */
  function renderCoaches(leadId, staffId, coaches) {
    const list = coaches || (typeof COACHES !== "undefined" ? COACHES : null);
    if (!list) return;
    const lead = list.filter((c) => c.photo);
    const staff = list.filter((c) => !c.photo);

    const leadWrap = document.getElementById(leadId || "coachesLead");
    if (leadWrap) {
      leadWrap.innerHTML = lead.map((c, i) => `
        <div class="coach-card ${i % 2 === 1 ? "flip" : ""}" data-reveal>
          <div class="coach-media">
            <img src="${c.photo}" alt="${escapeHtml(c.name)}, ${escapeHtml(c.role)}" loading="lazy">
          </div>
          <div class="coach-body">
            <span class="coach-role"><span class="kicker">${escapeHtml(c.role)}</span>${c.tag ? `<span class="coach-tag">${escapeHtml(c.tag)}</span>` : ""}</span>
            <h3>${escapeHtml(c.name)}</h3>
            <p class="coach-bio ${c.bioStatus === "pending" ? "is-pending" : ""}">${escapeHtml(c.bio)}</p>
            ${c.bioSource ? `<p class="coach-source">Source: ${escapeHtml(c.bioSource)} — pending the coach's confirmation before treated as final.</p>` : ""}
          </div>
        </div>
      `).join("");
    }

    const staffWrap = document.getElementById(staffId || "coachesStaff");
    if (staffWrap) {
      staffWrap.innerHTML = staff.map((c) => {
        const initials = c.name.split(" ").map((n) => n[0]).join("");
        return `
          <div class="staff-card">
            <div class="staff-avatar">${escapeHtml(initials)}</div>
            <h3>${escapeHtml(c.name)}</h3>
            <span class="staff-role">${escapeHtml(c.role)}</span>
            <p>Bio pending — coach details to come.</p>
          </div>
        `;
      }).join("");
    }
  }

  /* ---------------------------------------------------------------------
     CRUSH STORIES
  --------------------------------------------------------------------- */
  function renderStories(gridId, stories) {
    const grid = document.getElementById(gridId || "storiesGrid");
    const list = stories || (typeof STORIES !== "undefined" ? STORIES : null);
    if (!grid || !list) return;
    grid.innerHTML = list.map((s) => `
      <article class="story-card">
        <div class="st-media"><img src="${s.photo}" alt="${escapeHtml(s.title)}" loading="lazy"></div>
        <div class="st-body">
          <span class="story-cat">${escapeHtml(s.category)}</span>
          <h3>${escapeHtml(s.title)}</h3>
          <span class="st-date">${escapeHtml(s.date)}</span>
          <p>${escapeHtml(s.teaser)}</p>
          <span class="story-more" aria-disabled="true">Full story coming soon &rarr;</span>
        </div>
      </article>
    `).join("");
  }

  /* ---------------------------------------------------------------------
     SPONSOR TIERS + LOGO WALL + BENEFITS
  --------------------------------------------------------------------- */
  const tierIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.9 6.3L21 9l-4.8 4.5L17.5 21 12 17.6 6.5 21l1.3-7.5L3 9l6.1-.7z"/></svg>`;

  function renderSponsorTiers(gridId, tiers) {
    const grid = document.getElementById(gridId || "tierGrid");
    const list = tiers || (typeof SPONSOR_TIERS !== "undefined" ? SPONSOR_TIERS : null);
    if (!grid || !list) return;
    grid.innerHTML = list.map((t) => `
      <div class="tier-card">
        <div class="tier-icon">${tierIcon}</div>
        <h3>${escapeHtml(t.name)}</h3>
        <p>${escapeHtml(t.blurb)}</p>
      </div>
    `).join("");
  }

  function renderLogoWall(gridId, slots) {
    const grid = document.getElementById(gridId || "logoGrid");
    if (!grid) return;
    const count = slots || 6;
    grid.innerHTML = Array.from({ length: count }).map(() => `
      <div class="logo-slot">Your Business Here</div>
    `).join("");
  }

  const checkIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>`;

  function renderFuelList(listId, items) {
    const list = document.getElementById(listId || "fuelList");
    const data = items || (typeof FUEL_LIST !== "undefined" ? FUEL_LIST : null);
    if (!list || !data) return;
    list.innerHTML = data.map((item) => `<li>${checkIcon} ${escapeHtml(item)}</li>`).join("");
  }

  function renderSponsorBenefits(gridId, items) {
    const grid = document.getElementById(gridId || "benefitsGrid");
    const data = items || (typeof SPONSOR_BENEFITS !== "undefined" ? SPONSOR_BENEFITS : null);
    if (!grid || !data) return;
    grid.innerHTML = data.map((b) => `
      <div class="benefit-card">
        <span class="benefit-check">${checkIcon}</span>
        <div>
          <h3>${escapeHtml(b.title)}</h3>
          <p>${escapeHtml(b.copy)}</p>
        </div>
      </div>
    `).join("");
  }

  function renderSelectOptions(selectId, options) {
    const select = document.getElementById(selectId);
    if (!select || !options) return;
    const placeholder = select.querySelector('option[value=""]');
    const optionsHtml = options.map((o) => `<option value="${escapeHtml(o)}">${escapeHtml(o)}</option>`).join("");
    select.innerHTML = (placeholder ? placeholder.outerHTML : "") + optionsHtml;
  }

  /* ---------------------------------------------------------------------
     MEDIA HUB — FILTER CHIPS + SOCIAL GRID
  --------------------------------------------------------------------- */
  const igIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>`;
  const fbIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`;

  function renderMediaFilters(wrapId, gridId, categories) {
    const wrap = document.getElementById(wrapId || "mediaFilters");
    const cats = categories || (typeof MEDIA_CATEGORIES !== "undefined" ? MEDIA_CATEGORIES : null);
    if (!wrap || !cats) return;
    wrap.innerHTML = cats.map((cat, i) => `
      <button type="button" class="filter-chip ${i === 0 ? "active" : ""}" data-filter="${escapeHtml(cat)}">${escapeHtml(cat)}</button>
    `).join("");

    wrap.addEventListener("click", function (e) {
      const btn = e.target.closest(".filter-chip");
      if (!btn) return;
      $all(".filter-chip", wrap).forEach((c) => c.classList.remove("active"));
      btn.classList.add("active");
      applyMediaFilter(gridId || "socialGrid", btn.dataset.filter);
    });
  }

  function applyMediaFilter(gridId, category) {
    const tiles = $all(".social-tile", document.getElementById(gridId || "socialGrid"));
    tiles.forEach((tile) => {
      const match = category === "All" || tile.dataset.category === category;
      tile.classList.toggle("is-hidden", !match);
    });
  }

  function renderSocial(gridId, posts) {
    const grid = document.getElementById(gridId || "socialGrid");
    const list = posts || (typeof SOCIAL_POSTS !== "undefined" ? SOCIAL_POSTS : null);
    if (!grid || !list) return;
    grid.innerHTML = list.map((s) => {
      const icon = s.platform === "facebook" ? fbIcon : igIcon;
      if (!s.photo) {
        return `
          <div class="social-tile empty" data-category="${escapeHtml(s.category)}">
            <span class="so-cat">${escapeHtml(s.category)}</span>
            <span class="so-empty-label">${escapeHtml(s.caption)}</span>
          </div>
        `;
      }
      return `
        <a class="social-tile" href="#" aria-disabled="true" tabindex="-1" data-category="${escapeHtml(s.category)}">
          <img src="${s.photo}" alt="${escapeHtml(s.caption)}" loading="lazy">
          <div class="so-scrim"></div>
          <span class="so-cat">${escapeHtml(s.category)}</span>
          <span class="so-icon">${icon}</span>
          <span class="so-caption">${escapeHtml(s.caption)}</span>
        </a>
      `;
    }).join("");
  }

  /* ---------------------------------------------------------------------
     SCROLL REVEAL — call once, after everything else has rendered
  --------------------------------------------------------------------- */
  function initReveal() {
    const items = $all("[data-reveal]");
    if (!("IntersectionObserver" in window) || items.length === 0) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    items.forEach((el) => io.observe(el));
  }

  return {
    escapeHtml,
    renderHighlights,
    renderImpactStrip,
    renderSpotlight,
    renderGrowthStory,
    renderTimeline,
    renderJourneyStrip,
    renderTimelineFull,
    renderRoster,
    renderCoaches,
    renderStories,
    renderSponsorTiers,
    renderLogoWall,
    renderFuelList,
    renderSponsorBenefits,
    renderSelectOptions,
    renderMediaFilters,
    applyMediaFilter,
    renderSocial,
    initReveal,
  };
})();
