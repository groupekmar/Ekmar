import { useTranslations } from "next-intl";

export default function Copyright() {
  const t = useTranslations("footer.copyright");
  return (
    <div className="container">
      <div className="copyright">
        <div>{t("copy1")}</div>
        <div>{t("copy2")}</div>
      </div>
    </div>
  );
}