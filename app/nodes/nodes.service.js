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
                Children: [
                    {
                        Id: '11',
                        Title: 'Sub Category 11',
                        Color: '',
                        Children: [
                            {
                                Id: '111',
                                Title: 'Sub Item 111',
                                Color: '',
                                Children: []
                            },
                            {
                                Id: '112',
                                Title: 'Sub Item 112',
                                Color: '',
                                Children: []
                            },
                            {
                                Id: '113',
                                Title: 'Sub Item 113',
                                Color: '',
                                Children: []
                            }
                        ]
                    },
                    {
                        Id: '12',
                        Title: 'Sub Category 12',
                        Color: '',
                        Children: []
                    }
                ] 
            },
            { Id: '2', Title: 'Category 2', Color: '', Children: [] }
        ]
    }
}

export default nodesService;