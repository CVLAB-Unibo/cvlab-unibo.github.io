#!/usr/bin/env python3
"""Local preview server with caching disabled, so edits show up on a normal reload.

    python3 serve.py          # http://localhost:8000
    python3 serve.py 9000     # custom port
"""
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, max-age=0")
        super().end_headers()


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
    print(f"Serving on http://localhost:{port}  (Ctrl+C to stop)")
    ThreadingHTTPServer(("", port), NoCacheHandler).serve_forever()
