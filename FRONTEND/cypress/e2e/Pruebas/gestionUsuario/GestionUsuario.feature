Feature: Autenticación de usuarios

  Scenario: Usuario puede autenticarse correctamente
    Given el usuario visita la página de inicio de sesión "http://localhost:5173/login"
    When ingresa su nombre de usuario "nando"
    And ingresa su contraseña "qwert123"
    And hace clic en el botón de iniciar sesión
    Then debería ver el mensaje "Inicio de sesión exitoso"

  Scenario: Usuario no puede autenticarse con una contraseña incorrecta
    Given el usuario visita la página de inicio de sesión "http://localhost:5173/login"
    When ingresa su nombre de usuario "usuario@email.com"
    And ingresa su contraseña "wrongpassword"
    And hace clic en el botón de iniciar sesión
    Then debería ver el mensaje "Contraseña incorrecta"

  Scenario: Usuario inexistente no puede autenticarse
    Given el usuario visita la página de inicio de sesión "http://localhost:5173/login"
    When ingresa su nombre de usuario "inexistente@email.com"
    And ingresa su contraseña "password123"
    And hace clic en el botón de iniciar sesión
    Then debería ver el mensaje "Usuario no encontrado"
