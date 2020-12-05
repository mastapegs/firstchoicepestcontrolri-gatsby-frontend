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
  const { file: { childImageSharp: { fluid: waspFluid } } } = useStaticQuery(query)
  return (
    <>
      <h1>Home</h1>
      <div>
        <Img fluid={waspFluid} />
      </div>
    </>
  )
}

export default Index