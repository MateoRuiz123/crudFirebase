class Product {
    constructor(id, name, price, retailer, amountInStock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.retailer = retailer;
        this.amountInStock = amountInStock;
    }

    toString() {
        return `Product: ${this.name}, Price: ${this.price}, Retailer: ${this.retailer}, Amount in Stock: ${this.amountInStock}`;
    }
    
}

export default Product;
