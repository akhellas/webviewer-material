class layoutController {
    constructor($state, nodesService) {
        this.$state = $state;

        this.appTitle = "MIS HandOver";

        this.isLeftOpen = true;
        this.isRightOpen = false;

        this.nodes = nodesService.nodes;
    }
}

export default layoutController;