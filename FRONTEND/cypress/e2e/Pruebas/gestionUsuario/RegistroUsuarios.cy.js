describe('Pruebas de registro de usuario', () => {
    const baseUrl = 'http://localhost:5000/api/users/register';
  
    it('Verifica que un usuario puede registrarse correctamente', () => {
      cy.visit(baseUrl);
  
      // Llenar campos del formulario de registro de usuario
      cy.get('input[name="username"]').type('nuevo_usuario');
      cy.get('input[name="email"]').type('usuario@email.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('input[name="confirmPassword"]').type('password123');
      cy.get('input[name="firstName"]').type('Nombre');
      cy.get('input[name="lastName"]').type('Apellido');
      cy.get('input[name="role"]').type('Usuario');
  
      // Enviar el formulario
      cy.get('#submit').click();
  
      // Verificar que el mensaje de éxito aparece
      cy.get('#success-message').should('contain.text', 'Registro exitoso');
    });
  
    it('Verifica que no se pueda registrar un usuario con un correo ya existente', () => {
      cy.visit(baseUrl);
  
      // Llenar campos del formulario con un correo existente
      cy.get('input[name="username"]').type('usuario_existente');
      cy.get('input[name="email"]').type('existente@email.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('input[name="confirmPassword"]').type('password123');
      cy.get('input[name="firstName"]').type('Nombre');
      cy.get('input[name="lastName"]').type('Apellido');
      cy.get('input[name="role"]').type('Usuario');
  
      // Enviar el formulario
      cy.get('#submit').click();
  
      // Verificar el mensaje de error
      cy.get('#error-message').should('contain.text', 'El correo electrónico ya está registrado');
    });
  
    it('Verifica que no se pueda registrar un usuario si las contraseñas no coinciden', () => {
      cy.visit(baseUrl);
  
      // Llenar campos del formulario con contraseñas diferentes
      cy.get('input[name="username"]').type('usuario_contraseña');
      cy.get('input[name="email"]').type('usuario@mismatch.com');
      cy.get('input[name="password"]').type('password123');
      cy.get('input[name="confirmPassword"]').type('password124');
      cy.get('input[name="firstName"]').type('Nombre');
      cy.get('input[name="lastName"]').type('Apellido');
      cy.get('input[name="role"]').type('Usuario');
  
      // Enviar el formulario
      cy.get('#submit').click();
  
      // Verificar el mensaje de error
      cy.get('#error-message').should('contain.text', 'Las contraseñas no coinciden');
    });
  });
  