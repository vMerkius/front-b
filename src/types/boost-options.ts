export interface IBoostOptions {
  mmrs: string;
  solo: boolean;
  lane: {
    primary: string;
    secondary: string;
  };
  champions: string[];
  additionalWin: boolean;
  streamed: boolean;
  chat: boolean;
  flash: string;
  priority: boolean;
  queue: string;
  discount: string;
}
