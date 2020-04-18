import styled from 'styled-components';

const FooterStyles = styled.footer`
  background: var(--grey);
  color: var(--black);
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  .logos {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
  }

  .icon {
    font-size: 2rem;
    cursor: pointer;
    color: var(--black);
    transition: var(--transition);
    &:hover {
      color: var(--primary);
    }
  }

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export default FooterStyles;
