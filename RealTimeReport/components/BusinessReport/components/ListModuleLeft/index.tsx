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
            <td className={styles.td1}>
              <span className={styles.tag}>{titles[0]}</span>
            </td>
          </tr>
        </div>
        <div className={styles.content}>
          {dataList &&
            dataList.map((item, index) => {
              return (
                <tr className={styles.tr1} key={index}>
                  <td className={styles.td2}>{item.dataTypeName}</td>
                </tr>
              );
            })}
        </div>
      </div>
      <div className={styles.wraptotal}>
        <div className={styles.title}>
          <tr className={styles.tr}>
            <td className={styles.td}>{totalTitle[0]}</td>
          </tr>
        </div>
      </div>
    </>
  );
});
