import { Product } from './Product';
export class Categorie {
  public id: number;
  public plaatje : string;
  public naam : string = (this.naam != null) ? 'Geen categorie' : this.naam;
  public omschrijving: string;
  public producten : Array<Product>;
}
