class adminController {
    constructor(adminService, nodesService) {
        this.nodes = nodesService.getNodes();
    }
}

export default adminController;