import { Account } from './Account';
import { Adres } from './Adres';
export class Klant {
  public id: number;
  public naam : string;
  public afbeelding: string;
  public account : Account;
  public woonAdres : Adres;
}
