class nodeController {

    constructor(node) {
        this.node = node;
    }

    sumFormations() {
        return this.sumIncidents( (f) => { return f.Units.length; });
    }

    sumAcType(acType) {
        return this.sumIncidents( (f) => { let t = f.Units.find(x => x.Type == acType); return t == null ? 0 : t.Count; });
    }

    sumIncidents(cbField) {
        let incidents = this.node.Data.Incidents;
        return incidents ? incidents.reduce((a, b) => cbField(a) + cbField(b)) : 0;
    }

}

export default nodeController;