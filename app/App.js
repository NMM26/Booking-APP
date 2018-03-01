import angular from 'angular';
import Core from './Core/Main.module';
import Admin from './Admin/Main.module';
import Public from './Public/Main.module';



class IndexController {
    constructor() {

    }

    $onInit() {
        console.log('Index controller initalized');
    }
}

angular.module('App', ['Core', 'Admin', 'Public', 'ngRoute'])
    .controller('IndexController', IndexController)
    .config(function($routeProvider, $locationProvider) {
        $locationProvider.html5Mode(false);
        $locationProvider.hashPrefix("");
        $routeProvider
            .when('/addCompany', {
                restrict: 'D',
                templateUrl: "Pages/AddCompany.html"

            })
            .when('/addService', {
                restrict: 'D',
                templateUrl: "Pages/AddService.html"

            })
            .when('/bookingList', {
                restrict: 'D',
                templateUrl: "Pages/BookingList.html"

            })
            .when('/bookingPage', {
                restrict: 'D',
                templateUrl: "Pages/BookingPage.html"

            })
            .when('/calendar', {
                restrict: 'D',
                templateUrl: "Pages/Calendar.html"

            })
            .when('/login', {
                restrict: 'D',
                templateUrl: "Pages/Login.html"

            })
            .when('/recover', {
                restrict: 'D',
                templateUrl: "Pages/Recover.html"

            })
            .when('/register', {
                restrict: 'D',
                templateUrl: "Pages/Register.html"

            })
            .when('/serviceList', {
                restrict: 'D',
                templateUrl: "Pages/ServicesList.html"
            })
            .when('/companyList', {
                restrict: 'D',
                templateUrl: "Pages/CompanyList.html"
            })
            .when('/', {
                restrict: 'D',
                templateUrl: "Pages/ServicesList.html"
            })
            .when('/companyServiceList', {
                restrict: 'D',
                templateUrl: "Pages/CompanyServiceList.html"
            })

        .when('/editService', {
            restrict: 'D',
            templateUrl: "Pages/EditService.html",
            controller: 'IndexController'
        })

        .otherwise({ redirectTo: '/' })
    })