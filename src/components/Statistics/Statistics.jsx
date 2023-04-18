
import PropTypes from 'prop-types';

import { Section, Title, StatList,StatListItem, Label, Percentage } from './Statistics.styled';




// частина друга
export const Statistics = ({ title, stats }) => {
    return <Section>
      {title && <Title>{title}</Title>}
        <StatList>{stats.map((stat, idx) => (
            <StatListItem key={stat.id} id={stat.id} index={idx}>
                <Label>{stat.label}</Label>
                <Percentage>{stat.percentage}%</Percentage>
            </StatListItem>
        ))}
        </StatList>
    </Section>
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired).isRequired
}