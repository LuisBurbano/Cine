Feature: Historial de compras de usuarios

  Scenario: Mostrar historial de compras para un usuario con registros
    Given el usuario tiene compras registradas en el sistema
    When consulta el historial de compras
    Then debería ver una lista de todas sus compras realizadas
    And cada compra debería mostrar el título de la película, la fecha, el monto total, y otros detalles relevantes

  Scenario: Mostrar mensaje cuando no hay compras registradas
    Given el usuario no tiene compras registradas en el sistema
    When consulta el historial de compras
    Then debería ver un mensaje indicando que no hay transacciones en el historial

  Scenario: Mostrar detalles completos de la compra más reciente
    Given el usuario tiene compras registradas en el sistema
    When consulta el historial de compras
    Then debería ver los detalles completos de la compra más reciente
    And estos detalles incluyen título de la película, fecha de compra y monto total
