SUIVI LOCATIF - install from an iPhone only (no computer)

You have 3 files: index.html, sw.js, manifest.webmanifest. They must be uploaded to a free website
host, then added to your home screen.

A) GET THE 3 FILES IN THE "FILES" APP
   Tap the downloaded .zip in Files: iOS unzips it into a folder.

B) PUT THEM ONLINE WITH GITHUB PAGES (free, in Safari)
   1. Go to github.com, create a free account, confirm your email.
   2. Create a new repository: name "suivi-locatif", set it to Public, then Create.
      (Public only means these app files are visible. Your data is never uploaded: it stays on your phone.)
   3. In the repository tap "Add file" -> "Upload files", pick the 3 files from the unzipped folder
      (select all 3 at once), then tap "Commit changes".
      If you don't see "Add file": tap "aA" in Safari's address bar -> "Request Desktop Website".
   4. Open the repository "Settings" -> "Pages". Under "Build and deployment" choose
      Source: "Deploy from a branch", Branch: "main", folder "/ (root)", tap Save.
   5. Wait 1-2 minutes. The address is shown on that page:
      https://YOURUSERNAME.github.io/suivi-locatif/
      (the exact GitHub screens may look slightly different from this description)

C) ADD IT TO THE HOME SCREEN
   Open that address in SAFARI -> Share -> "Add to Home Screen" -> Add.
   Open the app from the new icon (full screen, works offline after the first load).

D) MOVE YOUR DATA FROM THE CLAUDE VERSION
   Old app: Settings -> Export a backup (.json), save to Files.
   New app: Settings -> Restore from a file. (Files attached in the old app are not included.)

IMPORTANT
- Data is only on this phone. Deleting the icon or clearing website data erases it: export backups regularly.
- Write down the PIN recovery code shown when you create a PIN.
- Always use the same address (data is tied to it).
