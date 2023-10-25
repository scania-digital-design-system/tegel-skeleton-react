import {
  TdsBanner,
  TdsFooter,
  TdsHeader,
  TdsHeaderHamburger,
  TdsHeaderTitle,
  TdsIcon,
  TdsLink,
  TdsSideMenu,
  TdsSideMenuCloseButton,
  TdsSideMenuCollapseButton,
  TdsSideMenuItem,
  TdsSideMenuOverlay,
} from "@scania/tegel-react";
import "./App.css";
import { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const sideMenuRef = useRef<HTMLTdsSideMenuElement>(null);
  const [bannerPresent, setBannerPresent] = useState(true);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div className="App">
      <div className={`banner-header ${!bannerPresent ? "no-banner" : ""}`}>
        <TdsBanner
          onTdsClose={() => {
            setBannerPresent(false);
          }}
          variant="information"
          icon="info"
          header="React Skeleton"
        >
          <div slot="subheader">
            This is a skeleton app in React using{" "}
            <TdsLink style={{ display: "inline-block" }}>
              <a href="https://npmjs.com/package/@scania/tegel-react">
                @scania/tegel
              </a>
            </TdsLink>
          </div>
        </TdsBanner>
        <TdsHeader>
          <TdsHeaderHamburger
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Open application drawer"
          ></TdsHeaderHamburger>
          <TdsHeaderTitle>Skeleton Application</TdsHeaderTitle>
        </TdsHeader>
      </div>

      <div
        className={`tds-u-flex tds-u-h-100 container ${!bannerPresent ? "no-banner" : ""}`}
      >
        <TdsSideMenu
          open={mobileNavOpen}
          ref={sideMenuRef}
          className={`side-menu ${!bannerPresent ? "no-banner" : ""}`}
          persistent
        >
          <TdsSideMenuCloseButton
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
          ></TdsSideMenuCloseButton>
          <TdsSideMenuOverlay slot="overlay"></TdsSideMenuOverlay>

          <TdsSideMenuItem>
            <Link to={"/"}>
              <TdsIcon name="home" size="24"></TdsIcon>
              Home
            </Link>
          </TdsSideMenuItem>
          <TdsSideMenuItem>
            <Link to={"/about"}>
              <TdsIcon name="info" size="24"></TdsIcon>
              About
            </Link>
          </TdsSideMenuItem>
          <TdsSideMenuCollapseButton slot="sticky-end">
            Collapse
          </TdsSideMenuCollapseButton>
        </TdsSideMenu>
        <div className="tds-u-flex tds-u-flex-dir-col tds-u-w-100">
          <main className="tds-u-p3">
            <Outlet />
          </main>
          <TdsFooter></TdsFooter>
        </div>
      </div>
    </div>
  );
}

export default App;
