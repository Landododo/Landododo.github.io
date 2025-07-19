const path = require("path")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "content/pages", // adjust this if needed
    })

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
