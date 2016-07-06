class rolesController {
    constructor(authService) {

        this.nodeSelected;
        this.nodeRights = authService.roles;


        this.addGroup = function () {
            this.nodeRights.push({
                Id: 1, Title: 'Νέα ομάδα', Description: 'Περιγραφή', Rights: [{}]
            });
            this.nodeSelected = this.nodeRights.length - 1
        }

    }

}

export default rolesController;