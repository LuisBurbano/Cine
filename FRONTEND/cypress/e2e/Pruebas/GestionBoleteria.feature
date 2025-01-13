Feature: Gestión boleteria
    Scenario: Seleccionar una película de la cartelera
        Given el usuario navega a la página de inicio de sesión "http://localhost:5173/login"
        When ingresa su nombre de usuario o correo "usuarioPrueba"
        And ingresa su contraseña "contraseñaSegura123"
        Then hace clic en el botón de iniciar sesión
        And espera 2 segundos
        And navega a la sección de cartelera
        And selecciona la primera película de la lista
        And selecciona el horario "08:00"
        And hace clic en el botón de comprar
        And selecciona el primer asiento disponible
        And confirma la selección de asiento
        And confirma la compra
        Then debería ver el mensaje "¡La compra se ha realizado con éxito!"