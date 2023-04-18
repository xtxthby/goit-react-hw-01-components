import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  margin: 0 auto;
  margin-bottom: 16px;
  
  max-width: 100%;
  width: 360px;
  
  border-radius: 8px;
  box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
  background-color: #e9edff;
`;
export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 8px;
`;

export const Avatar = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;

`;

export const Info = styled.p`
  color: #9e0202;
  text-shadow: 1px 1px 1px white;
  font-family: 1.125;
  font-size: 16px;
`;

export const Name = styled(Info)`
  color: #9e0202;
  font-size: 32px;
  font-weight: 500;
`;

export const Tag = styled(Info)`
  color: #2b3162;
`;

export const Location = styled(Info)`
  color: #1a236a;
`;

export const StatsList = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: 100%;
`;

export const StatsItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 100%;
:not(:last-child){
border-right: 1px dotted #2b3162;
}
`;

export const StatsInfo = styled.span`
  margin: 0px 5px;
  color: #2b3162;
  font-size: 16px;
`;

export const Label = styled(StatsInfo)`
  font-weight: 400;
`;

export const Quantity = styled(StatsInfo)`
  color: #2b3162;
  text-shadow: 1px 1px 1px #fff;
  font-weight: bold;
`;