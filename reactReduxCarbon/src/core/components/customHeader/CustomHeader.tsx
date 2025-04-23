/* eslint-disable no-debugger */
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
  HeaderGlobalAction,
  HeaderGlobalBar,
} from "@carbon/react";
import { Dashboard } from "@carbon/icons-react";
import { Link } from "react-router-dom";

import "./CustomHeader.scss";
import Avatar from "../avatar/Avatar";

function CustomHeader(): any {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  const toggleSideNav = () => {
    debugger;
    setIsSideNavOpen((prev: any) => !prev);
  };

  useEffect(() => {
    debugger;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isSideNavOpen;
  }, [isSideNavOpen]);

  return (
    <>
      <div className="custom-header">
        <Header aria-label="MyApp">
          <HeaderMenuButton
            className="header-menu-btn"
            aria-label="Open menu"
            onClick={toggleSideNav}
            isActive={isSideNavOpen}
          />
          <HeaderName prefix="My">App</HeaderName>
          <HeaderNavigation aria-label="Main navigation" className="header-navigation">
            <HeaderMenuItem as={Link} to="/dashboard">
              <Dashboard style={{ marginRight: "0.5rem" }} />
              Dashboard
            </HeaderMenuItem>
            <HeaderMenuItem as={Link} to="/settings">
              Settings
            </HeaderMenuItem>
          </HeaderNavigation>
          <HeaderGlobalBar>
            <HeaderGlobalAction aria-label="User" className="header-user">
              <Avatar name="Jane Doe" />
            </HeaderGlobalAction>
          </HeaderGlobalBar>
        </Header>
        <SideNav
          className="side-nav"
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
