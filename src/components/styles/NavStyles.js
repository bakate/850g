import styled from 'styled-components';

const NavStyles = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  font-size: 1.5rem;
  ul, li,
  button {
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;
    color: var(--black);
    font-weight: 800;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 5px;
    }
    &:before {
      content: '';
      /* width: 2px;
      background: var(--primary);
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0; */
    }
    &:after {
      height: 2px;
      background: var(--primary);
      content: '';
      width: 0;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2.5rem;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }

  @media (max-width: 1300px) {
    border-top: 1px solid var(--grey);
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }
`;
const OptionStyles = styled.div`
button {
  padding: .5rem 1rem;
}
  .categories {
    position: absolute;
    z-index: 5;
  }
  .drops {
    display: none;
    color: var(--primary);
    opacity: 0;

  li {
      list-style-type: none;
      transition: var(--transition);
      background: var(--primary);
      text-transform: lowercase;
      padding-top: 0;
        width: 100%;
      &:hover {
        background: var(--green);
        text-transform: uppercase;
        padding-left: 1rem;
        box-shadow: var(--bs);
        /* border-radius: var(--radius); */
        margin: 1rem;
      }
    }
  }

  &:hover .drops {
    display: block;
    opacity: 1;
  }
`;
export { NavStyles, OptionStyles };

