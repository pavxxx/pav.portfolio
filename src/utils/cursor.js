export function initCursor() {
  const cursor = document.getElementById("neon-cursor");
  if (!cursor) return;

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  const hoverTargets = document.querySelectorAll(
    "a, button, .work-title"
  );

  hoverTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.classList.add("neon-hover");
    });

    el.addEventListener("mouseleave", () => {
      cursor.classList.remove("neon-hover");
    });
  });
}
