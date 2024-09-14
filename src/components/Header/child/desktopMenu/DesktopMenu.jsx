"use client";
import Link from "next/link";
import "./desktopMenu.scss";
import { useTranslations, useLocale } from "next-intl";

export default function DesktopMenu() {
  const t = useTranslations("header.desktopMenu");
  const locale = useLocale();

  return (
    <div className="dn lap-db box">
      <ul className="desktopMenu">
        <li>
          <Link href="#">{t("home")}</Link>
        </li>
        <li>
          <Link href="#about">{t("about")}</Link>
        </li>
        <li>
          <Link href={`/${locale}/products`}>{t("products")}</Link>
        </li>
        <li>
          <Link href="#partners">{t("partners")}</Link>
        </li>
      </ul>
    </div>
  );
}
