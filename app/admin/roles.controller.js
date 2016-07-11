class rolesController {

    constructor($scope, authService, nodesService) {
        this.$scope = $scope;
        this.authService = authService;
        this.nodesService = nodesService;

        this.users = [{
            id: 1,
            Name: 'Νικόλαος',
            SurName: 'Περπερίδης',
            AMA: '66040'
        }, {

                id: 6,
                Name: 'Αντώνης',
                SurName: 'Καταραχιάς',
                AMA: '45678'
            }, {
                id: 2,
                Name: 'Βασίλης',
                SurName: 'Χατζηδάκης',
                AMA: '68912'
            }, {
                id: 3,
                Name: 'Γιώργος',
                SurName: 'Παπαδάκης',
                AMA: '74865'
            }, {
                id: 4,
                Name: 'Αλέξανδρος',
                SurName: 'Ζέρτεβ',
                AMA: '12389'
            }, {
                id: 5,
                Name: 'Ευάγγελος',
                SurName: 'Λιάτσας',
                AMA: '36458'
            }];












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

    addCategory() {
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

    addUser() {
        this.nodeRights[this.nodeSelected].Users.push({
            id: 'U54',
            Description: this.UserDescription.SurName + ' ' + this.UserDescription.Name + ' (' + this.UserDescription.AMA + ')'
        });
    }



}

export default rolesController;