class adminController {
    constructor(adminService, nodesService) {

        this.nodes = nodesService.getNodes();
        this.overviewShow = false;
        this.isEdit = false;

        this.categorySel;
        this.subCategory1Sel;
        this.subCategory2Sel;

        this.addCategory = true;
        this.addSubCategory1 = true;
        this.addSubCategory2 = true;

        this.openSubCategory = function (index) {
            this.subCategory1Sel = null;
            this.subCategory2Sel = null;
            this.categorySel = index;

        };
        this.removeCategory = function (category) {
            if (this.categorySel != null) {
                switch (category) {
                    case 0:
                        this.nodes.splice(this.categorySel, 1);
                        break;
                    case 1:
                        this.nodes[this.categorySel].Children.splice(this.subCategory1Sel, 1);
                        break;
                    case 2:
                        this.nodes[this.categorySel].Children[this.subCategory1Sel].Children.splice(this.subCategory2Sel, 1);
                        break;
                }
            } else {

            }
        };


        this.swap = function (nodes, index1, index2) {

            var tmp = nodes[index1];
            nodes[index1] = nodes[index2];
            nodes[index2] = tmp;
        }

        this.isOpen = false;
        this.color = {
            red: 255,
            green: 255,
            blue: 255
        }
    }

}

export default adminController;