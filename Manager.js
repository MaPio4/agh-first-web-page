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
        new Page("Samsung","Seria produktów koreańskiej firmy Samsung, obejmująca smartfony i tablety. Pierwszy model „Galaxy” pojawił się w połowie 2009 roku jako jeden z trzech sztandarowych serii Samsunga, obok ówczesnej serii „Wave” (S8500) oraz wysłużonej już „Omnia” (pierwszy model – i900). Kolejnym modelem serii jest dostępny w kolorach: czarnym (Sapphire Black), stalowym (Titanium Grey), białym, brązowym (Amber Brown), niebieskim (Pebble Blue) i czerwonym (Garnet Red) oraz w wersji mini Samsung Galaxy S III oraz Galaxy Note II.", "images/samsung/", 4),
        new Page("Motorola","Motorola G82 5G to ciekawy telefon w swojej kategorii cenowej. Ma sporo pamięci, ładny ekran i mocną baterię. Na pokładzie melduje się najnowszy Android 12, 6/128 GB pamięci, potrójny aparat foto i ekran AMOLED o przekątnej 6,60″. Jego odświeżanie jest na poziomie 120 Hz, a zagęszczenie pikseli wynosi 399 ppi. Telefon obsługuje karty pamięci do 1 TB, ma mocną baterię Li-Ion 5000 mAh z szybkim ładowaniem 30 W, 5G, złącze słuchawkowe 3,5 mm, głośniki stereo oraz NFC. Wszystko, czego potrzebujesz!", "images/motorola/", 4),
        new Page("Sony","Pierwszym urządzeniem Sony z serii Xperia był smartfon Xperia X1 wydany we wrześniu 2008 roku. Drugim był wydany rok później model Xperia X2 wyposażony w aparat 8,1 MP, Wi-Fi oraz GPS. W tym czasie nastąpił wzrost zainteresowania konsumentów smartfonami. Model Xperia Pureness był telefonem z przezroczystym wyświetlaczem, nie zawierał kamery i był dostępny u wybranych sprzedawców w wybranych miastach.", "images/sony/", 4)
    ]

    manager = new Manager(pages);
    manager.switchPage(0);
    console.log("onLoad");
}