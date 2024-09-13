import Link from "next/link";
import Twitter from "@assets/header/social/twitter.svg";
import Facebook from "@assets/header/social/facebook.svg";
import Instagram from "@assets/header/social/instagram.svg";

export default function Social() {
  return (
    <div className="box-6">
      <div className="df aic gap-12">
        <Link
          href="https://www.facebook.com/ekmargroup"
          aria-label="facebook link"
        >
          <Facebook />
        </Link>
        <Link
          href="https://www.instagram.com/ekmar.group/"
          aria-label="instagram link"
        >
          <Instagram />
        </Link>
        <Link href="https://x.com/ekmargroup" aria-label="twitter link">
          <Twitter />
        </Link>
      </div>
    </div>
  );
}
