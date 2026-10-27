---
layout: ../../layouts/CaseStudy.astro
title: AI invoice processing
description: Product engineering for accounting workflows where processing, validation, and human review need to work together.
category: Karbon / Professional work
---

## The problem

Processing an invoice is only one part of an accounting workflow. People also need to understand the extracted information, resolve issues, and know what happened when work moves between systems.

The challenge is making that complexity manageable without hiding the details needed for a good decision.

## My contribution

At Karbon, I built the Accounts Receivable module across frontend and backend, covering AI-assisted invoice creation, allocation matching, and Tally synchronization. I also rebuilt ingestion for files with 40,000+ rows, pairing streaming parsing and chunked asynchronous processing with a virtualized review grid.

## The technology in context

- **Amazon SQS** supports asynchronous processing and integrations, including Tally communication and accounting-data synchronization.
- **Streaming parsing and chunked processing** handle large invoice files.
- **A virtualized frontend grid** supports review, inline validation, and bulk correction without rendering every row at once.

## Engineering focus

- **Processing and feedback.** Asynchronous work needs understandable progress and clear outcomes.
- **Validation and review.** An extracted value needs enough context for someone to check and correct it.
- **End-to-end consistency.** What the interface shows should agree with what was saved and what downstream systems receive.
- **Delivery as a team.** Coordination between product and engineering matters as much as an individual implementation.

## Delivery

The Accounts Receivable module reached 200+ uploads and 50+ active users in its first week. Product delivery was a collaboration with the wider team.

## A useful lesson

An AI feature is only as useful as the workflow around it. Validation, understandable states, and a practical review experience are what help people use the output with confidence.
