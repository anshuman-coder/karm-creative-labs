import localFont from "next/font/local";

export const esRebond = localFont({
  src: [
    {
      path: "../../public/fonts/ESRebondGrotesqueTRIAL/ES-Rebond-Grotesque-TRIAL.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ESRebondGrotesqueTRIAL/ES-Rebond-Grotesque-TRIAL.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-esrebond",
  display: "swap",
});
