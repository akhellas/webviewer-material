class rolesController {
    constructor(authService, nodesService) {

        this.nodeRights = authService.roles;
        this.nodes = nodesService.nodes;

        this.editOn = false;
        this.nodeSelected;
        this.newRight = {
            Edit: false,
            View: false
        };


        this.addGroup = function () {
            this.nodeRights.push({
                Id: '', Title: 'Νέα ομάδα', Description: 'Περιγραφή', Rights: []
            });
            this.nodeSelected = this.nodeRights.length - 1
        }

        this.pushRight = function () {
            this.nodeRights[this.nodeSelected].Rights.push({
                _Id: '',
                Title: this.newRight.Title,
                Edit: this.newRight.Edit,
                View: this.newRight.View
            });
            this.addright = !this.addright;
            this.newRight = {
                Edit: false, View: false
            };
        }
        this.removeRight = function () {
            this.nodeRights[this.nodeSelected].Rights
        }

        this.cancelAddCategory = function () {
            this.addright = !this.addright;
            this.newRight = {
                Edit: false,
                View: false
            };
        }
        this.save = function () {
            this.editOn = false;
        }
    }
    
}

export default rolesController;