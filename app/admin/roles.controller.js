class rolesController {
    constructor(adminService, nodesService) {
        this.nodeRights = nodesService.getUserRoles();


        this.addGroup = function () {
            this.nodeRights.push({
                Id: 1, Title: 'Νέα ομάδα', Description: 'Περιγραφή', Rights: [{}]
            });
        }

    }

}

export default rolesController;