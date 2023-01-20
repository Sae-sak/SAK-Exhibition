import {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {motion} from "framer-motion";

import {useAppDispatch, useAppSelector} from "@src/toolkit/hook";
import {alertActions} from "@features/alert/alertSlice";
import AlertPortal from "./AlertPortal";

//--------------------------------------------------------------------------------
// isAlert - 알림 활성 / 알림 비활성
// alertType - 알림의 종류, 제목, 아이콘, 색깔을 설정
// content - 알림의 내용을 설정
//--------------------------------------------------------------------------------

const Alert = () => {
  const dispatch = useAppDispatch();
  const {alertType, content} = useAppSelector((state) => state.alert);

  const [alertIcon, setAlertIcon] = useState(<div></div>);

  // message.alertType 별 분기 처리 및 컴포넌트 할당
  useEffect(() => {
    switch (alertType) {
      case "Success":
        setAlertIcon(
          <i className="text-xl ri-checkbox-circle-fill text-alert_success"></i>
        );
        break;
      case "Warning":
        setAlertIcon(
          <i className="text-xl ri-error-warning-fill text-alert_warning"></i>
        );
        break;
      case "Danger":
        setAlertIcon(
          <i className="text-xl ri-close-circle-fill text-alert_danger"></i>
        );
        break;
      case "Infomation":
        setAlertIcon(
          <i className="text-xl ri-information-fill text-alert_info"></i>
        );
        break;
      default:
        setAlertIcon(<i className="text-xl">?</i>);
    }
  }, [alertType]);

  return (
    <>
      <motion.div
        onClick={() => dispatch(alertActions.alertClose())}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.3}}
        className="absolute top-0 z-30 w-screen h-screen "
      ></motion.div>
      <div className="fixed top-0 left-0 right-0 z-40 m-auto ">
        <div>
          <motion.div
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.3}}
            className="gap-6 px-6 py-3 rounded-md bg-slate-400 row-center"
          >
            <div className="row-center">{alertIcon}</div>

            <div className="col-start">
              <span className="text-xl font-semibold">{alertType}</span>
              <span className="text-sm">{content}</span>
            </div>
            <i
              className="text-2xl ri-close-fill"
              onClick={() => dispatch(alertActions.alertClose())}
            ></i>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AlertPortal(Alert);
