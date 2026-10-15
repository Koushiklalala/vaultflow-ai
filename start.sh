#!/usr/bin/env bash
echo "==================================================="
echo "  VaultFlow AI - Sovereign Financial Copilot"
echo "==================================================="
echo "Starting local web server on port 3000..."

# Open default browser depending on OS
if which xdg-open > /dev/null; then
  xdg-open http://localhost:3000 &
elif which open > /dev/null; then
  open http://localhost:3000 &
fi

python3 -m http.server 3000 || python -m http.server 3000
