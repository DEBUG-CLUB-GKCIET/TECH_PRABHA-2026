"use client";
import {
  Menu,
  Home,
  CalendarDays,
  Smartphone,
  Users,
  Gem,
  ShoppingCart,
  Code,
  Mail
} from "lucide-react";
import { Space_Grotesk, Inter, Syncopate, Chakra_Petch } from "next/font/google";
import type { SVGProps } from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
});
const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["700"],
});
const inter = Inter({ subsets: ["latin"], weight: ["400", "500"] });
const syncopate = Syncopate({ subsets: ["latin"], weight: ["400", "700"] });

const leftNavItems = [
  { icon: Home, label: "HOME", href: "/" },
  { icon: CalendarDays, label: "EVENTS", href: "/events" },
  { icon: Smartphone, label: "CONTACT", href: "/contact" },
  { icon: Users, label: "ABOUT US", href: "/about" },
  { icon: Gem, label: "SPONSORS", href: "/sponsors" },
  { icon: ShoppingCart, label: "STORE", href: "/store" },
];

const XIcon = ({ size, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4l11.733 16h4.267l-11.733-16z" />
    <path d="M4 20l6.768-6.768m2.46-2.46L20 4" />
  </svg>
);

const DiscordIcon = ({ size, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    <path d="M15 12a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    <path d="M7 11.5v-1a5 5 0 0 1 10 0v1" />
    <path d="M5.5 16.5l-1 2.5h15l-1-2.5" />
    <path d="M4 14a8 8 0 0 0 16 0" />
    <path d="M9 16.5v1.5M15 16.5v1.5" />
  </svg>
);

const WhatsAppIcon = ({ size, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 21l1.65-3.8A9 9 0 1 1 21 12a9 9 0 0 1-18 5.2L3 21z" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0-5-5z" />
  </svg>
);

const FacebookIcon = ({ size, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.81l.53-4H14V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ size, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedinIcon = ({ size, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YoutubeIcon = ({ size, className, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={className} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

const rightNavIcons = [
  { Icon: InstagramIcon, href: "https://www.instagram.com/techprabha.gkciet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
  { Icon: Mail, href: "mailto:TechPrabha.gkciet@gmail.com"}
];


export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-20 z-50 w-screen flex items-center justify-between px-6 bg-gradient-to-b from-[#030008] to-transparent pointer-events-none transition-all">
        <div className="flex flex-row items-center gap-6 pointer-events-auto">
          {/* Replaced T-26 text with logos */}
          <Image src="/gkciet1.png" alt="GKCIET Logo" width={48} height={48} className="h-10 md:h-12 w-auto object-contain" />
          <Image src="/techprabha.png" alt="Techprabha Logo" width={48} height={48} className="h-10 md:h-12 w-10 md:w-12 object-contain scale-125" />
        </div>


        <div className="pointer-events-auto flex items-center gap-4">
          <div className="lg:hidden mt-1">
            <Menu
              className="text-white cursor-pointer hover:text-[#00f0ff] transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            />
          </div>
        </div>
      </nav>

      {/* Left Sidebar */}
      <aside className="fixed left-0 top-1/2 -translate-y-1/2 w-[88px] z-40 hidden md:flex flex-col items-center gap-7 py-8 bg-[#0B0914]/60 backdrop-blur-md rounded-r-2xl pointer-events-auto border-r border-white/5 shadow-2xl">
        {leftNavItems.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="flex flex-col items-center gap-1.5 group cursor-pointer w-full hover:bg-white/[0.03] py-2.5 transition-all duration-300"
          >
            <item.icon
              size={22}
              strokeWidth={1.5}
              className="text-white/70 group-hover:text-white group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
            />
            {/* Text always visible aligned perfectly under the icon */}
            <span
              className={`${syncopate.className} text-[8px] tracking-[0.1em] font-medium text-white/70 uppercase text-center group-hover:text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300`}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </aside>

      {/* Right Sidebar */}
      <aside className="fixed right-0 top-1/2 -translate-y-1/2 w-16 z-40 hidden lg:flex flex-col items-center gap-7 py-8 bg-[#0B0914]/60 backdrop-blur-md rounded-l-2xl pointer-events-auto border-l border-white/5 shadow-2xl">
        {rightNavIcons.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            className="group flex flex-col items-center justify-center w-full py-2 hover:bg-white/[0.03] transition-all duration-300"
          >
            <item.Icon
              size={22}
              className="text-white/70 group-hover:text-white group-hover:scale-105 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300"
            />
          </a>
        ))}
      </aside>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#030008]/95 backdrop-blur-3xl flex flex-col p-8 pointer-events-auto"
          >
            <div className="flex justify-between items-center mb-12">
              <div className="flex flex-row items-center gap-4">
                <Image src="/gkciet1.png" alt="GKCIET Logo" width={32} height={32} className="h-8 w-auto object-contain" />
                <Image src="/techprabha.png" alt="Techprabha Logo" width={32} height={32} className="h-8 w-8 object-contain scale-125" />
              </div>
              <Code
                size={28}
                className="text-white cursor-pointer rotate-45 hover:text-[#00f0ff] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              />
            </div>
            <div className="flex flex-col gap-6">
              {leftNavItems.map((item, i) => (
                <Link
                  href={item.href}
                  key={i}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`${spaceGrotesk.className} text-xl tracking-widest text-white hover:text-[#00f0ff] cursor-pointer transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
