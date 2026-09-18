# Shafiq-us Saleheen — academic website

A custom academic design on the existing Jekyll / GitHub Pages stack. The site uses plain CSS and a small JavaScript file for mobile navigation and archive search. All content remains available without JavaScript.

## Editing the site

| Content | Source |
| --- | --- |
| Biography | `_pages/about.md` |
| Experience and education dates for roles | `_data/experience.yml` |
| Featured research on the homepage | `_data/featured_research.yml` |
| Research entries and full reports | `_publications/` and `files/` |
| Project entries and galleries | `_portfolio/` |
| News, awards, and talks | `_talks/` |
| Main portrait | `images/IMG_2684.jpg` |
| CV document | `files/resume.pdf` |
| Contact details | `_config.yml` |
| Navigation | `_data/navigation.yml` |
| Homepage layout and education summary | `_layouts/home.html` |
| Shared design and responsive rules | `assets/css/academic.css` |
| Mobile navigation and search | `assets/js/academic.js` |

Keep each entry's existing permalink when editing it so published links continue to work. New collection entries automatically appear in their archives. The homepage's latest news also updates automatically.

The empty duplicate CV page was consolidated into `_pages/cv.html`. Both `/cv/` and the existing `/resume` redirect remain available. The original `/about/` and `/about.html` redirects are preserved.

## Local development

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve --config _config.yml,_config.dev.yml
```

Open http://localhost:4000. GitHub Pages can continue building the repository using its existing Jekyll setup; no new frontend build step is required.

The redesign was validated using the real Jekyll 3.9.3 engine, matching the version in the existing lockfile. Temporary build tools, the browser verification script, and screenshots are under ignored `tmp/`; generated pages are under ignored `_site/`. In the prepared workspace, `python tmp/serve.py` serves that generated preview with support for the existing extensionless URLs.

## Validation and content notes

- All 7 research, 4 project, and 12 news source records were checked against the original Git revision and remain unchanged.
- All 7 experience entries were moved from the homepage into structured data; their descriptions and links are preserved.
- 29 pages passed layout checks at 1440, 768, 390, and 320 pixels.
- 546 internal link and asset references resolved.
- Mobile navigation, Escape-to-close, search results and empty states, CV downloads, and navigation without JavaScript passed browser checks.
- External service availability was not audited. The original LinkedIn embed and external resource links are retained.
- The original Streams Tech internship dates read **December 2022–June 2022**. They are preserved pending author correction.
- Existing research review status and ongoing internship dates are retained from the source; no acceptance, affiliation, or achievement has been invented.

---

## Original template documentation

The original setup guide is retained below for reference.


A Github Pages template for academic websites. This was forked (then detached) by [Stuart Geiger](https://github.com/staeiou) from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/), which is © 2016 Michael Rose and released under the MIT License. See LICENSE.md.

I think I've got things running smoothly and fixed some major bugs, but feel free to file issues or make pull requests if you want to improve the generic template / theme.

### Note: if you are using this repo and now get a notification about a security vulnerability, delete the Gemfile.lock file. 

# Instructions

1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Fork [this repository](https://github.com/academicpages/academicpages.github.io) by clicking the "fork" button in the top right. 
1. Go to the repository's settings (rightmost item in the tabs that start with "Code", should be below "Unwatch"). Rename the repository "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and create content & metadata (see below -- also see [this set of diffs](http://archive.is/3TPas) showing what files were changed to set up [an example site](https://getorg-testacct.github.io) for a user with the username "getorg-testacct")
1. Upload any files (like PDFs, .zip files, etc.) to the files/ directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.  
1. Check status by going to the repository settings, in the "GitHub pages" section
1. (Optional) Use the Jupyter notebooks or python scripts in the `markdown_generator` folder to generate markdown files for publications and talks from a TSV file.

See more info at https://academicpages.github.io/

## To run locally (not on GitHub Pages, to serve on your own computer)

1. Clone the repository and made updates as detailed above
1. Make sure you have ruby-dev, bundler, and nodejs installed: `sudo apt install ruby-dev ruby-bundler nodejs`
1. Run `bundle clean` to clean up the directory (no need to run `--force`)
1. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.
1. Run `bundle exec jekyll liveserve` to generate the HTML and serve it from `localhost:4000` the local server will automatically rebuild and refresh the pages on change.

# Changelog -- bugfixes and enhancements

There is one logistical issue with a ready-to-fork template theme like academic pages that makes it a little tricky to get bug fixes and updates to the core theme. If you fork this repository, customize it, then pull again, you'll probably get merge conflicts. If you want to save your various .yml configuration files and markdown files, you can delete the repository and fork it again. Or you can manually patch. 

To support this, all changes to the underlying code appear as a closed issue with the tag 'code change' -- get the list [here](https://github.com/academicpages/academicpages.github.io/issues?q=is%3Aclosed%20is%3Aissue%20label%3A%22code%20change%22%20). Each issue thread includes a comment linking to the single commit or a diff across multiple commits, so those with forked repositories can easily identify what they need to patch.
