import template from './CompaniesList.template.html'
import componentStyles from './CompaniesList.scss'

class CompaniesListController {
    constructor($http) {
        this.componentName = 'companiesListComponent';
        this.$http = $http;
        this.companiesList = [];
    }

    $onInit() {
        this.getCompanies();
    }

    getCompanies() {
        console.log('2.hi there, I am', this.componentName);
        this.$http.get('http://localhost:3000/companies')
            .then((result) => {
                this.companiesList = result.data;
            })
    }

    DeleteCompany(item) {
        console.log(item)
        this.$http.delete('http://localhost:3000/companies/' + item.id)
            .then((result) => {
                this.companiesList.splice(this.companiesList.indexOf(item), 1);
            })
    }
    EditCompany(item) {
        console.log(item)
    }
}

const bidings = {
    someInput: '<',
    someOutput: '&'
}

export const companiesListComponent = {
    controller: CompaniesListController,
    controllerAs: '$ctrl',
    template,
    bidings
}