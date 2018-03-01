import template from './AdminRecover.template.html'
import componentStyles from './AdminRecover.scss'

class AdminRecoverController {
    constructor($http) {
        this.componentName = 'adminRecoverComponent';
        this.$http = $http;
        this.user = {
            email: ''
        }
    }

    $onInit() {
        console.log('hi there, I am', this.componentName);
    }
    recover() {
        alert("Email send");


    }
}

const bindings = {
    someInput: '<',
    someOutput: '&'
}

export const adminRecoverComponent = {
    controller: AdminRecoverController,
    controllerAs: '$ctrl',
    template,
    bindings
}