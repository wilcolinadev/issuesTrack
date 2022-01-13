import styled from "styled-components";

interface Props {
    padding?: number;
    justifyFlex?: string;
    marginRight?: number;
}

export const NavigationWrapper = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: ${(props:Props) => props.justifyFlex};
    padding: ${(props:Props) => props.padding + 'rem'};
    box-sizing: border-box;
  
  @media only screen and (min-width:700px) {
    margin-right: 1.5rem;
    margin-left: 1.5rem;

  }
  
`;

export const NavigationElement = styled.p`
  color: #fff;
  font-size: 1.3rem;
  margin-left: 1rem;
  display: none;
  box-sizing: border-box;

  &:hover {
    color: #f3f3bd;
    transition: .3s ease-in-out;
  }


  @media only screen and (min-width: 700px) {
    display: block;

  }

  @media only screen and (min-width: 1025px) {
    display: block;
    margin-right: ${(props: Props) => props.marginRight + "rem"};
  }


`;

export const NavigationTitle = styled.p`
  color:#fff;
  text-decoration: none;
  font-size: 1.5rem;
  letter-spacing: 4px;
  font-weight: bold;
  &:hover {
    color: #f3f3bd;
    transition: .3s ease-in-out;
  }
`;

