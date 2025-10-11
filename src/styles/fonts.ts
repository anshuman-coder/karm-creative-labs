import localFont from "next/font/local";
import { DM_Mono } from 'next/font/google'
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


export const dmMono = DM_Mono({
  variable: '--font-dmmono',
  display: 'swap',
  subsets: ['latin'],
  weight: "400"
});