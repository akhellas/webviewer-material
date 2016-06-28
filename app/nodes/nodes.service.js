class nodesService {
    constructor($http) {
        this.$http = $http;
    }

    getNodes() {
        return [
            {
                Id: '1',
                Title: '1',
                Color: '',
                Children: [
                    {
                        Id: '11',
                        Title: '11',
                        Color: '',
                        Children: [
                            {
                                Id: '111',
                                Title: '111',
                                Color: '',
                                Children: []
                            },
                            {
                                Id: '112',
                                Title: '112',
                                Color: '',
                                Children: []
                            }
                        ]
                    }
                ] 
            },
            { Id: '2', Title: '2', Color: '', Children: [] }
        ]
    }
}

export default nodesService;