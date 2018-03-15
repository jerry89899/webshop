import { Adres } from './Adres';
export class Account {
  public id: number;
  public openDatum: string;
  public isActief: boolean;
  public adresList : Array<Adres>;
}
