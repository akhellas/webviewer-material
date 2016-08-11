class adminService {
    constructor($http, toastService) {
        this.$http = $http;
        this.toastService = toastService;
    }
    getViews() {
        return this.$http({
            method: 'GET',
            url: '/api/views'
        })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                this.toastService.error(error.data);
            });
    }
}


export default adminService;