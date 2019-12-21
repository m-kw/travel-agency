import React from 'react';
import PropTypes from 'prop-types';
import styles from './DaysToSummer.scss';

class DaysToSummer extends React.Component {
  getDaysToSummer() {
    const summerStart = new Date();
    summerStart.setUTCMonth(5, 20);

    const summerEnd = new Date();
    summerEnd.setUTCMonth(8, 22);

    const currentTime = new Date();

    if (currentTime > summerStart || currentTime < summerEnd) {
      return '';
    }
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

DaysToSummer.propTypes = {
  title: PropTypes.string,
};

export default DaysToSummer;
