class nodeController {
    constructor(node) {
        this.node = node;
        this.data = [{
            Entry: 'GA478',
            Exit: 'Λίμνος',
            Units: '3',
            UnitTypes: [{
                no1: 'F16',
                no2: 'M2000',
                no3: 'F4'
            },],
            BreachPoint: [],
            unknown: [],
            Weapons: '',
            Engage: '',
            Interception: ''

        }, {
                Entry: 'GA158',
                Exit: 'Σάμος',
                Units: '3',
                UnitTypes: [],
                BreachPoint: [],
                unknown: [],
                Weapons: '',
                Engage: '',
                Interception: ''

            }];
    }
}

export default nodeController;