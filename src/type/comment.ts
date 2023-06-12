export interface IComment {
  uid: string;
  commentId: string;
  displayName: string;
  text: string;
  photoURL: string;
  createdAt: { seconds: number; nanoseconds: number };

  slug: string;
}

export interface ICommentForm {
  comment: string;
}
