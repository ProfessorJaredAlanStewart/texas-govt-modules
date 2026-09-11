# Accessibility Statement

Tarrant County College and the author are committed to making the
Trailblazer Trek Texas Government modules usable by everyone, including
students who rely on assistive technology. This resource aims to conform to
the **Web Content Accessibility Guidelines (WCAG) 2.1, Level AA**, and to
support obligations under **Section 508** and **Title II of the Americans
with Disabilities Act (ADA)**.

This is a living statement. It describes both what the modules already do
and the work that remains, and it is updated as items are remediated.

## What the modules do today

- Use **semantic HTML headings** in a logical order so screen-reader users
  can navigate by document structure.
- Use a **navy/teal color palette** chosen for readable contrast, and avoid
  conveying meaning through color alone.
- Present each chapter's **review-question answers using the browser's
  native disclosure control** (`<details>`/`<summary>`), which is
  keyboard-operable and announced correctly by assistive technology.
- Provide a dedicated, unscored **Chapter Review & Resources** page with a
  summary, glossary, review questions, critical-thinking prompts, and
  references, so students can study the material in an accessible,
  text-based form.

## Known limitations and roadmap

We are actively working toward full WCAG 2.1 AA conformance. Current
priorities:

1. **Keyboard and screen-reader support for the gamified interactions.**
   The reveal cards and knowledge-check options currently respond to
   mouse/tap via click handlers on non-button elements and are **not yet
   fully keyboard-operable or exposed to assistive technology as
   interactive controls.** Converting them to keyboard-focusable,
   ARIA-labeled controls (or native buttons) is the top remediation item.
2. **Alternative text for images.** Descriptive alt text is being reviewed
   and completed **chapter by chapter**.
3. **A full WCAG 2.1 AA audit**, including keyboard-only and screen-reader
   testing of every interactive element, is planned; results and fixes will
   be logged here.
4. **Media.** Any audio or video added in the future will include captions
   and transcripts.

## Reporting a barrier / getting help

If you encounter an accessibility barrier in these materials, please contact
the author (Professor Jared Alan Stewart) or open an issue on the project's
GitHub repository. TCC students may also contact **TCC Student Accessibility
Resources**. Please include the chapter, the section, your browser and
assistive technology, and a description of the problem so it can be fixed
quickly.

*Last reviewed: 2026.*
