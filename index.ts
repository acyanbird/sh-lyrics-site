Bun.spawn(["bun", "run", "backend/index.ts"], {
    stdout: "inherit",
    stderr: "inherit",
});

Bun.spawn(["bun", "vite"], {
    cwd: "frontend",
    stdout: "inherit",
    stderr: "inherit",
});