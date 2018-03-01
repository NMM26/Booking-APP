import angular from 'angular';

// Services
import { serviceListComponent } from './Services/ServicesList/ServiceList.component';
import { navBarComponent } from './NavBar/NavBar.component';


export default angular.module('Public', [])
    .component('serviceListComponent', serviceListComponent)
    .component('navBarComponent', navBarComponent)