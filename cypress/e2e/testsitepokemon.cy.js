describe('Покупка аватара', function () {  // название набора тестов
   it('e2e тест на покупку ', function () {  // название теста
      cy.visit('https://poker'); // Посетили сайт
      cy.get('input[type="email"]').type(''); // вводим логин
      cy.get('input[type="password"]').type(''); // вводим пароль
      cy.get('.auth__button').click(); // Нажали войти
      cy.get('.header__btns > [href="/shop"]').click(); // нажимаем кнопку Магазин
      cy.get(':nth-child(3) > .shop__button').click(); // кликаем по кнопке Купить у первого доступного аватара
      cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996'); // вводим номер карты
      cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // вводим CVV карты
      cy.get(':nth-child(1) > .pay_base-input-v2').type('1225'); // вводим срок действия карты
      cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Ruslan'); // вводим имя владельца действия карты
      cy.get('.pay-btn').click();  // нажимаем кнопку Оплатить
      cy.get('#cardnumber').type('56456'); // вводим код подтверждения СМС
      cy.get('.payment__submit-button').click(); // нажимаем кнопку Отправить
      cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке

      });
 });
