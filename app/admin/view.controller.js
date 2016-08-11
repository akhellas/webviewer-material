class viewController {
    constructor(adminService) {
        this.views = adminService.get;
    }

}
export default viewController;