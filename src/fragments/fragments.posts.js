import { graphql } from "gatsby";

export const fragmentPosts = graphql`
    fragment FeaturedPost on WpPost {
        title
        uri
        link
        date(formatString: "DD  MMMM, YYYY")
        excerpt
        featuredImage {
            node {
                gatsbyImage(width: 1600, height: 900, layout: CONSTRAINED)
            }
        }
    }
`;
