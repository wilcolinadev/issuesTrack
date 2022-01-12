import styled from "styled-components";
interface Props {
    padding?: number;
    justifyFlex: string;
}

export const NavigationWrapper = styled.ul`
    display: flex;
    flex-flow: row nowrap;
    justify-content: ${(props:Props) => props.justifyFlex};
    padding: ${(props:Props) => props.padding + 'rem'};
    box-sizing: border-box;
    list-style: none;
`;

export const NavigationElement = styled.li`
    color: #fff;
    font-size: 1rem;
    margin-left:2rem;
`;

export const NavigationTitle = styled.h1`
  color:#fff;
  text-decoration: none;
  font-size: 1rem;
`;

