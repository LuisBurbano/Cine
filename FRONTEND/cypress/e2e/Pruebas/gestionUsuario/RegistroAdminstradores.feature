Feature: Registro de administradores

  Scenario: Registrar un administrador correctamente
    Given el administrador visita la página de registro "http://localhost:5173/register"
    When ingresa "admin_usuario" en el campo de nombre de usuario
    And ingresa "admin@email.com" en el campo de correo electrónico
    And ingresa "adminpassword123" en el campo de contraseña
    And ingresa "adminpassword123" en el campo de confirmar contraseña
    And ingresa "AdminNombre" en el campo de nombre
    And ingresa "AdminApellido" en el campo de apellido
    And selecciona "Administrador" en el campo de rol
    And hace clic en el botón de registrar
    Then debería ver el mensaje "Registro exitoso"

  Scenario: Intentar registrar un administrador con un correo electrónico existente
    Given el administrador visita la página de registro "http://localhost:5173/register"
    When ingresa "admin_existente" en el campo de nombre de usuario
    And ingresa "admin@email.com" en el campo de correo electrónico
    And ingresa "adminpassword123" en el campo de contraseña
    And ingresa "adminpassword123" en el campo de confirmar contraseña
    And ingresa "AdminNombre" en el campo de nombre
    And ingresa "AdminApellido" en el campo de apellido
    And selecciona "Administrador" en el campo de rol
    And hace clic en el botón de registrar
    Then debería ver el mensaje "El correo electrónico ya está registrado"

  Scenario: Intentar registrar un administrador con contraseñas que no coinciden
    Given el administrador visita la página de registro "http://localhost:5173/register"
    When ingresa "admin_contraseña" en el campo de nombre de usuario
    And ingresa "admin@mismatch.com" en el campo de correo electrónico
    And ingresa "adminpassword123" en el campo de contraseña
    And ingresa "adminpassword124" en el campo de confirmar contraseña
    And ingresa "AdminNombre" en el campo de nombre
    And ingresa "AdminApellido" en el campo de apellido
    And selecciona "Administrador" en el campo de rol
    And hace clic en el botón de registrar
    Then debería ver el mensaje "Las contraseñas no coinciden"
