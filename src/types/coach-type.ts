export interface ICoachCreate {
  name: string;
  game: string;
  rank: string;
  lanes: string[];
  champions: string[];
  rating: number;
  recommended: boolean;
  imageUrl: string | null;
  price: number;
}

export interface ICoach {
  _id: string;
  name: string;
  game: string;
  rank: string;
  lanes: string[];
  champions: string[];
  rating: number;
  recommended: boolean;
  imageUrl: string | null;
  price: number;
}
