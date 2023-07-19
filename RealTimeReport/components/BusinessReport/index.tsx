import * as React from "react";
import * as styles from "./index.scss";
import GroupsTag from "../GroupsTag";
import ListModuleLeft from "./components/ListModuleLeft";
import ListModuleRight from "./components/ListModuleRight";
interface IProps {
  data: any;
  compareDate: any;
}

export default React.memo((props: IProps) => {
  // 表格整体数据
  const { companySaleOnlineDetailList: contentList = [], companySaleOnlineSum = {} } = props.data;
  const { compareDate } = props
  const totalTitle = [
    companySaleOnlineSum.dataTypeName,
    companySaleOnlineSum.totalSale,
    companySaleOnlineSum.returnPatr,
    companySaleOnlineSum.customSale,
    companySaleOnlineSum.saleRadio,
  ];
  const titles = [
    "按业务",
    "实收金额（万）",
    "客单量",
    "客单价",
    "实收占比",
  ];
  return (
    <>
      <GroupsTag name={props.data.title} />
      <div className={styles.wrap}>
        <div>
          <div className={styles.leftContent}>
            <ListModuleLeft
              titles={titles}
              dataList={contentList}
              totalTitle={totalTitle}
            />
          </div>
          <div className={styles.right}>
            <div className={styles.rightContent}>
              <ListModuleRight
                titles={titles}
                dataList={contentList}
                totalTitle={totalTitle}
              />
            </div>
          </div>
        </div>
        <div className={styles.explanation}>
          <p>统计口径说明：</p>
          <p>1.专柜到家实收金额为当日发货的实际金额。</p>
          <p>2.线上商城占比为占公司整体实收金额比。</p>
          <p>3.超市到家指标中剔除茅台预购的影响。</p>
          <p>
            4.当日数据为前一日23:00 至当日23:00数据，同期为{compareDate}
            全天数据。
          </p>
        </div>
      </div>
    </>
  );
});
