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

Almost everything lives in `index.html`. Anything still waiting on real information is in square brackets, like `[ROOM]` or `[NAME]`, so searching the file for `[` will find all of it.

Still to fill in:

- Meeting day, time, frequency, and room
- Officer names and bios
- Mr. Green's room number

The colors are pulled from the chapter logo and defined as CSS variables at the top of `styles.css`. Changing them there updates the whole site.

## Adding photos

Each photo spot is a dashed placeholder box that says what goes there and what size it should be. To add a photo, put the file in `images/` and replace the placeholder `div` with an `img`:

```html
<!-- before -->
<div class="placeholder reveal">
  Chapter photo
  <small>1200 &times; 800</small>
</div>

<!-- after -->
<img class="photo reveal" src="images/chapter.jpg" alt="Members at a chapter meeting" width="1200" height="800">
```

Officer photos work the same way with `class="officer-photo"`. The hero background uses `class="hero-photo"` and an empty `alt=""`, since it's decorative. The full list of photos and sizes is in [images/README.md](images/README.md).

## Publishing

The site is set up to run on GitHub Pages. In the repo, go to Settings > Pages, choose "Deploy from a branch," and pick `main` with the root folder. Every push to `main` updates the live site within a minute or two.

If the chapter gets a custom domain later, add it under Settings > Pages > Custom domain. After that, change the `og:url` and `og:image` tags in `index.html` to full URLs so link previews show up on Instagram and in texts.

## Notes

FBLA and the FBLA logo belong to Future Business Leaders of America, Inc. This is a chapter website and isn't an official FBLA or school district site.
