describe('Pruebas de registro de administrador', () => {
    const baseUrl = 'http://localhost:5000/api/users';
  
    it('Verifica que un administrador puede registrarse correctamente', () => {
      cy.visit(`${baseUrl}/register`);
  
      // Llenar campos del formulario de registro de administrador
      cy.get('input[name="username"]').type('admin_usuario');
      cy.get('input[name="email"]').type('admin@email.com');
      cy.get('input[name="password"]').type('adminpassword123');
      cy.get('input[name="confirmPassword"]').type('adminpassword123');
      cy.get('input[name="firstName"]').type('AdminNombre');
      cy.get('input[name="lastName"]').type('AdminApellido');
      cy.get('input[name="role"]').type('Administrador');
  
      // Enviar el formulario
      cy.get('#submit').click();
  
      // Verificar que el mensaje de éxito aparece
      cy.get('#success-message').should('contain.text', 'Registro exitoso');
    });
  
    it('Verifica que no se pueda registrar un administrador con un correo ya existente', () => {
      cy.visit(`${baseUrl}/register`);
  
      // Llenar campos del formulario con un correo existente
      cy.get('input[name="username"]').type('admin_existente');
      cy.get('input[name="email"]').type('admin@email.com');
      cy.get('input[name="password"]').type('adminpassword123');
      cy.get('input[name="confirmPassword"]').type('adminpassword123');
      cy.get('input[name="firstName"]').type('AdminNombre');
      cy.get('input[name="lastName"]').type('AdminApellido');
      cy.get('input[name="role"]').type('Administrador');
  
      // Enviar el formulario
      cy.get('#submit').click();
  
      // Verificar el mensaje de error
      cy.get('#error-message').should('contain.text', 'El correo electrónico ya está registrado');
    });
  
    it('Verifica que no se pueda registrar un administrador si las contraseñas no coinciden', () => {
      cy.visit(`${baseUrl}/register`);
  
      // Llenar campos del formulario con contraseñas diferentes
      cy.get('input[name="username"]').type('admin_contraseña');
      cy.get('input[name="email"]').type('admin@mismatch.com');
      cy.get('input[name="password"]').type('adminpassword123');
      cy.get('input[name="confirmPassword"]').type('adminpassword124');
      cy.get('input[name="firstName"]').type('AdminNombre');
      cy.get('input[name="lastName"]').type('AdminApellido');
      cy.get('input[name="role"]').type('Administrador');
  
      // Enviar el formulario
      cy.get('#submit').click();
  
      // Verificar el mensaje de error
      cy.get('#error-message').should('contain.text', 'Las contraseñas no coinciden');
    });
  });
  