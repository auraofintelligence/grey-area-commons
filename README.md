# Grey Area Commons

Grey Area Commons is a static, adult-only, privacy-preserving question site for making loving intimate connection feel less anxious, more consensual and easier to move through gently.

It follows the existing local builder pattern:

- `profile.md` is the public doorway.
- `aura.md` is private or permissioned AI context.
- `public_noticeboard.md` is a public publishing contract that must not expose private aura material.
- This site creates local browser Markdown drafts for the grey area between public notice and private connection.

## Pages

- `index.html` - community-facing overview.
- `aura-profile.html` - ease-in questions.
- `connections.html` - loving connection questions.
- `permissions.html` - sharing layers.
- `higher-minds.html` - gentle AI support.
- `clinical-pathway.html` - optional memory, love and intimacy branch for dementia, family history, consent and changing capacity.
- `noticeboards.html` - public bridge after private context is protected.
- `export.html` - save Markdown pack.

## Privacy Model

There is no backend and no database. Answers are kept in `sessionStorage` so the export page can combine them during the current browser session. The user can copy or download `.md` files, then clear the session.

The generated files are drafts for human review. They are not consent, not legal or medical advice, and not a public publishing approval.
