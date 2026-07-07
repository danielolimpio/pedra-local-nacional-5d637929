type ServerEntry = {
  fetch: (request: Request, env: unknown, context: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (moduleExports) => (moduleExports.default ?? moduleExports) as ServerEntry,
    );
  }

  return serverEntryPromise;
}

export default {
  async fetch(request: Request, env: unknown, context: unknown) {
    const serverEntry = await getServerEntry();
    return serverEntry.fetch(request, env, context);
  },
};