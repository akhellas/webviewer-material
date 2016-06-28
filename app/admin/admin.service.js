class adminService {
    constructor($http) {
        this.$http = $http;
    }

    getNodes() {
        return [
            { Id: '1', Title: '1' },
            { Id: '2', Title: '2' }
        ]
    }
}

export default adminService;