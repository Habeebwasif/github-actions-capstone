const { test } = require("node:test");
const assert = require("node:assert");
const { spawnSync } = require("node:child_process");
const path = require("node:path");

test("server.js has valid syntax", () => {
  const file = path.join(__dirname, "..", "server.js");
  const result = spawnSync(process.execPath, ["--check", file]);
  assert.strictEqual(result.status, 0, result.stderr.toString());
});

test("dependencies can be loaded", () => {
  assert.doesNotThrow(() => require("express"));
  assert.doesNotThrow(() => require("mysql2"));
});
