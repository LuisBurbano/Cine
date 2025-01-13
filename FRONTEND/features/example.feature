Feature: Verificar la página principal del cine

  Scenario: El usuario accede a la página principal
    Given el usuario abre la página principal
    Then debería ver "Bienvenido a CineStar"
