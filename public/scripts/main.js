import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login.jsx';

var loginComponent = ReactDOM.render(
    <Login
        // initiallyHidden
        isLabeled
        initialTab='registration'

        recaptcha={{key: '6LeYayYTAAAAAFbNsjbF6PPy2tCnt3ioaloaFmhz'}}

        tabs={[
            {'id': 'enter', 'url': '/login'},
            {'id': 'registration', 'url': '/registration'},
            {'id': 'reminder', 'url': '/login/reminder'}
        ]}

        locale={{
            'lang': 'ru',

            // Tabs
            'enter': 'Вход',
            'registration': 'Регистрация',
            'reminder': 'Восстановление пароля',

            // Login tab
            'username_or_email': 'Логин или эл. почта',
            'password': 'Пароль',
            'keep_me_logged_in': 'Запомнить меня',
            'sign_in': 'Войти',

            // Registration tab
            'username': 'Логин',
            'email': 'Эл. почта',
            'repeat_password': 'Повторите пароль',
            'sign_up': 'Зарегистрироваться',

            // Remind
            'your_email': 'Ваша эл. почта',
            'remind_password': 'Выслать ссылку на изменение пароля',
            
            // Password validation messages
            'passwords_do_not_match': 'Пароли должны совпадать',
            'empty_repeated_password': 'Необходимо ввести пароль повторно',
            'entered_correctly': 'Введено верно',
            'password_too_short': 'Пароль слишком короткий',
            'password_too_simple': 'Пароль слишком простой',

            // Login default validation messages
            'username_available': 'Логин свободен',
            'username_not_available': 'Логин занят',
            'empty_username': 'Необходимо ввести логин',
            'invalid_username': 'Логин может состоять только из латинских букв и знака подчеркивания',
            'username_too_short': 'Слишком короткий логин',
            
            // Email default validation messages
            'valid_email': 'Эл. почта введена верно, на нее будет отправлено письмо',
            'invalid_email': 'Эл. почта не соответствует формату name@email.ru',
            'empty_email': 'Необходимо указать адрес эл. почты'
        }}

        onLogin={({login, password, remember}, onSuccess, onError) => {
            if (login.length > 0 && password.length > 0) { // stub method
                onSuccess('Вход осуществлен');
            }
            else {
                onError('Не удалось войти');
            }
        }}
        onRegister={({login, email, password, repeatedPassword}, onSuccess, onError) => {
            if (login.length > 0 && email.length > 0
                    && password.length > 0 && repeatedPassword.length > 0
                    && (password === repeatedPassword)) { // stub method
                onSuccess('Регистрация прошла успешно');
            }
            else {
                onError('Регистрация не прошла');
            }
        }}
        onRemind={({email}, onSuccess, onError)=>{
            if (email.length > 0) {  // stub method
                onSuccess('Восстановление пароля прошло успешно');
            }
            else {
                onError('Пароль не восстановлен');
            }
        }}

        onValidate={()=>{}}

    />, document.getElementById('login')
);

document.getElementById('sign-in').addEventListener('click', ()=>{
    loginComponent.show('enter');
});

document.getElementById('sign-up').addEventListener('click', ()=>{
    loginComponent.show('registration');
});
