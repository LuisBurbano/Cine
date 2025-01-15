Feature: Compra de entradas

  Scenario: Completar la compra con información válida
    Given el usuario selecciona una película popular
    And elige un horario disponible
    And selecciona dos asientos disponibles
    When llena el formulario de pago con información válida
    And confirma la compra
    Then debería ver un mensaje de "Compra registrada con éxito"

  Scenario: Intentar comprar con campos vacíos
    Given el usuario selecciona una película popular
    And elige un horario disponible
    And selecciona dos asientos disponibles
    When intenta confirmar la compra sin llenar los campos del formulario
    Then debería ver mensajes de error indicando los campos vacíos

  Scenario: Intentar comprar con información incorrecta
    Given el usuario selecciona una película popular
    And elige un horario disponible
    And selecciona dos asientos disponibles
    When llena el formulario de pago con información incorrecta
    And intenta confirmar la compra
    Then debería ver mensajes de error indicando los datos incorrectos
