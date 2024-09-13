import LangSelect from "@comp/header/child/LangSelect";
import Social from "@comp/header/child/Social";
import Logo from "@comp/header/child/Logo";
import DesktopMenu from "@/components/Header/child/desktopMenu/DesktopMenu";
import MobileMenu from "@/components/Header/child/mobileMenu/MobileMenu";
import Whatsapp from "@comp/header/child/Whatsapp";

export default function Header() {
  return (
    <header>
      <div style={{ background: "#000" }} className="header-top py-8">
        <div className="container">
          <div className="row">
            <Social />
            <LangSelect />
          </div>
        </div>
      </div>
      <div  className="bg-black py-8">
        <div className="container">
          <div className="row aic">
            <Logo />
            <DesktopMenu />
            <div className="box-auto">
              <div className="df aic jce gap-6">
                <Whatsapp />
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
