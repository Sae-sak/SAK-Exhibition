import { alertActions } from "@features/alert/alertSlice";
import { useAppDispatch } from "@toolkit/hook";
import { ICompany } from "@type/company";
import { useRouter } from "next/router";

export default function ShareButton({ company, emailPath }: ICompany) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const sendText = "SAK-Exhibition 2023"; // 전달할 텍스트

  function shareTwitter() {
    if (window) {
      window.open(
        "https://twitter.com/intent/tweet?text=" +
          sendText +
          "&url=" +
          router.asPath
      );
    }
  }

  function shareFacebook() {
    if (window) {
      window.open(
        "http://www.facebook.com/sharer/sharer.php?u=" + router.asPath
      );
    }
  }

  function shareLink() {
    navigator.clipboard.writeText(router.asPath); // 링크 복사
    dispatch(
      alertActions.alert({
        alertType: "Information",
        content: "링크가 복사되었습니다!",
      })
    );
    console.log(router);
  }

  function shareEmail() {
    navigator.clipboard.writeText(emailPath); // 링크 복사
    dispatch(
      alertActions.alert({
        alertType: "Information",
        content: "이메일이 복사되었습니다!",
      })
    );
  }

  switch (company) {
    case "Twitter":
      return (
        <button onClick={() => shareTwitter()}>
          <i className="text-3xl ri-twitter-fill"></i>
        </button>
      );

    case "Facebook":
      return (
        <button onClick={() => shareFacebook()}>
          <i className="text-3xl ri-facebook-fill"></i>
        </button>
      );

    case "CopyLink":
      return (
        <button onClick={() => shareLink()}>
          <i className="text-3xl ri-share-line"></i>
        </button>
      );

    case "CopyEmail":
      return (
        <button onClick={() => shareEmail()}>
          <i className="text-[30px] ri-mail-line"></i>
        </button>
      );

    default:
      return <span>company prop needed</span>;
  }
}
