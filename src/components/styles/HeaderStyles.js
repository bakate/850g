import styled from 'styled-components';

const HeaderStyles = styled.div`
  .bar {
    border-bottom: 7px solid ${props => props.theme.black};
     padding-bottom: 2rem;
    display: grid;
    gap: 0.3rem;
      width: 100%;
    margin-top: 2rem;
    grid-template-columns: auto 1fr 1fr;
    justify-content: space-evenly;
    align-items: center;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      justify-content: center;
       border-bottom: 4px solid ${props => props.theme.black};
    }
  }
`;

const LogoStyles = styled.div`
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  div {
    transition: ${({ theme }) => theme.mainTransition};
    .span1 {
      color: ${({ theme }) => theme.green};
      font-size: 1.8rem;
    }
    .span2 {
      color: ${({ theme }) => theme.primary};
      font-size: 1.8rem;
    }
    .span3 {
      display: block;
    }
    &:hover {
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: bold;
    }
  }
  @media (max-width: 768px) {
    margin: 1rem 0;
    text-align: center;
div {
     font-size: 1.8rem;
    .span1 {
      color: ${({ theme }) => theme.green};
    }
    .span2 {
      color: ${({ theme }) => theme.primary};
    }
    .span3 {
      display: none;
    }
  }
`;

export { HeaderStyles, LogoStyles };

