class nodesService {
    constructor($http) {
        this.$http = $http;
    }
    getbanner() {
        return [{ Id: 1, Description: 'Παραλαβή της Διοίκησης του 201 ΚΕΦΑ', visible: false },
            { Id: 2, Description: 'Υγειονομικό Κλιμάκιο του 251ΓΝΑ στη Νήσο Κάρπαθο', visible: false },
            { Id: 3, Description: '«2016 Έτος Ελλάδας – Ρωσίας» Εκδηλώσεις στο Πολεμικό Μουσείο Αθηνών', visible: true }]
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

}

export default nodesService;