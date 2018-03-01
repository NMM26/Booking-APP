import template from './ServiceList.template.html'
import componentStyles from './ServiceList.scss'

class ServiceListController {
    constructor($http, $window, $location) {
        this.componentName = 'serviceListComponent';
        this.$http = $http;
        // this.servicesList = [];
        // this.companyList = [];
        this.counter = 0;
        this.showAllBtn = false;
        this.$window = $window;
        this.$location = $location;
        this.booking = {
            bookingName: '',
            bookingEmail: '',
            bookingPhone: '',
            serviceID: '',
            companyID: ''
        };
        this.word = [];
        this.bookingForm = true;
        this.sendMsg = false;


    }

    $onInit() {
        this.getServices();
        this.getCompany();
    }

    getServices() {
        this.$http.get(API + 'services')
            .then((result) => {
                this.servicesList = result.data;
                this.counter = this.servicesList.length;
                console.log(result.data)
            });
    }

    getCompany() {
        this.$http.get(API + 'companies')
            .then((result) => {
                this.company = result.data;
            });


    };


    sortDesc() {
        this.$http.get(API + 'services?_sort=id&_order=desc')
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
        {
            this.$http.get(API + 'services')
                .then((result) => {
                    this.servicesList = result.data;
                    this.counter = this.servicesList.length;
                });
            this.showAllBtn = false;
            thithis.$window.scrollTo(0, 0);
            s.ShowCompanyDetalis = false;
        }

    }

    BookNowBtn(item) {
        this.newBookingID = item.id;
        this.newBookingCompanyId = item.companyId;
    }

    SendBooking() {
        {
            this.booking.serviceID = this.newBookingID;
            this.booking.companyID = this.newBookingCompanyId;
            this.$http.post(API + 'bookings', this.booking)
                .then(function(response) {

                })
        }
        this.showAllBtn = true;
        this.bookingForm = false;
        this.sendMsg = true;
    }

    companyDetails(item) {


        this.$http.get(API + 'services?companyId=' + item.companyId)
            .then((result) => {
                this.servicesList = result.data;
                this.counter = this.servicesList.length;
            });

        this.$http.get(API + 'companies?id=' + item.companyId)
            .then((result) => {
                this.company = result.data;
                console.log(result.data)
                console.log(this.company[0].companyName)

            });
        this.CompanyName = this.company[0].companyName;
        this.CompanyDescription = this.company[0].companyDesc;
        this.CompanyLogo = this.company[0].companyLogo;
        this.$window.scrollTo(0, 0);
        this.showAllBtn = true;
        this.ShowCompanyDetalis = true;
    }

    Search($event, word) {
        // console.log(event)
        console.log(this.word)
            // this.word = [];
        if (event.key === "Enter") {
            this.$http.get(API + 'services?serviceName=' + this.word)
                .then((result) => {
                    this.servicesList = result.data;
                    this.counter = this.servicesList.length;
                });
            this.showAllBtn = true;
        }
    }

    GoUp() {
        this.$location.path("/login");

    }
}

const bidings = {
    someInput: '<',
    someOutput: '&'
}

const API = 'http://localhost:3000/';

export const serviceListComponent = {
    controller: ServiceListController,
    controllerAs: '$ctrl',
    template,
    bidings,
    API
}