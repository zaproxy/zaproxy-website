# ZAP Website

## Development
To work on the website you'll need to have either node.js or Docker installed. In your development environment  `npm run preview` will start up a webpack-dev-server on port 3000 for development which will hot-reload the site as file changes are detected.

### Docker
The suggested setup for development is using the Docker.

```sh
# Build image
docker build -t zaproxy-website .

# Start container with image of zaproxy-website
docker run -it -v "$(pwd)/site:/app/site" \
    -v "$(pwd)/src:/app/src" -p 3000:3000 zaproxy-website npm run preview
```

### Dependencies
For development, the site heavily depends on node.js for utilities that build the front-end CSS & JavaScript. The entrypoint for modifying the site JavaScript is `src/index.js` which gets transpiled using babel & packed up with webpack packages.

```sh
# Check for associated vulns
npm audit

# Check for packages
npm outdated

# Update a package
npm update @babel/core
```

### Building

```
./bin/build.sh
cp -r ./dist/ ../zaproxy-website-builds
cd ../zaproxy-website-builds
git push origin staging
```

## Hugo
*Generically speaking, the term post & page can be used interchangeably, the exception is when content types are defined (`type: post`)*

### Structure
https://gohugo.io/getting-started/directory-structure/

```
|--site                // Everything in here will be built with hugo
|  |--content          // Posts and collections - ask if you need extra posts
|  |--data             // YAML data files with any data for use in examples
|  |--layouts          // This is where all templates go
|  |  |--_default      // This is where the default layouts live
|  |  |--partials      // This is where includes live
|  |  |--index.html    // The index page
|  |--static           // Files in here ends up in the public folder
|--src                 // Files that will pass through the asset pipeline
|  |--css              // Webpack will bundle imported css seperately
|  |--index.js         // index.js is the webpack entry for your css & js assets
```

#### Content
For adding & modifying content the place to be is  `site/content/`. Content is written in the form of markdown files with YAML headers including details about the post such as title, date & layout. The name of the file is tranformed into a url when the site is generated. A file named `site/content/download.md` becomes `/download`. Additionally, any folder structure you create in that directory will be reflected in the sites' url heirarchy. That means `site/content/blog/2017-08-22-zap-browser-launch.md` becomes `/blog/2017-08-22-zap-browser-launch`. 

**Sample**  
```markdown
---
type: page
title: Get Involved
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus et dui ligula. 
Donec semper ex at molestie scelerisque. In sodales bibendum leo, vitae porttitor
est viverra at. Phasellus tincidunt enim ac rutrum convallis. Duis at tellus a
erat consequat fringilla. Ut augue leo, blandit vel d

## Mauris
```

You can also use `hugo` commands to create the yaml content files.

```sh
# Move to site directory
cd site/

# Create generic content file
hugo new contributing.md

# Create a content file using the site/archetypes/blog.md template
hugo new blog/$(date -v +7d '+%Y-%m-%d')-learning-zap-api/index.md
```

For keeping content organized you also have the option of encapsulating the content of a post in a directory. If a post has a number of images or other assets related to it, it is much cleaner to include those assets with the post instead of putting them all in the assets directory. For example instead of having `site/content/download.md`, you could have `site/content/download/index.md` & all the post's related images would also live in that same `download` directory.

##### New Content
For adding new categories of content such as addons or wiki entries follow the pattern below using addons as an example

- Create the content directory `mkdir -p site/content/addons/{images,icons}`
- If there IS NOT  a lot of media within that section, copy images into the images directory
- If the content IS media heavy, insteading of creating a single markdown file per post, create a directory with the post name 
  - `site/content/addons/active-scan-rules/images/`
- If there is sub pages of content, then you will also need to create the directories that reflect the content structure
  - For example for Access Control Context Options you would use one of the structures depending on the depth of the content
    - `site/content/addons/access-control/context-options/_index.md`
    - `site/content/addons/access-control/context-options.md`
- When you create entries that, include a type in the header


###### Sample
`site/content/addons/active-scan-rules.md`

```
---
title: "Active Scan Rules"
type: addon
status: alpha
icon: 
---
```

##### Highlighting Important Content

> [!NOTE]
> You can highlight important information in your articles or docs using different types of callouts (also known as admonitions – or alerts, as used in [the Hugo docs](https://gohugo.io/render-hooks/blockquotes/#alerts)).

For compatibility with both content and layout files, we use a mix of shortcodes and partials to display blockquote alerts. Partials work in layout, but not content files. Shortcodes work in content, but not layout files. Use the partial in layout files, and the shortcode (which internally calls the partial) in content files.

The partial is at `site/layouts/partials/blockquote-alert.html`, and the shortcode is at `site/layouts/shortcodes/blockquote-alert.html`.

There are five available alert types as shown in the examples below:

- note
- tip
- important
- warning
- caution

Omit the `title` parameter to keep the alert type as the default title (for example, a note alert will have "Note" as its title):

```md
<!-- Shortcodes in content files -->

{{< blockquote-alert type="note" title="Optional custom title">}}
Useful information that users should know, even when skimming content.
{{< /blockquote-alert >}}

{{< blockquote-alert type="tip" title="Optional custom title">}}
Helpful advice for doing things better or more easily.
{{< /blockquote-alert >}}

{{< blockquote-alert type="important" title="Optional custom title">}}
Key information users need to know to achieve their goal.
{{< /blockquote-alert >}}

{{< blockquote-alert type="warning" title="Optional custom title">}}
Urgent info that needs immediate user attention to avoid problems.
{{< /blockquote-alert >}}

{{< blockquote-alert type="caution" title="Optional custom title">}}
Advises about risks or negative outcomes.
{{< /blockquote-alert >}}
```

In layout files, call the partial directly. Just like shortcode content, anything passed to the  `content` parameter is parsed as Markdown. To pass raw HTML instead, use the `html` parameter. Again, the title parameter is optional and will default to the alert type:

```html
<!-- Partials in layout files -->

<!-- Anything passed via `content` is interpreted as Markdown -->

{{ partial "blockquote-alert.html" (dict
    "type" "note"
    "title" "Optional custom title"
    "content" "Useful information that users should know, even when skimming content."
) }}

{{ partial "blockquote-alert.html" (dict
    "type" "tip"
    "title" "Optional custom title"
    "content" "Helpful advice for doing things better or more easily."
) }}

{{ partial "blockquote-alert.html" (dict
    "type" "important"
    "title" "Optional custom title"
    "content" "Key information users need to know to achieve their goal."
) }}

{{ partial "blockquote-alert.html" (dict
    "type" "warning"
    "title" "Optional custom title"
    "content" "Urgent info that needs immediate user attention to avoid problems."
) }}

{{ partial "blockquote-alert.html" (dict
    "type" "caution"
    "title" "Optional custom title"
    "content" "Advises about risks or negative outcomes."
) }}
```

In addition to simple string content as shown above, you can also pass in complex nested content with multiple paragraphs and elements:

```md
<!-- Shortcode example with more complex content -->

{{< blockquote-alert type="tip" title="Optional custom Title" >}}
This is a tip with **bold text** and _italic_ text.

This is a second paragraph in the same alert.

- List item 1
- List item 2
{{< /blockquote-alert >}}
```

You can do similar in partials. These are all valid options. Additionally, you can assign content to a variable before passing it in, which helps with formatting in longer templates:

```html
<!-- You can wrap your markdown content in backticks if it doesn't itself contain backticks -->
<!-- Note that indented lines could be interpreted as a preformatted code block. -->
{{ $alertContent := `This is a tip with **bold text** and _italic_ text.

This is a second paragraph in the same alert.
            
- List item 1
- List item 2
`}}

{{ partial "blockquote-alert.html" (dict
  "type" "tip"
  "title" "Optional custom title"
  "content" $alertContent
) }}

<!-- Concatenate multi-line strings (markdown) -->
{{ $alertContent := add
  "This is a tip with **bold text** and _italic_ text.\n\n"
  "This is a second paragraph in the same alert.\n"
  "- List item 1\n"
  "- List item 2\n\n"
  "`Here's some text in backticks.`"
}}

{{ partial "blockquote-alert.html" (dict
  "type" "tip"
  "title" "Optional custom title"
  "content" $alertContent
) }}

<!-- Pass HTML with nested elements -->
{{ partial "blockquote-alert" (dict 
    "type" "caution" 
    "title" "Be Careful!" 
    "html" "<p>This is a <strong>caution</strong> message.</p><p>It has multiple paragraphs.</p>"
) }}
```


> [!IMPORTANT]
> When working with complex content, make sure to handle line breaks properly within the strings passed to the `content` or `html` parameters. For example, the following will throw a parse error (`html: overlay: parse failed unterminated quoted string in action`):

```
{{ partial "blockquote-alert" (dict
    "type" "caution"
    "title" "Be Careful!"
    "html" "<p>This is a <strong>caution</strong> message.</p>
    <p>It has multiple paragraphs.</p>"
) }}
```

To avoid this, you can use either of the following options:

- Keep everything on a single line
- Use string concatenation (whether in a variable or directly)

#### Layouts
For controlling what HTML is rendered, you need to work with the site templates. In the directory, `site/layouts/`, you'll find a number of HTML files with various template tags. The first file to check out is `site/layouts/_default/baseof.html` - this is the base layout Hugo uses to build your site that templates extend. Hugo has a lookup order for associating a content entry to a template. A single entry whose type is post (`type: post`), Hugo will look for a layout in `site/layouts/post/single.html`, and if that does not exist, it will fallback to `site/layouts/_default/single.html`. 

For generic  posts, the lookup resolution works great, but sometimes you have posts that requires custom layouts, such as the downloads page. In those cases, you can specifiy the layout in the content markdown file & it will lookup the template.

This is what `site/content/download.md` currently looks like which resolves to the template found `site/layouts/page/download.html`.

```---
type: page
layout: download
---
```

- https://gohugo.io/templates/introduction/
- https://gohugo.io/templates/lookup-order/

#### Data
Data that is shared across the site lives in `site/data/`. For example, a list of all the site authors is an example of a piece of data you would reference across numerous places on the site. You can create `site/data/authors.yaml`.

```yaml
---
- name: 'Simon Bennets'
  picture: 'https://pbs.twimg.com/profile_images/2186782633/simonbennetts2_400x400.jpg'
  twitter: '@psiinon'
  is_core: true

- name: 'David Scrobonia'
  picture: 'https://pbs.twimg.com/profile_images/1132029219876347904/FYA3rHRq_400x400.png'
  twitter: '@david_scrobonia'
  is_core: true
```

Later, in the templates, you would reference that data & the template would render.
```html
{{ range $author := $.Site.Data.authors }}
    <section class="post-author-single flex p-10">
      <div class="col-1-5">
        <img class="author-picture" src="{{ $author.picture }}" />
      </div>
      <div class="author-name col-4-5">
        {{ $author.name }}
        <a class="author-twitter" href="https://twitter.com/{{ $author.twitter }}">{{ $author.twitter }}</a>
      </div>
    </section>
{{ end }}
```
https://gohugo.io/templates/data-templates/


#### Frontend Assets
##### Static
For assets that are completely static and don't need to go through the asset pipeline,
use the `site/static` folder. Images, font-files, etc, all go there. Files in the static folder end up in the web root. So a file called `site/static/favicon.ico`
will end up being available as `/favicon.ico` and so on...

##### CSS/SCSS
All the CSS is written in SCSS ("Sassy CSS") with all the files in `src/css/` with `src/css/main.css` being the entrypoint, defining main variables & importing the needed styles.

Styles are separated by broad category, component and post specific styles. For example, if you need to change the typography across the entire site, `src/css/_type.scss` is the file to edit.

https://sass-lang.com/documentation/syntax

##### JavaScript
The `src/index.js` file is the entrypoint for webpack and will be built to `/dist/main.js`

You can use **ES6** and use both relative imports or import libraries from npm. Any CSS file imported into the `index.js` will be run through Webpack, compiled with [PostCSS Next](http://cssnext.io/), and minified to `/dist/[name].[hash:5].css`. Import statements will be resolved as part of the build.

- https://babeljs.io/
- https://webpack.js.org/

### Basic Concepts

You can read more about Hugo's template language in their documentation below. 
The most useful page there is the one about the available functions.

- https://gohugo.io/templates/overview/
- https://gohugo.io/templates/functions/



### Environment variables

To separate the development and production _- aka build -_ stages, all gulp tasks run with a node environment variable named either `development` or `production`.

You can access the environment variable inside the theme files with `getenv "NODE_ENV"`. See the following example for a conditional statement:

    {{ if eq (getenv "NODE_ENV") "development" }}You're in development!{{ end }}

All tasks starting with _build_ set the environment variable to `production` - the other will set it to `development`.

### Helpful Links
- https://regisphilibert.com/blog/2018/01/hugo-page-resources-and-how-to-use-them/
- https://regisphilibert.com/blog/2018/02/hugo-the-scope-the-context-and-the-dot/
- https://gist.github.com/sebz/efddfc8fdcb6b480f567
- https://en.jeffprod.com/blog/2018/build-your-own-hugo-website-search-engine/
- https://github.com/vjeantet/hugo-theme-docdock
- https://harmstyler.me/posts/2019/how-to-pass-variables-to-a-partial-template-in-hugo/
