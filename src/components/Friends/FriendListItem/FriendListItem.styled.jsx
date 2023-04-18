import styled from '@emotion/styled';

export const FriendItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 42px;
    margin: 10px auto;
    padding: 4px;

    max-width: 100%;
    width: 360px;

    border-radius: 8px;
    box-shadow: -1px -1px 1px #fff, 1px 1px 1px #babecc;
    border: aqua;
    background-color: #e9edff;
`
export const Status = styled.span`
    display: block;
    margin-left: 1.625rem;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${props => {
        return props.isOnline ? 'green' : 'red';
    }};
`;
export const Image = styled.img`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    box-shadow: -3px -3px 7px #ffffff, 3px 3px 5px #ceced1;
  
`;
export const Name = styled.p`
    margin-left: 10px;
    color: #000;
    text-shadow: 1px 1px 1px #fff;
    font-size: 16px;
    font-weight: 700;
`;