import styled from '@emotion/styled';

export const ProfileContainer = styled.div` 
width: 1000px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;
    width: 370px;
    box-shadow: 0 0 10px #c6cccced;
    border-radius: 10px;`

export const ProfileDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: inherit;
    border-bottom: #7e6f7498 solid 2px;`

export const ProfileAvatar = styled.img`
    width: 300px;
    box-shadow: 0 0 3px 0px #0000004d;
    border-radius: 50%;
    background-color: #e7eeeeed;
    padding: 20px 10px 0px 10px;
    margin-bottom: 15px;`

export const ProfileName = styled.p` 
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 15px;
    color: #524a4d;
    `
export const ProfileTag = styled.p`
    font-weight: 500;
    font-size: 20px;
    color: #524a4d;
    margin-bottom: 15px;`

    export const  ProfileLocation = styled.p`
    font-weight: 700;
    font-size: 20px;
    color: #524a4d;
    margin-bottom: 15px;`

export const UserStats = styled.ul` 
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: auto;
    padding: 0;
    width: inherit;
    background-color: #7e6f7449;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;`

export const UserStatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    min-width: 80px;
    padding: 7px 0;`

export const StatsLabel = styled.span`
    margin-right: 3px;
    font-weight: 700;
    font-size: 20px;
    color: #524a4d8b;
    margin-bottom: 5px;`


export const StatsQuantity = styled.span`
     font-weight: 800;
    font-size: 20px;
    color: #524a4d;`







