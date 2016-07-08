class rolesController {

    constructor($scope, authService, nodesService) {
        this.$scope = $scope;
        this.authService = authService;
        this.nodesService = nodesService;

        this.nodes = [];
        this.nodeRights = [];

        this.editOn = false;
        this.newRight = {
            Edit: false, View: false
        };

        this.$scope.$watch('roles.authService.roles', (x) => this.rolesChanged(x), true);
        this.$scope.$watch('roles.nodesService.nodes', (x) => this.nodesChanged(x), true);
    }

    rolesChanged(newValue, oldValue) {
        if (newValue != undefined && newValue != oldValue) {
            this.nodeRights = newValue;
        }
    }

    nodesChanged(newValue, oldValue) {
        if (newValue != undefined && newValue != oldValue) {
            this.nodes = newValue;
        }
    }

    addGroup() {
        this.nodeRights.push({
            Id: '', Title: 'Νέα ομάδα', Description: 'Περιγραφή', Rights: []
        });
        this.nodeSelected = this.nodeRights.length - 1
    }

    save() {
        this.editOn = false;
    }

    cancelAddRight() {
        this.addright = !this.addright;
        this.newRight = {
            Edit: false,
            View: false
        };
    }

    removeRight(index) {
        this.nodeRights[this.nodeSelected].Rights.splice(index, 1)
    }

    pushRight() {
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
    removeCategory() {
        this.nodeRights.splice(this.nodeSelected, 1);
        this.nodeSelected = null;
    }


}

export default rolesController;