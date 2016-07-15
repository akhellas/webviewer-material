class nodeController {

    constructor(node) {
        this.node = node;
        this.PlaneTypes = [
            { Id: 0, Description: 'F-16' },
            { Id: 1, Description: 'F-4' },
            { Id: 2, Description: 'CN-235' },
            { Id: 3, Description: 'KC-135' },
            { Id: 4, Description: 'AB-412' },
            { Id: 5, Description: 'AB-212' },
            { Id: 6, Description: 'S-70' },
            { Id: 7, Description: 'Ε/Π' }
        ];
        this.newEntry = {
            Violations: [{}],
            Units: [{}],
            FlyOvers: [{}]
        };
    }
    // form code
    addUnit() {
        this.newEntry.Units.push({
        });
    }

     addViolations() {
        this.newEntry.Violations.push({
        });
    }
    
     addFlyOvers() {
        this.newEntry.FlyOvers.push({
        });
    }

    removeUnit(index) {
        this.newEntry.Units.splice(index, 1);
    }

     removeFlyOvers(index) {
        this.newEntry.FlyOvers.splice(index, 1);
    }

     removeViolations(index) {
        this.newEntry.Violations.splice(index, 1);
    }

    pushNewEntry() {

    }
    // end of form code
    sumFormations() {
        return this.sumIncidents((f) => { return f.Units.length; });
    }

    sumAcType(acType) {
        return this.sumIncidents((f) => { let t = f.Units.find(x => x.Type == acType); return t == null ? 0 : t.Count; });
    }

    sumIncidents(cbField) {
        let incidents = this.node.Data.Incidents;
        return incidents ? incidents.reduce((a, b) => cbField(a) + cbField(b)) : 0;
    }

}

export default nodeController;