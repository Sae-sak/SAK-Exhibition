import Alert from "@components/Base/Alert";
import {alertActions} from "@features/alert/alertSlice";
import {useAppDispatch} from "@toolkit/hook";

export default function Danger() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <Alert />
      <button
        onClick={() => {
          dispatch(
            alertActions.alert({
              alertType: "Danger",
              content:
                "내용이 들어가는 자리로 자리 차지를 해보려고합니다. 어떻게 하면 돈 많이 버는 프론트엔드 개발자가 될 수 있을까요 정답을 알려주세요",
            })
          );
        }}
      >
        Danger
      </button>
    </div>
  );
}
