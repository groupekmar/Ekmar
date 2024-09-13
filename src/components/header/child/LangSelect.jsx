"use client";
import { useRouter} from "next/navigation";
import EnglishIcon from "@assets/header/lang/en.svg";
import TurkishIcon from "@assets/header/lang/tr.svg";
import RussianIcon from "@assets/header/lang/ru.svg";

export default function LangSelect() {
  const router = useRouter();

  const handleCLick = (event) => {
    const selectedLang = "/" + event.currentTarget.getAttribute("data-lang");
    router.push(selectedLang);
  };

  return (
    <div className="box-6">
      <div className="df aic jce gap-12">
        <button onClick={handleCLick} data-lang="en">
          <EnglishIcon />
        </button>
        <button onClick={handleCLick} data-lang="tr">
          <TurkishIcon />
        </button>
        <button onClick={handleCLick} data-lang="ru">
          <RussianIcon />
        </button>
      </div>
    </div>
  );
}
