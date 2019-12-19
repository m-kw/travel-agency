import React from 'react';
import PropTypes from 'prop-types';
import styles from './HappyHourAd.scss';

class HappyHourAd extends React.Component {
  constructor() {
    super();

    /* run this.forceUpdate() every second */
    setInterval(() => {this.forceUpdate(); }, 1000);
  }

  getCountdownTime() {
    const currentTime = new Date();
    const nextNoon = new Date(Date.UTC(currentTime.getUTCFullYear(), currentTime.getUTCMonth(), currentTime.getUTCDate(), 12, 0, 0, 0));

    if (currentTime.getUTCHours() >= 12) {
      nextNoon.setUTCDate(currentTime.getUTCDate() + 1);
    }

    return Math.round((nextNoon.getTime() - currentTime.getTime()) / 1000);
  }

  render () {
    const countdown = this.getCountdownTime();

    const { title, descr } = this.props;
    return (
      <div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{(countdown > 23 * 60 * 60) ? descr : countdown}</div>
      </div>
    );
  }
}

HappyHourAd.propTypes = {
  title: PropTypes.string,
  descr: PropTypes.string,
};

export default HappyHourAd;
