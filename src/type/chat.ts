export interface IChatState {
  isChat: boolean;
}

export interface IMessage {
  uid: string;
  displayName: string;
  text: string;
  photoURL: string;
  createdAt: { seconds: number; nanoseconds: number };
}

export interface ISendForm {
  chat: string;
}
