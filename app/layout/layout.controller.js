class layoutController {

    constructor($scope, $state, toastService, nodesService) {
        this.$scope = $scope;
        this.$state = $state;
        this.nodesService = nodesService;

        this.appTitle = "MIS HandOver";

        this.isLeftOpen = true;
        this.isRightOpen = false;

        this.theme = {
            toolbars: 'md-hue-2',
            buttons: {
                add: '',
                edit: '',
                delete: '',
                save: '',
                default: ''
            }
        };

        this.nodes = [];
        
        this.$scope.$watch('layout.nodesService.nodes', (x) => this.nodesChanged(x), true);
    }

    nodesChanged(newValue, oldValue) {
        if (newValue != undefined && newValue != oldValue) {
            this.nodes = newValue;
        }
    }
}

export default layoutController;