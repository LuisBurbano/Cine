Feature: Manejo de cuentas

  Scenario: Ver todas las cuentas de usuario
    Given el administrador visita la página de usuarios "http://localhost:5173/users"
    Then debería ver la lista de usuarios

  Scenario: Editar una cuenta de usuario
    Given el administrador visita la página de edición de la cuenta del usuario "http://localhost:5173/users/1/edit"
    When ingresa "UsuarioEditado" en el campo de nombre
    And ingresa "ApellidoEditado" en el campo de apellido
    And hace clic en el botón de actualizar
    Then debería ver el mensaje "Usuario actualizado"

  Scenario: Eliminar una cuenta de usuario
    Given el administrador visita la página de detalles de la cuenta del usuario "http://localhost:5173/users/1"
    When hace clic en el botón de eliminar
    And confirma la eliminación en la alerta
    Then debería ver el mensaje "Usuario eliminado"

  Scenario: Editar una cuenta de administrador
    Given el administrador visita la página de edición de la cuenta del administrador "http://localhost:5173/users/2/edit"
    When ingresa "AdminEditado" en el campo de nombre
    And ingresa "AdminApellidoEditado" en el campo de apellido
    And hace clic en el botón de actualizar
    Then debería ver el mensaje "Usuario actualizado"
