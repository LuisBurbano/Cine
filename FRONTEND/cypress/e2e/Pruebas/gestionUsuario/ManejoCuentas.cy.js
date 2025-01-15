describe('Pruebas de administración de cuentas de usuario', () => {
    const baseUrl = 'http://localhost:5000/api/users';
  
    it('Verifica que los administradores pueden ver todas las cuentas de usuario', () => {
      cy.visit(`${baseUrl}/users`);
  
      // Verificar que la lista de usuarios se muestra
      cy.get('#users-list').should('exist');
    });
  
    it('Verifica que los administradores pueden editar cuentas de usuario', () => {
      cy.visit(`${baseUrl}/users/1/edit`);  // Cambiar el ID según los datos existentes
  
      // Llenar los campos de edición
      cy.get('input[name="firstName"]').clear().type('UsuarioEditado');
      cy.get('input[name="lastName"]').clear().type('ApellidoEditado');
  
      // Enviar el formulario
      cy.get('#submit').click();
  
      // Verificar que los datos se han actualizado correctamente
      cy.get('#success-message').should('contain.text', 'Usuario actualizado');
    });
  
    it('Verifica que los administradores pueden eliminar cuentas de usuario', () => {
      cy.visit(`${baseUrl}/users/1`);  // Cambiar el ID según los datos existentes
  
      // Hacer clic en el botón de eliminar
      cy.get('#delete-button').click();
  
      // Confirmar eliminación (verifica que se muestre la alerta)
      cy.on('window:confirm', (confirmMessage) => {
        expect(confirmMessage).to.eq('¿Estás seguro de que quieres eliminar este usuario?'); // Cambiar el mensaje de confirmación si es necesario
        return true;
      });
  
      // Esperar la respuesta
      cy.wait(2000);
  
      // Verificar que la cuenta ha sido eliminada
      cy.get('#success-message').should('contain.text', 'Usuario eliminado');
    });
  
    it('Verifica que los administradores pueden editar otras cuentas de administrador', () => {
      cy.visit(`${baseUrl}/users/2/edit`);  // Cambiar el ID según los datos existentes
  
      // Llenar los campos de edición
      cy.get('input[name="firstName"]').clear().type('AdminEditado');
      cy.get('input[name="lastName"]').clear().type('AdminApellidoEditado');
  
      // Enviar el formulario
      cy.get('#submit').click();
  
      // Verificar que los datos se han actualizado correctamente
      cy.get('#success-message').should('contain.text', 'Usuario actualizado');
    });
  });
  