// Controlador de estados: Disponible -> Confirmada -> Cancelada
// Fase 2: se agrega un paso de confirmación antes de cancelar
const btnReservar = document.getElementById('btn-reservar');
const btnCancelar = document.getElementById('btn-cancelar');
const confirmacion = document.getElementById('confirmacion');
const btnMantener = document.getElementById('btn-mantener');
const btnSiCancelar = document.getElementById('btn-confirmar-cancelar');
const mensaje = document.getElementById('mensaje');

const TEXTO_CONFIRMADA = 'Reserva confirmada: Interfaces web accesibles, jueves de 14:00 a 16:00 en el Laboratorio 2.';

function confirmar() {
  btnReservar.disabled = true;          // bloquea la acción duplicada
  btnCancelar.disabled = false;
  mensaje.className = 'confirmada';
  mensaje.textContent = TEXTO_CONFIRMADA;
  btnCancelar.focus();                  // el foco pasa al botón que sigue disponible
}

function pedirConfirmacion() {
  btnCancelar.disabled = true;          // evita abrir la pregunta dos veces
  confirmacion.hidden = false;
  mensaje.className = 'aviso';
  mensaje.textContent = 'Confirma si quieres cancelar tu reserva.';
  btnMantener.focus();                  // el foco cae en la opción segura
}

function mantener() {
  confirmacion.hidden = true;
  btnCancelar.disabled = false;
  mensaje.className = 'confirmada';
  mensaje.textContent = TEXTO_CONFIRMADA;
  btnCancelar.focus();
}

function cancelar() {
  confirmacion.hidden = true;
  btnCancelar.disabled = true;
  btnReservar.disabled = false;
  mensaje.className = 'cancelada';
  mensaje.textContent = 'Reserva cancelada. Tu lugar quedó libre y puedes reservar de nuevo.';
  btnReservar.focus();
}

btnReservar.addEventListener('click', confirmar);
btnCancelar.addEventListener('click', pedirConfirmacion);
btnMantener.addEventListener('click', mantener);
btnSiCancelar.addEventListener('click', cancelar);

// Escape cierra la pregunta y deja la reserva como estaba
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !confirmacion.hidden) {
    mantener();
  }
});
