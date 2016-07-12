class nodeController {
    constructor(node) {
        this.node = node;
        
        this.incidents = {
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
    }

}

export default nodeController;