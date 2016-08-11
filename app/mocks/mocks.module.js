import 'angular-mocks'

let mocks = angular.module('app.mocks', ['app', 'ngMockE2E']).name;

angular
    .module('app.mocks')
    .run(function ($httpBackend, $filter) {
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

        let roles = [
            {
                Id: '1',
                Title: 'ΚΕΠΙΧ',
                Description: 'bla',
                Rights: [{ _Id: '21', Title: 'ΔΡΑΣΤΗΡΙΟΤΗΤΑ', Edit: true, View: false }, { _Id: '41', Title: 'ΒΟΛΕΣ ΠΝ & ΣΞ', Edit: true, View: true }],
                Users: [{ Id: 'U1', Description: 'Περπερίδης Νικόλαος (66040)' }, { Id: 'U1', Description: 'Πέτρου Γεώργιος (35744)' }, { Id: 'U1', Description: 'Πλεμμένου Χρίστινα (46321)' }, { Id: 'U1', Description: 'Αλεξανδροπούλου Βούλα (45637)' }
                    , { Id: 'U1', Description: 'Ευστρατίου Ευστράτιος (65423)' }, { Id: 'U1', Description: 'Παρασκευής Νικόλαος (12345)' }]
            },
            {
                Id: '2',
                Title: 'ΕΠΙΧΕΙΡΗΣΕΙΣ',
                Description: 'bla',
                Rights: [],
                Users: []
            },
            {
                Id: '3',
                Title: 'ΗΓΕΣΙΑ',
                Description: 'bla',
                Rights: [],
                Users: []
            },
            {
                Id: '4',
                Title: 'ΔΙΑΧΕΙΡΙΣΤΕΣ',
                Description: 'bla',
                Rights: [],
                Users: []
            }
        ];

        let nodes = [
            {
                Id: '1',
                Parent: null,
                Title: 'ΔΡΑΣΤΗΡΙΟΤΗΤΑ',
                Color: { Red: 80, Green: 140, Blue: 255 },
                Index: 0,
                Type: 0,
                LastUpdate: {
                    Date: null,
                    User: null
                },
                Data: null
            },
            {
                Id: '11',
                Parent: '1',
                Title: 'ΠΤΗΤΙΚΗ ΔΡΑΣΤΗΡΙΟΤΗΤΑ',
                Color: null,
                Index: 0,
                Type: 0,
                LastUpdate: {
                    Date: null,
                    User: null
                },
                Data: null
            },
            {
                Id: '111',
                Parent: '11',
                Title: 'ΑΤΑ',
                Color: null,
                Index: 0,
                Type: 0,
                LastUpdate: {
                    Date: null,
                    User: null
                },
                Data: null
            },
            {
                Id: '112',
                Parent: '11',
                Title: 'ΔΑΥ',
                Color: null,
                Index: 1,
                Type: 0,
                LastUpdate: {
                    Date: null,
                    User: null
                },
                Data: '<span>IT WORKS ! (its alive?)</span>'
            },
            {
                Id: '113',
                Parent: '11',
                Title: 'ΔΑΕ',
                Color: null,
                Index: 2,
                Type: 0,
                LastUpdate: {
                    Date: null,
                    User: null
                },
                Data: null
            },
            {
                Id: '12',
                Parent: '1',
                Title: 'ΤΟΥΡΚΙΚΗ ΠΤΗΤΙΚΗ ΔΡΑΣΤΗΡΙΟΤΗΤΑ',
                Color: null,
                Index: 0,
                Type: 2,
                LastUpdate: {
                    Date: null,
                    User: null
                },
                Data: {
                    Incidents: [
                        {
                            Entry: 'GA452',
                            Exit: 'GE0423',
                            Units: [
                                { Count: 2, Type: 'F-16' },
                                { Count: 4, Type: 'F-4' },
                            ],
                            Violations: ['1', '2'],
                            FlyOvers: ['Χιος', 'Σάμος'],
                            Weapons: '0',
                            Engage: '0',
                            Interception: '0'
                        },
                        {
                            Entry: 'GA454',
                            Exit: 'GE0425',
                            Units: [
                                { Count: 2, Type: 'F-16' },
                                { Count: 4, Type: 'F-4' },
                            ],
                            Violations: ['1', '2'],
                            FlyOvers: ['Χιος', 'Σάμος'],
                            Weapons: '0',
                            Engage: '0',
                            Interception: '0'
                        }
                    ],
                    ViolationRemarks: '',
                    MinimumViolationDistance: '',
                    Remarks: ''
                }
            },
            {
                Id: '2',
                Parent: null,
                Title: 'ΕΠΧΣΕΙΣ-ΑΣΚΗΣΕΙΣ',
                Color: { Red: 80, Green: 140, Blue: 255 },
                Index: 1,
                Type: 0,
                LastUpdate: {
                    Date: null,
                    User: null
                },
                Data: null
            },
            {
                Id: '21',
                Parent: '2',
                Title: 'ΒΟΛΕΣ ΠΝ & ΣΞ',
                Color: { Red: 80, Green: 140, Blue: 255 },
                Index: 0,
                Type: 0,
                LastUpdate: {
                    Date: null,
                    User: null
                },
                Data: null
            },
            {
                Id: '22',
                Parent: '2',
                Title: 'ΒΙΒΛΙΟΘΗΚΗ ΕΠΙΧΕΙΡΗΣΕΩΝ',
                Color: { Red: 80, Green: 140, Blue: 255 },
                Index: 1,
                Type: 1,
                LastUpdate: {
                    Date: null,
                    User: null
                },
                Data: [
                    {
                        Id: '22f1',
                        Description: 'MNHMONIO AA'
                    },
                    {
                        Id: '22f2',
                        Description: 'MNHMONIO ΑΞΚΟΥ ΕΠΧΣΕΩΝ'
                    }
                ]
            },
            {
                Id: '3',
                Parent: null,
                Title: 'ΚΑΤΑΣΤΑΣΗ RADAR lalala lal lal ala lal al lal',
                Color: { Red: 80, Green: 140, Blue: 255 },
                Index: 2,
                Type: 0,
                LastUpdate: {
                    Date: null,
                    User: null
                },
                Data: null
            }
        ];

        let incidents = {
            Incidents: [
                {
                    Entry: '',
                    Exit: '',
                    Units: [
                        { Count: 0, Type: 0 },
                        { Count: 0, Type: 0 },
                    ],
                    Violations: ['1', '2'],
                    FlyOvers: [],
                    Weapons: '',
                    Engage: '',
                    Interception: ''
                }
            ],
            ViolationRemarks: '',
            MinimumViolationDistance: '',
            Remarks: ''
        };

        let customViews = [{
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
        }];

        function toTree(nodesArray, root) {
            let tree = $filter('filter')(nodesArray, function (n) { return n.Parent == root });
            for (var i in tree) {
                let node = tree[i];
                node.Children = toTree(nodesArray, node.Id);
            }

            return tree;
        }

        // function searchTree(tree, id) {
        //     for (let i in tree) {
        //         let node = tree[i];
        //         if (node.Id == id) {
        //             return node;
        //         }
        //         if (node.Children.length ) {
        //             let child = searchTree(node.Children, id);
        //             if (child) {
        //                 return child;
        //             }
        //         }
        //     }
        //     return null;
        // }

        // authService //
        $httpBackend.whenGET('/api/users')
            .respond(users);

        $httpBackend.whenGET('/api/roles')
            .respond(roles);

        $httpBackend.whenGET('/api/views')
            .respond(customViews);



        // nodesService //                    
        $httpBackend.whenGET('/api/nodes')
            .respond(function (method, url, data, headers, params) {
                let tree = toTree(nodes, null);
                return [200, tree];
            });

        $httpBackend.whenRoute('GET', '/api/nodes/:id')
            .respond(function (method, url, data, headers, params) {
                let node = nodes.find(x => x.Id == params.id);
                return node ? [200, node] : [500, '', { data: 'Node not found' }];
            });

        $httpBackend.whenRoute('PUT', '/api/nodes/:id')
            .respond(function (method, url, data, headers, params) {
                let node = nodes.find(x => x.Id == params.id);
                if (node) {
                    node = data;
                }
                return node ? [200, node] : [500, '', { data: 'Node not found' }];
            });

        $httpBackend.whenRoute('DELETE', '/api/nodes/:id')
            .respond(function (method, url, data, headers, params) {
                let node = nodes.find(x => x.Id == params.id);
                if (node) {
                    nodes.splice(nodes.indexOf(node), 1);
                    return [200, node];
                }
                return [500, '', 'Node not found'];
            });

        // ignore everything else //
        $httpBackend.whenGET(/.*/)
            .passThrough();
    });

export default mocks;