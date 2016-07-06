class rolesController {
    constructor(adminService, nodesService) {

        this.nodeSelected;
        this.nodeRights = nodesService.roles;


        this.addGroup = function () {
            this.nodeRights.push({
                Id: 1, Title: 'Νέα ομάδα', Description: 'Περιγραφή', Rights: [{}]
            });
            this.nodeSelected = this.nodeRights.length - 1
        }

    }

}

export default rolesController;