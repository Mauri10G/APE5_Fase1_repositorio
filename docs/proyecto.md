# Ficha de aplicación al proyecto. APE 5 Fase 1

**Pantalla trabajada:** Aula Abierta, elegir taller y reservar un lugar. Boceto A de escritorio llevado a una interfaz adaptable.

| Campo | Contenido |
|---|---|
| Actor | Estudiante universitario inscrito en los talleres de Aula Abierta, que entra desde su celular entre clases. |
| Tarea | Reservar un lugar en el taller Interfaces web accesibles y poder cancelarlo si cambian sus planes. |
| Dato decisivo | Día, horario y lugar del taller, jueves de 14:00 a 16:00 en el Laboratorio 2, junto con el estado actual de su reserva. |
| Acción principal | Pulsar el botón Reservar un lugar. |
| Estado final | Reserva confirmada, visible en el panel Mi reserva con un mensaje anunciado, y con la opción de cancelar disponible. |

## Regla de negocio

Cada estudiante puede tener una sola reserva activa por taller. Por eso el botón Reservar se bloquea apenas se confirma y solo se vuelve a habilitar si la reserva se cancela.

## Criterio de aceptación medible

Al pulsar Reservar, en menos de 1 segundo el botón queda deshabilitado, el panel Mi reserva muestra el texto de confirmación y el foco pasa a Cancelar reserva. En un celular de 360 px el ancho del documento es exactamente 360 px, sin desplazamiento horizontal.

## Requisito

El estado de la reserva debe verse y anunciarse sin importar el ancho de la pantalla ni si se usa mouse, dedo o teclado.

## Decisión HCI justificada

Se mantiene el orden de lectura taller y luego Mi reserva. En móvil el panel va apilado debajo de la tarjeta del taller y desde 768 px pasa a una columna lateral. Se justifica con la visibilidad del estado del sistema de Nielsen, con el reflujo de WCAG 1.4.10 y con los mensajes de estado de WCAG 4.1.3 mediante role status.

## Diagnóstico del Boceto A a 360 px

El documento mide 960 px en una pantalla de 360 px. El panel Mi reserva queda fuera de la vista y el título del taller se corta. Causa: body con width de 960px y grid de 580px y 360px.
