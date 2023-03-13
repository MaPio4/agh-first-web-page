let manager;
function getManager() {
    return manager
}
let imageTimer = undefined;
function startImageTimer(p_manager) {
    imageTimer = setTimeout(p_manager.switchImage, 3000, p_manager);
}

class Manager {
    constructor(p_pages) {
        this.currentPageIndex = 0;
        this.pages = p_pages;
        this.currentPage = p_pages[0];
        this.currentImageIndex = 0;
        this.switchImage(this);
    }

    switchPage(p_index) {
        this.currentPageIndex = p_index;
        let newPage = this.pages[this.currentPageIndex];
        this.currentPage = newPage;
        this.currentImageIndex = 0;
        this.updateContent(newPage);
    }

    updateContent(p_page) {
        document.getElementById("content_text").innerHTML=p_page.getText();
        document.getElementById("title_message").innerHTML=p_page.getTitle();
        this.switchImage(this);
    }

    switchImage(p_manager) {
        if(imageTimer != undefined) {
            clearTimeout(imageTimer);
        }
        let index = p_manager.getNextImageIndex();
        document.getElementById("content_image_img").src=p_manager.getCurrentPage().getImageChanger().getImageName(index+1);
        console.log("switchImage()" + index);
        p_manager.setCurrentImageIndex(index)
        startImageTimer(p_manager);
    }

    getNextImageIndex() {
        let index = this.getCurrentImageIndex() + 1;
        if(index >= this.currentPage.getNumberOfImages()) {
            index = 0;
        }
        return index;
    }

    getCurrentImageIndex() {
        return this.currentImageIndex;
    }

    getCurrentPage() {
        return this.currentPage;
    }

    setCurrentImageIndex(p_index) {
        this.currentImageIndex = p_index;
        this.currentPage = this.pages[this.currentPageIndex];
    }

}

var onPageLoad = function() {
    let pages = [
        new Page("Witaj na stronie o telefonach!", "Witaj na stronie o telefonach. Tutaj znajdziesz wiele przydatnych informacji na temat flagowych modeli telefonów komórkowych. Jeżeli zastanawiasz się, który model wybrać - ta strona jest właśnie dla Ciebie!", "images/index/", 3),
        new Page("Samsung","To jest strona o samsungu", "images/samsung/", 4),
        new Page("Motorola","To jest strona o motoroli", "images/motorola/", 4),
        new Page("Sony","To jest strona o sony", "images/sony/", 4)
    ]

    manager = new Manager(pages);
    manager.switchPage(0);
    console.log("onLoad");
}