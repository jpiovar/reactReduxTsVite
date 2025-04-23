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
  HeaderMenu,
  OverflowMenu,
  OverflowMenuItem,
} from "@carbon/react";
import { Dashboard } from "@carbon/icons-react";
import { Link } from "react-router-dom";

import "./CustomHeader.scss";
import Avatar from "../avatar/Avatar";

function CustomHeader(): any {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const toggleSideNav = () => {
    debugger;
    setIsSideNavOpen((prev: any) => !prev);
  };

  const toggleProfile = () => {
    setOpenProfile((prev) => !prev);
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
          <HeaderNavigation
            aria-label="Main navigation"
            className="header-navigation"
          >
            <HeaderMenuItem as={Link} to="/dashboard">
              <Dashboard style={{ marginRight: "0.5rem" }} />
              Dashboard
            </HeaderMenuItem>
            <HeaderMenu aria-label="Feedbacks" menuLinkName="Feedbacks">
              <HeaderMenuItem as={Link} to="/feedbacks/my-feedbacks">
                My Feedback
              </HeaderMenuItem>
              <HeaderMenuItem as={Link} to="/feedbacks/management">
                Management
              </HeaderMenuItem>
              <HeaderMenuItem as={Link} to="/feeedbacks/feedback-center">
                Feedback Center
              </HeaderMenuItem>
            </HeaderMenu>
            <HeaderMenu aria-label="System Config" menuLinkName="System Config">
              <HeaderMenuItem as={Link} to="/system-config/user-role">
                User & Role
              </HeaderMenuItem>
              <HeaderMenuItem as={Link} to="/system-config/feedback-types">
                Feedback Types
              </HeaderMenuItem>
              <HeaderMenuItem as={Link} to="/system-config/email-templates">
                Email Templates
              </HeaderMenuItem>
              <HeaderMenuItem as={Link} to="/system-config/tags">
                Tags
              </HeaderMenuItem>
            </HeaderMenu>
          </HeaderNavigation>
          <HeaderGlobalBar className="header-global-bar">
            <HeaderGlobalAction
              aria-label="User"
              className="header-user"
              onClick={toggleProfile}
            >
              <Avatar name="Jane Doe" />
            </HeaderGlobalAction>
            {openProfile && (
              <div className="overflow-menu-options"
                style={{
                  position: "absolute",
                  right: 0,
                  top: "100%",
                  zIndex: 999,
                }}
              >
                {/* <OverflowMenu open direction="bottom" flipped> */}
                  <OverflowMenuItem
                    itemText="Profile"
                    onClick={() => console.log("Go to profile")}
                  />
                  <OverflowMenuItem
                    itemText="Settings"
                    onClick={() => console.log("Go to settings")}
                  />
                  <OverflowMenuItem
                    itemText="Logout"
                    hasDivider
                    onClick={() => console.log("Log out")}
                  />
                {/* </OverflowMenu> */}
              </div>
            )}
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
