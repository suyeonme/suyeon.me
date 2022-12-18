import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 2rem;
  cursor: pointer;

  @media (max-width: 576px) {
    order: 2;
    margin-top: 0;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    margin-top: 2rem;
    order: initial;
  }

  span {
    font-size: 1.5rem;
    margin-right: 0.5rem;

    @media (max-width: 576px) {
      font-size: 2.3rem;
      margin-right: 1rem;
    }

    @media (max-width: 812px) and (orientation: landscape) {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
  }
`;

export const ArrowIcon = styled.img`
  width: 1rem;
  height: 1rem;

  @media (max-width: 576px) {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    width: 1rem;
    height: 1rem;
  }
`;

export const Dropdown = styled.ul`
  width: 6.5rem;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 10;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  opacity: 1;
  background-color: white;

  @media (max-width: 576px) {
    width: 10rem;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    width: 6.5rem;
  }
`;

export const DropdownItem = styled.li<{ selected?: boolean }>`
  font-size: 1.5rem;
  line-height: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ selected }) => (selected ? '#f2efef' : 'inherit')};

  &:hover {
    background-color: #f2efef;
  }

  @media (max-width: 576px) {
    font-size: 2.3rem;
  }

  @media (max-width: 812px) and (orientation: landscape) {
    font-size: 1.5rem;
  }
`;

export const Flag = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.8rem;

  @media (max-width: 576px) {
    width: 2rem;
    height: 2rem;
  }
`;
