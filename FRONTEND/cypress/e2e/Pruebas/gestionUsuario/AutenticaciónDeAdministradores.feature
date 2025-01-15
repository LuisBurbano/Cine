Feature: Autenticación de administradores

  Scenario: Administrador puede autenticarse correctamente
    Given el administrador visita la página de inicio de sesión "http://localhost:5173/login"
    When ingresa su nombre de usuario "nandoadmin"
    And ingresa su contraseña "admin123"
    And hace clic en el botón de iniciar sesión
    Then debería ver el mensaje "Inicio de sesión exitoso"

  Scenario: Administrador no puede autenticarse con una contraseña incorrecta
    Given el administrador visita la página de inicio de sesión "http://localhost:5173/login"
    When ingresa su nombre de usuario "nandoadmin"
    And ingresa su contraseña "wrongpassword"
    And hace clic en el botón de iniciar sesión
    Then debería ver el mensaje "Contraseña incorrecta"

  Scenario: Administrador inexistente no puede autenticarse
    Given el administrador visita la página de inicio de sesión "http://localhost:5173/login"
    When ingresa su nombre de usuario "noadmin@email.com"
    And ingresa su contraseña "password123"
    And hace clic en el botón de iniciar sesión
    Then debería ver el mensaje "Usuario no encontrado"
