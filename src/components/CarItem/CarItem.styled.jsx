import styled from "@emotion/styled";

export const Item = styled.li`
  max-width: 400px;
  height: 100%;
  position: relative;
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BoxTitle = styled.div`
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 8px;
`;

export const Make = styled.h2`
  color: #121417;
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const Model = styled.p`
  color: #3470ff;
  font-size: 16px;
  line-height: calc(24 / 16);
`;

export const Year = styled.p`
  color: #121417;
  font-size: 16px;
  font-weight: 600;
  line-height: calc(24 / 16);
`;

export const WrapperImg = styled.div`
  margin-bottom: 14px;
`;

export const Img = styled.img`
  width: 100%;
  height: 268px;

  border-radius: 14px;
`;

export const Price = styled.p`
  color: #121417;
  font-size: 16px;
  font-weight: 600;
  line-height: calc(24 / 16);
`;

export const WrapperDetails = styled.div`
  margin-bottom: 28px;

  /* @media (max-width: 1028px) {
    margin-bottom: 48px;
  } */
`;

export const ListDetails = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const ItemDetails = styled.li`
  border-right: 2px solid rgba(18, 20, 23, 0.2);

  &:last-child {
    border-right: none;
  }
`;

export const ItemText = styled.p`
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);
  padding-right: 6px;

  &:last-child {
    padding-right: none;
  }
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;

  border-radius: 12px;
  background: #3470ff;

  color: #fff;
  font-family: Manrope;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: calc(20 / 14);

  :hover,
  :focus {
    background: #0b44cd;
    filter: drop-shadow(0 0 10px #0b44cd);
    transition: filter 0.5s ease-out;
  }
`;
