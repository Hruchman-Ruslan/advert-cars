import styled from "@emotion/styled";

export const List = styled.ul`
  display: grid;
  row-gap: 50px;
  column-gap: 30px;
  justify-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1240px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const Item = styled.li`
  max-width: 400px;
  position: relative;
`;

export const WrapperTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Img = styled.img`
  width: "100%";
  height: 268px;

  border-radius: 14px;
`;

export const WrapperDetails = styled.div`
  width: "100%";
`;

export const ListDetails = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const ItemDetails = styled.li``;
