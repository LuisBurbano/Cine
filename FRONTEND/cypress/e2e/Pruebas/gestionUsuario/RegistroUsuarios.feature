Feature: Registro de usuarios

  Scenario: Registrar un usuario correctamente
    Given el usuario visita la página de registro "http://localhost:5173/register"
    When ingresa "nuevo_usuario" en el campo de nombre de usuario
    And ingresa "usuario@email.com" en el campo de correo electrónico
    And ingresa "password123" en el campo de contraseña
    And ingresa "password123" en el campo de confirmar contraseña
    And ingresa "Nombre" en el campo de nombre
    And ingresa "Apellido" en el campo de apellido
    And selecciona "Usuario" en el campo de rol
    And hace clic en el botón de registrar
    Then debería ver el mensaje "Registro exitoso"

  Scenario: Intentar registrar un usuario con un correo electrónico existente
    Given el usuario visita la página de registro "http://localhost:5173/register"
    When ingresa "usuario_existente" en el campo de nombre de usuario
    And ingresa "existente@email.com" en el campo de correo electrónico
    And ingresa "password123" en el campo de contraseña
    And ingresa "password123" en el campo de confirmar contraseña
    And ingresa "Nombre" en el campo de nombre
    And ingresa "Apellido" en el campo de apellido
    And selecciona "Usuario" en el campo de rol
    And hace clic en el botón de registrar
    Then debería ver el mensaje "El correo electrónico ya está registrado"

  Scenario: Intentar registrar un usuario con contraseñas que no coinciden
    Given el usuario visita la página de registro "http://localhost:5173/register"
    When ingresa "usuario_contraseña" en el campo de nombre de usuario
    And ingresa "usuario@mismatch.com" en el campo de correo electrónico
    And ingresa "password123" en el campo de contraseña
    And ingresa "password124" en el campo de confirmar contraseña
    And ingresa "Nombre" en el campo de nombre
    And ingresa "Apellido" en el campo de apellido
    And selecciona "Usuario" en el campo de rol
    And hace clic en el botón de registrar
    Then debería ver el mensaje "Las contraseñas no coinciden"
