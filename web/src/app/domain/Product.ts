import {Discount } from './Discount';
export class Product {
  public id: number;
  public prijs : number;
  public naam : string = 'Geen productnaam';
  public omschrijving: string;
  public plaatje : string;
  public aanbiedingen : Array<Discount>;


}
