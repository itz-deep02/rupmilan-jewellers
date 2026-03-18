#!/usr/bin/env node
const { spawn } = require("child_process");
const path = require("path");

const nodeBin = "/opt/homebrew/Cellar/node@22/22.12.0/bin";
const env = {
  ...process.env,
  PATH: `${nodeBin}:/opt/homebrew/bin:${process.env.PATH || ""}`,
};

const next = path.join(__dirname, "node_modules", ".bin", "next");
const child = spawn(process.execPath, [next, "dev"], {
  env,
  stdio: "inherit",
  cwd: __dirname,
});

child.on("exit", (code) => process.exit(code ?? 0));
