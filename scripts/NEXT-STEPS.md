# What’s already done vs what you run locally

## Done on this machine

- Git repo on **`main`**, remote **`thedetailclinic-gif/Website`**
- **Full `Pictures/`** tree (HEIC, TIFF, PNG, MP4) + **`Detail Clinic Website 2.0.mov`**
- **Git LFS** for every **`*.mov`** — required because GitHub rejects files **> 100MB** (several of yours are 117MB–263MB)
- **`public/`** images/videos (site assets) were already in the repo
- **`brew install git-lfs`** + **`git lfs install`** done on this Mac

## Before you push (this Mac)

```bash
git lfs install   # once per machine
cd "/Users/macmini/Desktop/Detail Clinic"
git push -u origin main
```

Pushing uploads **LFS objects** separately; first push may take a while (~2GB+ total).

**Anyone who clones** the repo later should run **`git lfs install`** first so `.mov` files download correctly.

## GitHub LFS limits (free)

Public repos get **1 GiB/month** LFS bandwidth on the free plan. If the push fails for bandwidth/storage, upgrade Git LFS data on GitHub or compress/split the largest `.mov` files.

## You run (Vercel)

```bash
cd "/Users/macmini/Desktop/Detail Clinic"
npx vercel@latest link
npx vercel@latest env add AN_API_KEY production
npx vercel@latest --prod
```

Then domains + GoDaddy DNS per **`GO-LIVE.md`**.

**Note:** Vercel only deploys what’s in the repo for the **web app**; huge `Pictures/` will still be cloned on build unless you add them to **`.vercelignore`** later (optional, to speed deploys).
