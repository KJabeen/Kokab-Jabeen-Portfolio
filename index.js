const navbar = document.getElementById("navbar");
const container = document.querySelector(".container");

const sections = [
  document.getElementById("welcome"),
  document.getElementById("education"),
  document.getElementById("work"),
  document.getElementById("projects"),
  document.getElementById("contact"),
];

const navItems = Array.from(document.querySelectorAll(".nav-item"));

function showSection(sectionId) {
  sections.forEach((sec) => {
    sec.style.display = sec.id === sectionId ? "block" : "none";
  });

  navItems.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${sectionId}`;
    link.classList.toggle("clicked", isActive);
  });
}

function initAfterLoading() {
  navbar.style.display = "block";
  container.classList.add("hide");

  const hash = (window.location.hash || "#welcome").replace("#", "");
  const exists = sections.some((s) => s.id === hash);
  showSection(exists ? hash : "welcome");
}

setTimeout(initAfterLoading, 2200);

navItems.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = link.getAttribute("href").replace("#", "");
    showSection(target);
    history.replaceState(null, "", `#${target}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
