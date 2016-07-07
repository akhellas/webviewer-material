class adminController {
    constructor(adminService, nodesService) {

        this.nodes = nodesService.nodes;

        // Variables for selected categories
        this.categorySel;
        this.subCategory1Sel;
        this.subCategory2Sel;
        //

        // Variables to open edit for each category
        this.editCategory = true;
        this.editSubCategory1 = true;
        this.editSubCategory2 = true;
        //

        // this.activeBanner = function (id) {
        //     for (var item in this.banner) {
        //         if (item.Id == id)
        //             item.visible = !(item.visible);
        //         else
        //             item.visible = false;
        //     }

        // }
        this.openSubCategory = function (index) {
            this.subCategory1Sel = null;
            this.subCategory2Sel = null;
            this.categorySel = index;

        };

        this.addCategory = function (category) {
            switch (category) {
                case 0:
                    if (!this.editCategory) {
                        this.editCategory = true;
                    }
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
                    this.editCategory = !this.editCategory;
                    break;
                case 1:
                    if (!this.editSubCategory1) {
                        this.editSubCategory1 = true;
                    }
                    this.nodes[this.categorySel].Children.push({
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
                    this.subCategory1Sel = (this.nodes[this.categorySel].Children.length - 1);
                    this.editSubCategory1 = !this.editSubCategory1;
                    break;
                case 2:
                    if (!this.editSubCategory2) {
                        this.editSubCategory2 = true;
                    }
                    this.nodes[this.categorySel].Children[this.subCategory1Sel].Children.push({
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
                    this.subCategory2Sel = (this.nodes[this.categorySel].Children[this.subCategory1Sel].Children.length - 1);
                    this.editSubCategory2 = !this.editSubCategory2;
                    break;
            }

        }

        this.removeCategory = function (category) {
            switch (category) {
                case 0:
                    if (this.categorySel != null) {
                        this.nodes.splice(this.categorySel, 1);
                        this.categorySel = null;
                    }
                    break;
                case 1:
                    if (this.subCategory1Sel != null) {
                        this.nodes[this.categorySel].Children.splice(this.subCategory1Sel, 1);
                        this.subCategory1Sel = null;
                    }
                    break;
                case 2:
                    if (this.subCategory2Sel != null) {
                        this.nodes[this.categorySel].Children[this.subCategory1Sel].Children.splice(this.subCategory2Sel, 1);
                        this.subCategory2Sel = null;
                    }
                    break;
            }
        }

        this.swap = function (nodes, index1, index2) {

            var tmp = nodes[index1];
            nodes[index1] = nodes[index2];
            nodes[index2] = tmp;
        }

    }

}

export default adminController;