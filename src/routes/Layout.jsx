/**
 * @this {import("./types").RouteContext}
 */
export default function Layout({
  title = "",
  description = "",
  children = [],
  css = "/index.css",
  script = undefined,
  cspScriptUnsafeEval = false,
}) {
  return (
    <>
      {"<!DOCTYPE html>"}
      <html lang="en">
        <head>
          <base
            href={`${this.path.endsWith("/") ? this.path : this.path + "/"}`}
          />
          <meta
            http-equiv="Content-Security-Policy"
            content={`default-src 'none'; script-src 'self'${cspScriptUnsafeEval ? " 'unsafe-eval'" : ""}; style-src 'self' 'unsafe-inline'; font-src 'self'; img-src 'self' data:; object-src 'none'; form-action 'self'; base-uri 'self'; connect-src 'self'; frame-src 'self';`}
          />
          <meta http-equiv="Referrer-Policy" content="same-origin" />
          <meta charset="utf-8" />
          <meta name="description" content={description} />
          <meta name="view-transition" content="same-origin" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href={`${css}?${process.env.BUILD_TIME}`} />
          {script && (
            <script src={`${script}?${process.env.BUILD_TIME}`} defer></script>
          )}
          <title>{title}</title>
        </head>
        <body>
          {this.path !== "/" && (
            <header>
              <a
                href="/"
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                }}
              >
                &laquo; Back
              </a>
              <a
                href={`https://github.com/jeasx/jeasx-expo/tree/main/src/routes/${
                  this.path.split("/")[1]
                }`}
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "calc(100vw - 6em)",
                }}
              >
                Source &raquo;
              </a>
            </header>
          )}
          <main class="container">{children}</main>
        </body>
      </html>
    </>
  );
}
