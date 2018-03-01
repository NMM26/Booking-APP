import angular from 'angular';

// AUTH
import { adminLoginComponent } from './Auth/AdminLogin/AdminLogin.component';
import { adminRecoverComponent } from './Auth/AdminRecover/AdminRecover.component';
import { adminRegisterComponent } from './Auth/AdminRegister/AdminRegister.component';

// BOOKING
import { adminBookingComponent } from './Booking/AdminBooking/AdminBooking.component';
import { adminBookingDetailsComponent } from './Booking/AdminBookingDetails/AdminBookingDetails.component';
import { adminBookingListComponent } from './Booking/AdminBookingList/AdminBookingList.component';

// Company
import { companyAddComponent } from './Company/CompanyAdd/CompanyAdd.component';
import { companyServicesComponent } from './Company/CompanyServices/CompanyServices.component';
import { companiesListComponent } from './Company/CompaniesList/CompaniesList.component';

// Service
import { adminServiceListComponent } from './Service/AdminServiceList/AdminServiceList.component';
import { adminServiceAddComponent } from './Service/AdminServiceAdd/AdminServiceAdd.component';
import { adminServiceEditComponent } from './Service/AdminServiceEdit/AdminServiceEdit.component';

export default angular.module('Admin', [])
    .component('adminLoginComponent', adminLoginComponent)
    .component('adminRecoverComponent', adminRecoverComponent)
    .component('adminRegisterComponent', adminRegisterComponent)
    .component('adminBookingComponent', adminBookingComponent)
    .component('adminBookingDetailsComponent', adminBookingDetailsComponent)
    .component('adminBookingListComponent', adminBookingListComponent)
    .component('companyAddComponent', companyAddComponent)
    .component('companyServicesComponent', companyServicesComponent)
    .component('companiesListComponent', companiesListComponent)
    .component('adminServiceListComponent', adminServiceListComponent)
    .component('adminServiceAddComponent', adminServiceAddComponent)
    .component('adminServiceEditComponent', adminServiceEditComponent)