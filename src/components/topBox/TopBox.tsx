import { topDealUsers } from "../../constants/data";
import "./topBox.scss";

const TopBox = () => {
  return (
    <div className="topBox">
      <h2>Top Deals</h2>

      <div className="list">
        {topDealUsers.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
                <img src={user.img} alt="user-img" />
                <div className="userInfo">
                    <span className="username">{user.username}</span>
                    <span className="useremail">{user.email}</span>
                </div>
            </div>
            <span className="amount">{user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopBox;
