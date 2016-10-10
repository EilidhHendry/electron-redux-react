import React, { Component } from 'react';

import PromoCode from '../promo-code';
import styles from './styles.css';

export default class PromoCodeList extends Component {

  componentDidMount() {
    const rootEl = document.getElementById('root');
    rootEl.onscroll = () => {
      if (rootEl.scrollTop + rootEl.offsetHeight >= rootEl.scrollHeight) {
        this.props.onScrollToEnd();
      }
    };
  }

  render() {
    const {
      promo_codes,
      handleClick,
      handleFavoriteClick,
      handleCommentsClick
    } = this.props;
    return (
      <ol className={styles.promoList}>
        {promo_code.map(promo_code => (
          <PromoCode
            promo_code={promo_code}
            onClick={handleClick(promo_code)}
            onFavoriteClick={handleFavoriteClick(promo_code)}
            onCommentsClick={handleCommentsClick(promo_code)}
            key={promo_code.id}
          />
        ))}
      </ol>
    );
  }
}
