<h2>Ejercicios sesiones 1, 2 y 3. Introducción a React, jerarquía y componentes</h2>
<p>Para este primer reto de programación en React vamos a poner en practica lo aprendido hasta ahora para crear dos componentes.</p>
<p>Cada uno de estos componentes tendrá sus propias características.</p>
<p><strong>Componente A: </strong>Este componente va a tener disponer un Contacto(crea una clase para ello), que va a contar con las siguientes características:</p>
<ul>
    <li>Nombre: que será un String.</li>
    <li>Apellido: también un String.</li>
    <li>Email: de nuevo un String.</li>
    <li>Conectado: será un booleano que nos indicará si la persona está conectada o no.</li>
</ul>
<p><strong>Componente B: </strongPor> otro lado, tenemos el componente B que va a recibir por props un contacto y va a poder cambiar su estado de conectado a desconectado y viceversa.</p>
<ul>
    <li>Si el contacto está conectado, se debe mostrar: <strong>Contacto En Línea</strong></li>
    <li>Si el contacto no está conectado, se debe mostrar: <strong>Contacto No Disponible</strong></li>
</ul>
<p><strong>Renderizado de componentes en la solución:</strong> </p>
<ul>
    <li>El Componente A debe ser renderizado dentro del componenet App.js del proyecto.</li>
    <li>El Componente B debe ser renderizado desde el componte A y recibir los props adecuadamente</li>
</ul>
<p><strong>Recordatorio: </strong>Haz uso de Proptypes adecuadamente</p>