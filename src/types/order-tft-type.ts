export interface IOrderTft {
  rankCurrent: {
    rank: string;
    division: string;
    lp: string;
  };
  rankDesired: {
    rank: string;
    division: string;
    lp: string;
  };
  streamed: boolean;
  chat: boolean;
  priority: boolean;
  additionalWin: boolean;
  mmrs: string;
  discount: string;
  discord: string;
}
