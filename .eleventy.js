const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");
const nunjucks = require('nunjucks');

module.exports = function(eleventyConfig) {
  // Configure Nunjucks for Eleventy
  let nunjucksEnvironment = new nunjucks.Environment(
    new nunjucks.FileSystemLoader("src/_includes")
  );
  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

  const markdownLib = markdownIt({ html: true }).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

  // Restore the link shortcode for both Liquid and Nunjucks
  const linkShortcode = function(text, url) {
    const encodedUrl = encodeURI(url);
    return `<a href="${encodedUrl}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  };
  eleventyConfig.addShortcode("link", linkShortcode);
  eleventyConfig.addLiquidShortcode("link", linkShortcode);
  eleventyConfig.addNunjucksShortcode("link", linkShortcode);

  // Projects collection
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/portfolio/*.md");
  });

  // findSectionConfigKey function
  eleventyConfig.addNunjucksGlobal("findSectionConfigKey", function(config, currentTitle, key) {
    const section = config.find(item => item.title === currentTitle);
    if (section) {
      if (key === null) {
        return section;
      }
      if (section.hasOwnProperty(key)) {
        return section[key];
      }
    }
    return null;
  });

  // Add inlineImage shortcode to both Liquid and Nunjucks
  const inlineImageShortcode = function (src, alt, size = "is-half") {
    const imagePath = "/assets/images/" + encodeURIComponent(src);
    return `<div class="columns is-centered">
      <div class="column ${size}">
        <figure class="image">
          <img src="${imagePath}" alt="${alt}">
        </figure>
      </div>
    </div>`;
  };

  // Add inlineImage shortcode to both Liquid and Nunjucks
  const inlineTwoImagesShortcode = function (src1, alt1, src2, alt2, size = "is-one-third") {
    const imagePath1 = "/assets/images/" + encodeURIComponent(src1);
    const imagePath2 = "/assets/images/" + encodeURIComponent(src2);
    return `<div class="columns is-centered">
      <div class="column ${size}">
        <figure class="image">
          <img src="${imagePath1}" alt="${alt1}">
        </figure>
      </div>
      <div class="column is-1">&nbsp;</div>
      <div class="column ${size}">
        <figure class="image">
          <img src="${imagePath2}" alt="${alt2}">
        </figure>
      </div>
    </div>`;
  };

  eleventyConfig.addShortcode("inlineImage", inlineImageShortcode);
  eleventyConfig.addLiquidShortcode("inlineImage", inlineImageShortcode);
  eleventyConfig.addNunjucksShortcode("inlineImage", inlineImageShortcode);

  eleventyConfig.addShortcode("inlineTwoImages", inlineTwoImagesShortcode);
  eleventyConfig.addLiquidShortcode("inlineTwoImages", inlineTwoImagesShortcode);
  eleventyConfig.addNunjucksShortcode("inlineTwoImages", inlineTwoImagesShortcode);

  // splitSections function
  eleventyConfig.addNunjucksGlobal("splitSections", function(content) {
    const processedContent = nunjucksEnvironment.renderString(content, this.ctx);
    const tokens = markdownLib.parse(processedContent, {});
    let sections = [];
    let currentSection = null;
    let contentTokens = [];

    tokens.forEach(token => {
      if (token.type === "heading_open") {
        if (currentSection) {
          currentSection.content = markdownLib.renderer.render(contentTokens, markdownLib.options, {});
          sections.push(currentSection);
        }
        currentSection = { title: "", content: "" };
        contentTokens = [];
      } else if (token.type === "heading_close") {
        // Do nothing for heading_close
      } else if (token.type === "inline" && currentSection && !currentSection.title) {
        currentSection.title = token.content;
        currentSection.key = token.content.toLowerCase().replace(/\s+/g, "-");
      } else if (currentSection) {
        contentTokens.push(token);
      }
    });

    if (currentSection) {
      currentSection.content = markdownLib.renderer.render(contentTokens, markdownLib.options, {});
      sections.push(currentSection);
    }

    return sections;
  });

  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};