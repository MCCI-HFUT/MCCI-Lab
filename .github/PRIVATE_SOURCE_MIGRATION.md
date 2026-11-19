# MCCI Lab private-source migration

This migration is **staged only**. The current `MCCI-HFUT/MCCI-Lab` public
repository and `https://mcci-hfut.github.io/MCCI-Lab/` stay unchanged until
the separate steps below are completed. Do not make the existing public Pages
repository private on a GitHub Free organization plan.

## Prepare a separate private source repository

1. In the `MCCI-HFUT` GitHub organization create a repository named
   **`MCCI-Lab-source`**, set it to **Private**, and import the current
   public `https://github.com/MCCI-HFUT/MCCI-Lab.git` repository into it
   (or copy the entire source to its `main` branch). Do not use a public
   fork as a substitute for a private source repository.
2. In the new private repository, open
   **Settings → Secrets and variables → Actions → New repository secret**.
   Create **`PUBLIC_PAGES_TOKEN`**, containing a fine-grained GitHub PAT
   authorized for the **public `MCCI-HFUT/MCCI-Lab` repository only**, with
   **Contents: Read and write**. The organization must permit that token.
   Never commit the token to files or share it in chat.
3. In the private repo open **Actions → Publish from private source to public
   Pages → Run workflow**. The workflow compiles Jekyll and publishes only
   `_site` to the public repo's `gh-pages` branch. Alternatively, after
   the private repo has its token, push a small source change to `main`.
4. Check the workflow result and both published pages:
   - https://mcci-hfut.github.io/MCCI-Lab/team/
   - https://mcci-hfut.github.io/MCCI-Lab/en/team/
   Confirm published assets, photos and links work.

The legacy `on-push.yaml` build is now gated to run only in the original
`MCCI-HFUT/MCCI-Lab` repository. When copied into `MCCI-Lab-source`, it
will not compete with the new cross-repository publication job.

## Complete the privacy cutover (not done automatically)

The existing public repository's `main` branch and **past Git history**
still expose the original source. Merely removing the files from the current
`main` branch does not erase old public Git commits.

For strong separation, first preserve all source in `MCCI-Lab-source`, then
perform a controlled repository-name swap: rename the old public
`MCCI-Lab` repository to a distinct archival name and make it private;
create a **new public** repository named exactly `MCCI-Lab`; publish the
compiled `gh-pages` output into the new public repo and configure GitHub
Pages to serve **gh-pages / (root)**. Do this in a planned maintenance
window because the Pages URL may be temporarily unavailable. Never delete
the old repository before the private backup has been verified.

A less disruptive alternative is to replace the public default branch with
a clean, built-site-only branch, but **old Git objects, forks, caches, and
other copies may remain accessible**. That is not a complete history-
privacy guarantee.

The website's generated HTML/CSS/JavaScript and published photos remain
public by design. Only the authoring source, unpublished content, and the
private repository's future version history are private.
