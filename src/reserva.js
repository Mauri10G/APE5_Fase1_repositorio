// Controlador de estados: Disponible -> Confirmada -> Cancelada
const btnReservar = document.getElementById('btn-reservar');
const btnCancelar = document.getElementById('btn-cancelar');
const mensaje = document.getElementById('mensaje');

function confirmar() {
  btnReservar.disabled = true;          // bloquea la acción duplicada
  btnCancelar.disabled = false;
  mensaje.className = 'confirmada';
  mensaje.textContent = 'Reserva confirmada: Interfaces web accesibles, jueves de 14:00 a 16:00 en el Laboratorio 2.';
  btnCancelar.focus();                  // el foco pasa al botón que sigue disponible
}

function cancelar() {
  btnCancelar.disabled = true;
  btnReservar.disabled = false;
  mensaje.className = 'cancelada';
  mensaje.textContent = 'Reserva cancelada. Tu lugar quedó libre y puedes reservar de nuevo.';
  btnReservar.focus();
}

btnReservar.addEventListener('click', confirmar);
btnCancelar.addEventListener('click', cancelar);
