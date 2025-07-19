import * as React from "react"
import { jsx, Box, Heading, Flex, Link as ThemeLink, Grid } from "theme-ui"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion, AnimatePresence } from "framer-motion"
// import { Box, Grid, Heading, Text } from "theme-ui"
import { Text } from "theme-ui"

// import SEO from "./seo"

const Homepage = () => {
  // Use useStaticQuery here instead of props.data
  const [activeExp, setActiveExp] = React.useState(null)

  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profile.PNG" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 200, height: 200, placeholder: BLURRED)
        }
      }
      projects: allMdx(
        filter: { frontmatter: { category: { eq: "Project" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          frontmatter {
            title
            github
            cover {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED, width: 600, placeholder: BLURRED)
              }
            }
          }
          fields {
            slug
          }
        }
      }
      fact1Image: file(relativePath: { eq: "runningcape.JPG" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, width: 500)
      }
        }
        fact2Image: file(relativePath: { eq: "hiking.jpg" }) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 500)
        }
        }
        fact3Image: file(relativePath: { eq: "mountainbike.jpg" }) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 500)
        }
        }
        evolveImage1: file(relativePath: { eq: "interns.JPG" }) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 500)
        }
        }
        evolveImage2: file(relativePath: { eq: "batterieslearn.JPG" }) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 500)
        }
        }
        researchImage1: file(relativePath: { eq: "qrgenerator1.png" }) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 500)
        }
        }
        researchImage2: file(relativePath: { eq: "qrwebsite1.png" }) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 500)
        }
        }
        researchImage3: file(relativePath: { eq: "qrgenerator2.png" }) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 500)
        }
        }
        researchImage4: file(relativePath: { eq: "qrwebsite2.png" }) {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, width: 500)
        }
        }
    }
  `)
  const experiences = [
  {
    company: "Evolve BGS",
    logo: "/evolve_logo.png",
    role: "Energy Systems Intern",
    description: "Worked on virtual power plant integration and smart load control.",
    details: [
      "Developed robust solar energy data pipelines using pandas and PostgreSQL",
      "Implemented statistical smoothing and curve fitting with scipy to model solar irradiance",
      "Engineered derived metrics such as excess and cumulative energy to enhance performance analysis",
      "Evaluated and integrated external solar radiation APIs to optimize forecasting accuracy",
      "Automated remote data acquisition and preprocessing with custom Python scripting"
    ],
    images: [
      getImage(data.evolveImage1.childImageSharp),
      getImage(data.evolveImage2.childImageSharp),
    ],
  },
  {
    company: "Tomas Palacios Group (MIT)",
    logo: "/mitlogo.png",
    role: "Undergraduate Researcher",
    description: "Created full-stack applications for sample design automation.",
    details: [
      "Generated GDSII files with spatially encoded QR codes for precise on-chip position tracking",
      "Allowed user-defined chip size, QR code dimensions, spacing, and error correction settings",
      "Included optional human-readable coordinate labels and absolute/relative positioning modes",
      "Supported both command-line and GUI workflows for flexible, user-friendly configuration",
      "Created a full stack website to display sample images associated to relative position of the QR code",
      "Supports multiple GDSII files at a time with different formats",
    ],
    images: [
      getImage(data.researchImage1.childImageSharp),
      getImage(data.researchImage2.childImageSharp),
      getImage(data.researchImage3.childImageSharp),
      getImage(data.researchImage4.childImageSharp),

    ],
    link: "https://www.youtube.com/watch?v=PEwDqPPp-_w", // <-- Add your website URL here

  },
]
  const projects = data.projects.nodes
    console.log(projects)
    console.log("Profile image data:", data.profile)

  const factsData = [
  {
    text: "I love running and am a middle-distance runner on the MIT cross country and track teams. I especially enjoy running in the mountains.",
    image: getImage(data.fact1Image),
  },
  {
    text: "I also love hiking and resetting in nature. I often go on camping trips with my family to the Rocky Mountains.",
    image: getImage(data.fact2Image),
  },
  {
    text: "I also like other active activities like mountain biking as long as I don't fall too hard...",
    image: getImage(data.fact3Image),
  },
]

  return (
    <>

      {/* Full-screen intro */}
      <Flex
        sx={{
          height: "100vh",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "background",
          px: 3,
        }}
      >
        <Heading as="h1" sx={{ fontSize: [5, 6, 7], mb: 3 }}>
          Hi, I'm Landon
        </Heading>

        <Box
          sx={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            overflow: "hidden",
            mb: 4,
          }}
        >
          <GatsbyImage
            image={getImage(data.profile.childImageSharp)}
            alt="Landon's photo"
            style={{ height: "100%", width: "100%" }}
          />
        </Box>
        <ThemeLink
          href="/resume.pdf"
          sx={{ fontSize: 2, color: "primary", textDecoration: "underline" }}
        >
          View my resume
        </ThemeLink>
      </Flex>
      {/* About me section */}
      <Box sx={{ py: 5, px: [3, 4], backgroundColor: "background" }}>
        <Heading as="h2" sx={{ mb: 4, textAlign: "center" }}>
            A Few Facts About Me
        </Heading>
        {factsData.map((fact, index) => {
            const isEven = index % 2 === 0
            return (
            <Grid
                key={index}
                columns={[1, 2]}
                sx={{
                alignItems: "center",
                gap: 4,
                flexDirection: isEven ? "row" : "row-reverse",
                mb: 5,
                }}
            >
                <motion.div
                initial={{ x: isEven ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                >
                <Text sx={{ fontSize: [2, 3], maxWidth: 500 }}>{fact.text}</Text>
                </motion.div>

                <motion.div
                initial={{ x: isEven ? 100 : -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                >
                <Box sx={{ borderRadius: 4, overflow: "hidden", boxShadow: "lg" }}>
                    <GatsbyImage image={fact.image} alt="fact image" />
                </Box>
                </motion.div>
            </Grid>
            )
        })}
        </Box>
      {/* Experience section */}
      <Box sx={{ px: [3, 4], py: [4, 5], backgroundColor: "background" }}>
        <Heading as="h2" sx={{ mb: 4, textAlign: "center" }}>
          Experience
        </Heading>
        <Grid columns={[1, 2, 3]} gap={4}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Box
                onClick={() => setActiveExp(exp)}
                sx={{
                  cursor: "pointer",
                  bg: "muted",
                  borderRadius: 4,
                  p: 3,
                  boxShadow: "md",
                  textAlign: "center",
                  height: "100%",
                  transition: "transform 0.2s",
                  ":hover": { transform: "scale(1.03)" },
                }}
              >
                <Box
                  as="img"
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  sx={{ height: 60, mb: 3 }}
                />
                <Heading as="h3" sx={{ fontSize: 3, mb: 2 }}>{exp.role}</Heading>
                <Text sx={{ fontSize: 2, color: "textSecondary" }}>{exp.company}: </Text>
                <Text sx={{ fontSize: 1, mt: 2 }}>{exp.description}</Text>
              </Box>
            </motion.div>
          ))}
        </Grid>
      </Box>

      {/* Animated Modal for Experience */}
      <AnimatePresence>
        {activeExp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
            }}
            onClick={() => setActiveExp(null)} // Close on background click
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "white",
                borderRadius: "1rem",
                padding: "2rem",
                maxWidth: "800px",
                width: "90%",
                maxHeight: "80vh",
                overflowY: "auto",
                position: "relative",
              }}
            >
              <button
                onClick={() => setActiveExp(null)}
                style={{
                  position: "absolute",
                  top: 10,
                  right: 15,
                  background: "transparent",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>

              <Heading as="h3" sx={{ mb: 3 }}>
                {activeExp.role} at {activeExp.company}
              </Heading>
              <Box as="ul" sx={{ pl: 4, mb: 3 }}>
                {activeExp.details.map((line, i) => (
                  <li key={i} style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                    {line}
                  </li>
                ))}
              </Box>
              <Grid columns={[1, 2]} gap={3} sx={{ mt: 3 }}>
                {activeExp.images.map((src, i) => (
                  <GatsbyImage
                    key={i}
                    image={src}
                    alt={`Screenshot ${i}`}
                    style={{ borderRadius: "0.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
                  />
                ))}
              </Grid>
              {activeExp.link && (
                <Box sx={{ mt: 4 }}>
                  <a
                    href={activeExp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: "1rem",
                      color: "#007acc", // or use theme colors if you prefer
                      textDecoration: "underline",
                    }}
                  >
                    View Demo
                  </a>
                </Box>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Projects section */}
<Box sx={{ px: [3, 4], py: [4, 5], backgroundColor: "muted" }}>
  <Heading as="h2" sx={{ mb: 4 }}>
    My Projects
  </Heading>
  <Grid columns={[1, 2, 3]} gap={4}>
    {projects.map((project: any) => {
      const image = getImage(project.frontmatter.cover?.childImageSharp)
      const content = (
        <Box
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            bg: "background",
            boxShadow: "lg",
            transition: "transform 0.2s",
            ":hover": { transform: "scale(1.02)" },
          }}
        >
          {image && (
            <GatsbyImage
              image={image}
              alt={project.frontmatter.title}
              style={{ height: 200 }}
            />
          )}
          <Box sx={{ p: 3 }}>
            <Heading as="h3" sx={{ fontSize: 3 }}>
              {project.frontmatter.title}
            </Heading>
          </Box>
        </Box>
      )

      // Conditional wrapper: GitHub link or internal Link
      return project.frontmatter.github ? (
        <ThemeLink
          key={project.frontmatter.title}
          href={project.frontmatter.github}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: "none", color: "text" }}
        >
          {content}
        </ThemeLink>
      ) : (
        <Link
          key={project.fields.slug}
          to={project.fields.slug}
          sx={{ textDecoration: "none", color: "text" }}
        >
          {content}
        </Link>
      )
    })}
  </Grid>
</Box>
</>
  )}
export default Homepage
