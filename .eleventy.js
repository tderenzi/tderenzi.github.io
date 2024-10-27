const markdownIt = require("markdown-it");
const markdownItAttrs = require("markdown-it-attrs");

module.exports = function(eleventyConfig) {
  const markdownLib = markdownIt({ html: true }).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addShortcode("link", function(text, url) {
    const encodedUrl = encodeURI(url);
    return `<a href="${encodedUrl}" target="_blank" rel="noopener noreferrer">${text}</a>`;
  });

  // Projects collection
  eleventyConfig.addCollection("projects", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/portfolio/*.md");
  });

  eleventyConfig.addNunjucksGlobal("findSectionConfigKey", function(config, currentTitle, key) {
    // Search the config array for an object with the "title" property matching currentTitle
    const section = config.find(item => item.title === currentTitle);

    // If the section exists and the key is null, return a JSON dump of the section object
    if (section) {
        if (key === null) {
            return section;
        }

        // If the section contains the specified key, return the value of that key
        if (section.hasOwnProperty(key)) {
            return section[key];
        }
    }

    // Return null if no matching title or key is found
    return null;
});

  eleventyConfig.addNunjucksGlobal("splitSections", function(content) {
    // Parse markdown content into tokens
    const tokens = markdownLib.parse(content, {});
    let sections = [];
    let currentSection = null;
    let contentTokens = [];
  
    tokens.forEach(token => {
      if (token.type === "heading_open") {
        // Push the previous section if it exists
        if (currentSection) {
          currentSection.content = markdownLib.renderer.render(contentTokens, markdownLib.options, {});
          sections.push(currentSection);
        }
        // Start a new section
        currentSection = { title: "", content: "" };
        contentTokens = [];
      } else if (token.type === "inline" && currentSection && !currentSection.title) {
        // Set the title for the current section
        currentSection.title = token.content;
        currentSection.key = token.content.toLowerCase().replace(/\s+/g, "-");
      } else if (currentSection && ["paragraph_open", "paragraph_close", "inline", "bullet_list_open", "bullet_list_close", "list_item_open", "list_item_close"].includes(token.type)) {
        // Collect content tokens for the current section
        contentTokens.push(token);
      }
    });
  
    // Push the final section after the loop ends
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
