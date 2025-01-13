Feature: Verificar la página Cartelera

  Scenario: El usuario accede a la página de cartelera
    Given el usuario está en la página principal
    When el usuario navega a "/cartelera"
    Then debería ver "Cartelera de películas"
