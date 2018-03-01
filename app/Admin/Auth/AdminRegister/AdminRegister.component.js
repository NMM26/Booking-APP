import template from './AdminRegister.template.html'
import componentStyles from './AdminRegister.scss'

class AdminRegisterController {
    constructor($http, $scope, $location) {
        this.componentName = 'adminRegisterComponent';
        this.$http = $http;
        this.$scope = $scope;
        this.$location = $location;
        this.companies = {
            name: '',
            email: '',
            password: ''
        };
    }

    $onInit() {}
    post() {
        this.$http.post('http://localhost:3000/companies', JSON.stringify(this.user))
            .then(function(response) {
                console.log(response.data);
            })
        this.user.name = '';
        this.user.email = '';
        this.user.password = '';
        this.SuccessRegister = true;
        this.$location.path("/Login");
    }
}


const bindings = {
    someInput: '<',
    someOutput: '&'
}



export const adminRegisterComponent = {
    controller: AdminRegisterController,
    controllerAs: '$ctrl',
    template,
    bindings
}