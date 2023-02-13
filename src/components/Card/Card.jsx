import React from "react";
import styles from "./card.css";
import Avatar from "../../img/v.jpg";
import Location from "../../img/location.svg";
import Link from "../../img/link.svg";
import Twitter from "../../img/twitter.svg";
import Building from "../../img/building.svg";

const Card = ({ userData, getDataRepos }) => {
  return (
    <div className={styles.card}>
      <div className={styles.avatar}>
        <img src={userData.avatar_url} alt="" />
      </div>
      <div className={styles.wrapper}>
        <div className={styles.information}>
          <div className={styles.fio}>
            {userData.name !== null ? <h2>{userData.name}</h2> : <div />}
            <h3>
              <a
                target="_blank"
                href={`https://github.com/${userData.login}`}
              >{`@${userData.login}`}</a>
            </h3>
          </div>

          <span className={styles.join}>
            Joined: <br />
            {userData.created_at}
          </span>
        </div>
        <div className={styles.describe}>
          <p>{userData.bio}</p>
        </div>
        <div className={styles.follow}>
          <div className={styles.repos}>
            <p>Repos</p>
            <h3 onClick={() => getDataRepos(userData.repos_url)}>
              {userData.public_repos}
            </h3>
          </div>
          <div className={styles.following}>
            <p>Following</p>
            <h3>{userData.following}</h3>
          </div>
          <div className={styles.followers}>
            <p>Followers</p>
            <h3>{userData.followers}</h3>
          </div>
        </div>
        <div className={styles.allinfo}>
          {userData.location !== null && (
            <div className={styles.malaga}>
              <img src={Location} alt="" />
              <span>{userData.location}</span>
            </div>
          )}
          {userData.blog !== null && userData.blog !== "" && (
            <div className={styles.link}>
              <img src={Link} alt="" />
              <span>
                <a target="_blank" href={`${userData.blog}`}>
                  {userData.blog}
                </a>
              </span>
            </div>
          )}
          {userData.twitter_username !== null && (
            <div className={styles.twitter}>
              <img src={Twitter} alt="" />
              <span>{userData.twitter_username}</span>
            </div>
          )}
          {userData.company !== null && (
            <div className={styles.building}>
              <img src={Building} alt="" />
              <span>{userData.company}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
