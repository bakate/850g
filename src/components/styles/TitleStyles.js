import styled from 'styled-components';

const TitleStyles = styled.div`
  padding: 0 .5rem;
  div {
    text-align: ${props => (props.centerTitle ? 'center' : 'left')};
    h1,
    h2 {
      text-transform: capitalize;
    }
    hr {
      height: ${props => (props.hr ? '0.4rem' : '0')};
      width: ${props => (props.hr ? '8rem' : '0')};
      background: ${props => (props.hr ? 'var(--primary) ': 'none')};
      margin: ${props => (props.centerTitle ? '0 auto' : '0')};
    }
  }
`;

export default TitleStyles;
