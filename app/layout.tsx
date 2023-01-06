"use client";
import { usePathname } from 'next/navigation';
import { PropsWithChildren } from "react";
import './globals.css';

const links = [
  { link: "/me", label: "Me" },
  { link: "/work", label: "Work" },
]

export default function BaseLayout({ children }: PropsWithChildren) {
  const pathName = usePathname();
  return (
    <html>
      <head>
        <title>Welcome</title>
        <meta name="description" content="Portafolio de Andrea Ramos Juan" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="w-screen h-screen bg-[#f6f7f0]">
        <div className="flex flex-row bg-[#f6f7f0] w-screen z-10">
          <a href="/" className="p-5 pl-20 max-sm:pl-10 font-[Heebo] text-3xl">ARJ</a>
          <nav className="flex-1 flex pr-20 max-sm:pr-10 max-sm:flex-row-reverse">
            <a href="#menu" className="space-y-2 p-5 pr-0 sm:hidden max-sm:block">
              <div className="block h-1 w-8 bg-gray-800" />
              <div className="block h-1 w-8 bg-gray-800" />
              <div className="block h-1 w-8 bg-gray-800" />
            </a>
            <ul className="flex flex-1 flex-row-reverse gap-5 max-sm:hidden target:visible">
              {links.map(({ link, label }) => (
                <li 
                  className={`p-5 font-[Heebo] text-2xl font-thin uppercase hover:font-light active:font-normal focus:font-normal transition-all ${pathName?.startsWith(link) ? 'font-light' : ''}`}
                >
                  <a href={link}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        {children}
        <div
          id="menu"
          className="top-0 left-0 bg-accent absolute w-screen h-screen hidden target:flex"
        >
          <a href="#" className="text-8xl absolute right-8 font-thin font-[Heebo] top-0 leading-[.5]">&times;</a>
          <ul className="flex flex-1 flex-col content-center justify-center gap-5">
              {links.map(({ link, label }) => (
                <li
                  className="p-5 font-[Heebo] text-5xl font-thin uppercase hover:font-light active:font-normal focus:font-normal transition-all text-center"
                >
                  <a href={link}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
        </div>
      </body>
    </html>
  );
}