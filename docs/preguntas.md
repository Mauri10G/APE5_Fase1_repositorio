# Acta de defensa cruzada QA/UX. APE 5 Fase 2

Grupo defensor: Quinto B, integrado por Carvajal Jaya Juan José, Chicaiza Chango Eduardo Josue, Guevara López Oscar Mauricio y López Yantalema Erick Alexander.
Grupo retador: G3.

## Pregunta técnica 1. Punto de corte en CSS y orden con Tab

**Pregunta.** ¿Por qué el punto de corte está en 48rem y cómo se asegura que el orden con Tab no cambia entre móvil y escritorio?

**Respuesta del grupo.**
La base de estilos es para móvil y no usa ningún media query. Solo hay uno, `@media (min-width: 48rem)`, que son 768 px con la letra base de 16 px. Usamos rem y no px para que el corte dependa del tamaño de letra del navegador. Si alguien agranda la letra, el diseño pasa a dos columnas más tarde y no se aprieta.

Para el orden con Tab no usamos `order` ni `position`. Las dos columnas salen de CSS Grid sobre el mismo HTML, que va en el orden taller y luego Mi reserva. El teclado sigue el orden del HTML, así que no puede cambiar al pasar de una columna a dos.

**Dato que lo sustenta.** En 320, 360, 768 y 1366 px el orden de Tab coincidió con el orden visual en los tres estados. A 320 y 360 px el scrollWidth fue igual al innerWidth. A 768 px ya hay dos columnas y el scrollWidth sigue siendo 768. Está en `resultados/pruebas.md`.

**Principios HCI.** WCAG 2.4.3 orden del foco y WCAG 1.3.2 secuencia significativa. WCAG 1.4.10 reflujo.

## Pregunta técnica 2. Envíos duplicados con disabled y manejo del foco

**Pregunta.** ¿Cómo evitan reservas duplicadas y qué pasa con el foco después de confirmar o cancelar?

**Respuesta del grupo.**
La regla de negocio dice que hay una sola reserva activa por estudiante. Por eso la primera línea de `confirmar()` deshabilita el botón Reservar. Un botón deshabilitado no recibe clic ni Enter, así que no se puede enviar dos veces.

Deshabilitar el botón que tenía el foco lo deja sin foco y la persona que usa teclado o lector de pantalla pierde el lugar. Por eso movemos el foco a mano. Al confirmar pasa a Cancelar reserva. Al cancelar vuelve a Reservar un lugar. El mensaje va en una región con `role="status"`, que se anuncia sin quitar el foco.

En la Fase 2 agregamos una pregunta antes de cancelar. Allí el foco cae en No, mantener reserva, que es la opción segura. Así, un segundo Enter seguido ya no cancela.

**Dato que lo sustenta.** Prueba de doble Enter en los 4 viewports. El primer Enter abre la pregunta y el segundo mantiene la reserva. Está en `resultados/pruebas.md`.

**Principios HCI.** Prevención de errores y visibilidad del estado del sistema de Nielsen. WCAG 4.1.3 mensajes de estado.

## Objeción de diseño. Ajuste geométrico frente a comprensión real

**Objeción.** Que la pantalla no se desborde solo demuestra que cabe. No demuestra que la persona entienda qué hacer.

**Respuesta del grupo.**
Estamos de acuerdo en que son cosas distintas. El scrollWidth mide geometría. Dice que la página cabe, pero no dice si la persona encuentra el botón, entiende el mensaje o se equivoca.

Lo vivimos en nuestro propio trabajo. En la Fase 1 la interfaz ya cabía en 360 px y aun así encontramos que un Enter doble cancelaba la reserva sin avisar. Ese problema no lo habría detectado ninguna medición de ancho. Lo vimos al probar con teclado y con otras personas.

Por eso en la Fase 2 no nos quedamos con las mediciones. Hicimos una observación con un compañero de otro grupo, con una consigna neutral y sin decirle qué botones usar, y registramos tiempo, errores, ayudas y dificultades en `resultados/checklist.md`.

**Limitación que reconocemos.** Una persona no es una muestra. Sirve como indicio, y la siguiente iteración debe probar con más participantes y con lector de pantalla.
