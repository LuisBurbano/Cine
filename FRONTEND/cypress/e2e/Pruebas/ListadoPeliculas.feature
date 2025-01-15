Feature: Listado y detalles de películas

  Scenario: Mostrar la lista completa de películas populares
    Given el usuario visita la página de inicio "http://localhost:5173/"
    When navega a la página de listado de películas populares "http://localhost:5173/movies/popular"
    Then debería ver una lista de películas populares con al menos un elemento
    And cada película debería mostrar su título

  Scenario: Acceder a los detalles de una película
    Given el usuario visita la página de inicio "http://localhost:5173/"
    When navega a la página de listado de películas populares "http://localhost:5173/movies/popular"
    And selecciona la primera película de la lista
    Then debería ver el título de la película en la página de detalles
    And debería ver la sinopsis de la película
    And debería ver los horarios disponibles para la película
