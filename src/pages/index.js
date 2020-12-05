import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const query = graphql`
{
  file(relativePath: {eq: "wasp-hero.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Index = () => {
  const data = useStaticQuery(query)
  return (
    <>
      <h1>Home</h1>
      <div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </div>
    </>
  )
}

export default Index