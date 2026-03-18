#!/bin/sh
export PATH="/opt/homebrew/Cellar/node@22/22.12.0/bin:/opt/homebrew/bin:$PATH"
exec node node_modules/.bin/next dev
