module.exports = {
  branches: [
    "master",
    {
      name: "next",
      prerelease: true,
    },
  ],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          {
            type: "feat",
            release: "minor",
          },
          {
            type: "style",
            release: "patch",
          },
          {
            type: "refactor",
            release: "patch",
          },
          {
            type: "ref",
            release: "patch",
          },
        ],
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
        presetConfig: {
          header: "Testing",
          types: [
            {
              type: "feat",
              section: "✨ New in this Release",
              hidden: false,
            },
            {
              type: "refactor",
              section: "✨ New in this Release",
              hidden: false,
            },
            {
              type: "style",
              section: "💄 Style & UI Improvements",
              hidden: false,
            },
            {
              type: "chore",
              section: "🛠 Assorted Updates",
              hidden: false,
            },
            {
              type: "fix",
              section: "🛠 Assorted Updates",
              hidden: false,
            },
            {
              type: "perf",
              section: "🛠 Assorted Updates",
              hidden: true,
            },
            {
              type: "test",
              section: "🛠 Assorted Updates",
              hidden: true,
            },
            {
              type: "docs",
              section: "📘 Docs",
              hidden: false,
            },
            {
              type: "build",
              hidden: true,
            },
            {
              type: "ci",
              hidden: true,
            },
          ],
        },
      },
    ],
    // "@semantic-release/npm",
    [
      "@semantic-release/github",
      {
        assets: [
          {
            path: "umd/@readme/ui.min.js",
            label: "ReadMe UI",
          },
          {
            path: "umd/main.css",
            label: "ReadMe UI CSS",
          },
        ],
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json", "package-lock.json"],
        message: "Release v${nextRelease.version}\n\n${nextRelease.notes}",
      },
    ],
  ],
};
