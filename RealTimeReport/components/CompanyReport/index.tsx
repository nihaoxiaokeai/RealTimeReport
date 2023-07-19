import * as React from "react";
import * as styles from "./index.scss";
import GroupsTag from "../GroupsTag";
import ListModuleLeft from "./components/ListModuleLeft";
import ListModuleRight from "./components/ListModuleRight";
interface IProps {
  data: any;
}

export default React.memo((props: IProps) => {
  // 表格整体数据
  const { companySaleDetailList: contentList = [], companySaleSum = {}, compareDate = '' } = props.data;
  const totalTitle = [
    companySaleSum.dataTypeName,
    companySaleSum.totalSale,
    companySaleSum.returnPatr,
    companySaleSum.customSale,
    companySaleSum.compareSale,
    companySaleSum.compareRadio,
  ];
  const titles = [
    "按业态",
    "实收金额（万）",
    "客单量",
    "客单价",
    "同期实收金额（万）",
    "同比",
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
      </div>
      {/* <div className={styles.explanation}>
        <p>统计口径说明：</p>
        <p>1.销售额为当日实收销售额，包含到家业务的封单销售额</p>
        <p>2.当日数据为前一日22:45至当日22:45数据，同期为{compareDate}全天数据。</p>
      </div> */}
    </>
  );
});
