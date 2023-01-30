import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { useAppDispatch, useAppSelector } from "@toolkit/hook";
import { alertActions } from "@features/alert/alertSlice";
import Overlay from "./Overlay";
import Portal from "@components/Portal";

//--------------------------------------------------------------------------------
// isAlert - 알림 활성 / 알림 비활성
// alertType - 알림의 종류, 제목, 아이콘, 색깔을 설정
// content - 알림의 내용을 설정
//--------------------------------------------------------------------------------

const Alert = () => {
  const dispatch = useAppDispatch();
  const { isAlert, alertType, content } = useAppSelector(
    (state) => state.alert
  );
  const [alertIcon, setAlertIcon] = useState(<div></div>);

  // message.alertType 별 분기 처리 및 컴포넌트 할당
  useEffect(() => {
    switch (alertType) {
      case "Success":
        setAlertIcon(
          <i className="text-3xl ri-checkbox-circle-fill text-alert_success"></i>
        );
        break;
      case "Warning":
        setAlertIcon(
          <i className="text-3xl ri-error-warning-fill text-alert_warning"></i>
        );
        break;
      case "Danger":
        setAlertIcon(
          <i className="text-3xl ri-close-circle-fill text-alert_danger"></i>
        );
        break;
      case "Infomation":
        setAlertIcon(
          <i className="text-3xl ri-information-fill text-alert_info"></i>
        );
        break;
      default:
        setAlertIcon(<i className="text-3xl">?</i>);
    }
  }, [alertType]);

  return (
    <>
      {isAlert ? (
        <>
          {/* 오버레이 영역 */}
          <Overlay />

          {/* 알람 영역 */}
          <div className="z-40 p-4 pt-14">
            <div className="max-w-xl ">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="gap-4 px-4 py-3 bg-white rounded-md row-center"
              >
                <div className="row-center">{alertIcon}</div>

                <div className="col-start">
                  <span className="text-xl font-semibold">{alertType}</span>
                  <span className="text-sm">{content}</span>
                </div>
                <div className="">
                  <i
                    className="text-2xl ri-close-fill"
                    onClick={() => dispatch(alertActions.alertClose())}
                  ></i>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

// HOC 적용
export default Portal(Alert);
