Feature: Selección de asientos

  Scenario: Seleccionar asientos disponibles
    Given el usuario visita la página de inicio "http://localhost:5173/"
    When navega a la página de listado de películas "http://localhost:5173/movies/popular"
    And selecciona la primera película de la lista
    And selecciona el primer horario disponible
    And selecciona dos asientos marcados como disponibles
    Then los asientos seleccionados deberían marcarse como elegidos

  Scenario: Intentar seleccionar asientos no disponibles
    Given el usuario visita la página de inicio "http://localhost:5173/"
    When navega a la página de listado de películas "http://localhost:5173/movies/popular"
    And selecciona la primera película de la lista
    And selecciona el primer horario disponible
    And intenta seleccionar un asiento no disponible
    Then debería ver un mensaje de error "No puede seleccionar este asiento"
