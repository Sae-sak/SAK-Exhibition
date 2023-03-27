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
      case "Information":
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
        <div className="relative w-screen h-screen">
          {/* 오버레이 영역 */}
          <Overlay />

          {/* 알람 영역 */}
          <div className="absolute z-40 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="flex items-center justify-between h-24 gap-4 px-4 py-3 mx-auto bg-white rounded-md w-80"
              >
                <div className="gap-4 row-center">
                  <div className="row-center">{alertIcon}</div>

                  <div className="gap-1 col-start">
                    <span className="text-xl font-semibold font-body">
                      {alertType}
                    </span>
                    <span className="text-sm font-body">{content}</span>
                  </div>
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
        </div>
      ) : null}
    </>
  );
};

// HOC 적용
export default Portal(Alert);
