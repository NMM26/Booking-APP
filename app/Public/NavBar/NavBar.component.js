import template from './NavBar.template.html'
import componentStyles from './NavBar.scss'

class NavBarController {
    constructor() {
        this.componentName = 'navBarComponent';

    }

}

const bidings = {
    someInput: '<',
    someOutput: '&'
}

const API = 'http://localhost:3000/';

export const navBarComponent = {
    controller: NavBarController,
    controllerAs: '$ctrl',
    template,
    bidings,
    API
}