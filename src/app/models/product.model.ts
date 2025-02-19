export class Product {
     name : String;
     description : String;
     imgUrl : String;
     price : number;
     retailPrice : number;

     id : string;
     

     constructor(name: String, description: String, imgUrl: String, price: number, retailPrice: number){
          this.name = name;
          this.description = description;
          this.imgUrl = imgUrl;
          this.price = price;
          this.retailPrice = retailPrice;
          this.id = crypto.randomUUID().substring(0, 8);
     }
}