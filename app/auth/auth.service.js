class authService {
    constructor($http, toastService) {
        this.$http = $http;
        this.toastService = toastService;
        
        this._users = new Map();
        this._roles = new Map();

        this.getUsers();
        this.getRoles();
    }

    get users() {
        return Array.from(this._users.values());
    }

    getUsers() {
        this.$http({
            method: 'GET',
            url: '/api/users'
        })
        .then( (response) => {
            this._users = new Map();
            for (let m in response.data) {
                this._users.set(response.data[m].Id, response.data[m]);
            }
            this.toastService.info('Loaded users');
        })
        .catch( (error) => {
            this.toastService.error(error.data);
        });
    }

    get roles() {
        return Array.from(this._roles.values());
    }

    insertRole(role) {
        if (!this._users.has(role.Id)) {
            this._users.set(role.Id, role);
        }
    }

    updateRole(role) {
        if (this._users.has(role.Id)) {
            this._users.set(role.Id, role);
        }
    }

    deleteRole(role) {
        if (this._users.has(role.Id)) {
            this._users.delete(role.Id);
        }
    }

    getRoles() {
        this.$http({
            method: 'GET',
            url: '/api/roles'
        })
        .then( (response) => {
            this._roles = new Map();
            for (let m in response.data) {
                this._roles.set(response.data[m].Id, response.data[m]);
            }
            this.toastService.info('Loaded users');
        })
        .catch( (error) => {
            this.toastService.error(error.data);
        });
    }
}

export default authService;