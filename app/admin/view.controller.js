class viewController {
    constructor($scope, nodesService, authService) {
        this.$scope = $scope;

        this.nodesService = nodesService;
        this.authService = authService;
        this.category={};
        this.role={};
        this.nodes = [];
        this.nodeRights = [];
        this.accessRoles = [];
        this.categoriesForView = [];

        this.customViews = [
            {
                Id: '21321',
                Description: 'ΤΟΥΡΚΙΚΗ ΚΑΤΑΣΤΑΣΗ',
                nodeViews: [
                    {
                        Id: '1',
                        Description: 'ΔΡΑΣΤΗΡΙΟΤΗΤΑ'
                    },
                    {
                        Id: '21',
                        Description: 'ΒΟΛΕΣ ΠΝ & ΣΞ'
                    },
                    {
                        Id: '12',
                        Description: 'ΤΟΥΡΚΙΚΗ ΠΤΗΤΙΚΗ ΔΡΑΣΤΗΡΙΟΤΗΤΑ'
                    }
                ]
            },
            {
                Id: '523',
                Description: 'ΚΑΤΑΣΤΑΣΗ RADAR',
                nodeViews: [
                    {
                        Id: '1',
                        Description: 'ΔΡΑΣΤΗΡΙΟΤΗΤΑ'
                    },
                    {
                        Id: '21',
                        Description: 'ΒΟΛΕΣ ΠΝ & ΣΞ'
                    },
                    {
                        Id: '12',
                        Description: 'ΤΟΥΡΚΙΚΗ ΠΤΗΤΙΚΗ ΔΡΑΣΤΗΡΙΟΤΗΤΑ'
                    }
                ]
            },
            {
                Id: '123',
                Description: 'ΠΡΟΒΟΛΗ ΜΑΧΗΣ',
                nodeViews: [
                    {
                        Id: '1',
                        Description: 'ΔΡΑΣΤΗΡΙΟΤΗΤΑ'
                    },
                    {
                        Id: '21',
                        Description: 'ΒΟΛΕΣ ΠΝ & ΣΞ'
                    },
                    {
                        Id: '12',
                        Description: 'ΤΟΥΡΚΙΚΗ ΠΤΗΤΙΚΗ ΔΡΑΣΤΗΡΙΟΤΗΤΑ'
                    }
                ]
            }
        ];

        this.$scope.$watch('view.authService.roles', (x) => this.rolesChanged(x), true);
        this.$scope.$watch('view.nodesService.nodes', (x) => this.nodesChanged(x), true);
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

    addCategory() {
        this.categoriesForView.push({
            Id: this.category.Id,
            Title: this.category.Title
        })
    }
    addRole() {
        this.accessRoles.push({
            Title:role.Title
        })
    }
}

export default viewController;