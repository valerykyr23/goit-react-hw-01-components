import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import user from "components/DataBase/user.json";
import data from "components/DataBase/data.json";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
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
<Statistics stats={data} />
      
    </div>
  );
};
