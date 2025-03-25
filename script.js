'use strict'

const App = {
    data() {
        return {
            value: 0,
            passwordValue: '',
            uppercaseRegex: /[A-Z].*[A-Z]/,
            lowercaseRegex: /[a-z].*[a-z].*[a-z].*[a-z].*[a-z]/,
            digitRegex: /.*\d.*\d/,
            specialCharRegex: /[!@#$%^&*(),.?":{}|<>]/,
            result:''
        }
    },
    methods: {
        consoleLod() {
            console.log(this.passwordValue)
        },
        checkPassword() {
            if (!this.uppercaseRegex.test(this.passwordValue)) {
                return {
                    message: "Пароль должен содержать как минимум 2 заглавных латинских символа"
                };
            }
            if (!this.lowercaseRegex.test(this.passwordValue)) {
                return {
                    message: "Пароль должен содержать как минимум 5 строчных латинских символов."
                };
            }
            if (!this.digitRegex.test(this.passwordValue)) {
                return {
                    message: "Пароль должен содержать как минимум 2 цифры."
                };
            }
            if (!this.specialCharRegex.test(this.passwordValue)) {
                return {
                    message: "Пароль должен содержать как минимум 1 специальный символ."
                };
            }

            return {
                message: "Пароль корректен!",
            };
        }

    },
    watch: {
        passwordValue(value) {
            if (value.length > 14) {
                this.passwordValue = value.slice(0, 14)
            } else {
               let res = this.checkPassword();
               this.result = res.message
            }
        },
        
    }
}



const app = Vue.createApp(App);
app.mount('#main')