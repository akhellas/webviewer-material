class authService {
    
    constructor($http, toastService) {
        this.$http = $http;
        this.toastService = toastService;
        
        this._users = new Map();
        this._roles = new Map();

        this.getRoles();
        this.getUsers();
    }

    get roles() {
        return Array.from(this._roles.values());
    }

    get users() {
        return Array.from(this._users.values());
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
        })
        .catch( (error) => {
            this.toastService.error(error.data);
        });
    }

    insertRole(role) {
        if (this._roles.has(role.Id)) {
            this.toastService.error('There is already a role with this Id in the collection');
        }
        
        return this.$http({
            method: 'POST',
            url: '/api/roles',
            data: role
        })
        .then( (response) => {
            let _role = response.data;
            this._roles.set(_role.Id, _role.data);
            return this._roles.get(_role.Id);
        })
        .catch( (error) => {
            this.toastService.error(error.data);
        });
    }

    updateRole(role) {
        if (!this._roles.has(role.Id)) {
            this.toastService.error('Unknown role');
        }

        return this.$http({
            method: 'PUT',
            url: '/api/roles/' + id,
            data: role
        })
        .then( (response) => {
            let _role = response.data;
            this._roles.set(_role.Id, _role);
            return this._roles.get(_role.Id);
        })
        .catch( (error) => {
            this.toastService.error(error.data);
        });
    }

    deleteRole(role) {
        if (!this._roles.has(role.Id)) {
            this.toastService.error('Unknown role');
        }
        
        return this.$http({
            method: 'DELETE',
            url: '/api/roles/' + id,
            data: role
        })
        .then( (response) => {
            this._nodes.delete(role.Id);
            this.toastService.info('Role was removed from the collection');
            return this.roles;
        })
        .catch( (error) => {
            this.toastService.error(error.data);
        });
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
        })
        .catch( (error) => {
            this.toastService.error(error.data);
        });
    }
}

export default authService;