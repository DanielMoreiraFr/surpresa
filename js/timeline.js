/* ============================================================
   timeline.js — Gera os momentos do Rewind a partir de config.js
   Não precisa editar este arquivo.
   ============================================================ */

function buildFotoHTML(m, index) {
  const num = String(index + 1).padStart(2, "0");
  return `
    <img
      src="${m.foto}"
      alt="${m.titulo}"
      loading="lazy"
      onerror="
        this.style.display='none';
        this.nextElementSibling.style.display='flex';
      "
    />
    <div class="photo-placeholder" style="display:none">
      <span class="ph-icon">📷</span>
      <span class="ph-label">foto${num}.jpg</span>
    </div>
  `;
}

function buildMomentoHTML(m, index) {
  const isAlt    = index % 2 !== 0;
  const rotClass = index % 2 === 0 ? "rotate-neg" : "rotate-pos";
  const altClass = isAlt ? "moment-alt" : "";
  const total    = CONFIG.momentos.length;
  const current  = index + 1;

  return `
    <div class="moment ${altClass}" data-num="${String(current).padStart(2, '0')}">
      <div class="moment-inner">

        <figure class="polaroid ${rotClass}">
          ${buildFotoHTML(m, index)}
          <figcaption class="photo-date handwritten">${m.data}</figcaption>
        </figure>

        <div class="moment-text">
          <span class="moment-label handwritten">${m.titulo}</span>
          <span class="moment-date handwritten">${m.dataTexto}</span>
          <p class="moment-desc">${m.descricao}</p>
        </div>

      </div>

      <!-- Indicador de navegação: contador + seta pulsando -->
      <div class="scroll-hint" aria-hidden="true">
        <span class="scroll-count">${current} / ${total}</span>
        <span class="scroll-arrow">↓</span>
      </div>
    </div>
  `;
}

function buildTelaFinalHTML() {
  return `
    <div class="moment moment-love" data-num="love">
      <div class="love-screen">
        <p class="love-text handwritten">Eu te amo,</p>
        <p class="love-name handwritten" id="love-name"></p>
        <button class="btn-ghost" id="btn-go-content">continuar ↓</button>
      </div>
    </div>
  `;
}

function buildTimeline() {
  const container = document.getElementById("timeline-scroll");
  if (!container) return;

  const html = CONFIG.momentos
    .map((m, i) => buildMomentoHTML(m, i))
    .join("");

  container.innerHTML = html + buildTelaFinalHTML();
}