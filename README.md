# Riverview High School FBLA

Website for the Riverview High School chapter of Future Business Leaders of America in Riverview, Florida.

It's a single static page built with HTML, CSS, and JavaScript. There's no build step and no dependencies, so opening `index.html` in a browser is all it takes to run it.

## Files

```
index.html    the site
styles.css    styles, with colors and fonts defined at the top in :root
main.js       mobile menu, nav highlighting, and scroll animations
images/       logo and photos
```

## Editing content

Almost everything lives in `index.html`. The colors are pulled from the chapter logo and defined as CSS variables at the top of `styles.css`, so changing them there updates the whole site.

Details that change during the year, and where to find them:

| What | Where |
|---|---|
| Meeting day and room | Hero facts, `#meetings`, the FAQ, `#join`, and the footer |
| Dues amount and payment link | `#meetings`, the FAQ, and `#join` |
| Officers | `#officers`, one `article.officer` per person |
| Open officer seats | `#open-positions`, one `li.seat` per role |
| Instagram handle | Search for `riverviewhighfbla` |

When an officer seat is filled, delete its `li.seat`, add an `article.officer` for the new officer, and update the count in the Officers intro.

## Adding photos

Officer cards show the person's initials until a photo is added. To swap one in, put the file in `images/` and replace the initials `div` with an `img`:

```html
<div class="officer-photo" aria-hidden="true">FK</div>

<img class="officer-photo" src="images/officer-president.jpg" alt="Fanuel Kidus" width="400" height="400" loading="lazy">
```

The photo beside "What is FBLA?" works the same way. Replace the `photo-slot` div with:

```html
<img class="photo" src="images/first-meeting.jpg" alt="Members at the inaugural chapter meeting" width="1200" height="900" loading="lazy">
```

For a hero background photo, add this as the first child of `section.hero`:

```html
<img class="hero-photo" src="images/hero.jpg" alt="" width="2400" height="1350">
```

The full list of photos and sizes is in [images/README.md](images/README.md).

## Officer application QR code

The QR box in `#open-positions` is a placeholder. Save the code as `images/officer-apply-qr.png` and replace the `qr-slot` div with:

```html
<img class="qr-code" src="images/officer-apply-qr.png" alt="QR code to apply for an officer seat" width="200" height="200" loading="lazy">
```

The "Apply for an officer seat" button next to it currently opens the chapter's Instagram page. Point its `href` at the application form once there is one, and update the line above it that says to message us.

## Publishing

The site is set up to run on GitHub Pages. In the repo, go to Settings > Pages, choose "Deploy from a branch," and pick `main` with the root folder. Every push to `main` updates the live site within a minute or two.

Once the site has a URL, add `og:url` and `og:image` tags to the head of `index.html` using full URLs (`https://...`) so link previews show up on Instagram and in texts.

## Notes

FBLA and the FBLA logo belong to Future Business Leaders of America, Inc. This is a chapter website and isn't an official FBLA or school district site.
