class nodesService {
    constructor($http) {
        this.$http = $http;
    }
    getbanner() {
        return [{ Id: 1, Description: 'Παραλαβή της Διοίκησης του 201 ΚΕΦΑ', visible: false }]

    }
    getNodes() {
        return [

            {
                Id: '1',
                Title: 'ΔΡΑΣΤΗΡΙΟΤΗΤΑ',
                Color: {
                    red: 80,
                    green: 140,
                    blue: 255
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
                    red: 80,
                    green: 140,
                    blue: 255
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
                    red: 80,
                    green: 140,
                    blue: 255

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

    getUserRoles() {
        return [{
            Id: 1, Title: 'ΚΕΠΙΧ', Description: 'bla', Rights: [{ _Id: '21', Edit: true, View: false }]
        }, {
                Id: 2, Title: 'ΕΠΙΧΕΙΡΗΣΕΙΣ', Description: 'bla', Rights: [{ _Id: '3', Edit: false, View: true }]
            }, {
                Id: 3, Title: 'ΗΓΕΣΙΑ', Description: 'bla', Rights: [{ _Id: '2', Edit: true, View: false }]
            }, {
                Id: 4, Title: 'ΔΙΑΧΕΙΡΙΣΤΕΣ', Description: 'bla', Rights: [{ _Id: '1', Edit: true, View: true }]
            }
        ];
    }

}

export default nodesService;