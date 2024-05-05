describe('Автотест форма логина', function () {
   it('Верный логин и верный пароль', function () {
        cy.visit('https://login/'); // Посетили сайт
        cy.get('#mail').type('vasiy2@gmail.com'); // Ввели логин
        cy.get('#pass').type('iL'); // Ввели пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Проверка что текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно') // Проверка на успешную авторизацию
    })

   it('Автотест проверка формы восстановления пароля', function () {
        cy.visit('https://login/'); // Посетили сайт
        cy.get('#forgotEmailButton').click() // Нажали забыли пароль
        cy.get('#forgotForm > .header').should('be.visible'); // Надпись видима
        cy.get('#forgotForm > .header').contains('Восстановите пароль') // Совпадение текста
        cy.get('#mailForgot').type('rus@gmail.com') // Ввели почту
        cy.get('#restoreEmailButton').click() // Нажали отправить код
        cy.get('#messageHeader').should('be.visible') // Проверка что текст виден
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail') // Проверка на успешную отправку сообщения
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка что есть крестик и он видимый
    }) 


   it('Автотест неправильный пароль', function () {
        cy.visit('https://login/'); // Посетили сайт
        cy.get('#mail').type('vasiy2@gmail.com'); // Ввели логин
        cy.get('#pass').type('iL'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Надпись видима
        cy.get('#messageHeader').contains('Такого логина или пароля нет') // Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка что есть крестик и он видимый
    })

   it('Автотест не правильный логин', function () {
        cy.visit('https://login/'); // Посетили сайт
        cy.get('#mail').type('vasiy2@gmail.com'); // Ввели логин
        cy.get('#pass').type('iL'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Надпись видима
        cy.get('#messageHeader').contains('Такого логина или пароля нет') // Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка что есть крестик и он видимый
   })
 
   it('Автотест на валидацию в логине', function () {
        cy.visit('https://login'); // Посетили сайт
        cy.get('#mail').type('vasiy2@gmail.com'); // Ввели логин
        cy.get('#pass').type('iL'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Надпись видима
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации') // Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка что есть крестик и он видимый
   })

   it('Автотест строчные буквы в логине', function () {
        cy.visit('https://login'); // Посетили сайт
        cy.get('#mail').type('vasiy2@gmail.com'); // Ввели логин
        cy.get('#pass').type('iL'); // Ввели неверный пароль
        cy.get('#loginButton').click(); // Нажали войти
        cy.get('#messageHeader').should('be.visible'); // Надпись видима
        cy.get('#messageHeader').contains('Такого логина или пароля нет') // Совпадение текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible') // Проверка что есть крестик и он видимый
   })

})



