class adminController {
    constructor(adminService, nodesService) {

        this.nodes = nodesService.getNodes();
        this.overviewShow = false;
    }
}

export default adminController;