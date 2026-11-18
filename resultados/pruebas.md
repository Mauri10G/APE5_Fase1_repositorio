# Pruebas técnicas en navegador. APE 5 Fase 2

Versión probada: rama main con la confirmación de cancelación integrada.
Navegador: Google Chrome, zoom al 100 %, ventana fijada al tamaño de cada viewport.
Medición: `document.documentElement.scrollWidth` frente a `window.innerWidth`. Se considera correcto cuando `scrollWidth <= innerWidth`.

## 1. Resultado por viewport

| Viewport | innerWidth | scrollWidth inicial | scrollWidth Confirmada | scrollWidth Confirmando | Sin desborde |
|---|---|---|---|---|---|
| 320 × 720 | 320 | 320 | 320 | 320 | Sí |
| 360 × 800 | 360 | 360 | 360 | 360 | Sí |
| 768 × 1024 | 768 | 768 | 768 | 768 | Sí |
| 1366 × 768 | 1366 | 1366 | 1366 | 1366 | Sí |

Los cuatro viewports cumplen en los tres estados de la pantalla. No hay barra de desplazamiento horizontal.

## 2. Orden de Tab frente al orden visual

| Viewport | Estado | Orden con Tab | Orden visual de arriba hacia abajo | Coincide |
|---|---|---|---|---|
| 320, 360, 768 y 1366 | Disponible | Reservar un lugar | Reservar un lugar | Sí |
| 320, 360, 768 y 1366 | Confirmada | Cancelar reserva | Cancelar reserva | Sí |
| 320, 360, 768 y 1366 | Confirmando cancelación | No, mantener reserva y luego Sí, cancelar | No, mantener reserva y luego Sí, cancelar | Sí |

A 768 px y 1366 px el contenido pasa a dos columnas, pero los botones están todos en la columna del taller. El panel Mi reserva no tiene elementos enfocables, así que el orden no cambia al pasar de una a dos columnas.

## 3. Tamaño de los botones

Altura medida en todos los botones: 49 px en los cuatro viewports. Supera los 44 px de la regla de 2.75rem.

## 4. Pruebas de interacción con teclado

| Prueba | Resultado en los 4 viewports |
|---|---|
| Tab y Enter en Reservar un lugar | Reservar queda deshabilitado y el foco pasa a Cancelar reserva |
| Enter en Cancelar reserva | Se abre la pregunta y el foco cae en No, mantener reserva |
| Segundo Enter seguido | Mantiene la reserva. Ya no se cancela por accidente |
| Escape con la pregunta abierta | Cierra la pregunta y el foco vuelve a Cancelar reserva |
| Tab hasta Sí, cancelar y Enter | La reserva se cancela y el foco vuelve a Reservar un lugar |

## 5. Evidencias

Las capturas están en la carpeta `evidencias/`. Cada una trae al final una franja negra con la medición registrada en esa captura.

- `evidencias/vp_320x720.png`
- `evidencias/vp_360x800.png`
- `evidencias/vp_768x1024.png`
- `evidencias/vp_1366x768.png`
- `evidencias/confirmacion_360x800.png`
- `evidencias/confirmacion_1366x768.png`

## 6. Limitaciones

Las mediciones se hicieron con el tamaño de ventana de Chrome y no en celulares físicos. No se probó con lector de pantalla real.
