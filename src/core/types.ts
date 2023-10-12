export interface InitialState {
  loading: boolean;
  error: string | null;
  productList: IProduct[] | null;
}

export interface IProduct {
  id: string;
  name: string;
  price: number;
}
