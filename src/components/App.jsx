import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from "components/Friends/Friends";
import { TransactionHistory } from "components/Transactions/Transactions";
import user from "components/DataBase/user.json";
import data from "components/DataBase/data.json";
import friends from "components/DataBase/friends.json";
import transactions from "components/DataBase/transactions.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
     <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />

<Statistics title="Upload stats" stats={data} />
<FriendList friends={friends} />   
<TransactionHistory items={transactions} />
      
    </div>
  );
};
