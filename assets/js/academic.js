(() => {
  "use strict";
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-navigation");
  if (toggle && nav) {
    document.documentElement.classList.add("nav-enhanced");
    toggle.hidden = false;
    const closeMenu = () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    };
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      nav.classList.toggle("is-open", open);
    });
    nav.addEventListener("click", event => {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeMenu();
        toggle.focus();
      }
    });
    document.addEventListener("click", event => {
      if (!event.target.closest(".site-header")) closeMenu();
    });
    window.matchMedia("(min-width: 761px)").addEventListener("change", closeMenu);
  }
  document.querySelectorAll("[data-content-search]").forEach(input => {
    const list = document.querySelector("[data-search-list]");
    const status = document.querySelector("[data-search-status]");
    if (!list || !status) return;
    const items = Array.from(list.querySelectorAll("[data-search-item]"));
    const texts = items.map(item => item.textContent.toLowerCase().replace(/\s+/g, " "));
    const filter = () => {
      const terms = input.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
      let count = 0;
      items.forEach((item, index) => {
        const match = terms.every(term => texts[index].includes(term));
        item.hidden = !match;
        if (match) count += 1;
      });
      status.textContent = terms.length
        ? count === 0 ? "No matches. Try another search or clear the search field."
          : count + " of " + items.length + " entries"
        : "Showing all " + items.length + " entries";
    };
    input.addEventListener("input", filter);
    input.addEventListener("search", filter);
    input.closest("[data-search-control]").hidden = false;
    filter();
  });
})();
