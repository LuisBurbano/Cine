describe('Pruebas de visualización y actualización de datos de usuario', () => {
    const baseUrl = 'http://localhost:5000/api/users';
  
    it('Verifica que se puede ver la información del usuario', () => {
      cy.visit(`${baseUrl}/user/1`);  // Cambiar el ID según los datos existentes
  
      // Verificar que los datos del usuario se muestran correctamente
      cy.get('#user-name').should('have.text', 'Nombre esperado del usuario'); // Reemplazar con el nombre esperado
    });
  
    it('Verifica que se pueden actualizar los datos del usuario', () => {
      cy.visit(`${baseUrl}/users/1/edit`);  // Cambiar el ID según los datos existentes
  
      // Llenar los campos de actualización
      cy.get('input[name="firstName"]').clear().type('NuevoNombre');
      cy.get('input[name="lastName"]').clear().type('NuevoApellido');
  
      // Enviar el formulario
      cy.get('#submit').click();
  
      // Verificar que los datos se han actualizado correctamente
      cy.get('#success-message').should('contain.text', 'Usuario actualizado');
    });
  
    it('Verifica que se puede actualizar la contraseña del usuario', () => {
      cy.visit(`${baseUrl}/users/1/edit`);  // Cambiar el ID según los datos existentes
  
      // Llenar los campos de actualización de contraseña
      cy.get('input[name="password"]').clear().type('NuevaContraseña123');
      cy.get('input[name="confirmPassword"]').clear().type('NuevaContraseña123');
  
      // Enviar el formulario
      cy.get('#submit').click();
  
      // Verificar que la contraseña se ha actualizado correctamente
      cy.get('#success-message').should('contain.text', 'Usuario actualizado');
    });
  
    it('Verifica el manejo de errores al intentar acceder a un usuario inexistente', () => {
      cy.visit(`${baseUrl}/users/9999`);  // ID no válido
  
      // Verificar el mensaje de error
      cy.get('#error-message').should('contain.text', 'Usuario no encontrado');
    });
  });
  