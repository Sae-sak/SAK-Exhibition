export interface IChatState {
  isChat: boolean;
}

export interface IMessage {
  uid: string;
  displayName: string;
  text: string;
  photoURL: string;
  createdAt: string;
}

export interface ISendForm {
  chat: string;
}
