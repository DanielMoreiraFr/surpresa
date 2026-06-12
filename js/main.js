/* ============================================================
   main.js — Inicialização e ligação de eventos
   
   Este arquivo não tem lógica de negócio — só inicializa
   os módulos e conecta botões às funções corretas.
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {

  /* ── 1. Constrói a timeline com os momentos do config ── */
  buildTimeline();

  /* ── 2. Preenche o select de apelidos ─────────────────── */
  const select = document.getElementById("nickname-select");
  CONFIG.apelidos.forEach(apelido => {
    const opt   = document.createElement("option");
    opt.value   = apelido;
    opt.textContent = apelido;
    select.appendChild(opt);
  });

  /* ── 3. Preenche o texto da carta ─────────────────────── */
  const letterBody = document.getElementById("letter-body");
  const { paragrafos, assinatura } = CONFIG.carta;

  letterBody.innerHTML = paragrafos
    .map(p => `<p>${p}</p>`)
    .join("") +
    `<p class="letter-closing">
       Com carinho,<br/>
       <span class="handwritten">${assinatura}</span>
     </p>`;

  /* ── 4. Gera a lista de músicas no modal ───────────────── */
  buildMusicList();

  /* ── 5. Inicia o contador de tempo ────────────────────── */
  iniciarContador();

  /* ── 6. Recupera apelido salvo (sessão anterior) ───────── */
  const apelido = localStorage.getItem("nn_apelido");
  if (apelido && CONFIG.apelidos.includes(apelido)) {
    window.appState.nickname = apelido;
    // Para pular o login em visitas repetidas, descomente a linha abaixo:
    // irParaCarta();
  }

  /* ── 7. Conecta botões aos handlers ───────────────────── */

  // Login
  document.getElementById("btn-login")
    .addEventListener("click", handleLogin);

  // Carta → Timeline
  document.getElementById("btn-start-story")
    .addEventListener("click", goToTimeline);

  // Timeline → Conteúdo (botão gerado dinamicamente pelo timeline.js)
  document.addEventListener("click", e => {
    if (e.target.id === "btn-go-content") goToContent();
  });

  // Músicas
  document.getElementById("btn-open-music")
    .addEventListener("click", openMusicModal);
  document.getElementById("btn-close-music")
    .addEventListener("click", closeMusicModal);
  document.getElementById("music-modal")
    .addEventListener("click", e => handleOverlayClick(e, "music-modal"));

  // Pedidos
  document.getElementById("btn-send-pedido")
    .addEventListener("click", submitPedido);
  document.getElementById("btn-close-pedido")
    .addEventListener("click", closePedidoModal);
  document.getElementById("pedido-modal")
    .addEventListener("click", e => handleOverlayClick(e, "pedido-modal"));

  // Chamego FAB
  document.getElementById("chamego-fab")
    .addEventListener("click", toggleChamego);

  /* ── 8. Fecha modais com Escape ───────────────────────── */
  document.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    ["music-modal", "pedido-modal"].forEach(id => {
      if (!document.getElementById(id).classList.contains("is-hidden")) {
        fecharModal(id);
      }
    });
    fecharChamego();
  });

  /* ── 9. Fecha chamego ao clicar fora ──────────────────── */
  document.addEventListener("click", e => {
    const popup = document.getElementById("chamego-popup");
    const fab   = document.getElementById("chamego-fab");
    if (
      !popup.classList.contains("is-hidden") &&
      !popup.contains(e.target) &&
      e.target !== fab
    ) {
      fecharChamego();
    }
  });

});