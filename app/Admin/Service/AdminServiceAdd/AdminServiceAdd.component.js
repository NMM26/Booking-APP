import template from './AdminServiceAdd.template.html'
import componentStyles from './AdminServiceAdd.scss'

class AdminServiceController {
    constructor($http, $location) {
        this.componentName = 'adminServiceAddComponent';
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
            serviceWorkingHours: [],
            disponibleSpots: [],
            CompanyWorkingHours: []
        }
        this.services.companyId = localStorage.getItem('id');
        this.spots = [1, 2, 3, 4, 5]
        this.days = [1, 2]
    }

    $onInit() {
        this.getCompany();
    }

    getCompany(day, hour) {
        this.$http.get(API + 'companies/' + localStorage.getItem('id'))
            .then((result) => {
                this.company = result.data;
                this.services.serviceLogo = this.company.companyLogo;
                this.services.CompanyWorkingHours = this.company.WorkingHours
                console.log(this.company)
                    // console.log(this.company.WorkingHours)
                for (let x = this.company.WorkingHours.OpenFrom; x <= this.company.WorkingHours.CloseTo; x++) {
                    this.services.serviceWorkingHours.push(x)
                }
                // console.log(this.services.serviceWorkingHours)


            });
    };

    sendService() {
        this.$http.post('http://localhost:3000/services', this.services)
        this.AlertSucces = true;
    }

    signOut() {
        localStorage.removeItem('id');
        this.$location.path("/#/login");
    }

    sendSpot(day, hour, status) {
        console.log(day, hour, status)
        this.services.disponibleSpots.push({ day, hour, status })
            // console.log(this.services.disponibleSpots)
    }
}


const bidings = {
    someInput: '<',
    someOutput: '&'
}
const API = 'http://localhost:3000/';

export const adminServiceAddComponent = {
    controller: AdminServiceController,
    controllerAs: '$ctrl',
    template,
    bidings,
    API
}