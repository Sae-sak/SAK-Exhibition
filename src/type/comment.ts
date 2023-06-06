export interface IComment {
  uid: string;
  displayName: string;
  text: string;
  photoURL: string;
  createdAt: { seconds: number; nanoseconds: number };
}

export interface ICommentForm {
  comment: string;
}
