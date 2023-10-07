export interface InitialState {
  loading: boolean;
  error: string | null;
  products: IProduct[];
}

export interface IProduct {
  id: string;
  name: string;
  price: string;
}
