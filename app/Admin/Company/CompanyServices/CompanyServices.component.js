import template from './CompanyServices.template.html'
import componentStyles from './CompanyServices.scss'


class CompanyServicesController {
    constructor($http, $location) {
        this.componentName = 'companyServicesComponent';
        this.$http = $http;
        this.$location = $location;

        this.services = {
            companyId: '',
            serviceName: '',
            serviceDescription: '',
            serviceDuration: '',
            serviceSpaces: '',
            servicePrice: '',
            serviceLogo: '',
            serviceWorkingHours: ''
        }
        this.services.companyId = localStorage.getItem('id');

    }

    $onInit() {

        this.getCompany();
        console.log("dsads")


    }


    getCompany() {
        this.$http.get(API + 'companies/' + localStorage.getItem('id'))
            .then((result) => {
                this.company = result.data;

                // this.company.companyLogo = this.services.serviceLogo;
                this.services.serviceLogo = this.company.companyLogo;
                this.services.serviceWorkingHours = this.company.WorkingHours;
                console.log(this.company)

            });
    };


    Open(index) {
        console.log(index)
    }

    sendService() {
        this.$http.post('http://localhost:3000/services', this.services)
    }

    signOut() {
        localStorage.removeItem('id');
        this.$location.path("/#/login");
    }

    reset() {
        console.log("reset")
    }
}

const bidings = {
    someInput: '<',
    someOutput: '&'
}
const API = 'http://localhost:3000/';

export const companyServicesComponent = {
    controller: CompanyServicesController,
    controllerAs: '$ctrl',
    template,
    bidings,
    API
}