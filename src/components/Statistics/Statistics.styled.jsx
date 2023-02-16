import styled from '@emotion/styled';


export const StatisticsContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    box-shadow: 0 0 10px #c6cccced;
    margin-left: 30px;`

export const StatsTitle = styled.h2`
    font-weight: 700;
    font-size: 30px;
    margin-bottom: 15px;
    color: #524a4d;`

export const StatsList = styled.ul`
    width: 370px;
    display: flex;
    justify-content: space-evenly;
    padding: 0;`

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: inherit;
    align-items: center;`


export const StatsLabel = styled.span`
 font-weight: 700;
    font-size: 20px;
    color: #524a4d8b;
    margin-bottom: 5px;`

export const StatsPercentage = styled.span` 
    font-weight: 800;
    font-size: 20px;
    color: #524a4d;`
