import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";

// Waits for every lazy page (onAllReady). renderToString would leave them as empty Suspense fallbacks.
export function render(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    const sink = new Writable({
      write(chunk, _encoding, done) {
        chunks.push(Buffer.from(chunk));
        done();
      },
    });
    sink.on("finish", () => resolve(Buffer.concat(chunks).toString("utf8")));

    const { pipe } = renderToPipeableStream(
      <Router ssrPath={path}>
        <App />
      </Router>,
      {
        onAllReady: () => pipe(sink),
        onShellError: reject,
        onError: reject,
      },
    );
  });
}
