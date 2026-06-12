/* ============================================================
   chamego.js — Gerador de Chamego
   Usa CONFIG.chamegoFrases (definido em config.js)
   ============================================================ */

let _chamegoTimer  = null;
let _chamegoAberto = false;

/**
 * Abre ou fecha o balão de chamego.
 * Se já estiver aberto, fecha e mostra outra frase ao reabrir.
 */
function toggleChamego() {
  if (_chamegoAberto) {
    fecharChamego();
    return;
  }

  const frases = CONFIG.chamegoFrases;
  const frase  = frases[Math.floor(Math.random() * frases.length)];

  document.getElementById("chamego-text").textContent = frase;
  document.getElementById("chamego-popup").classList.remove("is-hidden");
  _chamegoAberto = true;

  // Fecha automaticamente após 5 segundos
  clearTimeout(_chamegoTimer);
  _chamegoTimer = setTimeout(fecharChamego, 5000);
}

function fecharChamego() {
  document.getElementById("chamego-popup").classList.add("is-hidden");
  _chamegoAberto = false;
  clearTimeout(_chamegoTimer);
}