class toastService {
    constructor($mdToast) {
        'ngInject'

        this.$mdToast = $mdToast;

        this.options = {
            delay: 5000,
            position: 'bottom right'
        };
    }

    display(message, delay = this.options.delay, position = this.options.position) {
        this.$mdToast.show(
            this.$mdToast
                .simple()
                .textContent(message)
                .position(position)
                .hideDelay(delay)
        );
    }
    
    info(message, delay = this.options.delay, position = this.options.position) {
        this.display(message, delay, position);
    }

    error(message, delay = this.options.delay, position = this.options.position) {
        this.display(message, delay, position);
    }
}

export default toastService;