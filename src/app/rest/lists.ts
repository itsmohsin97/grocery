export class Lists {
    id: string;
    productName: string;
    quantity: string;
    pricePerKg: string;

    constructor(id, productName, quantity, pricePerKg) {
        this.id = id;
        this.productName = productName;
        this.quantity = quantity;
        this.pricePerKg = pricePerKg;
    }
}
