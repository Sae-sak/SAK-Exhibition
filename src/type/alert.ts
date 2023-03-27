export interface IAlert {
  alertType: "Success" | "Warning" | "Danger" | "Information" | "";
  content: string;
}

export interface IAlertState {
  isAlert: boolean;
  alertType: "Success" | "Warning" | "Danger" | "Information" | "";
  content: string;
}
