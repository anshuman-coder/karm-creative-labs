import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";
import { esRebond, dmMono } from "~/styles/fonts";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import GetBreakpoints from "~/context/GetBreakpoints";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <GetBreakpoints />
      <div className={`${esRebond.variable} ${dmMono.variable} font-sans bg-white`}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
