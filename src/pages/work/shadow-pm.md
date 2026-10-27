---
layout: ../../layouts/CaseStudy.astro
title: Shadow PM
description: A multi-agent platform that brings Jira, customer transcripts, and codebase context together for product research and UI prototyping.
category: Agentic AI / Product engineering
---

## The problem

Product decisions draw on scattered context: customer conversations, existing tickets, and what the codebase actually supports. Turning that information into a useful plan or prototype takes both research and coordination.

## What I built

Shadow PM connects those sources in a multi-agent platform for product research and UI prototyping. I built it with a Python / FastAPI backend, Temporal orchestration, and LangSmith tracing.

## The technology in context

- **Python and FastAPI** provide the backend for the platform and its integrations.
- **Temporal** orchestrates the multi-step agent workflows.
- **LangSmith** provides tracing to inspect how the AI workflow runs.
- **Jira, customer transcripts, and codebase analysis** supply context for research and prototype generation.

The homepage diagram illustrates the flow from context through specialist agents to a prototype.

## The engineering focus

The work goes beyond calling an LLM: connecting useful context, coordinating several steps, and making execution inspectable. The result is a workflow that turns product research into something a person can review and refine.
