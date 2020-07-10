module.exports = {
  ci: false,
  branches: ["master", { name: "next", prerelease: true }],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        preset: "angular",
        releaseRules: [
          { type: "feat", release: "minor" },
          { type: "style", release: "patch" },
          { type: "refactor", release: "patch" },
          { scope: "skip", release: false },
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
        presetConfig: {
          types: [
            { type: "feat", section: "✨ New & Improved", hidden: false },
            { type: "refactor", section: "✨ New & Improved", hidden: true },

            { type: "style", section: "💄 Style Refinements", hidden: false },

            { type: "fix", section: "🛠 Fixes & Updates", hidden: false },
            { type: "perf", section: "🛠 Fixes & Updates", hidden: false },
            { type: "chore", section: "🛠 Fixes & Updates", hidden: true },
            { type: "test", section: "🛠 Fixes & Updates", hidden: true },

            { type: "docs", section: "📘 Docs", hidden: false },

            { type: "build", hidden: true },
            { type: "ci", hidden: true },
          ],
        },
        parserOpts: {
          noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES", "BREAKING"],
        },
        writerOpts: {
          commitsSort: ["subject", "scope"],
          headerPartial: `## Version {{version}}`,
        },
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogTitle: "Changelog\n===",
      },
    ],
    [
      "@semantic-release/npm",
      {
        npmPublish: false,
        tarballDir: "dist",
      },
    ],
    [
      "@semantic-release/github",
      {
        successComment:
          '<img align="right" height="100" src="https://files.slack.com/files-pri/T03J9BEME-F017LEWC88Y/image.png?pub_secret=a18534d3e6" />\n\n## This ${issue.pull_request ? "PR" : "issue"} was ${issue.pull_request ? "released" : "resolved"}! 🚀\n\n<details open>\n<summary>Included in <b>${nextRelease.version}</b></summary><br/>\n\n- `[${releases[0].name}](${releases[0].url})`\n\n</details>',
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json", "package-lock.json"],
        message:
          "Release v${nextRelease.version}\n\n${nextRelease.notes}\n<!--SKIP CI-->",
      },
    ],
  ],
};
