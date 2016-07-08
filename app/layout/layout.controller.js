class layoutController {
    constructor($scope, $state, toastService, nodesService) {
        this.$scope = $scope;
        this.$state = $state;
        this.nodesService = nodesService;

        this.appTitle = "MIS HandOver";

        this.isLeftOpen = true;
        this.isRightOpen = false;

        this.nodes = [];

        this.$scope.$watch('layout.nodesService.nodes', x => this.nodesChanged(x));
    }

    nodesChanged(newValue, oldValue) {
        if (newValue != undefined && newValue != oldValue) {
            this.nodes = newValue;
        }
    }
}

export default layoutController;