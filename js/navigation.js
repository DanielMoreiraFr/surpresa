/* ============================================================
   navigation.js — Troca de telas e fluxo do site
   ============================================================ */

/** Apelido escolhido — compartilhado entre módulos via window */
window.appState = window.appState || { nickname: "amor" };

/**
 * Ativa uma tela e desativa todas as outras.
 * Também controla a visibilidade dos elementos fixos.
 * @param {string} id - id da tela a exibir
 */
function mostrarTela(id) {
  document.querySelectorAll(".screen").forEach(el => {
    el.classList.remove("active");
    el.setAttribute("aria-hidden", "true");
  });

  const alvo = document.getElementById(id);
  if (!alvo) return;

  alvo.classList.add("active");
  alvo.setAttribute("aria-hidden", "false");

  // Elementos fixos só aparecem após o login
  const fab     = document.getElementById("chamego-fab");
  const counter = document.getElementById("fixed-counter");
  const isLogin = id === "screen-login";

  fab.classList.toggle("is-hidden", isLogin);
  counter.classList.toggle("is-hidden", isLogin);
}

/* ── Login → Carta ─────────────────────────────────────── */

function handleLogin() {
  const select = document.getElementById("nickname-select");
  const valor  = select.value;

  if (!valor) {
    select.classList.add("shake");
    select.focus();
    select.addEventListener("animationend", () => select.classList.remove("shake"), { once: true });
    return;
  }

  window.appState.nickname = valor;
  localStorage.setItem("nn_apelido", valor);
  irParaCarta();
}

function irParaCarta() {
  document.getElementById("letter-name").textContent = window.appState.nickname;
  mostrarTela("screen-letter");
}

/* ── Carta → Timeline ──────────────────────────────────── */

function goToTimeline() {
  // Injeta o apelido na tela final da timeline
  const loveNameEl = document.getElementById("love-name");
  if (loveNameEl) loveNameEl.textContent = window.appState.nickname;

  mostrarTela("screen-timeline");

  // Reseta o scroll da timeline para o primeiro momento
  const scroll = document.getElementById("timeline-scroll");
  if (scroll) scroll.scrollTo({ top: 0, behavior: "instant" });
}

/* ── Timeline → Conteúdo ───────────────────────────────── */

function goToContent() {
  mostrarTela("screen-content");

  const content = document.getElementById("screen-content");
  if (content) content.scrollTo({ top: 0, behavior: "instant" });
}