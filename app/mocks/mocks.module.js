import 'angular-mocks'

let mocks = angular.module('app.mocks', ['app', 'ngMockE2E']).name;

angular
    .module('app.mocks')
    .run(function ($httpBackend) {
        'ngInject'

        let users = [
            {
                Id: '1',
                Username: 'admin',
                IsAdmin: true,
                Name: 'administrator user'
            },
            {
                Id: '2',
                Username: 'user2',
                IsAdmin: false,
                Name: 'user 2'
            },
            {
                Id: '3',
                Username: 'user3',
                IsAdmin: false,
                Name: 'user 3'
            }
        ];

        $httpBackend.whenGET('/api/users')
                    .respond(users);

        let roles = [
            {
                Id: '1',
                Title: 'ΚΕΠΙΧ',
                Description: 'bla',
                Rights: [{ _Id: '21',Title:'ΔΡΑΣΤΗΡΙΟΤΗΤΑ', Edit: true, View: false },{ _Id: '41',Title:'ΒΟΛΕΣ ΠΝ & ΣΞ', Edit: true, View: true }],
                Users:[{Id:'U1',Description:'Περπερίδης Νικόλαος (66040)'},{Id:'U1',Description:'Πέτρου Γεώργιος (35744)'},{Id:'U1',Description:'Πλεμμένου Χρίστινα (46321)'},{Id:'U1',Description:'Αλεξανδροπούλου Βούλα (45637)'}
                ,{Id:'U1',Description:'Ευστρατίου Ευστράτιος (65423)'},{Id:'U1',Description:'Παρασκευής Νικόλαος (12345)'}]
            },
            {
                Id: '2',
                Title: 'ΕΠΙΧΕΙΡΗΣΕΙΣ',
                Description: 'bla',
                Rights: [],
                Users:[]
            },
            {
                Id: '3',
                Title: 'ΗΓΕΣΙΑ',
                Description: 'bla',
                Rights: [],
                Users:[]
            },
            {
                Id: '4',
                Title: 'ΔΙΑΧΕΙΡΙΣΤΕΣ',
                Description: 'bla',
                Rights: [],
                Users:[]
            }
        ];

        $httpBackend.whenGET('/api/roles')
                    .respond(roles);

        let nodes = [
            {
                Id: '1',
                Title: 'ΔΡΑΣΤΗΡΙΟΤΗΤΑ',
                Color: {
                    red: 80,
                    green: 140,
                    blue: 255
                },
                InOverview: false,
                Type: 0,
                Children: [
                    {
                        Id: '11',
                        Title: 'ΠΤΗΤΙΚΗ ΔΡΑΣΤΗΡΙΟΤΗΤΑ',
                        Color: '',
                        InOverview: false,
                        Type: 0,
                        Children: [
                            {
                                Id: '111',
                                Title: 'ΑΤΑ',
                                Color: '',
                                InOverview: false,
                                Type: 0,
                                Children: []
                            },
                            {
                                Id: '112',
                                Title: 'ΔΑΥ',
                                Color: '',
                                InOverview: false,
                                Type: 0,
                                Children: []
                            },
                            {
                                Id: '113',
                                Title: 'ΔΑΕ',
                                Color: '',
                                InOverview: false,
                                Type: 0,
                                Children: []
                            }
                        ]
                    },
                    {
                        Id: '12',
                        Title: 'ΠΤΗΣΕΙΣ ΝΑΤΟΙΚΩΝ ΧΩΡΩΝ',
                        Color: '',
                        InOverview: false,
                        Type: 0,
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
                Type: 1,
                Children: [
                    {
                        Id: '21',
                        Title: 'ΒΟΛΕΣ ΠΝ & ΣΞ',
                        Color: '',
                        InOverview: false,
                        Type: 0,
                        Children: []
                    },
                    {
                        Id: '22',
                        Title: 'ΒΙΒΛΙΟΘΗΚΗ ΕΠΙΧΕΙΡΗΣΕΩΝ',
                        Color: '',
                        InOverview: false,
                        Type: 1,
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
                Type: 0,
                Children: [
                    {
                        Id: '31',
                        Title: '2ΚΕΠ',
                        Color: '',
                        InOverview: false,
                        Children: [{
                            Id: '311',
                            Title: '3ο ΣΑ ',
                            Color: '',
                            InOverview: false,
                            Type: 0,
                            Children: []
                        }]
                    }
                ]
            }

        ];

        

        $httpBackend.whenGET('/api/nodes')
                    .respond(nodes);

        let views = [
            {
                Id: '112',
                Data: '<span>IT WORKS ! (its alive?)</span>',
                Html: '<span>IT WORKS ! (its alive?)</span>',
                Files: []
            },
            {
                Id: '22',
                Data: [
                    {
                        Id: '22f1',
                        Description: 'MNHMONIO AA'
                    },
                    {
                        Id: '22f2',
                        Description: 'MNHMONIO ΑΞΚΟΥ ΕΠΧΣΕΩΝ'
                    }
                ],
                Html: '',
                Files: [
                    {
                        Id: '22f1',
                        Description: 'MNHMONIO AA'
                    },
                    {
                        Id: '22f2',
                        Description: 'MNHMONIO ΑΞΚΟΥ ΕΠΧΣΕΩΝ'
                    }
                ]
            }
        ];

        $httpBackend.whenRoute('GET', '/api/nodes/:id')
                    .respond(function (method, url, data, headers, params) {
                        let node = searchTree(nodes, params.id);
                        let view = views.find(x => x.Id == params.id);
                        if (node && view) {
                            node = angular.copy(node);
                            node.Data = view.Data;
                            return [200, node];
                        }
                        return [500, '','Node not found'];
                    });

        function searchTree(tree, id) {
            for (let i in tree) {
                let node = tree[i];
                console.log(node);
                if (node.Id == id) {
                    return node;
                }
                if (node.Children.length ) {
                    let child = searchTree(node.Children, id);
                    if (child) {
                        return child;
                    }
                }
            }
            return null;
        }

        $httpBackend.whenGET(/.*/).passThrough();
    });

export default mocks;