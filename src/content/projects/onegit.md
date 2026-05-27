---
title: "onegit"
description: "Open Source self-hosted git server"
date: 2026-05-27
github: "https://github.com/aplominski/onegit"
tags: ["C", "C++", "Git", "Linux"]
thumbnail: "/ss/onegit_repos.png"
screenshots:
  - src: "/ss/onegit_repos.png"
    alt: "Main view of onegit"
  - src: "/ss/onegit_repoview.png"
    alt: "Main view of repository"
  - src: "/ss/onegit_history.png"
    alt: "Commit history view"
---

Minimal, self-contained git web client served by hs-http — a single C++ plugin with no runtime dependencies beyond git and the server binary.


- **Repo list** — scans `./repo/` for git repositories, shows current branch and last commit
- **File browser** — tree view with directory navigation and file content display
- **README rendering** — auto-detects and renders README.md (with markdown support: headings, lists, code blocks, bold/italic, inline code)
- **Commit history** — paginated full log with 20 commits per page, author, date
- **Branch selector** — dropdown to switch branches, with remote URL display
- **Repo stats** — commit count, branch count, contributor count, file count, last commit time
- **JSON API** — `/api?action=repos`, `/api?action=log&repo=<name>`
- **Dark theme** — GitHub-dark-inspired CSS, no JavaScript framework
- **No build-time JS** — zero frontend tooling, all assets embedded in the plugin binary