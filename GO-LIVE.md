# Go live — CLI-first checklist

**You need:** Node.js 18+, a Vercel account (free), your **GoDaddy** login, domain **DNS** access, and your **`AN_API_KEY`** (same as in local `.env`).

All commands run from your project folder unless noted.

```bash
cd "/Users/macmini/Desktop/Detail Clinic"
```

Use **`npx vercel@latest`** so you don’t have to install anything globally.

---

## Step 1 — Log in to Vercel (CLI + one browser login)

```bash
npx vercel@latest login
```

Follow the prompt (opens browser once to confirm). **Email login** is fine if you don’t use GitHub.

---

## Step 2 — Link this folder to a Vercel project

```bash
npx vercel@latest link
```

Answer the prompts:

- **Set up and deploy?** → **Y** (or link existing if you already created a project).
- **Which scope?** → your account/team.
- **Link to existing project?** → **N** first time (or **Y** + pick name if redoing).
- **Project name** → e.g. `detail-clinic` (remember this — **PROJECT_NAME** below).

This creates `.vercel/` locally (you can add `.vercel` to `.gitignore` if you use Git).

**See your project name anytime:**

```bash
npx vercel@latest project list
```

---

## Step 3 — Add the secret (required for `/api/an-token`)

```bash
npx vercel@latest env add AN_API_KEY production
```

When asked, **paste your API key** and press Enter.

Optional (preview deploys):

```bash
npx vercel@latest env add AN_API_KEY preview
```

---

## Step 4 — Production deploy

```bash
npx vercel@latest --prod
```

Wait for the build to finish. Note the URL (e.g. `https://detail-clinic-xxx.vercel.app`). Open it — site should load.

---

## Step 5 — Attach your real domain (CLI)

Replace **`YOURDOMAIN.com`** with your site domain (e.g. `thedetailclinic.com`) and **`PROJECT_NAME`** with the name from Step 2.

```bash
npx vercel@latest domains add YOURDOMAIN.com PROJECT_NAME
npx vercel@latest domains add www.YOURDOMAIN.com PROJECT_NAME
```

If it says the domain is on another project, add **`--force`** (only if you mean to move it):

```bash
npx vercel@latest domains add YOURDOMAIN.com PROJECT_NAME --force
```

---

## Step 6 — See which DNS records to add (CLI)

```bash
npx vercel@latest domains inspect YOURDOMAIN.com
```

Read the output: Vercel will show **A**, **CNAME**, or **ALIAS** values you must set at GoDaddy.

---

## Step 7 — GoDaddy DNS (browser — ~2 minutes)

1. GoDaddy → **My Products** → your domain → **DNS** / **Manage DNS**.
2. **Remove** old **A** / **CNAME** on **`@`** and **`www`** that point to parking / old hosting (if any).
3. **Add** the records **exactly** as `domains inspect` showed (usually something like):
   - **A** record, **Name** `@`, **Value** Vercel’s IP  
   - **CNAME**, **Name** `www`, **Value** `cname.vercel-dns.com`  
   (Confirm against your `domains inspect` output — use Vercel’s values, not guesses.)

Save. SSL on Vercel turns on automatically after DNS propagates (**15 min – 48 hrs**).

---

## Step 8 — Verify (CLI)

```bash
npx vercel@latest ls
npx vercel@latest domains inspect YOURDOMAIN.com
```

When DNS is correct, `domains inspect` should show the domain configured. Test **https://YOURDOMAIN.com** in a browser.

---

## Quick reference — copy/paste block

After replacing `YOURDOMAIN` and `PROJECT_NAME`:

```bash
cd "/Users/macmini/Desktop/Detail Clinic"
npx vercel@latest login
npx vercel@latest link
npx vercel@latest env add AN_API_KEY production
npx vercel@latest --prod
npx vercel@latest domains add YOURDOMAIN.com PROJECT_NAME
npx vercel@latest domains add www.YOURDOMAIN.com PROJECT_NAME
npx vercel@latest domains inspect YOURDOMAIN.com
```

Then GoDaddy DNS from Step 7.

---

## Redeploy after code changes

```bash
cd "/Users/macmini/Desktop/Detail Clinic"
npx vercel@latest --prod
```

---

## Troubleshooting

| Issue | What to do |
|-------|------------|
| Build fails | Run `npx vercel@latest --prod` and read the error in the terminal; fix locally, retry. |
| Domain stuck | `npx vercel@latest domains inspect YOURDOMAIN.com` — fix DNS to match. |
| API errors live | Vercel → Project → Settings → Environment Variables → confirm `AN_API_KEY` for **Production**. |
