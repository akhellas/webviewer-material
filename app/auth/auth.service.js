class authService {
    constructor() {
        this._users = new Map();
        this._roles = new Map();
        
        this.getUsers();
        this.getRoles();
    }

    get users() {
        return Array.from(this._users.values());
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

    getUsers() {
        let mock = [
            {
                Id: '1',
                Username: 'admin',
                IsAdmin: true,
                Name: 'administrator user'
            },
            {
                Id: '2',
                Username: 'user2',
                IsAdmin: false,
                Name: 'user 2'
            },
            {
                Id: '3',
                Username: 'user3',
                IsAdmin: false,
                Name: 'user 3'
            }
        ];
        
        for (let m in mock) {
            this._users.set(mock[m].Id, mock[m]);
        }
    }

    getRoles() {
        let mock = [
            {
                Id: '1',
                Title: 'ΚΕΠΙΧ',
                Description: 'bla',
                Rights: [{ _Id: '21', Edit: true, View: false }]
            },
            {
                Id: '2',
                Title: 'ΕΠΙΧΕΙΡΗΣΕΙΣ',
                Description: 'bla',
                Rights: [{ _Id: '3', Edit: false, View: true }]
            },
            {
                Id: '3',
                Title: 'ΗΓΕΣΙΑ',
                Description: 'bla',
                Rights: [{ _Id: '2', Edit: true, View: false }]
            },
            {
                Id: '4',
                Title: 'ΔΙΑΧΕΙΡΙΣΤΕΣ',
                Description: 'bla',
                Rights: [{ _Id: '1', Edit: true, View: true }]
            }
        ];

        for (let m in mock) {
            this._roles.set(mock[m].Id, mock[m]);
        }
    }
}

export default authService;