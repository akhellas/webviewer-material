class rolesController {
    constructor(authService, nodesService) {

        this.nodeRights = [
            {
                Id: '1',
                Title: 'ΚΕΠΙΧ',
                Description: 'bla',
                Rights: [{ _Id: '21', Title: 'ΔΡΑΣΤΗΡΙΟΤΗΤΑ', Edit: true, View: false }]
            },
            {
                Id: '2',
                Title: 'ΕΠΙΧΕΙΡΗΣΕΙΣ',
                Description: 'bla',
                Rights: [{}]
            },
            {
                Id: '3',
                Title: 'ΗΓΕΣΙΑ',
                Description: 'bla',
                Rights: [{}]
            },
            {
                Id: '4',
                Title: 'ΔΙΑΧΕΙΡΙΣΤΕΣ',
                Description: 'bla',
                Rights: [{}]
            }
        ];
        this.nodes = nodesService.nodes;

        this.editOn = false;
        this.nodeSelected;

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