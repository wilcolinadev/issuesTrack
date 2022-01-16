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
    margin-right: 1rem;
    margin-left: .5rem;
   
  }
  
`;

export const NavigationElement = styled.p`
  color: #fff;
  font-size: 1.3rem;
  margin-left: 1rem;
  display: none;
  box-sizing: border-box;

  &:hover {
   color: #ffca20;
    transition: .3s ease-in-out;
    border-bottom: 2px solid  #ffca20;
  }


  @media only screen and (min-width: 700px) {
    display: block;
    font-size: 1.8rem;
    margin-right: ${(props: Props) => props.marginRight + "rem"};
    margin-top: .5rem;
  }

  @media only screen and (min-width: 1025px) {
    display: block;
   
  }


`;

export const NavigationTitle = styled.p`
  color:#fff;
  text-decoration: none;
  font-size: 1.5rem;
  letter-spacing: 4px;
  font-weight: bold;
  &:hover {
    color:  #ffca20;
    transition: .3s ease-in-out;
  }


  @media only screen and (min-width: 700px) {
    
    font-size: 2.5rem;
  }
`;

