# Taveras Performance — Version 1

A free, static, mobile-friendly training tracker for Phil Sr. and Phil Jr.

## Quickest way to publish (GitHub Pages)
1. Create a free GitHub account at https://github.com if you don't already have one.
2. Open the existing **public** repository `TaverasPerformance/Taveras-Performance`. Do **not** put personal workout data or backups in the repository.
3. Upload `index.html`, `manifest.webmanifest`, `icon.svg`, and `sw.js` to the root of the repository and commit.
4. Open repository **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, then **main** and **/(root)**, and save.
5. Wait for GitHub to show the live site address, usually `https://taverasperformance.github.io/Taveras-Performance/`.
6. On each iPhone, open that address in Safari, tap **Share → Add to Home Screen → Add**.

## Important data limitation
- Each iPhone saves results locally in its own browser storage. Data is **not shared or synced** between devices.
- Deleting browser/site data or using another browser/device may lose access to saved entries.
- Use **History & Backup → Export backup (JSON)** regularly and save the file somewhere private. Import restores/merges backed-up entries.
- The repository and app are publicly viewable, so do not enter sensitive medical information. Only logged workout records remain local.
- For genuine two-phone synchronization, a future version needs authentication and an online database (for example Supabase or Firebase), with parental oversight for the minor athlete.

## Using the app
- Choose Phil Sr. or Phil Jr.
- Choose a training day under **Today's Plan**.
- Enter results under **Log Results**; review metric charts under **Progress**.
- Existing workout numbers are not prefilled as new logs. Log real performances when completed.

## Optional local testing
Open `index.html` on a computer browser for a basic preview. PWA installation and offline service-worker behavior require hosting over HTTPS.
