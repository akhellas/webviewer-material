class nodeController {
    constructor(node) {
        this.node = node;

        this.incidents = {
            Incidents: [
                {
                    Entry: 'GA452',
                    Exit: 'GE0423',
                    Units: [
                        { Count: 2, Type: 'F-16' },
                        { Count: 4, Type: 'F-4' },
                    ],
                    Violations: ['1', '2'],
                    FlyOvers: ['Χιος','Σάμος'],
                    Weapons: 'ΟΧΙ',
                    Engage: 'ΝΑΙ',
                    Interception: 'ΝΑΙ'
                }
            ],
            ViolationRemarks: '',
            MinimumViolationDistance: '',
            Remarks: ''
        };
    }

}

export default nodeController;