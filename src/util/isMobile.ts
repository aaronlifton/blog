import type { AstroGlobal } from "astro";

export const mobileUserAgent = (userAgent: string): boolean =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent,
  );

export function getIsMobile(backendState: Readonly<AstroGlobal>) {
  return () => {
    console.log({ headers: backendState.request.headers });
    return mobileUserAgent(
      backendState.request.headers.get("user-agent") ?? "",
    );
  };
}
