import { gql } from "graphql-request";
import request from "./datocms";

const API_URL = "https://graphql.datocms.com";
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

export const responsiveImageFragment = gql`
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`;
// ...responsiveImageFragment

export const getHome = async () => {
  const HomeQuery = gql`
    query HomeQuery() {
  allProjekts {
    id
    slug
    titel
    beschreibung
    bild {
      responsiveImage(imgixParams: {w: 1200}) {
        width
        webpSrcSet
        title
        srcSet
        src
        sizes
        height
        base64
        aspectRatio
        alt
      }
    }
    leistung
    stadt
    startdatum
  }
}


    ${responsiveImageFragment}
  `;
  const data = await request({
    query: HomeQuery,
    variables: {
    },
    excludeInvalid: true,
    includeDrafts: false,
  });
  return data;
};

export const getAllProjectSlugs = async () => {
  // get all project slugs for getStaticPaths
  const data = await request({
    query: gql`
      query AllProjektSlug {
        allProjekts {
          slug
        }
      }
    `,
    variables: {},
    excludeInvalid: true,
    includeDrafts: true,
  });

  const paths: { params: { slug: String; }; }[] = [];

  data.allProjekts.map((p) => {
    paths.push({ params: { slug: p.slug } });
  });

  // const paths = data.allProjects.map((slug: { slug: any }) => ({
  //   params: {
  //     slug: slug.slug,
  //   },
  // }));

  // return pathsArray;
  return paths;
};

export const getProjectBySlug = async (
  slug: string | string[],
  preview: boolean,
  locale: string
) => {
  const ProjectBySlug = gql`
    query ProjectBySlug($slug: String!) {
      
      project(filter: { slug: { eq: $slug } }) {
        title
        description
        slug
        clientname
        projecttype
        year
        liveurl
        createdAt
  
        image {
          responsiveImage(imgixParams: { auto: format, fit: crop, h: 900 }) {
            ...responsiveImageFragment
          }
        }
   
      }
    }

    ${responsiveImageFragment}
  `;

  const graphqlRequest = {
    query: ProjectBySlug,
    variables: { limit: 10, locale, slug },
    includeDrafts: preview,
    excludeInvalid: true,
  };

  return {
    subscription: preview
      ? {
        ...graphqlRequest,
        initialData: await request(graphqlRequest),
        token: process.env.NEXT_DATOCMS_API_TOKEN,
      }
      : {
        enabled: false,
        initialData: await request(graphqlRequest),
      },
  };
};


