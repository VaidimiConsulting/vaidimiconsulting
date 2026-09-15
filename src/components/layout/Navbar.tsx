import { useEffect, useRef, useState, type ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ChevronDown,
  Grid2X2,
  Lightbulb,
  Menu,
  Users,
  X,
} from "lucide-react";

import logo from "@/assets/logo-transparent.png";

/* =========================================================
   TYPES
========================================================= */

type MenuKey =
  | "services"
  | "sectors"
  | "insights"
  | "who-we-are";

/* =========================================================
   DATA
========================================================= */

const serviceItems = [
  "Marketing Consulting",
  "IT Consulting",
  "Promotion & Advertisement",
  "HR Consulting",
  "Financial Consulting",
  "Event Management",
];

const sectorItems = [
  "Manufacturing",
  "Services",
];

const insightItems = [
  "Latest Articles",
  "Research Reports",
  "Whitepapers",
  "Case Studies",
  "Webinars & Events",
  "Podcasts",
];

const whoWeAreItems = [
  "Our Story",
  "Leadership Team",
  "Mission & Values",
  "Careers",
  "Newsroom",
  "Corporate Responsibility",
];

/* =========================================================
   HELPERS
========================================================= */

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const servicePath = (item: string) => {
  if (item === "Promotion & Advertisement") return "/services/promotion-advertisement";
  return `/services/${slugify(item)}`;
};

const sectorPath = (item: string) => {
  if (item === "Manufacturing") return "/sector/manufacturing";
  if (item === "Services") return "/sector/services";
  return `/sector/${slugify(item)}`;
};

const insightPath = (item: string) =>
  `/insights/${slugify(item)}`;

const whoWeArePath = (item: string) => {
  if (item === "Our Story") return "/who-we-are";
  if (item === "Careers") return "/careers";
  if (item === "Mission & Values") return "/who-we-are/mission-values";

  return `/who-we-are/${slugify(item)}`;
};

/* =========================================================
   FONTS
========================================================= */

const navFont = {
  fontFamily:
    "'Cormorant Garamond', Georgia, 'Times New Roman', serif",
};

const scriptFont = {
  fontFamily:
    "'Segoe Script', 'Brush Script MT', 'Lucida Handwriting', cursive",
};

const bodyFont = {
  fontFamily:
    "'Trebuchet MS', 'Segoe UI', Arial, sans-serif",
};

/* =========================================================
   DROPDOWN ICON
========================================================= */

function MenuIcon({ type }: { type: MenuKey }) {
  if (type === "services") {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-50">
        <span className="text-[23px] text-[#D95C5C]">
          ✦
        </span>
      </div>
    );
  }

  if (type === "sectors") {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-50">
        <Grid2X2
          className="h-5 w-5 text-[#168FC5]"
          strokeWidth={1.6}
        />
      </div>
    );
  }

  if (type === "insights") {
    return (
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-50">
        <Lightbulb
          className="h-5 w-5 text-[#D59A00]"
          strokeWidth={1.6}
        />
      </div>
    );
  }

  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-50">
      <Users
        className="h-5 w-5 text-[#4B9360]"
        strokeWidth={1.6}
      />
    </div>
  );
}

/* =========================================================
   DROPDOWN HEADER
========================================================= */

function DropdownHeader({
  type,
  title,
  description,
}: {
  type: MenuKey;
  title: string;
  description: ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <MenuIcon type={type} />

      <div>
        <h3
          style={scriptFont}
          className="text-[30px] leading-[1.05] text-[#123B61]"
        >
          {title}
        </h3>

        <div
          style={bodyFont}
          className="mt-2 text-[15px] leading-6 text-slate-500"
        >
          {description}
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   CENTER DROPDOWN SHELL

   IMPORTANT:
   x: "-50%" is used here instead of
   Tailwind -translate-x-1/2 because Motion's
   transform can override Tailwind transforms.
========================================================= */

function DropdownShell({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: "-50%",
        y: -12,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        x: "-50%",
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        x: "-50%",
        y: -12,
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      className="
        fixed
        left-1/2
        top-[88px]
        z-[9999]
        w-[min(92vw,900px)]
      "
    >
      <div
        className="
          mt-4
          overflow-hidden
          rounded-[24px]
          border
          border-slate-200
          bg-white
          shadow-[0_28px_80px_rgba(18,59,97,0.18)]
        "
      >
        {children}
      </div>
    </motion.div>
  );
}

/* =========================================================
   SERVICES SKETCH
========================================================= */

function ServicesSketch() {
  return (
    <svg
      width="115"
      height="78"
      viewBox="0 0 115 78"
      fill="none"
      className="opacity-60"
    >
      <path
        d="M6 63C18 59 22 45 32 49C41 53 45 39 54 42C64 46 69 30 78 34C87 38 98 21 109 11"
        stroke="#D95C5C"
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      <path
        d="M95 11H109L105 24"
        stroke="#D95C5C"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M8 68H109"
        stroke="#E5E7EB"
        strokeWidth="1"
      />
    </svg>
  );
}

/* =========================================================
   SECTOR SKETCH
========================================================= */

function SectorSketch() {
  return (
    <svg
      width="115"
      height="78"
      viewBox="0 0 115 78"
      fill="none"
      className="opacity-60"
    >
      <path
        d="M57 8C42 17 32 30 32 44C32 58 44 68 57 70C70 68 82 58 82 44C82 30 72 17 57 8Z"
        stroke="#168FC5"
        strokeWidth="1.5"
      />

      <path
        d="M42 40C47 35 52 36 57 40C62 44 68 44 73 39"
        stroke="#168FC5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M44 28C49 33 54 33 60 31C66 29 70 32 73 36"
        stroke="#168FC5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M42 59C48 55 53 54 58 57C63 60 68 60 72 57"
        stroke="#168FC5"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   INSIGHTS SKETCH
========================================================= */

function InsightsSketch() {
  return (
    <svg
      width="115"
      height="78"
      viewBox="0 0 115 78"
      fill="none"
      className="opacity-60"
    >
      <path
        d="M8 67H108"
        stroke="#E5E7EB"
        strokeWidth="1"
      />

      <path
        d="M21 67V54M39 67V44M57 67V36M75 67V26M93 67V16"
        stroke="#D59A00"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M14 50L33 41L51 45L70 33L101 12"
        stroke="#D59A00"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M90 13L101 12L99 23"
        stroke="#D59A00"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   PEOPLE SKETCH
========================================================= */

function PeopleSketch() {
  return (
    <svg
      width="115"
      height="78"
      viewBox="0 0 115 78"
      fill="none"
      className="opacity-60"
    >
      <circle
        cx="57"
        cy="20"
        r="8"
        stroke="#4B9360"
        strokeWidth="1.5"
      />

      <circle
        cx="31"
        cy="33"
        r="6"
        stroke="#4B9360"
        strokeWidth="1.4"
      />

      <circle
        cx="83"
        cy="33"
        r="6"
        stroke="#4B9360"
        strokeWidth="1.4"
      />

      <path
        d="M38 68C38 53 46 44 57 44C68 44 76 53 76 68"
        stroke="#4B9360"
        strokeWidth="1.5"
        strokeLinecap="round"
      />

      <path
        d="M16 66C16 55 22 49 31 49C37 49 42 53 44 59"
        stroke="#4B9360"
        strokeWidth="1.4"
        strokeLinecap="round"
      />

      <path
        d="M99 66C99 55 93 49 83 49C77 49 72 53 70 59"
        stroke="#4B9360"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* =========================================================
   SERVICES DROPDOWN
========================================================= */

function ServicesDropdown() {
  return (
    <DropdownShell>
      <div className="p-8">
        <DropdownHeader
          type="services"
          title="Services"
          description={
            <>
              End-to-end consulting solutions
              <br />
              for sustainable business growth.
            </>
          }
        />

        <div className="mt-7 grid grid-cols-2 gap-x-10">
          {serviceItems.map((item) => (
            <Link
              key={item}
              to={servicePath(item)}
              className="
                group
                flex
                items-center
                justify-between
                border-b
                border-slate-100
                py-3.5
                text-[16px]
                text-[#294A6D]
                transition-all
                duration-200
                hover:pl-1
                hover:text-[#D95C5C]
              "
              style={bodyFont}
            >
              <span>{item}</span>

              <ArrowRight
                className="
                  h-4
                  w-4
                  -translate-x-2
                  opacity-0
                  transition-all
                  duration-200
                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
              />
            </Link>
          ))}
        </div>

        <div
          className="
            mt-6
            flex
            items-end
            justify-between
            border-t
            border-slate-100
            pt-5
          "
        >
          <Link
            to="/services"
            className="
              flex
              items-center
              gap-2
              text-[15px]
              font-semibold
              text-[#D95C5C]
              transition-colors
              hover:text-[#B94444]
            "
            style={bodyFont}
          >
            Explore All Consulting Services

            <ArrowRight className="h-4 w-4" />
          </Link>

          <ServicesSketch />
        </div>
      </div>
    </DropdownShell>
  );
}

/* =========================================================
   SECTORS DROPDOWN
========================================================= */

function SectorsDropdown() {
  return (
    <DropdownShell>
      <div className="p-8">
        <DropdownHeader
          type="sectors"
          title="Sectors"
          description={
            <>
              Tailored industry consulting practices
              <br />
              across manufacturing and service enterprises.
            </>
          }
        />

        <div className="mt-7 grid grid-cols-2 gap-x-10">
          {sectorItems.map((item) => (
            <Link
              key={item}
              to={sectorPath(item)}
              className="
                group
                flex
                items-center
                justify-between
                border-b
                border-slate-100
                py-3.5
                text-[16px]
                text-[#294A6D]
                transition-all
                duration-200
                hover:pl-1
                hover:text-[#0878B3]
              "
              style={bodyFont}
            >
              <span>{item}</span>

              <ArrowRight
                className="
                  h-4
                  w-4
                  -translate-x-2
                  opacity-0
                  transition-all
                  duration-200
                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
              />
            </Link>
          ))}
        </div>

        <div
          className="
            mt-6
            flex
            items-end
            justify-between
            border-t
            border-slate-100
            pt-5
          "
        >
          <Link
            to="/sector"
            className="
              flex
              items-center
              gap-2
              text-[15px]
              font-semibold
              text-[#0878B3]
              transition-colors
              hover:text-[#065A87]
            "
            style={bodyFont}
          >
            Explore All Industry Practices

            <ArrowRight className="h-4 w-4" />
          </Link>

          <SectorSketch />
        </div>
      </div>
    </DropdownShell>
  );
}

/* =========================================================
   INSIGHTS DROPDOWN
========================================================= */

function InsightsDropdown() {
  return (
    <DropdownShell>
      <div className="p-8">
        <DropdownHeader
          type="insights"
          title="Insights"
          description={
            <>
              Ideas, research and perspectives
              <br />
              to keep your business ahead.
            </>
          }
        />

        <div className="mt-7 grid grid-cols-2 gap-x-10">
          {insightItems.map((item) => (
            <Link
              key={item}
              to={insightPath(item)}
              className="
                group
                flex
                items-center
                justify-between
                border-b
                border-slate-100
                py-3.5
                text-[16px]
                text-[#294A6D]
                transition-all
                duration-200
                hover:pl-1
                hover:text-[#D59A00]
              "
              style={bodyFont}
            >
              <span>{item}</span>

              <ArrowRight
                className="
                  h-4
                  w-4
                  -translate-x-2
                  opacity-0
                  transition-all
                  duration-200
                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
              />
            </Link>
          ))}
        </div>

        <div
          className="
            mt-6
            flex
            items-end
            justify-between
            border-t
            border-slate-100
            pt-5
          "
        >
          <Link
            to="/insights"
            className="
              flex
              items-center
              gap-2
              text-[15px]
              font-semibold
              text-[#D59A00]
            "
            style={bodyFont}
          >
            Browse Executive Insights

            <ArrowRight className="h-4 w-4" />
          </Link>

          <InsightsSketch />
        </div>
      </div>
    </DropdownShell>
  );
}

/* =========================================================
   WHO WE ARE DROPDOWN
========================================================= */

function WhoWeAreDropdown() {
  return (
    <DropdownShell>
      <div className="p-8">
        <DropdownHeader
          type="who-we-are"
          title="Who We Are"
          description={
            <>
              A team of thinkers, problem-solvers
              <br />
              and change-makers.
            </>
          }
        />

        <div className="mt-7 grid grid-cols-2 gap-x-10">
          {whoWeAreItems.map((item) => (
            <Link
              key={item}
              to={whoWeArePath(item)}
              className="
                group
                flex
                items-center
                justify-between
                border-b
                border-slate-100
                py-3.5
                text-[16px]
                text-[#294A6D]
                transition-all
                duration-200
                hover:pl-1
                hover:text-[#3B8755]
              "
              style={bodyFont}
            >
              <span>{item}</span>

              <ArrowRight
                className="
                  h-4
                  w-4
                  -translate-x-2
                  opacity-0
                  transition-all
                  duration-200
                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
              />
            </Link>
          ))}
        </div>

        <div
          className="
            mt-6
            flex
            items-end
            justify-between
            border-t
            border-slate-100
            pt-5
          "
        >
          <Link
            to="/who-we-are"
            className="
              flex
              items-center
              gap-2
              text-[15px]
              font-semibold
              text-[#3B8755]
            "
            style={bodyFont}
          >
            Learn About Our Firm

            <ArrowRight className="h-4 w-4" />
          </Link>

          <PeopleSketch />
        </div>
      </div>
    </DropdownShell>
  );
}

/* =========================================================
   MOBILE SECTION
========================================================= */

function MobileSection({
  title,
  open,
  onClick,
  children,
}: {
  title: string;
  open: boolean;
  onClick: () => void;
  children: ReactNode;
}) {
  return (
    <div className="border-b border-slate-100">
      <button
        type="button"
        onClick={onClick}
        className="
          flex
          w-full
          items-center
          justify-between
          py-4
          text-left
          text-[20px]
          text-[#123B61]
        "
        style={navFont}
      >
        {title}

        <ChevronDown
          className={`
            h-5
            w-5
            text-slate-400
            transition-transform
            duration-200
            ${open ? "rotate-180" : ""}
          `}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            className="overflow-hidden pb-4"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const location = useLocation();

  const headerRef = useRef<HTMLElement | null>(
    null
  );

  const [activeMenu, setActiveMenu] =
    useState<MenuKey | null>(null);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [mobileOpenSection, setMobileOpenSection] =
    useState<MenuKey | null>(null);

  /* =======================================================
     OUTSIDE CLICK
  ======================================================= */

  useEffect(() => {
    const handleOutsideClick = (
      event: MouseEvent
    ) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(
          event.target as Node
        )
      ) {
        setActiveMenu(null);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  /* =======================================================
     ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    setActiveMenu(null);
    setMobileMenuOpen(false);
    setMobileOpenSection(null);
  }, [location.pathname]);

  /* =======================================================
     TOGGLE MENU

     Only ONE dropdown can be open at a time.
  ======================================================= */

  const toggleMenu = (menu: MenuKey) => {
    setActiveMenu((current) =>
      current === menu ? null : menu
    );
  };

  const toggleMobileSection = (
    menu: MenuKey
  ) => {
    setMobileOpenSection((current) =>
      current === menu ? null : menu
    );
  };

  /* =======================================================
     ACTIVE ROUTES
  ======================================================= */

  const servicesActive =
    location.pathname.startsWith("/services");

  const sectorsActive =
    location.pathname.startsWith("/sector");

  const insightsActive =
    location.pathname.startsWith("/insights");

  const whoActive =
    location.pathname.startsWith("/who-we-are") ||
    location.pathname.startsWith("/careers");

  return (
    <>
      {/* ===================================================
          DESKTOP HEADER
      =================================================== */}

      <header
        ref={headerRef}
        className="
          fixed
          left-0
          right-0
          top-0
          z-[100]
          bg-white
          shadow-[0_1px_0_rgba(15,45,75,0.08)]
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[88px]
            w-full
            max-w-[1500px]
            items-center
            justify-between
            px-5
            md:px-8
            lg:px-10
            xl:px-14
          "
        >
          {/* =============================================
              LOGO
          ============================================= */}

          <Link
            to="/"
            onClick={() => setActiveMenu(null)}
            className="
              group
              flex
              shrink-0
              items-center
              py-0.5
              transition-transform
              duration-300
              hover:scale-[1.03]
            "
          >
            <img
              src={logo}
              alt="Vaidimi Consulting"
              className="
                h-[68px]
                sm:h-[74px]
                lg:h-[80px]
                w-auto
                max-w-[280px]
                object-contain
                drop-shadow-[0_2px_10px_rgba(18,59,97,0.15)]
                transition-all
                duration-300
                group-hover:drop-shadow-[0_4px_16px_rgba(18,59,97,0.25)]
              "
            />
          </Link>

          {/* =============================================
              DESKTOP NAV
          ============================================= */}

          <nav
            className="
              hidden
              items-center
              lg:flex
            "
          >
            {/* HOME */}

            <Link
              to="/"
              onClick={() => setActiveMenu(null)}
              className={`
                relative
                rounded-full
                px-4
                py-2.5
                text-[18px]
                transition-all
                duration-200
                ${location.pathname === "/"
                  ? "text-[#123B61]"
                  : "text-[#163C60] hover:bg-slate-50"
                }
              `}
              style={navFont}
            >
              Home
            </Link>

            {/* SERVICES */}

            <button
              type="button"
              onClick={() =>
                toggleMenu("services")
              }
              className={`
                flex
                items-center
                gap-1
                rounded-full
                px-4
                py-2.5
                text-[18px]
                transition-all
                duration-200
                ${activeMenu === "services"
                  ? "bg-slate-50 text-[#123B61]"
                  : "text-[#163C60] hover:bg-slate-50"
                }
              `}
              style={navFont}
            >
              Services

              <ChevronDown
                className={`
                  h-4
                  w-4
                  transition-transform
                  duration-200
                  ${activeMenu === "services"
                    ? "rotate-180"
                    : ""
                  }
                `}
                strokeWidth={1.7}
              />
            </button>

            {/* SECTORS */}

            <button
              type="button"
              onClick={() =>
                toggleMenu("sectors")
              }
              className={`
                flex
                items-center
                gap-1
                rounded-full
                px-4
                py-2.5
                text-[18px]
                transition-all
                duration-200
                ${activeMenu === "sectors"
                  ? "bg-slate-50 text-[#123B61]"
                  : "text-[#163C60] hover:bg-slate-50"
                }
              `}
              style={navFont}
            >
              Sectors

              <ChevronDown
                className={`
                  h-4
                  w-4
                  transition-transform
                  duration-200
                  ${activeMenu === "sectors"
                    ? "rotate-180"
                    : ""
                  }
                `}
                strokeWidth={1.7}
              />
            </button>

            {/* INSIGHTS */}

            <button
              type="button"
              onClick={() =>
                toggleMenu("insights")
              }
              className={`
                flex
                items-center
                gap-1
                rounded-full
                px-4
                py-2.5
                text-[18px]
                transition-all
                duration-200
                ${activeMenu === "insights"
                  ? "bg-slate-50 text-[#123B61]"
                  : "text-[#163C60] hover:bg-slate-50"
                }
              `}
              style={navFont}
            >
              Insights

              <ChevronDown
                className={`
                  h-4
                  w-4
                  transition-transform
                  duration-200
                  ${activeMenu === "insights"
                    ? "rotate-180"
                    : ""
                  }
                `}
                strokeWidth={1.7}
              />
            </button>

            {/* WHO WE ARE */}

            <button
              type="button"
              onClick={() =>
                toggleMenu("who-we-are")
              }
              className={`
                flex
                items-center
                gap-1
                rounded-full
                px-4
                py-2.5
                text-[18px]
                transition-all
                duration-200
                ${activeMenu === "who-we-are"
                  ? "bg-slate-50 text-[#123B61]"
                  : "text-[#163C60] hover:bg-slate-50"
                }
              `}
              style={navFont}
            >
              Who We Are

              <ChevronDown
                className={`
                  h-4
                  w-4
                  transition-transform
                  duration-200
                  ${activeMenu === "who-we-are"
                    ? "rotate-180"
                    : ""
                  }
                `}
                strokeWidth={1.7}
              />
            </button>

            {/* CONTACT */}

            <Link
              to="/contact"
              onClick={() => setActiveMenu(null)}
              className="
                rounded-full
                px-4
                py-2.5
                text-[18px]
                text-[#163C60]
                transition-all
                duration-200
                hover:bg-slate-50
              "
              style={navFont}
            >
              Contact
            </Link>
          </nav>

          {/* =============================================
              ENQUIRE NOW
          ============================================= */}

          <Link
            to="/enquiry"
            onClick={() => setActiveMenu(null)}
            className="
              hidden
              items-center
              gap-3
              rounded-[20px]
              bg-[#173F69]
              px-7
              py-4
              text-[15px]
              font-semibold
              text-white
              shadow-[0_9px_25px_rgba(23,63,105,0.18)]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#0E3154]
              lg:flex
            "
            style={bodyFont}
          >
            Enquire Now

            <ArrowRight
              className="h-4 w-4"
              strokeWidth={2}
            />
          </Link>

          {/* =============================================
              MOBILE BUTTON
          ============================================= */}

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(
                (current) => !current
              );
              setActiveMenu(null);
            }}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              text-[#163C60]
              transition-colors
              hover:bg-slate-100
              lg:hidden
            "
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* =================================================
            DROPDOWNS

            IMPORTANT:
            Only activeMenu renders.
            Therefore only ONE dropdown appears.
        ================================================= */}

        <AnimatePresence mode="wait">
          {activeMenu === "services" && (
            <ServicesDropdown />
          )}

          {activeMenu === "sectors" && (
            <SectorsDropdown />
          )}

          {activeMenu === "insights" && (
            <InsightsDropdown />
          )}

          {activeMenu === "who-we-are" && (
            <WhoWeAreDropdown />
          )}
        </AnimatePresence>
      </header>

      {/* ===================================================
          MOBILE NAVIGATION
      =================================================== */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            className="
              fixed
              inset-x-0
              top-[88px]
              z-[90]
              max-h-[calc(100vh-88px)]
              overflow-y-auto
              border-t
              border-slate-100
              bg-white
              px-6
              pb-8
              shadow-[0_20px_45px_rgba(15,45,75,0.12)]
              lg:hidden
            "
          >
            <div className="mx-auto max-w-2xl">
              {/* HOME */}

              <Link
                to="/"
                className="
                  block
                  border-b
                  border-slate-100
                  py-4
                  text-[21px]
                  text-[#163C60]
                "
                style={navFont}
              >
                Home
              </Link>

              {/* SERVICES */}

              <MobileSection
                title="Services"
                open={
                  mobileOpenSection === "services"
                }
                onClick={() =>
                  toggleMobileSection("services")
                }
              >
                {serviceItems.map((item) => (
                  <Link
                    key={item}
                    to={servicePath(item)}
                    className="
                      block
                      border-b
                      border-slate-50
                      py-3
                      text-[15px]
                      text-slate-600
                    "
                    style={bodyFont}
                  >
                    {item}
                  </Link>
                ))}

                <Link
                  to="/services"
                  className="
                    mt-4
                    flex
                    items-center
                    gap-2
                    text-[15px]
                    font-semibold
                    text-[#D95C5C]
                  "
                  style={bodyFont}
                >
                  Explore All Services

                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MobileSection>

              {/* SECTORS */}

              <MobileSection
                title="Sectors"
                open={
                  mobileOpenSection === "sectors"
                }
                onClick={() =>
                  toggleMobileSection("sectors")
                }
              >
                <div className="space-y-3 pb-2">
                  <Link
                    to="/sector/manufacturing"
                    className="
                      block
                      rounded-xl
                      border
                      border-slate-100
                      bg-slate-50/70
                      p-3.5
                      transition-colors
                      hover:bg-slate-100
                    "
                    style={bodyFont}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[15px] font-bold text-slate-900">
                        Manufacturing
                      </span>
                      <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[11px] font-bold text-indigo-700 border border-indigo-100">
                        7 Sub-Sectors
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                      Plants & Machinery, Textiles, Auto, Agri, Construction & Infrastructure
                    </p>
                  </Link>

                  <Link
                    to="/sector/services"
                    className="
                      block
                      rounded-xl
                      border
                      border-slate-100
                      bg-slate-50/70
                      p-3.5
                      transition-colors
                      hover:bg-slate-100
                    "
                    style={bodyFont}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[15px] font-bold text-slate-900">
                        Services
                      </span>
                      <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[11px] font-bold text-purple-700 border border-purple-100">
                        8 Sub-Sectors
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">
                      Retail, FinTech, Hotels, Tourism, Transport, Education & Healthcare
                    </p>
                  </Link>

                  <Link
                    to="/sector"
                    className="
                      mt-3
                      flex
                      items-center
                      gap-2
                      text-[14px]
                      font-semibold
                      text-[#0878B3]
                    "
                    style={bodyFont}
                  >
                    Explore All Industry Sectors
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </MobileSection>

              {/* INSIGHTS */}

              <MobileSection
                title="Insights"
                open={
                  mobileOpenSection === "insights"
                }
                onClick={() =>
                  toggleMobileSection("insights")
                }
              >
                {insightItems.map((item) => (
                  <Link
                    key={item}
                    to={insightPath(item)}
                    className="
                      block
                      border-b
                      border-slate-50
                      py-3
                      text-[15px]
                      text-slate-600
                    "
                    style={bodyFont}
                  >
                    {item}
                  </Link>
                ))}
              </MobileSection>

              {/* WHO WE ARE */}

              <MobileSection
                title="Who We Are"
                open={
                  mobileOpenSection ===
                  "who-we-are"
                }
                onClick={() =>
                  toggleMobileSection(
                    "who-we-are"
                  )
                }
              >
                {whoWeAreItems.map((item) => (
                  <Link
                    key={item}
                    to={whoWeArePath(item)}
                    className="
                      block
                      border-b
                      border-slate-50
                      py-3
                      text-[15px]
                      text-slate-600
                    "
                    style={bodyFont}
                  >
                    {item}
                  </Link>
                ))}
              </MobileSection>

              {/* CONTACT */}

              <Link
                to="/contact"
                className="
                  block
                  border-b
                  border-slate-100
                  py-4
                  text-[21px]
                  text-[#163C60]
                "
                style={navFont}
              >
                Contact
              </Link>

              {/* CTA */}

              <Link
                to="/enquiry"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveMenu(null);
                }}
                className="
                  mt-6
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-[#173F69]
                  px-6
                  py-4
                  text-[15px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#0E3154]
                "
                style={bodyFont}
              >
                Enquire Now

                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===================================================
          SPACE FOR FIXED NAVBAR
      =================================================== */}

      <div className="h-[88px]" />
    </>
  );
}