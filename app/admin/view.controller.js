class viewController {
    constructor($scope, nodesService) {
        this.$scope = $scope;
        this.nodesService = nodesService;
        this.views = [
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
                Id: '542',
                Description: 'ΠΡΟΒΟΛΗ RADAR',
                nodeViews: [
                    {
                        Id: '1',
                        Description: 'ΠΤΗΤΙΚΗ ΔΡΑΣΤΗΡΙΟΤΗΤΑ'
                    },
                    {
                        Id: '21',
                        Description: 'ΑΤΑ'
                    },
                    {
                        Id: '12',
                        Description: 'ΕΠΧΣΕΙΣ-ΑΣΚΗΣΕΙΣ'
                    }
                ]
            }

        ];


        this.$scope.$watch('view.nodesService.nodes', (x) => this.nodesChanged(x), true);
    }
    nodesChanged(newValue, oldValue) {
        if (newValue != undefined && newValue != oldValue) {
            this.nodes = newValue;
        }
    }





}
export default viewController;