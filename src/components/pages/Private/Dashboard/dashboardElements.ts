import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background: #424242;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 93%;
  height: 90%;
  border-radius: 30px;
  background: #000;
  box-sizing: border-box; 
  flex-direction: column;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  margin-top: 24px;
  width: 93%;
  height: 8%;
`;

export const HeaderLogo = styled(LinkR)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const HeaderIconWrap = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderIcon = styled.button`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  align-items: center;
  background: #424242;
  border-radius: 50px;
  border: none;
`;

export const InnerContainer = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 95%;
  height: 90%;
  margin-bottom: 1.5rem;
  grid-template-columns: 1fr 5fr;
`;

export const SidebarWrap = styled.div`
  width: 85%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  left: 0;
  top: 0;
`;

export const UserWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 20%;
  margin-top: 20px;
`;

export const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const Username = styled.p`
  color: #fff;
  font-weight: bold;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  grid-template-columns: 1fr;
`;

export const MenuWrap = styled.div`
  display: flex;
  align-items: center;
  grid-template-columns: 1fr;
`

export const MenuIcon = styled.div`
  width: 30px;
  height: 30px;
`

export const MenuItem = styled(LinkR)`
  color: #e0e0e0;
  height: 50px;
  margin-right: 40px;
  text-decoration: none;
`

export const DashboardContainer = styled.div`
  background: #424242;
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;
