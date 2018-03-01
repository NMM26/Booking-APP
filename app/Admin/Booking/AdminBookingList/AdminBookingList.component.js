import template from './AdminBookingList.template.html'
import componentStyles from './AdminBookingList.scss'

class AdminBookingListController {
    constructor($http) {
        this.componentName = 'AdminBookingListComponent';
        this.$http = $http;
        this.booking = {
            bookingDone: 'check',
        };
        this.checkButton = true;
        this.uncheckButton = true;
    }

    $onInit() {
        this.ViewAllBookings();
        this.GetServices();
        this.showAll = false;
        this.class = true;
    }

    ViewAllBookings() {
        this.$http.get(API + 'bookings?companyID=' + localStorage.getItem('id'))
            .then((result) => {
                this.bookingList = result.data;
            });
    }

    deleteBooking(booking) {
        if (confirm('Are you sure you wanna delete this booking?')) {
            this.$http.delete(API + 'bookings/' + booking.id)
                .then((result) => {
                    this.bookingList.splice(this.bookingList.indexOf(booking), 1);
                });
        }
    }


    checkBooking(booking) {
        this.booking.bookingDone = 'Done';
        this.$http.patch(API + 'bookings/' + booking.id, this.booking)
    }

    unsolvedBooking(booking) {
        this.booking.bookingDone = 'notDone';
        this.$http.patch(API + 'bookings/' + booking.id, this.booking)
    }



    GetServices() {
        this.$http.get(API + 'services?companyId=' + localStorage.getItem('id'))
            .then((result) => {
                this.servicesList = result.data;
            });
    }

    ViewBookings(service) {
        this.bookingServiceName = service.serviceName;
        this.$http.get(API + 'bookings?serviceID=' + service.id)
            .then((result) => {
                this.bookingList = result.data;
            });
        this.showAll = true;
    }

    ShowAll() {
        this.ViewAllBookings();
        this.bookingServiceName = 'All';
        this.showAll = false;
    }

    Search($event, word) {
        // console.log(event)
        console.log(this.word)
            // this.word = [];
        if (event.key === "Enter") {
            this.$http.get(API + 'bookings?bookingName=' + this.word)
                .then((result) => {
                    this.bookingList = result.data;
                });
            this.showAll = true;
        }
    }
}

const bindings = {
    someInput: '<',
    someOutput: '&'
}
const API = 'http://localhost:3000/';

export const adminBookingListComponent = {
    controller: AdminBookingListController,
    controllerAs: '$ctrl',
    template,
    bindings
}