# Conclusiones finales. APE 5 Fase 2

| Elemento | Contenido |
|---|---|
| Requisito | El estado de la reserva debe verse y anunciarse sin importar el ancho de pantalla ni si se usa mouse, dedo o teclado. |
| Decisión | Interfaz Mobile-First con una columna base y dos columnas desde 48rem, orden del HTML intacto, botón Reservar deshabilitado al confirmar, foco movido al botón disponible y un paso de confirmación antes de cancelar. |
| Dato observado | En 320, 360, 768 y 1366 px el scrollWidth fue igual al innerWidth en todos los estados. El orden de Tab coincidió con el orden visual. Los botones miden 49 px de alto. El Enter doble ya no cancela la reserva. |
| Limitación | Mediciones en Chrome con ventana fija y no en celulares físicos. No se probó con lector de pantalla. La observación con usuarios fue con una sola persona. |
| Siguiente iteración | Probar con más participantes de otros grupos, usar lector de pantalla real y revisar el texto de los mensajes de estado según lo que cueste entender. |

## Cierre

El Boceto A pasó de una página fija de 960 px a una interfaz que cabe desde 320 px. Lo más importante que aprendimos es que medir el ancho no alcanza. La mejora más útil de la Fase 2, la confirmación antes de cancelar, salió de probar con teclado y no de una medición.
