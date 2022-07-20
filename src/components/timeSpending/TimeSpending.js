import classes from "./TimeSpending.module.css";
import SpentChart from "../spentChart/SpentChart";
const TimeSpending = ({ userData }) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>How much time is that really?</h2>
      <div className={classes.timeSpending}>
        <div className={classes.section}>
          <p>The average person will spend 33% of their life sleeping</p>
          <p>
            For you a chart visualizing the division of sleep would look
            something like this
          </p>
        </div>
      </div>

      <div>
        <SpentChart userData={userData} />
      </div>
    </div>
  );
};

export default TimeSpending;
