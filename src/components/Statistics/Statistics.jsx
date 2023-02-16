import PropTypes from 'prop-types';
import { StatisticsContainer,StatsTitle,StatsList,StatsItem, StatsLabel,StatsPercentage } from "./Statistics.styled";


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



export const Statistics = ({ title, stats }) => {
  return <StatisticsContainer>
       
     {title && <StatsTitle>{title}</StatsTitle>}
   
       
  <StatsList>
             {stats.map(({id,label,percentage}) => (<StatsItem key={id} style ={{ backgroundColor: getRandomHexColor() }}> 
        <StatsLabel>{label}</StatsLabel>
        <StatsPercentage>{percentage}</StatsPercentage>
    </StatsItem>))}
  </StatsList>
</StatisticsContainer>
}
 

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};