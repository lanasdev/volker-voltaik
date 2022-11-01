import { gql } from "graphql-request";
import request from "./datocms";
import { responsiveImageFragment } from "lib/fragments";

const API_URL = "https://graphql.datocms.com";
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

export const getHome = async () => {
  const HomeQuery = gql`
    query Home {
      allLeistungs {
        id
        slug
        titel
        beschreibung
        bild {
          responsiveImage(imgixParams: { h: 400 }) {
            ...responsiveImageFragment
          }
        }
      }
      allProjekts {
        id
        slug
        titel
        leistung
        startdatum
        stadt
        createdAt
        bild {
          responsiveImage(imgixParams: { w: 600 }) {
            ...responsiveImageFragment
          }
        }
        beschreibung
      }
      allTestimonials {
        id
        name
        text
        stadt
        unternehmen
        datum
        createdAt
      }
    }

    ${responsiveImageFragment}
  `;
  const data = await request({
    query: HomeQuery,
    variables: {},
    excludeInvalid: false,
    includeDrafts: false,
  });
  return data;
};

export const getAllLeistungen = async () => {
  const LeistungenQuery = gql`
    {
      allLeistungs {
        slug
      }
    }
  `;
  const data = await request({
    query: LeistungenQuery,
    variables: {},
    excludeInvalid: true,
    includeDrafts: false,
  });
  return data;
};

export const getLeistung = async (slug) => {
  const LeistungQuery = gql`
    query getLeistung($slug: String) {
      leistung(filter: { slug: { eq: $slug } }) {
        id
        slug
        titel
        beschreibung
        text {
          value
          links
          blocks {
            __typename
            id
            bild {
              __typename
              id
              responsiveImage(imgixParams: { h: 600 }) {
                ...responsiveImageFragment
              }
            }
            description
          }
        }
        createdAt
        bild {
          responsiveImage(imgixParams: { w: "800" }) {
            ...responsiveImageFragment
          }
        }
      }
    }
    ${responsiveImageFragment}
  `;
  const data = await request({
    query: LeistungQuery,
    variables: { slug: slug },
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

  const paths: { params: { slug: String } }[] = [];

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
