import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { dmMono } from "~/styles/fonts";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import "lenis/dist/lenis.css";
import "react-toastify/dist/ReactToastify.css";
import GetBreakpoints from "~/context/GetBreakpoints";
import LenisProvider from "~/context/LenisProvider";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <LenisProvider>
        <GetBreakpoints />
        <div
          className={`${dmMono.variable} bg-white font-sans`}
        >
          <Component {...pageProps} />
        </div>
      </LenisProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
