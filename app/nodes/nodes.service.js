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
        if (!this._node.has(node.Id)) {
            this.toastService.error('Unknown node');
        }

        return this.$http({
            method: 'PUT',
            url: '/api/nodes/' + id,
            data: node
        })
        .then( (response) => {
            let _node = response.data;
            this._nodes.set(_node.Id, _node);
            return this._nodes.get(_node.Id);
        })
        .catch( (error) => {
            this.toastService.error(error.data);
        });
    }

    deleteNode(node) {
        if (!this._node.has(node.Id)) {
            this.toastService.error('Unknown node');
        }
        
        return this.$http({
            method: 'DELETE',
            url: '/api/nodes/' + id,
            data: node
        })
        .then( (response) => {
            this._nodes.delete(_node.Id);
            this.toastService.info('Node was removed from the collection');
            return this.nodes;
        })
        .catch( (error) => {
            this.toastService.error(error.data);
        });
    }
}

export default nodesService;