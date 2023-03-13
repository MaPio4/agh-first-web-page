class ImageChanger {
    constructor(minImageId, maxImageId, path) {
        this.minImageId = minImageId;
        this.maxImageId = maxImageId;
        this.currentImageId = this.minImageId;
        this.path = path;
    }   

    getImageName(index) {
        return this.path+"image_"+index+".jpg"
    }
}
