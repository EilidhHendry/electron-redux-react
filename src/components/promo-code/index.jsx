import React from 'react';
import electron from 'electron';

import styles from './styles.css';

export default function (props) {
  const site = props.story.url.replace(/(https?:\/\/)(www\.)?([^\/]+)(.+)/, '$3');
  const userUrl = props.story.url;
  let style = [styles.promo];
  if (props.promo.seen) {
    style.push(styles.seenPromo);
  }
  return (
    <li className={style.join(' ')} key={props.promo.id}>
      <div className={styles.scoreWrapper} onClick={props.onFavoriteClick}>
        <button className={styles.favoriteBtn} />
        <span className={styles.score}>{props.promo.score}</span>
      </div>
      <div className={styles.body} onClick={props.onClick}>
        <div className={styles.title}>{props.story.title}</div>
        <div className={styles.subtitle}>
          {site}
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          by <a href="#" onClick={(e) => electron.shell.openExternal(userUrl)}>{props.promo_code.by}</a>
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        </div>
      </div>
      <div className={styles.commentsWrapper} onClick={props.onCommentsClick}>
        <span>{props.promo_code.kids && props.promo_code.kids.length}</span>
      </div>
    </li>
  );
}
