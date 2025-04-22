import { useEffect, useState } from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  SideNav,
  SideNavItems,
  SideNavLink,
  HeaderMenuButton,
} from "@carbon/react";
import { Link } from "react-router-dom";

import "./CustomHeader.scss";

function CustomHeader(): any {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavOpen((prev: any) => !prev);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div id="custom-header">
        <Header aria-label="MyApp">
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={toggleSideNav}
            isActive={isSideNavOpen}
          />
          <HeaderName prefix="My">App</HeaderName>
          <HeaderNavigation aria-label="Main navigation">
            <HeaderMenuItem as={Link} to="/dashboard">
              Dashboard
            </HeaderMenuItem>
            <HeaderMenuItem as={Link} to="/settings">
              Settings
            </HeaderMenuItem>
          </HeaderNavigation>
        </Header>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavOpen}
          onOverlayClick={toggleSideNav}
        >
          <SideNavItems>
            <SideNavLink as={Link} to="/dashboard">
              Dashboard
            </SideNavLink>
            <SideNavLink as={Link} to="/settings">
              Settings
            </SideNavLink>
          </SideNavItems>
        </SideNav>
      </div>
    </>
  );
}

export default CustomHeader;
