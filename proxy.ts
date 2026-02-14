import { NextResponse, type NextRequest } from "next/server";

const CANONICAL_HOST = "northblueagency.com";
const WWW_HOST = `www.${CANONICAL_HOST}`;
const SECURE_PROTOCOL = "https";

function isLocalHost(host: string | null): boolean {
  if (!host) return false;
  return (
    host.startsWith("localhost") ||
    host.startsWith("127.0.0.1") ||
    host.startsWith("[::1]")
  );
}

export function proxy(request: NextRequest) {
  const currentHostHeader = request.headers.get("host");

  if (!currentHostHeader || isLocalHost(currentHostHeader)) {
    return NextResponse.next();
  }

  const [hostWithoutPort] = currentHostHeader.split(":");

  const isCanonicalHost = hostWithoutPort === CANONICAL_HOST;
  const isWwwHost = hostWithoutPort === WWW_HOST;

  if (!isCanonicalHost && !isWwwHost) {
    return NextResponse.next();
  }

  const forwardedProtoHeader = request.headers.get("x-forwarded-proto");
  const forwardedProto = forwardedProtoHeader
    ?.split(",")
    .map((value) => value.trim().toLowerCase())
    .shift();
  const currentProtocol =
    forwardedProto ?? new URL(request.url).protocol.replace(":", "");

  const needsProtocolRedirect = currentProtocol !== SECURE_PROTOCOL;
  const needsHostRedirect = isWwwHost;

  if (!needsProtocolRedirect && !needsHostRedirect) {
    return NextResponse.next();
  }

  const redirectUrl = new URL(request.url);
  redirectUrl.protocol = `${SECURE_PROTOCOL}:`;
  redirectUrl.hostname = CANONICAL_HOST;
  redirectUrl.port = "";

  return NextResponse.redirect(redirectUrl, 308);
}

export const config = {
  matcher: "/:path*",
};
