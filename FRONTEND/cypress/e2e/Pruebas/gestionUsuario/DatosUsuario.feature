Feature: Datos de usuario

  Scenario: Ver datos de un usuario
    Given el usuario visita la página de datos del usuario "http://localhost:5173/user/1"
    Then debería ver el nombre del usuario "Nombre esperado del usuario"

  Scenario: Actualizar los datos de un usuario
    Given el usuario visita la página de edición de datos del usuario "http://localhost:5173/users/1/edit"
    When ingresa "NuevoNombre" en el campo de nombre
    And ingresa "NuevoApellido" en el campo de apellido
    And hace clic en el botón de actualizar
    Then debería ver el mensaje "Usuario actualizado"

  Scenario: Actualizar la contraseña de un usuario
    Given el usuario visita la página de edición de datos del usuario "http://localhost:5173/users/1/edit"
    When ingresa "NuevaContraseña123" en el campo de contraseña
    And ingresa "NuevaContraseña123" en el campo de confirmación de contraseña
    And hace clic en el botón de actualizar
    Then debería ver el mensaje "Usuario actualizado"

  Scenario: Intentar acceder a un usuario inexistente
    Given el usuario visita la página de datos del usuario "http://localhost:5173/users/9999"
    Then debería ver el mensaje "Usuario no encontrado"





