import React from 'react';
import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  getDaysToSummer() {
    const currentTime = new Date();
    const summerStart = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 21));
    const summerEnd = new Date(Date.UTC(currentTime.getUTCFullYear(), 8, 23));

    let days;

    if (summerStart <= currentTime && currentTime <= summerEnd) {
      days = '';
    } else if (currentTime > summerEnd) {
      const currentYear = currentTime.getUTCFullYear();
      const nextYear = currentYear + 1;
      const nextSummer = new Date(Date.UTC(nextYear, 5, 21));
      days = Math.floor((nextSummer.getTime() - currentTime.getTime()) / (1000*60*60*24)) + ' days to summer';
    } else if (currentTime < summerStart) {
      const oneDay = new Date(Date.UTC(currentTime.getUTCFullYear(), 5, 20));
      if (currentTime.getTime() === oneDay.getTime()) {
        days = '1 day to summer';
      } else {
        days = Math.floor((summerStart.getTime() - currentTime.getTime()) / (1000*60*60*24)) + ' days to summer';
      }
    }

    return days ;
  }

  render() {
    //const { title } = this.props;
    return(
      <div className={styles.component}>
        <h3 className={styles.title}>{this.getDaysToSummer()}</h3>
      </div>
    );
  }
}

DaysToSummer.propTypes = {  title: PropTypes.string,
};

export default DaysToSummer;
