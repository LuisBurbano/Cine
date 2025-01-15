Feature: Selección de horarios de funciones

  Scenario: Seleccionar un horario disponible
    Given el usuario visita la página de inicio "http://localhost:5173/"
    When navega a la página de listado de películas "http://localhost:5173/movies/popular"
    And selecciona la primera película de la lista
    And selecciona el primer horario disponible
    Then debería ver el horario seleccionado en la página
    And debería ser redirigido a la página de pago

  Scenario: Intentar seleccionar un horario no disponible
    Given el usuario visita la página de inicio "http://localhost:5173/"
    When navega a la página de listado de películas "http://localhost:5173/movies/popular"
    And selecciona la primera película de la lista
    And intenta seleccionar un horario no disponible
    Then debería ver un mensaje de error "No es posible escoger ese horario"
