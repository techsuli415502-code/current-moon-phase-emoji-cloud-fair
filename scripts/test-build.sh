#!/bin/bash
set -e
cd /home/z/my-project
echo "=== Running npm run build (static export) ==="
npm run build 2>&1 | tail -60
echo ""
echo "=== Checking output ==="
ls -la out/ 2>&1 | head -30
echo ""
echo "=== Checking robots.txt and sitemap.xml in out/ ==="
ls -la out/robots.txt out/sitemap.xml 2>&1
