/* Women's Bright Beauty Parlour and Gym — interactions
   Vanilla, no dependencies. Every feature degrades gracefully without JS. */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Mobile nav ---------- */
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('navMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Open menu' : 'Close menu');
      menu.classList.toggle('is-open', !open);
    });

    // Close after choosing a destination
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
        menu.classList.remove('is-open');
      }
    });

    // Escape closes the menu and returns focus to the button
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('is-open');
        toggle.focus();
      }
    });
  }

  /* ---------- Nav shadow once scrolled ---------- */
  var nav = document.getElementById('nav');
  if (nav) {
    var onScroll = function () { nav.classList.toggle('is-stuck', window.scrollY > 8); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Theme toggle (light / dark) ---------- */
  var themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    var themeMeta = document.querySelector('meta[name="theme-color"]');
    var syncTheme = function () {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      themeBtn.setAttribute('aria-pressed', String(dark));
      themeBtn.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
      if (themeMeta) themeMeta.setAttribute('content', dark ? '#180A12' : '#EC4899');
    };
    syncTheme(); // the initial theme was set by the inline <head> script
    themeBtn.addEventListener('click', function () {
      var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncTheme();
    });
  }

  /* ---------- Services: category filter (ARIA tabs) ---------- */
  var svc = document.getElementById('svc');
  if (svc) {
    // The `js-filter` class is set by the inline script in <head> (before paint).
    // Without JS it is never added, so all ten price lists stay on the page.
    var chips = Array.prototype.slice.call(svc.querySelectorAll('.chip'));

    var activate = function (chip, setFocus) {
      chips.forEach(function (c) {
        var panel = document.getElementById(c.getAttribute('aria-controls'));
        var on = c === chip;
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-selected', String(on));
        c.setAttribute('tabindex', on ? '0' : '-1');
        if (!panel) return;
        panel.hidden = !on;
        if (on && !reduceMotion) {
          panel.classList.remove('is-entering');
          void panel.offsetWidth; // restart the entrance animation
          panel.classList.add('is-entering');
        }
      });
      if (setFocus) chip.focus();
      chip.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    };

    chips.forEach(function (chip, i) {
      chip.setAttribute('tabindex', chip.classList.contains('is-active') ? '0' : '-1');
      chip.addEventListener('click', function () { activate(chip); });

      // Arrow-key navigation, per the WAI-ARIA tabs pattern
      chip.addEventListener('keydown', function (e) {
        var next = null;
        if (e.key === 'ArrowRight') next = chips[(i + 1) % chips.length];
        else if (e.key === 'ArrowLeft') next = chips[(i - 1 + chips.length) % chips.length];
        else if (e.key === 'Home') next = chips[0];
        else if (e.key === 'End') next = chips[chips.length - 1];
        if (next) { e.preventDefault(); activate(next, true); }
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealables = Array.prototype.slice.call(document.querySelectorAll('.reveal'));

  var revealAll = function () {
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  };

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target); // reveal once, then stop watching
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });

    revealables.forEach(function (el) { io.observe(el); });

    // Failsafe: if the observer never reported anything by the time the page has
    // settled, show everything rather than leave the visitor staring at a blank page.
    window.addEventListener('load', function () {
      setTimeout(function () {
        if (!document.querySelector('.reveal.is-visible')) revealAll();
      }, 600);
    });
  }

  /* ---------- Highlight the section you're reading ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__menu a:not(.btn)'));
  var sections = links
    .map(function (a) { return document.querySelector(a.getAttribute('href')); })
    .filter(Boolean);

  if (sections.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Footer year ---------- */
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = String(new Date().getFullYear());
})();
