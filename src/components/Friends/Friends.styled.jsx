import styled from '@emotion/styled';

export const FriendsContainer = styled.div`
display: flex;
    align-items: center;
    margin-top: 30px;
    flex-direction: column;
    width: 370px;`


export const FriendsList = styled.ul`
    width: 300px;
    margin: 0 auto;
    margin-bottom: 40px;
    padding: 0;`

export const FriendsListItem = styled.li`
    padding: 5px 10px;
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 0px 5px 0px #6b6b6bbf;
    margin-bottom: 10px;
    border-radius: 10px;`

// export const FriendStatusOnline = styled.span`
//     margin-right: 10px;
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     background-color: #0b970b;`

// export const FriendStatusOffline = styled.span`
//     margin-right: 10px;
//     width: 20px;
//     height: 20px;
//     border-radius: 50%;
//     background-color: #b32929;`

export const FriendAvatar = styled.img`
    margin-right: 10px;
    width: 70px;
    border-radius: 5px;`

export const FriendName = styled.p`
    font-size: 20px;
    font-weight: 700;`


const setIconColor = props => {
    switch (props.status) {
        case true:
            return '#0b970b';
        case false:
            return '#b32929';
        default:
            return '#000';

    }
}

export const StatusItem = styled.span`
  margin-right: 10px;
  margin-top: 30px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${setIconColor};`
  





