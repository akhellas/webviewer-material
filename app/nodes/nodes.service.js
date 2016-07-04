class nodesService {
    constructor($http) {
        this.$http = $http;
    }
    getbanner() {
        return [{ Message: 'test' }]
    }
    getNodes() {
        return [

            {
                Id: '1',
                Title: 'ΔΡΑΣΤΗΡΙΟΤΗΤΑ',
                Color: {
                    red: 100,
                    green: 100,
                    blue: 20
                },
                InOverview: false,
                Children: [
                    {
                        Id: '11',
                        Title: 'ΠΤΗΤΙΚΗ ΔΡΑΣΤΗΡΙΟΤΗΤΑ',
                        Color: '',
                        InOverview: false,
                        Children: [
                            {
                                Id: '111',
                                Title: 'ΑΤΑ',
                                Color: '',
                                InOverview: false,
                                Children: []
                            },
                            {
                                Id: '112',
                                Title: 'ΔΑΥ',
                                Color: '',
                                InOverview: false,
                                Children: []
                            },
                            {
                                Id: '113',
                                Title: 'ΔΑΕ',
                                Color: '',
                                InOverview: false,
                                Children: []
                            }
                        ]
                    },
                    {
                        Id: '12',
                        Title: 'ΠΤΗΣΕΙΣ ΝΑΤΟΙΚΩΝ ΧΩΡΩΝ',
                        Color: '',
                        InOverview: false,
                        Children: []
                    }
                ]
            },
            {
                Id: '2',
                Title: 'ΕΠΧΣΕΙΣ-ΑΣΚΗΣΕΙΣ',
                Color: {
                    red: 100,
                    green: 100,
                    blue: 20
                }
                ,
                InOverview: true,
                Children: [
                    {
                        Id: '21',
                        Title: 'ΒΟΛΕΣ ΠΝ & ΣΞ',
                        Color: '',
                        InOverview: false,
                        Children: []
                    }
                ]
            },
            {
                Id: '3',
                Title: 'ΚΑΤΑΣΤΑΣΗ RADAR',
                Color: {
                    red: 150,
                    green: 200,
                    blue: 20

                },
                InOverview: true,
                Children: [
                    {
                        Id: '21',
                        Title: '2ΚΕΠ',
                        Color: '',
                        InOverview: false,
                        Children: [{
                            Id: '21',
                            Title: '3ο ΣΑ ',
                            Color: '',
                            InOverview: false,
                            Children: []
                        }]
                    }
                ]
            }

        ]

    }

}

export default nodesService;