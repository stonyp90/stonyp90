// Serves the static export from ./out and redirects non-canonical custom
// domains (e.g. the apex) to CANONICAL_HOST. *.workers.dev is left alone so
// previews keep working.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const canonical = env.CANONICAL_HOST;
    if (canonical && url.hostname !== canonical && !url.hostname.endsWith(".workers.dev")) {
      url.hostname = canonical;
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
