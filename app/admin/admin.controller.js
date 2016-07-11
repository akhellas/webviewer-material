class adminController {
    constructor(adminService, nodesService) {
        this.nodesService = nodesService;
        this.nodes = nodesService.nodes;

        this.TypeEnum = [{
            Id: 0,
            Description: 'Προβολή'
        },
            {
                Id: 1,
                Description: 'Βιβλιοθήκη'
            }];

        // Variables to open edit for each category
        this._editCategory = true;
        this._editSubCategory1 = true;
        this._editSubCategory2 = true;
        this.disable1 = false;
        this.disable2 = false;
        this.disable3 = false;
        //
    }
    swap(nodes, index1, index2) {
        var tmp = nodes[index1];
        nodes[index1] = nodes[index2];
        nodes[index2] = tmp;
    }

    openSubCategory(index) {
        this.subCategory1Sel = null;
        this.subCategory2Sel = null;
        this.categorySel = index;
    }

    removeCategory(category) {
        switch (category) {
            case 0:
                if (this.categorySel != null || this.categorySel != undefined) {
                    this.nodes.splice(this.categorySel, 1);
                    this.categorySel = null;
                }
                break;
            case 1:
                if (this.subCategory1Sel != null || this.subCategory1Sel != undefined) {
                    this.nodes[this.categorySel].Children.splice(this.subCategory1Sel, 1);
                    this.subCategory1Sel = null;
                }
                break;
            case 2:
                if (this.subCategory2Sel != null || this.subCategory2Sel != undefined) {
                    this.nodes[this.categorySel].Children[this.subCategory1Sel].Children.splice(this.subCategory2Sel, 1);
                    this.subCategory2Sel = null;
                }
                break;
        }
    }

    save(category) {
        switch (category) {
            case 0:
                if (this.nodes[this.categorySel].Id != null || this.nodes[this.categorySel].Id != undefined) {
                    //update
                    this._editCategory = true;
                    this.disable2 = false;
                    this.disable3 = false;
                } else {
                    //insert
                    this._editCategory = true;
                    this.disable2 = false;
                    this.disable3 = false;
                }
                break;
            case 1:
                if (this.nodes[this.categorySel].Children[this.subCategory1Sel].Id != null || this.nodes[this.categorySel].Children[this.subCategory1Sel].Id != undefined) {
                    //update
                    this._editSubCategory1 = true;
                    this.disable1 = false;
                    this.disable3 = false;
                } else {
                    //insert
                    this._editSubCategory1 = true;
                    this.disable1 = false;
                    this.disable3 = false;
                }
                break;
            case 2:
                if (this.nodes[this.categorySel].Children[this.subCategory1Sel].Children[this.subCategory2Sel].Id != null || this.nodes[this.categorySel].Children[this.subCategory1Sel].Children[this.subCategory2Sel].Id != undefined) {
                    //update
                    this._editSubCategory2 = true;
                    this.disable1 = false;
                    this.disable2 = false;
                } else {
                    //insert
                    this._editSubCategory2 = true;
                    this.disable1 = false;
                    this.disable2 = false;
                }
                break;
        }
    }

    editCategory() {
        if (this.categorySel != null || this.categorySel != undefined)
            this._editCategory = false;
        this.disable2 = true;
        this.disable3 = true;
    }

    editSubCategory1() {
        if (this._editSubCategory1 != null || this._editSubCategory1 != undefined)
            this._editSubCategory1 = false;
        this.disable1 = true;
        this.disable3 = true;
    }

    editSubCategory2() {
        if (this._editSubCategory2 != null || this._editSubCategory2 != undefined)
            this._editSubCategory2 = false;
        this.disable1 = true;
        this.disable2 = true;
    }

    addCategory(category) {
        switch (category) {
            case 0: //Add Main Category
                if (this._editCategory) {
                    this._editCategory = false;
                    this.disable2 = true;
                    this.disable3 = true;
                    this.nodes.push({
                        Id: '',
                        Title: 'Nέα Κατηγορία',
                        Color: {
                            red: 255,
                            green: 255,
                            blue: 255
                        },
                        InOverview: false,
                        Children: []
                    });
                    this.categorySel = (this.nodes.length - 1);
                }
                break;
            case 1: //Add SubCategory
                if (this._editSubCategory1) {
                    this._editSubCategory1 = false;
                    this.disable1 = true;
                    this.disable3 = true;
                    this.nodes[this.categorySel].Children.push({
                        Id: '',
                        Title: 'Nέα Κατηγορία',
                        Color: '',
                        InOverview: false,
                        Children: []
                    });
                    this.subCategory1Sel = (this.nodes[this.categorySel].Children.length - 1);
                }
                break;
            case 2: //Add Second SubCategory 
                if (this._editSubCategory2) {
                    this._editSubCategory2 = false;
                    this.disable1 = true;
                    this.disable2 = true;
                    this.nodes[this.categorySel].Children[this.subCategory1Sel].Children.push({
                        Id: '',
                        Title: 'Nέα Κατηγορία',
                        Color: '',
                        InOverview: false,
                        Children: []
                    });
                    this.subCategory2Sel = (this.nodes[this.categorySel].Children[this.subCategory1Sel].Children.length - 1);
                }
                break;
        }

    }
}

export default adminController;