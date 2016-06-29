class adminController {
    constructor(adminService, nodesService) {

        this.nodes = nodesService.getNodes();
        this.overviewShow = false;

        this.openSubCategory = function (index) {
            this.selected = index;
            this.subSelected = null;
        };

        this.subSelected;
        this.swap = function (nodes, index1, index2) {

            var tmp = nodes[index1];
            nodes[index1] = nodes[index2];
            nodes[index2] = tmp;
        }
    }
}

export default adminController;