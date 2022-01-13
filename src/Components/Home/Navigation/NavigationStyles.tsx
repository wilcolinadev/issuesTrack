import styled from "styled-components";
interface Props {
    padding?: number;
    justifyFlex: string;
}

export const NavigationWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: ${(props:Props) => props.justifyFlex};
    padding: ${(props:Props) => props.padding + 'rem'};
    box-sizing: border-box;
    
  
`;

export const NavigationElement = styled.li`
    color: #fff;
    font-size: 1.2rem;
    margin-left:1rem;
    display: none;
    box-sizing: border-box;
  
`;

export const NavigationTitle = styled.h1`
  color:#fff;
  text-decoration: none;
  font-size: 1.5rem;
  letter-spacing: 3px;
`;

