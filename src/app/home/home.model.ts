
export class ImageGallery {

    public title: string = '';
    public aImagenes: Array<any>;


    set setImagenes(valor: Array<any>) {
        this.aImagenes = valor;
    }

    getImagenes(valor: Array<any>) {
        return this.aImagenes;
    }


}
