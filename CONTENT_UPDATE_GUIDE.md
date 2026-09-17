# Website Content Update Guide

This guide explains how the team can request website text and link updates without access to GitHub or the website code.

## The basic workflow

1. Open `CONTENT_TEMPLATE.md`.
2. Complete only the sections that need to change.
3. Keep the existing headings and section names.
4. Check spelling, names, dates, numbers, and links.
5. Save the file with a useful name, such as `content-update-2026-10-01.md`.
6. Send the completed file to the website coordinator.
7. The coordinator will review the request, apply the update to the site, and check the desktop and mobile layout before publishing.

No one needs to edit HTML, CSS, JavaScript, GitHub, or the live website directly.

## What Markdown is

Markdown is a simple way to format text using ordinary characters. For example:

```md
## Section title

This is a paragraph.

- This is a list item.
- This is another list item.

[Link text](https://example.com)
```

The symbols are labels for the coordinator. You do not need to learn programming to use the template.

## How to update text

Find the relevant section and replace the example wording with the final approved wording.

For a paragraph, write normal sentences under the heading. For a list, use one item per line beginning with `-`.

Example:

```md
### Judges

- Heading: Judges
- Status or text: Dr. Jane Smith
- Link: https://example.edu/judges
```

Please provide the final wording exactly as it should appear on the website. The coordinator may correct obvious spelling or punctuation errors, but should not have to guess what the approved wording is.

## How to add a link

Always provide both the visible label and the complete destination:

```md
- Link label: Registration form
- Link: https://example.com/registration
```

Use the full URL beginning with `https://`. If the link is an email address, use:

```md
- Link: mailto:name@example.edu
```

Do not paste a shortened link, a screenshot of a link, or a link that requires someone’s personal login.

## How to update a “Coming soon…” item

Keep the item in the template and choose one of these options:

```md
### Guest speaker

- Heading: Guest speaker
- Status or text: Coming soon…
- Link: Leave blank until an approved link is available.
```

When the information is ready:

```md
### Guest speaker

- Heading: Guest speaker
- Status or text: Dr. Jane Smith — Responsible AI and Community Trust
- Link: https://example.edu/speaker
```

If the item is no longer needed, write `Remove this item` in that section. Do not delete the heading from the template.

## How to update names and committees

Use one person per bullet point and include the affiliation when relevant:

```md
- Name: Mila Gasco Hernandez
- Affiliation: AI & Society College, University at Albany
```

For committee lists, check every spelling carefully. Names should not be entered as one long paragraph when separate bullet points would be clearer.

## How to update sponsors or logos

Do not rename, move, or replace logo files yourself unless the coordinator has approved the asset.

For a logo update, provide:

```md
- Organization: Example organization
- Logo file: Logos/example-logo.png
- Link: https://example.org/
```

The coordinator will verify that the logo is available, readable, properly sized, and appropriate for the site.

## What not to change

Please do not change:

- HTML tags or website code.
- Section IDs such as `#awards` or `#faq`.
- Logo filenames without approval.
- Navigation labels unless the change is requested.
- Existing links that have not been approved for replacement.
- Content that is marked as current unless you are submitting an intentional revision.

## Writing and review tips

- Use plain, direct language.
- Keep headings short and descriptive.
- Use consistent capitalization.
- Use `&` only when it is part of an approved title or official name.
- Write dates consistently, such as `October 16 & 17, 2026`.
- Check that prize amounts, percentages, names, and affiliations match the approved source document.
- Avoid adding personal phone numbers, private email addresses, passwords, or other confidential information.
- Read the complete updated paragraph aloud once before sending it.

## If only one small change is needed

You do not need to complete the entire template. Copy the relevant section into a new file and include:

```md
# Small website update

- Date prepared: YYYY-MM-DD
- Prepared by:
- Section: Judges
- Current text: Coming soon…
- New text: Dr. Jane Smith
- New link: https://example.edu/jane-smith
```

The full template remains the best option when several sections are changing or when the team wants to provide a complete approved content version.

## Final handoff checklist

Before sending the file:

- [ ] The file ends in `.md`.
- [ ] The requested change is easy to find.
- [ ] All new text is final and approved.
- [ ] Names, dates, amounts, and percentages were checked.
- [ ] Links were tested and copied in full.
- [ ] No confidential information is included.
- [ ] The file name includes the date or version.

The website coordinator will handle implementation, responsive formatting, accessibility checks, link verification, and publishing.
