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

    insertNode(node) {
        if (!this._nodes.has(node.Id)) {
            this._nodes.set(node.Id, node);
        }
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
        this.$http({
            method: 'GET',
            url: '/api/nodes'
        })
        .then( (response) => {
            for (let m in response.data) {
                this._nodes.set(response.data[m].Id, response.data[m]);
            }
            console.log(this._nodes);

            this.toastService.info('Loaded nodes');
        })
        .catch( (error) => {
            this.toastService.error(error.data);
        });       
        
    }
}

export default nodesService;