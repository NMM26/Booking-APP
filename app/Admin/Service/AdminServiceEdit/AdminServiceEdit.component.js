import template from './AdminServiceEdit.template.html'
import componentStyles from './AdminServiceEdit.scss'

class AdminServiceEditController {
    constructor($http, $location, $rootScope) {
        this.componentName = 'adminServiceEditComponent';
        this.$http = $http;
        this.$location = $location;


    }

    $onInit() {
        if (localStorage.getItem('id')) {
            this.GetService()

        }
    }

    GetService() {

        this.$http.get(API + 'services?id=' + localStorage.getItem('serviceID'))
            .then((result) => {
                this.services = result.data[0];
                localStorage.removeItem('serviceID');
            });
    }

    sendService() {
        this.$http.put(API + 'services/' + this.services.id, this.services)
        this.AlertSucces = true;

    }

    // saveServiceChanges(curent) {
    //     console.log(this.curent.id)
    //     this.$http.put(API + 'services/' + this.curent.id, this.curent)
    //     this.SuccesEdit = true;
    // }
}


const bidings = {
    someInput: '<',
    someOutput: '&'
}
const API = 'http://localhost:3000/';

export const adminServiceEditComponent = {
    controller: AdminServiceEditController,
    controllerAs: '$ctrl',
    template,
    bidings,
    API
}