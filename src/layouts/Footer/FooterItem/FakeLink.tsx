import { useRouter } from "next/router";

const colorVariants = {
  red: {
    active: "text-accent_pink dark:text-accent_pink",
    hover: "hover:text-accent_pink dark:hover:text-accent_pink",
  },
  yellow: {
    active: "text-accent_pink dark:text-accent_pink",
    hover: "hover:text-accent_pink dark:hover:text-accent_pink",
  },
  blue: {
    active: "text-accent_pink dark:text-accent_pink",
    hover: "hover:text-accent_pink dark:hover:text-accent_pink",
  },
  green: {
    active: "text-accent_pink dark:text-accent_pink",
    hover: "hover:text-accent_pink dark:hover:text-accent_pink",
  },
};

export default function FakeLink({ linkpath, name }) {
  const router = useRouter();
  const link = `/${linkpath}`;

  return (
    <div className="w-full lg:w-1/4 md:w-1/2">
      <span className="mb-3 font-accent font-medium">
        <span
          className={`block ${
            "/home" === router.pathname && "/home" === link
              ? colorVariants.red.active
              : "/about" === router.pathname && "/about" === link
              ? colorVariants.yellow.active
              : router.pathname.includes("/exhibition") &&
                "/exhibition" === link
              ? colorVariants.blue.active
              : "/contactus" === router.pathname && "/contactus" === link
              ? colorVariants.green.active
              : null
          } ${
            "/home" === link
              ? colorVariants.red.hover
              : "/about" === link
              ? colorVariants.yellow.hover
              : "/exhibition" === link
              ? colorVariants.blue.hover
              : "/contactus" === link
              ? colorVariants.green.hover
              : null
          }`}
        >
          {name}
        </span>
      </span>
    </div>
  );
}
