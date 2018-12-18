export class Product {
  id    :number;
  name  :string;
  image :string;
  price :number;

  constructor(name = "", image = "", price = 0) {
    this.name = name;
    this.image = image;
    this.price = price;
  }
}
