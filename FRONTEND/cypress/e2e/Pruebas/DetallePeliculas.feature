Feature: Detalles de películas

  Scenario: Mostrar detalles de una película válida
    Given el usuario visita la página de inicio "http://localhost:5173/"
    When navega a la página de detalles de una película válida "http://localhost:5173/movies/1"
    Then debería ver el título de la película
    And debería ver la sinopsis de la película
    And debería ver los horarios disponibles para la película

  Scenario: Manejar un ID de película no válido
    Given el usuario visita la página de inicio "http://localhost:5173/"
    When navega a la página de detalles con un ID no válido "http://localhost:5173/movies/9999"
    Then debería ver el mensaje de error "Película no encontrada"

  Scenario: Manejar detalles incompletos de una película
    Given el usuario visita la página de inicio "http://localhost:5173/"
    When navega a la página de detalles de una película con información incompleta "http://localhost:5173/movies/2"
    Then si falta el título, debería registrarse un mensaje de error "Título no encontrado"
    And si falta la sinopsis, debería registrarse un mensaje de error "Sinopsis no encontrada"
    And si faltan los horarios, debería registrarse un mensaje de error "Horarios no encontrados"
