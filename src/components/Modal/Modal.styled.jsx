import styled from "@emotion/styled";
import { AiOutlineClose } from "react-icons/ai";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: 760px;
  max-width: 540px;
  width: 100%;
  padding: 40px;
  border-radius: 24px;

  background: #fff;
`;

export const Close = styled(AiOutlineClose)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 24px;
  cursor: pointer;
`;

export const WrapperImg = styled.div`
  max-width: 460px;
  height: auto;

  margin-bottom: 14px;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  background: #f3f3f2;
`;

export const Img = styled.img`
  border-radius: 14px;
`;

export const BoxAbout = styled.div`
  margin-bottom: 24px;
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
  margin-bottom: 8px;
`;

export const Make = styled.h2`
  color: #121417;
  font-size: 18px;
  line-height: calc(24 / 18);
`;

export const Model = styled.p`
  color: #3470ff;
  font-size: 18px;
  line-height: calc(24 / 18);
`;

export const Year = styled.p`
  color: #121417;
  font-size: 18px;
  font-weight: 600;
  line-height: calc(24 / 18);
`;

export const WrapperInfo = styled.div`
  max-width: 300px;
  margin-bottom: 14px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 6px;
`;

export const Item = styled.li`
  border-right: 2px solid rgba(18, 20, 23, 0.1);

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

export const WrapperAbout = styled.div`
  width: "100%";
`;

export const About = styled.p`
  color: #121417;
  font-weight: 400;
  line-height: calc(20 / 14);
`;

export const BoxBuns = styled.div`
  margin-bottom: 24px;
`;

export const TitleBuns = styled.h3`
  margin-bottom: 8px;
  color: #121417;
  line-height: calc(20 / 14);
`;

export const ListBuns = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
`;

export const ItemBuns = styled.li``;

export const TextBuns = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);
`;

export const Decor = styled.span`
  padding-right: 6px;
  padding-left: 6px;
  color: rgba(18, 20, 23, 0.2);
`;

export const RentalBox = styled.div`
  margin-bottom: 24px;
`;

export const RentalTitle = styled.h4`
  color: #121417;
  line-height: calc(20 / 14);
  margin-bottom: 8px;
`;

export const RentalList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
`;

export const RentalItem = styled.li`
  border-radius: 35px;
  background: #f9f9f9;
  padding: 7px 14px;
`;

export const RentalText = styled.p``;

export const WrapperDecor = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

export const RentalDecor = styled.span`
  color: #3470ff;
  font-size: 12px;
  font-weight: 600;
  line-height: calc(18 / 12);
  letter-spacing: -0.24px;
`;

export const Button = styled.a`
  display: inline-flex;
  padding: 12px 50px;
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
    background: #3470ff;
    filter: drop-shadow(0 0 10px #3470ff);
    transition: filter 0.5s ease-out;
  }
`;
