import type { AstroGlobal } from "astro";

export const prerender = true;
export const mobileUserAgent = (userAgent: string): boolean =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    userAgent,
  );

export function getIsMobile(backendState: Readonly<AstroGlobal>) {
  return () => {
    return mobileUserAgent(
      backendState.request.headers.get("user-agent") ?? "",
    );
  };
}
