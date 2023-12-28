"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ButtonPrimary, ButtonUnbound } from "../atoms/buttons";
import { SVGbell, SVGcog, SVGhambuger, SVGclose } from "../atoms/svgs";

export default function NavbarTop() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(""); //mobile-menu,notifications,profile
  //Render
  return (
    <nav className="surface backdrop-blur-xl sticky top-0 w-full border-b p-2 lg:p-4 z-24">
      {/* border-b border-backg-raised bg-gradient-to-b from-backg-surface to-backg-surface/50 pb-6 pt-8 backdrop-blur-lg dark:border-backg-dark-raised dark:from-backg-dark-surface dark:to-backg-dark-surface/50 lg:static lg:w-auto lg:rounded-lg lg:border lg:bg-backg-surface lg:p-4 lg:dark:bg-backg-dark-surface/30 */}
      <div className="mx-auto max-w-screen-xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile hamburger-menu button */}
            <ButtonUnbound
              icon={openMenu === "mobile-menu" ? SVGclose : SVGhambuger}
              label="hamburger-menu"
              onClick={() => {
                if (openMenu != "mobile-menu") setOpenMenu("mobile-menu");
                else setOpenMenu("");
              }}
              noPadding
              noText
            />
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="group">
                <Image
                  src="https://i.postimg.cc/6p9RmbBf/goweki-IDillustrations-512.png"
                  height={32}
                  width={32}
                  className="group-hover:scale-105"
                  alt="GOWEKI"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                {["products", "blog", "contacts"].map((navItem) => (
                  <Link
                    key={navItem}
                    href={`/${navItem}`}
                    className="rounded-md px-3 py-2 text-sm font-medium"
                    aria-current={
                      pathname.includes(`/${navItem}`) ? "page" : undefined
                    }
                  >
                    {navItem[0].toUpperCase() + navItem.slice(1)}
                  </Link>
                ))}
                {/* <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium"
                  aria-current={ariaCurrent}
                >
                  Products
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="rounded-md px-3 py-2 text-sm font-medium"
                >
                  Contacts
                </Link> */}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center space-x-3 pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Notifications */}
            {/* <button
              type="button"
              className="relative rounded-full p-1 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-primary-dark"
            >
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">View notifications</span>

              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                />
              </svg>
            </button> */}
            <ButtonUnbound
              // icon={SVGbell}
              icon={SVGbell}
              label="Notifications"
              noPadding
              noText
            />
            {/* Profile dropdown */}
            <div className="relative ml-3">
              <div>
                <button
                  type="button"
                  className="group relative flex text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-primary-dark rounded-md text-md hover:text-primary"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                  onClick={() => {
                    if (openMenu != "settings") setOpenMenu("settings");
                    else setOpenMenu("");
                  }}
                >
                  <span className="sr-only">Open user menu</span>
                  <SVGcog
                    className={`h-6 w-6 fill-none stroke-1 transition group-hover:fill-primary group-hover:stroke-primary stroke-font dark:stroke-font-dark`}
                  />
                </button>
              </div>

              {/* Dropdown menu, show/hide based on menu state.

            Entering: "transition ease-out duration-100"
              From: "transform opacity-0 scale-95"
              To: "transform opacity-100 scale-100"
            Leaving: "transition ease-in duration-75"
              From: "transform opacity-100 scale-100"
              To: "transform opacity-0 scale-95" */}

              {openMenu === "settings" && (
                <div
                  className="absolute surface right-0 z-10 mt-2 w-36 origin-top-right py-1 bg-primary-dark"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <Link
                    href="#"
                    className="block py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </Link>
                  <Link
                    href="#"
                    className="block py-2 text-sm"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {openMenu === "mobile-menu" && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}

            {["products", "blog", "contacts", "signIn"].map((navItem) => (
              <Link
                key={navItem}
                href={`/${navItem}`}
                className="block rounded-md px-3 py-2 text-base font-medium"
                aria-current={
                  pathname.includes(`/${navItem}`) ? "page" : undefined
                }
              >
                {navItem[0].toUpperCase() + navItem.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
