/**
 * @type {import('semantic-release').GlobalConfig}
 */
export default {
  branches: ['github-actions'],
  plugins: [
    '@semantic-release/commit-analyzer', // Included in semantic-release.
    '@semantic-release/release-notes-generator', // Included in semantic-release.
    ['@semantic-release/changelog', { changelogFile: 'CHANGELOG.md' }],
    ['@semantic-release/npm', { pkgRoot: './dist' }], // Included in semantic-release.
    '@semantic-release/github', // Included in semantic-release.
    [
      '@semantic-release/git',
      {
        assets: ['package.json', 'CHANGELOG.md'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
  ],
};
