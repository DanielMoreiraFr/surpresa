/* ============================================================
   counter.js — Contador de tempo desde o primeiro encontro

   BUG CORRIGIDO: o cálculo anterior usava 365 dias fixos por ano,
   o que gerava "1a 12m" perto de completar 2 anos.
   Agora usa diferença real de data (getFullYear/Month/Date).
   ============================================================ */

/**
 * Calcula a diferença exata entre duas datas em anos, meses e dias.
 * Exemplo: 12/06/2024 → 11/06/2026 = 1a 11m 30d (falta 1 dia pra 2 anos)
 *          12/06/2024 → 12/06/2026 = 2a 0m 0d   ✓
 */
function calcularDiferenca(inicio, fim) {
  let anos  = fim.getFullYear() - inicio.getFullYear();
  let meses = fim.getMonth()    - inicio.getMonth();
  let dias  = fim.getDate()     - inicio.getDate();

  // Corrige dias negativos pegando os dias do mês anterior
  if (dias < 0) {
    meses -= 1;
    const ultimoDiaMesAnterior = new Date(
      fim.getFullYear(),
      fim.getMonth(),
      0           // dia 0 = último dia do mês anterior
    ).getDate();
    dias += ultimoDiaMesAnterior;
  }

  // Corrige meses negativos
  if (meses < 0) {
    anos  -= 1;
    meses += 12;
  }

  return { anos, meses, dias };
}

function atualizarContador() {
  const agora = new Date();
  const diff  = agora - CONFIG.dataInicio;
  if (diff < 0) return;

  // Anos / meses / dias com cálculo real de calendário
  const { anos, meses, dias } = calcularDiferenca(CONFIG.dataInicio, agora);

  // Horas / minutos / segundos a partir do total de ms
  const totalSeg = Math.floor(diff / 1000);
  const segs     = totalSeg % 60;
  const totalMin = Math.floor(totalSeg / 60);
  const mins     = totalMin % 60;
  const horas    = Math.floor(totalMin / 60) % 24;

  // Formato misterioso — sem rótulos, só os números correndo
  const texto = `${anos}a ${meses}m ${dias}d · ${_pad(horas)}h ${_pad(mins)}m ${_pad(segs)}s`;

  // Atualiza APENAS o contador fixo do rodapé do viewport
  // (o counter-display do footer da tela de conteúdo foi removido)
  const elFixed = document.getElementById("fixed-counter-text");
  if (elFixed) elFixed.textContent = texto;
}

function _pad(n) {
  return String(n).padStart(2, "0");
}

function iniciarContador() {
  atualizarContador();
  setInterval(atualizarContador, 1000);
}