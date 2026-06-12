/* ============================================================
   modals.js — Modais de Músicas e de Pedidos
   Usa CONFIG.musicas (definido em config.js)
   ============================================================ */

/* ── Helpers ─────────────────────────────────────────────── */

function abrirModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("is-hidden");
  // Foca no botão de fechar para acessibilidade
  setTimeout(() => modal.querySelector(".modal-close")?.focus(), 80);
}

function fecharModal(id) {
  document.getElementById(id).classList.add("is-hidden");
}

/**
 * Fecha o modal se o clique foi no fundo escuro (overlay),
 * não dentro da .modal-box.
 */
function handleOverlayClick(event, modalId) {
  if (event.target.id === modalId) fecharModal(modalId);
}


/* ── Modal de Músicas ────────────────────────────────────── */

/**
 * Gera o HTML da lista de músicas a partir de CONFIG.musicas.
 * Chamado uma vez por buildMusicList() no main.js.
 */
function buildMusicList() {
  const lista = document.getElementById("music-list");
  if (!lista) return;

  lista.innerHTML = CONFIG.musicas.map(m => `
    <li class="music-item">
      <div class="music-info">
        <span class="music-title">${m.titulo}</span>
        <span class="music-artist">— ${m.artista}</span>
      </div>
      <p class="music-reason"><em>${m.motivo}</em></p>
    </li>
  `).join("");
}

function openMusicModal()  { abrirModal("music-modal"); }
function closeMusicModal() { fecharModal("music-modal"); }


/* ── Modal de Pedidos ────────────────────────────────────── */

function submitPedido() {
  const textarea = document.getElementById("pedido-text");
  const texto    = textarea.value.trim();

  if (!texto) {
    textarea.style.borderColor = "var(--rose)";
    textarea.focus();
    setTimeout(() => { textarea.style.borderColor = ""; }, 1500);
    return;
  }

  document.getElementById("pedido-display").textContent = texto;
  abrirModal("pedido-modal");
}

function closePedidoModal() { fecharModal("pedido-modal"); }