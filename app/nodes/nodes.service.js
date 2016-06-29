class nodesService {
    constructor($http) {
        this.$http = $http;
    }

    getNodes() {
        return [
            {
                Id: '1',
                Title: 'Category 1',
                Color: '',
                InOverview: false,
                Children: [
                    {
                        Id: '11',
                        Title: 'Sub Category 11',
                        Color: '',
                        InOverview: false,
                        Children: [
                            {
                                Id: '111',
                                Title: 'Sub Item 111',
                                Color: '',
                                InOverview: false,
                                Children: []
                            },
                            {
                                Id: '112',
                                Title: 'Sub Item 112',
                                Color: '',
                                InOverview: false,
                                Children: []
                            },
                            {
                                Id: '113',
                                Title: 'Sub Item 113',
                                Color: '',
                                InOverview: false,
                                Children: []
                            }
                        ]
                    },
                    {
                        Id: '12',
                        Title: 'Sub Category 12 lets try long text',
                        Color: '',
                        InOverview: false,
                        Children: []
                    }
                ] 
            },
            {
                Id: '2',
                Title: 'Category 2',
                Color: '',
                InOverview: false,
                Children: []
            }
        ]
    }
}

export default nodesService;