/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  // Define branches which trigger the release.
  branches: ['main', 'master'],

  // NOTE: 'commit-analyzer', 'release-notes-generator', 'npm' and 'github' are already part of '@semantic-release'.
  plugins: [
    // Determines the type of version (major, minor, patch) following rules which use the "Conventional Commits" standard.
    // NOTE: If a commit match multiple rules, the highest release type is selected.
    [
      '@semantic-release/commit-analyzer',
      {
        // Preset default value is 'angular'.
        preset: 'angular',
        // Custom rules to determine the release type.
        releaseRules: [
          { release: 'patch', scope: 'README', type: 'docs' },
          { release: 'patch', type: 'refactor' },
          { release: 'patch', scope: 'DEPS', type: 'chore' },
        ],
      },
    ],
    '@semantic-release/release-notes-generator',
    ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
    '@semantic-release/npm',
    '@semantic-release/github',
    // Commits generated changes back to the Git repository (e.g., version updates to `package.json`).
    [
      '@semantic-release/git',
      {
        // Files to be committed.
        assets: ['package.json', 'README.md'],
        // Custom commit message.
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
