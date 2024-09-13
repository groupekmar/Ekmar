import LangSelect from "@/components/header/child/LangSelect";
import Social from "@/components/header/child/Social";
import Logo from "@/components/header/child/Logo";
import DesktopMenu from "@/components/header/child/desktopMenu/DesktopMenu";
import MobileMenu from "@/components/header/child/mobileMenu/MobileMenu";
import Whatsapp from "@/components/header/child/Whatsapp";

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
