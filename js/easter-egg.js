(function () {
  const IGNORAR = new Set(["button", "a", "select", "textarea", "input", "label"]);

  function spawnHeart(x, y) {
    const heart = document.createElement("span");
    heart.textContent = "❤️";
    heart.style.cssText = [
      "position: fixed",
      "left: " + (x - 12) + "px",
      "top:  " + (y - 12) + "px",
      "font-size: 1.1rem",
      "line-height: 1",
      "pointer-events: none",
      "user-select: none",
      "z-index: 99999",
      "opacity: 1",
      "transform: translateY(0) scale(1)",
      "transition: transform 1s ease-out, opacity 1s ease-out",
    ].join(";");

    document.body.appendChild(heart);
    void heart.offsetWidth;
    heart.style.transform = "translateY(-65px) scale(0.4)";
    heart.style.opacity   = "0";
    setTimeout(function () { heart.remove(); }, 1100);
  }

  function onInteracao(x, y, alvo) {
    if (IGNORAR.has(alvo.tagName.toLowerCase())) return;
    if (Math.random() > 0.10) return;
    spawnHeart(x, y);
  }

  document.addEventListener("click", function (e) {
    onInteracao(e.clientX, e.clientY, e.target);
  });

  document.addEventListener("touchend", function (e) {
    var t = e.changedTouches[0];
    if (t) onInteracao(t.clientX, t.clientY, e.target);
  }, { passive: true });

})();