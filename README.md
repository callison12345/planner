# Classroom Planner

A phone-friendly planner for a teacher's day: a month calendar with each subject's objectives, one-off activities (with optional times), US holidays, and days off. It installs to a phone's home screen and works offline. Everything is saved on the device; there is no account or server.

## Features

- **Calendar first.** A month view showing each day's objectives and activities as color-coded labels. Swipe or use the arrows to change months, or jump with the month and year dropdowns.
- **Daily schedule.** Subjects with times and one of 12 colors (**Schedule** button). They repeat Monday to Friday.
- **Objectives.** Tap a day to add, check off, edit or delete objectives for each subject.
- **Activities.** One-line items for a single day ("Email parent", "Cheer practice"), with an optional time. They work on weekends and days off too.
- **Repeat an activity** (↻) to chosen weekdays over a date range, for example every Tuesday until December.
- **Copy day.** Copy a whole day's plan to another day. Weekends and days off only receive activities.
- **Day off.** Marks a weekday as no school with a line through it. Subject plans are hidden, not deleted.
- **US holidays.** All federal holidays, the weekdays they're observed on, and common observances like Halloween and Mother's Day.
- **Backup / Restore.** Saves everything to a `.json` file and loads it back.

## Putting it on a phone

The planner has to be served over **https** once; after that it works offline.

1. **Host it.** This repository is a static site, so any static host works:
   - **GitHub Pages:** go to *Settings → Pages*, set *Deploy from a branch*, choose `main` and `/ (root)`. The site appears at `https://<user>.github.io/planner/`.
   - **Netlify Drop:** drag this folder onto <https://app.netlify.com/drop>.
2. **Install it.**
   - **iPhone:** open the link in **Safari**, then **Share → Add to Home Screen**. Requires iOS 16.4 or later for the best experience.
   - **Android:** open the link in **Chrome**, then **⋮ → Install app**.

### Moving plans to the phone

Plans live in the browser on each device. To move them:

1. On the old device, tap **Backup**.
2. Send the `planner-backup-….json` file to the phone.
3. On the phone, tap **Restore** and pick the file.

Back up now and then. Clearing the browser's site data, or removing the app, erases the plans.

## Updating

Push changes to the host. Installed copies pick them up automatically, usually the second time the app is opened afterward. If you add, remove or rename a file the app needs offline, update the `FILES` list in `sw.js` and bump `CACHE` (for example `planner-v5` to `planner-v6`).

## Files

| File | What it is |
|---|---|
| `index.html` | The app: page and script |
| `planner.css` | All of the styles: colors (12 subject pastels + baby yellow), layout, calendar, panels |
| `sw.js` | Service worker: keeps the app working offline |
| `manifest.webmanifest` | Name, colors and icons for installing |
| `icons/` | Home-screen icons (180, 192, 512 px) |
| `vendor/` | Bundled Nunito font and Font Awesome icons, with their licenses |

## Credits

- [Nunito](https://fonts.google.com/specimen/Nunito), SIL Open Font License (`vendor/fonts/Nunito-OFL.txt`)
- [Font Awesome Free](https://fontawesome.com) 6.7.2, icons CC BY 4.0, fonts SIL OFL, code MIT (`vendor/fontawesome/LICENSE.txt`)
