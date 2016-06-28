class nodesController {
    constructor(nodesService) {
        this.nodes = nodesService.getNodes();
    }
}

export default nodesController;