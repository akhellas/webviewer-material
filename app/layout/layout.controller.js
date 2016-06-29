class layoutController {
    constructor(nodesService) {
        this.isLeftOpen = true;
        this.isRightOpen = false;

        this.nodes = nodesService.getNodes();
    }
}

export default layoutController;