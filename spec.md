# Ekan Solutions Inc.

## Current State
- Website has 7 service landing pages: Cybersecurity, Project Management, Full Stack Dev, AWS Cloud, Java Dev, QA/Testing, AI & Automation
- All 7 routes are correctly defined in App.tsx
- ServicesPage.tsx correctly shows all 7 service cards
- **BUT** the home page `SERVICES` array (App.tsx lines 84-115) only contains 5 services — missing QA/Testing and AI & Automation
- **AND** the home page `SERVICE_DETAILS` tabs array (App.tsx lines 117-188) only contains 5 entries — missing QA/Testing and AI & Automation
- **AND** the hero right-side panel pulls from the stale `SERVICES` array (only shows 5)
- **AND** 6 of 7 service pages have a `PageType` type union that is missing `"aiservices"` — could cause TypeScript errors or broken navigation when navigating to the AI page from another service page
- Stale copy: IntroCards says "Five specialized IT practices", ServicesPage overview says "Five specialized practice areas"

## Requested Changes (Diff)

### Add
- QA/Testing entry to `SERVICES` array in App.tsx (icon, title, description, page route `"qatesting"`)
- AI & Automation entry to `SERVICES` array in App.tsx (icon, title, description, page route `"aiservices"`)
- QA/Testing entry to `SERVICE_DETAILS` array in App.tsx (label, description, features list)
- AI & Automation entry to `SERVICE_DETAILS` array in App.tsx (label, description, features list)

### Modify
- Fix `PageType` in all 6 service pages (CybersecurityPage, ProjectManagementPage, FullStackPage, AWSCloudPage, JavaDevelopmentPage, QATestingPage) to include `"aiservices"`
- Update IntroCards description in App.tsx from "Five specialized IT practices" to "Seven specialized IT services"
- Update ServicesPage.tsx section description from "Five specialized practice areas" to "Seven specialized practice areas"

### Remove
- Nothing removed

## Implementation Plan
1. In `App.tsx`:
   - Add QA/Testing object to `SERVICES` array with shield-check icon, description, and `page: "qatesting"`
   - Add AI & Automation object to `SERVICES` array with brain/circuit icon, description, and `page: "aiservices"`
   - Add QA/Testing tab to `SERVICE_DETAILS` with 5 bullet features
   - Add AI & Automation tab to `SERVICE_DETAILS` with 5 bullet features
   - Update IntroCards text to say "Seven"
2. In `ServicesPage.tsx`:
   - Update section description text to say "Seven"
3. In `CybersecurityPage.tsx`, `ProjectManagementPage.tsx`, `FullStackPage.tsx`, `AWSCloudPage.tsx`, `JavaDevelopmentPage.tsx`, `QATestingPage.tsx`:
   - Add `"aiservices"` to each file's local `PageType` union
