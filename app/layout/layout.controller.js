class layoutController {
    constructor(nodesService) {
        
        this.appTitle = "MIS HandOver";

        this.isLeftOpen = true;
        this.isRightOpen = false;

        this.nodes = nodesService.getNodes();
    }
}

export default layoutController;