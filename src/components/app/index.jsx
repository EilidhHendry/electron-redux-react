import React, { Component } from 'react';
import electron, { ipcRenderer } from 'electron';

import * as actions from '../../actions';
import PromoCodeList from '../promo-code-list';

export default class App extends Component {

  render() {
    const { promo_codes } = this.props.getState();
    const promoCodesBeingLoaded = promo_codes.filter(s => s.loading).length;

    let content, filteredPromoCodes;
    switch (filter.activeTab) {
      case 'topPromoCodes':
        filteredPromoCodes = promo_codes.filter(s => s.loaded && s.score >= filter.scoreLimit);
        content = <PromoCodeList
          promo_codes={filteredPromoCodes}
          onScrollToEnd={() => this.props.dispatch(actions.requestPromoCodes())} />
        break;
      default:
        break;
    }

    return (
      <div>
        <div className={styles.header}>
          <button className={styles.infoBtn} onClick={() => this.props.dispatch(actions.switchTab('info'))} />
          {promoCodesBeingLoaded > 0 && <div className={styles.updatingPromoCodes}>updating<br />{promoCodesBeingLoaded} promo codes</div>}
        </div>
        <div className={styles.subHeader}>
          <button className={styles.topStoriesBtn} onClick={() => this.props.dispatch(actions.switchTab('topStories'))} />
        </div>

        {content}

        <div className={styles.footer}>
          <button hidden={filter.activeTab !== 'topStories'} className={styles.markAllAsReadBtn} onClick={() => this.props.dispatch(actions.markAllAsRead(filteredStories))}>Mark all as read</button>
          <div hidden={filter.activeTab !== 'topStories'} className={styles.filter}>
            <div className={styles.scoreLimit}>{filter.scoreLimit}</div>
            <input type="range" min="0" max="1000" value={filter.scoreLimit} onChange={(e) => this.props.dispatch(actions.updateScoreLimit(e.target.value))} />
          </div>
          <button className={styles.quitBtn} onClick={() => ipcRenderer.send('quit')}>Quit App</button>
        </div>
      </div>
    );
  }
}
