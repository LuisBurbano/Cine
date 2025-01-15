Feature: Gestión de usuario y selección de película

  Scenario: Seleccionar una película de la cartelera y completar la compra
    Given el usuario visita la página de inicio "http://localhost:5173/"
    When el usuario navega a la página de inicio de sesión "http://localhost:5173/login"
    And ingresa su "usuarioPrueba" en el campo de email o nombre de usuario
    And ingresa su "contraseñaSegura123" en el campo de contraseña
    And hace clic en el botón de iniciar sesión
    And espera 2 segundos
    And navega a la sección de cartelera
    And selecciona la primera película de la lista
    And selecciona el horario "08:00" en el campo de horarios
    And hace clic en el botón de comprar
    And selecciona el primer asiento disponible
    And confirma la selección de asiento
    And confirma la compra
    Then debería ver el mensaje "¡La compra se ha realizado con éxito!"