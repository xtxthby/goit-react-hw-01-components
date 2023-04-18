import styled from '@emotion/styled';


export const Table = styled.table`
    margin: 0 auto;
    margin-bottom: 16px;
    padding: 8px;
    max-width: 90%;
    width: 43%;
    border-radius: 8px;
    box-shadow: -0.0625rem -0.0625rem 0.0625rem #fff,
    0.0625rem 0.0625rem 0.0625rem #babecc;
    background-color: #9e0202;
`

export const Thead = styled.thead`
    border-radius: 8px;
    background-color: #e9edff;
    color: #9e0202;
    text-shadow: 0.0625rem 0.0625rem 0.0625rem #fff;
    font-size: 1rem;
    text-transform: uppercase;
`
export const Tr = styled.tr`
    background-color: #e9edff;
`

export const Th = styled.th`
    padding: 0.5rem 0;
    text-align: center;
`
export const Tbody = styled.tbody`
    background-color: white;
`
export const Td = styled.td`
    padding-left: 16px;
    border-right: 0.125rem solid #e9edff; 
    text-align: center;
`