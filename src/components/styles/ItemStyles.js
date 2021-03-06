import styled from 'styled-components';

const Item = styled.div`
  background: var(--white);
  border: 1px solid var(--grey);
  border-radius: var(--radius);
  box-shadow: var(--bs);
  transition: var(--transition);
  position: relative;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    transition: var(--transition);
  }
  p span {
    font-size: 14px;
    line-height: 2;
    font-weight: 400;
    flex-grow: 1;
    padding: 0 3rem;
    font-size: 1.5rem;
  }
  /* .buttonList {
    display: grid;
    width: 100%;
    border-top: 1px solid var(--grey);
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;
    background: var(--grey);
    & > * {
      background: white;
      border: 0;
      font-family: 'JetBrains Mono';
      font-size: 1rem;
      padding: 1rem;
    } */
  /* } */
  &:hover img {
    opacity: 0.6;
  }
  /* @media (max-width: 767px) {
     display: flex; */
     /* position: relative; */
    /* img{
      /* flex: 1 0; */
      /* width: 100%;
      object-fit: cover; */
    /* } */
    };
`;

export default Item;
