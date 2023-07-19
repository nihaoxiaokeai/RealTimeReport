import * as React from "react";
import * as qs from "query-string";
import CompanyReport from "./components/CompanyReport";
import BusinessReport from "./components/BusinessReport";
import * as api from "../../services/salesReport";

const { useState, useEffect } = React;
export default React.memo(() => {
  const [error, setError] = useState(null);
  const [DeliveryHomeData, setDeliveryHomeData] = useState(null);
  const [SelfHelpOrederData, setSelfHelpOrederData] = useState(null);
  const [FontVisible, setFontVisible] = useState(false);
  const [compareDate, setCompareDate] = useState(null);
  document.title = "公司销售快报";
  useEffect(() => {
    // 获取msgid
    const params = qs.parse(window.location.search);
    const { msgid } = params;
    // const msgid = "fe54e50a-c0c0-402a-b483-583ae39ca191";
    const p = Promise.race([
      // 线上业务销售快报
      api.getCompanySaleReport(msgid, true).then((res: any) => {
        const SelfHelpOrederData = res;
        setSelfHelpOrederData(SelfHelpOrederData);
        setCompareDate(SelfHelpOrederData.compareDate);
      }),

      // 公司整体销售快报
      api.getCompanySaleOnline(msgid, true).then((res: any) => {
        const DeliveryHomeData = res;
        setDeliveryHomeData(DeliveryHomeData);
      }),
    ]);

    p.then((res) => {
      console.log(res);
    }).catch((err) => {
      setError(err.message);
    });
  }, []);
  const check = () => {
    if (FontVisible) {
      setFontVisible(false);
    } else {
      setFontVisible(true);
    }
  };
  return (
    <>
      {error ? (
        <div>请刷新...</div>
      ) : (
        <>
          <CompanyReport data={SelfHelpOrederData ? SelfHelpOrederData : {}} />
          <BusinessReport
            data={DeliveryHomeData ? DeliveryHomeData : {}}
            compareDate={compareDate ? compareDate : ""}
          />
        </>
      )}
    </>
  );
});
