import * as React from "react";
import * as styles from "./index.scss";

interface IProps {
  dataList: any;
  titles: any;
  totalTitle: any;
}
export default React.memo((props: IProps) => {
  // 每个分组的详细列表
  const { dataList = [], titles = [], totalTitle = [] } = props;
  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.title}>
          <tr className={styles.tr}>
            <td className={styles.td1}>{titles[1]}</td>
            <td className={styles.td2}>{titles[2]}</td>
            <td className={styles.td3}>{titles[3]}</td>
            <td className={styles.td4}>{titles[4]}</td>
            <td className={styles.td5}>{titles[5]}</td>
          </tr>
        </div>
        <div className={styles.content}>
          {dataList &&
            dataList.map((item, index) => {
              return (
                <tr className={styles.tr1} key={index}>
                  <td className={styles.td1}>{item.totalSale}</td>
                  <td className={styles.td2}>{item.returnPatr}</td>
                  <td className={styles.td3}>{item.customSale}</td>
                  <td className={styles.td4}>{item.compareSale}</td>
                  <td className={styles.td5}>{item.compareRadio}</td>
                </tr>
              );
            })}
        </div>
      </div>
      <div className={styles.wraptotal}>
        <div className={styles.title}>
          <tr className={styles.tr}>
            <td className={styles.td1}>{totalTitle[1]}</td>
            <td className={styles.td2}>{totalTitle[2]}</td>
            <td className={styles.td3}>{totalTitle[3]}</td>
            <td className={styles.td4}>{totalTitle[4]}</td>
            <td className={styles.td5}>{totalTitle[5]}</td>
          </tr>
        </div>
      </div>
    </>
  );
});
