class Page {
    constructor(p_title, p_text, p_imagePath, p_numberOfImages) {
        this.title = p_title;
        this.text = p_text;
        this.imagePath = p_imagePath;
        this.numberOfImages = p_numberOfImages;
        this.imageChanger = new ImageChanger(1, this.numberOfImages, this.imagePath);
    }

    getTitle() {
        return this.title;
    }

    getText() {
        return this.text;
    }

    getImagePath() {
        return this.imagePath;
    }

    getNumberOfImages() {
        return this.numberOfImages;
    }

    getImageChanger() {
        return this.imageChanger;
    } 
}
