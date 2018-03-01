import template from './AdminLogin.template.html'
import componentStyles from './AdminLogin.scss'


class AdminLoginController {
    constructor($http, $location) {
        this.componentName = 'adminLoginComponent';
        this.$http = $http;
        this.$location = $location;
        this.loginAccount = [];
    }

    $onInit() {};

    Login() {
        this.$http.get('http://localhost:3000/companies?email_like=' + this.user.email)
            .then((result) => {
                result.data.forEach(element => {
                    if (element.password === this.user.password) {
                        this.loginAccount = element;
                        localStorage.setItem('id', element.id)
                        this.$location.path("/addCompany");
                        // this.loginPage = false;
                    } else {
                        // alert('Your username or password is not corect');
                        this.LoginError = true;
                    }
                });

            });
    };
}



const bindings = {
    someInput: '<',
    someOutput: '&'
}

export const adminLoginComponent = {
    controller: AdminLoginController,
    controllerAs: '$ctrl',
    template,
    bindings,
}