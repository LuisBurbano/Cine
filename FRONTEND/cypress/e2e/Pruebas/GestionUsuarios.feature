Feature: Gestión de usuarios

  Scenario: Registrar un usuario con datos válidos
    Given el usuario visita la página de inicio "http://localhost:5173/"
    When el usuario navega a la página de registro "http://localhost:5173/register"
    And ingresa su nombre "Usuario"
    And ingresa su apellido "Prueba"
    And ingresa su nombre de usuario "usuarioPrueba"
    And ingresa su correo electrónico "usuario@prueba.com"
    And ingresa su contraseña "contraseñaSegura123"
    And confirma su contraseña "contraseñaSegura123"
    Then hace clic en el botón de registrar

  Scenario: Iniciar sesión con credenciales válidas
    Given el usuario visita la página de inicio "http://localhost:5173/"
    When el usuario navega a la página de inicio de sesión "http://localhost:5173/login"
    And ingresa su nombre de usuario o correo "usuarioPrueba"
    And ingresa su contraseña "contraseñaSegura123"
    Then hace clic en el botón de iniciar sesión
    And verifica que el botón de perfil existe
    And verifica que el botón de cerrar sesión existe