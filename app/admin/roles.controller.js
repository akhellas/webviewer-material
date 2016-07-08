class rolesController {
    
    constructor($scope, authService, nodesService) {
        this.$scope = $scope;
        this.authService = authService;
        this.nodesService = nodesService;

        this.nodes = [];
        this.nodeRights = [];

        this.editOn = false;
        
        this.$scope.$watch('roles.authService.roles', x => this.rolesChanged(x));
        this.$scope.$watch('roles.nodesService.nodes', x => this.nodesChanged(x), true);
    }

    nodesChanged(newValue, oldValue) {
        if (newValue != undefined && newValue != oldValue) {
            this.nodes = newValue;
        }
    }

    rolesChanged(newValue, oldValue) {
        if (newValue != undefined && newValue != oldValue) {
            this.nodeRights = newValue;
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

    cancelAddCategory() {
        this.addright = !this.addright;
        this.newRight = {
            Edit: false,
            View: false
        };
    }

    removeRight() {
        this.nodeRights[this.nodeSelected].Rights
    }

    pushRight() {
        this.newRight = {
            Edit: false, View: false
        };

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


}

export default rolesController;