import template from './AdminServiceList.template.html'
import componentStyles from './AdminServiceList.scss'

class AdminServiceListController {
    constructor($http, $location) {
        this.componentName = 'adminServiceListComponent';
        this.$http = $http;
        this.$location = $location;
        this.WorkingHours = [];
        // this.newItem = [];
        // this.bookingList = [];




    }

    $onInit() {
        if (localStorage.getItem('id')) {
            this.getCompany();
            this.companyDetails()
            this.getBookings()



        }
    }

    getCompany() {
        this.$http.get(API + 'companies/' + localStorage.getItem('id'))
            .then((result) => {
                this.company = result.data;
            });
    };

    companyDetails() {
        this.$http.get(API + 'services?companyId=' + localStorage.getItem('id'))
            .then((result) => {
                this.servicesList = result.data;
                this.counter = this.servicesList.length;
            });
    }
    getBookings() {
        this.$http.get(API + 'bookings/')
            .then((result) => {
                this.bookingList = result.data;
            });
    };

    deleteService(item) {
        console.log(item)
        if (confirm('Are you sure you wanna delete this service?')) {
            this.$http.delete(API + 'services/' + item.id)
                .then((result) => {
                    this.servicesList.splice(this.servicesList.indexOf(item), 1);
                });
            this.itemDeleted = true;
        }
    }

    sortDesc() {
        this.$http.get(API + 'services?_sort=id&_order=desc' + localStorage.getItem('id'))
            .then((result) => {
                this.servicesList = result.data;
            });
    }

    sortAsc() {
        this.$http.get(API + 'services?_sort=id&_order=asc')
            .then((result) => {
                this.servicesList = result.data;
            });
    }

    showAll() {
        this.companyDetails();
    }

    sortAsc() {
        this.$http.get(API + 'services?_sort=id&_order=asc')
            .then((result) => {
                this.servicesList = result.data;
            });
    }

    ViewBookings(item) {
        this.bookingServiceName = item.serviceName;
        this.$http.get(API + 'bookings?serviceID=' + item.id)
            .then((result) => {
                this.bookingList = result.data;
            });
    }

    deleteBooking(booking) {
        console.log(booking)
        if (confirm('Are you sure you wanna delete this booking?')) {
            this.$http.delete(API + 'bookings/' + booking.id)
                .then((result) => {
                    this.bookingList.splice(this.bookingList.indexOf(booking), 1);
                });
        }
    }

    editService(item) {
        localStorage.setItem('serviceID', item.id)
        this.$location.path("/editService");
        this.curent = item;
        // console.log(item)
    }

    QuickEdit(item) {
        this.curent = item;

    }

    saveServiceChanges(curent) {
        console.log(this.curent.id)
        this.$http.put(API + 'services/' + this.curent.id, this.curent)
        this.SuccesEdit = true;


    }

}

const bidings = {
    someInput: '<',
    someOutput: '&'
}
const API = 'http://localhost:3000/';

export const adminServiceListComponent = {
    controller: AdminServiceListController,
    controllerAs: '$ctrl',
    template,
    bidings,
    API
}