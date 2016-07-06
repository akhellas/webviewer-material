class nodesController {
    constructor(nodesService) {
        this.nodes = nodesService.nodes();
    }
}

export default nodesController;