# github_semantic_versioning_workflow
Automated semantic versioning workflow in github

## Semantic Versioning Recap
```bash
MAJOR.MINOR.PATCH
```

- MAJOR: Breaking changes (e.g. incompatible API changes)
- MINOR: New features (backward-compatible)
- PATCH: Bug fixes or small improvement

##How to Determine Version Bumps in CI/CD
Here are common strategies:

1. Based on Commit Messages (Conventional Commits)
Use tools like semantic-release to analyze commit messages:

- feat: → bumps minor
- fix: → bumps patch
- BREAKING CHANGE: → bumps major
- chore: → skip next CI

✅ Pros: Fully automated

⚠️ Cons: Requires developers to follow commit conventions strictly

2. Based on File Changes
You can write logic in your pipeline to inspect which files changed:

- Changes in services/production/api.ts → bump minor
- Changes in services/production/config.json → bump patch
- Changes in services/production/schema.ts → bump major

✅ Pros: Customizable per module

⚠️ Cons: Requires careful mapping of file types to version impact

3. Manual Versioning via PR Labels or Commit Tags
Developers add labels like version:major, version:minor, etc., to PRs or commits. The pipeline reads these labels to decide.

✅ Pros: Explicit control

⚠️ Cons: Requires discipline and tooling to 

In this repo, strategy no. 1 will be using.
