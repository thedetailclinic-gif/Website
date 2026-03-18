# Deploy from GitHub Actions (no Vercel↔GitHub “link” required for CLI path)

This repo includes workflows that:

1. **`CI — Linux build`** — runs on every push; confirms `npm ci` + `next build` on Ubuntu (like Vercel).
2. **`Deploy — Vercel (optional)`** — after you add secrets, also deploys production on each push to `main`.

---

## One-time: create Vercel token + project IDs

1. **Token:** [vercel.com/account/tokens](https://vercel.com/account/tokens) → **Create** → copy value.  
   In GitHub: **Repo → Settings → Secrets and variables → Actions → New repository secret**  
   - Name: `VERCEL_TOKEN`  
   - Value: paste token  

2. **Org + Project ID** (from a machine where the project is linked):

   ```bash
   cd "/Users/macmini/Desktop/Detail Clinic"
   npx vercel@latest link
   cat .vercel/project.json
   ```

   You’ll see `"orgId"` and `"projectId"`. Add GitHub secrets:

   - `VERCEL_ORG_ID` = `orgId`  
   - `VERCEL_PROJECT_ID` = `projectId`

3. **Production API key on Vercel** (for the live site, not Actions):  
   Vercel → **Project → Settings → Environment Variables** → `AN_API_KEY` = real key.  
   The GitHub Action build uses a **placeholder** only so `next build` completes; runtime on Vercel still uses your dashboard env.

---

## After secrets are set

Push to `main`. The optional deploy workflow uploads a **trimmed tree** (no `Pictures/`), which avoids huge CLI uploads and matches what the site actually needs.

---

## If you prefer the Vercel dashboard only

You can ignore this file: connect GitHub in Vercel and import **`Website`**. The **CI** workflow still helps catch broken builds early.
