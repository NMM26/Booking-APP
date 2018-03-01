import template from './CompanyAdd.template.html'
import componentStyles from './CompanyAdd.scss'


class CompanyAddController {
    constructor($http, $location) {
        this.componentName = 'companyAddComponent';
        this.$http = $http;
        this.$location = $location;
        this.company = {};
        this.servicesList = [];
    }
    $onInit() {
        if (localStorage.getItem('id')) {
            this.getCompany();
        }
    }

    getServices() {
        this.$http.get(API + 'services')
            .then((result) => {
                this.servicesList = result.data;
                this.counter = this.servicesList.length;
            });
    }

    getCompany() {
        this.$http.get(API + 'companies/' + localStorage.getItem('id'))
            .then((result) => {
                this.company = result.data;
            });
    };

    signOut() {
        localStorage.removeItem('id');
        this.$location.path("/");
    }

    saveCompany() {
        this.$http.put(API + 'companies/' + this.company.id, this.company)
        this.$location.path("/addService");

    }
}



const bidings = {
    someInput: '<',
    someOutput: '&'
}

const API = 'http://localhost:3000/';

export const companyAddComponent = {
    controller: CompanyAddController,
    controllerAs: '$ctrl',
    template,
    bidings,
    API
}