---
layout: ../../layouts/CaseStudy.astro
title: StackHub
description: A Graphite-style Git sidebar that turns a large change into small, dependent branches and pull requests, right inside your editor.
category: Developer tools / Open source
stackDemo: true
---

## The problem

A large change is easier to review in small pieces. But when those pieces depend on each other, managing branches, rebasing descendants, and keeping pull requests pointed at the right parent can become a job of its own.

StackHub brings that workflow into VS Code and compatible editors, with a visible branch tree and the Git tools developers already use.

## What I built

A sidebar for creating and navigating stacks, inspecting diffs, staging changes, and submitting dependent GitHub pull requests. It supports amending an earlier branch, restacking descendants, syncing with main, and changing a branch’s parent.

The illustration above shows the relationship between branches. It is an interactive explanation, not a recording of the extension.

## Key decisions

- **Use native Git.** Branches and commits stay in the repository’s ordinary Git workflow.
- **Stay inside the editor.** Diffs and conflict resolution use the editor’s existing tools.
- **Separate local work from GitHub.** Local stacks work without authentication. GitHub operations use the GitHub CLI.
- **Make dependencies visible.** A branch tree gives the developer a way to inspect and change the structure of their work.

## The result

An open-source extension with a documented path from staging a change to submitting a stack of draft pull requests. The repository includes installation instructions and a validation document describing tested workflows and current limits.

[Explore the source and installation guide ↗](https://github.com/shivam0110/stackhub)

## A useful lesson

A Git interface needs more than a convenient happy path. Conflict recovery, clear state, and a way to continue or cancel an operation are part of the core experience.
