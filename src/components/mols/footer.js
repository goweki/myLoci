import Link from "next/link";
import { SVGfblogo, SVGiglogo, SVGxlogo } from "../atoms/svgs";
export default function Footer({}) {
  //Render
  return (
    <footer className="surface w-full">
      <div className="mx-auto max-w-screen-lg px-4 pb-4">
        <hr className="mb-4 border-font-inactive sm:mx-auto lg:mb-8" />
        <div className="sm:flex sm:items-center sm:justify-between mx-4">
          <span className="text-sm sm:text-center">
            © 2023{" "}
            <Link href="https://goweki.com/" className="hover:underline">
              GOWEKI
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <Link href="https://m.facebook.com/goweki">
              <SVGfblogo className="w-4 h-4" />
              <span className="sr-only">facebook</span>
            </Link>
            <Link href="https://www.instagram.com/goweki/">
              <SVGiglogo className="w-4 h-4" />
              <span className="sr-only">instagram</span>
            </Link>
            <Link href="https://twitter.com/goweki_">
              <SVGxlogo className="w-4 h-4" />
              <span className="sr-only">X</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
