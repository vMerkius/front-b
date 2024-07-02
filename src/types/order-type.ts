export interface IOrder {
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
  lane: {
    primary: string;
    secondary: string;
  };
  champions: string[];
  solo: boolean;
  streamed: boolean;
  chat: boolean;
  flash: string;
  priority: boolean;
  boostType: string;
  queue: string;
  additionalWin: boolean;
  mmrs: string;
  netWins: number | undefined;
  placements: number | undefined;
  discount: string;
}
