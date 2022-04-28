

export class Client {
  public id_client: number;
  public prenom: string;
  public nom: string;
  public sexe: string;
  public email: string;
  public phone: boolean;
  public adult: boolean;

  constructor(id,prenom,nom,sexe,email,phone,adult){
    this.id_client=id;
    this.prenom=prenom;
    this.nom=nom;
    this.sexe=sexe;
    this.email=email;
    this.phone=phone;
    this.adult=adult;
  }


}
