class nodesService {

    constructor($http, api, toastService) {
        'ngInject'

        this.$http = $http;
        this.api = api;
        this.toastService = toastService;

        this._nodes = new Map();

        this.getNodes();
    }

    get nodes() {
        return Array.from(this._nodes.values());
    }

    get nodeTypes() {
        return [
            { Id: 0, Description: "Προβολή" },
            { Id: 1, Description: "Βιβλιοθήκη" },
            { Id: 2, Description: "Φόρμα" }
        ];
    }

    getNode(id) {
        return this.$http({
            method: 'GET',
            url: '/api/nodes/' + id
        })
        .then( (response) => {
            return response.data;
        })
        .catch( (error) => {
            this.toastService.error(error.data);
        });
    }

    insertNode(node) {
        if (this._nodes.has(node.Id)) {
            this.toastService.error('There is already a node with this Id in the collection');
        }
        
        return this.$http({
            method: 'POST',
            url: '/api/nodes',
            data: node
        })
        .then( (response) => {
            let _node = response.data;
            this._nodes.set(_node.Id, _node.data);
            return this._nodes.get(_node.Id);
        })
        .catch( (error) => {
            this.toastService.error(error.data);
        });
    }

    updateNode(node) {
        if (this._node.has(node.Id)) {
            this._nodes.set(node.Id, node);
        }
    }

    deleteNode(node) {
        if (this._node.has(node.Id)) {
            this._nodes.delete(node.Id);
        }
    }

    getNodes() {
        return this.$http({
            method: 'GET',
            url: '/api/nodes'
        })
        .then( (response) => {
            this._nodes = new Map();
            for (let m in response.data) {
                this._nodes.set(response.data[m].Id, response.data[m]);
            }
            return this._nodes;
        })
        .catch( (error) => {
            this.toastService.error(error.data);
        });
    }
}

export default nodesService;