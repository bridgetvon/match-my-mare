import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu } from './SidebarEl';

const Sidebar = ({toggle}) => {
  return (
      <SidebarContainer >
          <Icon onClick= {toggle}>
              <CloseIcon  />
          </Icon>
          <SidebarWrapper>
              <SidebarMenu>
                  <SidebarLink to="/login" onClick= {toggle}>
                    Login
                  </SidebarLink>
                  <SidebarLink to="/saved" onClick= {toggle}>
                    Saved
                  </SidebarLink>
                  <SidebarLink to="/find" onClick= {toggle}>
                    Find a mare
                  </SidebarLink>
              </SidebarMenu>
          </SidebarWrapper>
      </SidebarContainer>
  )
};
 export default Sidebar;