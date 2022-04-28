
export class Reservation {
  constructor(
    public id: number,
    public date_debut: string,
    public date_fin: string,
    public price: string,
    public chambre: string,
    public client: string
  ) {
  }
}
