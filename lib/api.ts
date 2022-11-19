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
          responsiveImage(imgixParams: { auto: format, h: 400 }) {
            ...responsiveImageFragment
          }
        }
      }
      allProjects {
        id
        slug
        title
        description
        projecttyp
        power
        startdate
        city
        createdAt
        image {
          responsiveImage(imgixParams: { auto: format, h: 1920, w: 1280 }) {
            ...responsiveImageFragment
          }
        }
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
    includeDrafts: true,
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
              responsiveImage(
                imgixParams: { auto: format, h: 600, ar: "3/2" }
              ) {
                ...responsiveImageFragment
              }
            }
            description
          }
        }
        createdAt
        bild {
          responsiveImage(imgixParams: { auto: format, w: 800 }) {
            ...responsiveImageFragment
          }
        }
        beispielprojekte {
          id
          slug
          title
          description
          projecttyp
          power
          startdate
          city
          image {
            responsiveImage(imgixParams: { auto: format, fit: crop, h: 700 }) {
              ...responsiveImageFragment
            }
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

//  Projekte
//
//

export const getAllProjects = async () => {
  // get all project slugs for getStaticPaths
  const data = await request({
    query: gql`
      {
        allProjects {
          slug
        }
      }
    `,
    variables: {},
    excludeInvalid: true,
    includeDrafts: true,
  });

  return data;
};

export const getProjects = async () => {
  const data = await request({
    query: gql`
      query allProjects {
        allProjects {
          id
          slug
          title
          description
          projecttyp
          power
          startdate
          city
          image {
            responsiveImage(imgixParams: { auto: format, fit: crop, h: 700 }) {
              ...responsiveImageFragment
            }
          }
        }
      }
      ${responsiveImageFragment}
    `,
    variables: {},
    excludeInvalid: true,
    includeDrafts: true,
  });

  return data;
};

export const getProject = async (slug: string | string[], preview: boolean) => {
  const ProjectBySlug = gql`
    query ProjectBySlug($slug: String!) {
      project(filter: { slug: { eq: $slug } }) {
        id
        slug
        title
        description
        projecttyp
        power
        startdate
        city
        image {
          responsiveImage(imgixParams: { auto: format, fit: crop, h: 700 }) {
            ...responsiveImageFragment
          }
        }
      }
    }

    ${responsiveImageFragment}
  `;

  const graphqlRequest = {
    query: ProjectBySlug,
    variables: { limit: 10, slug },
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

export const getAbout = async () => {
  const AboutQuery = gql`
    query About {
      allTeammembers {
        id
        name
        titel
        image {
          responsiveImage(imgixParams: { auto: format, w: 256, ar: "3:2" }) {
            ...responsiveImageFragment
          }
        }
      }
    }
    ${responsiveImageFragment}
  `;
  const data = await request({
    query: AboutQuery,
    variables: {},
    excludeInvalid: true,
    includeDrafts: true,
  });
  return data;
};

export const getLayout = async () => {
  const LayoutQuery = gql`
  allProjects(first:3) {
    slug
    title
  }
  allLeistungs( first: 3 ){
    slug
    titel
  }
  `;
  const data = await request({
    query: LayoutQuery,
    variables: {},
    excludeInvalid: true,
    includeDrafts: true,
  });
  return data;
};

// Open Jobs
export const getKarriere = async (preview: boolean) => {
  const KarriereQuery = gql`
    query getKarriere {
      karriere {
        title
        content {
          links
          value
        }
        image {
          responsiveImage(imgixParams: { auto: format }) {
            ...responsiveImageFragment
          }
        }
      }
      allJobs {
        title
        description
        slug
        content {
          links
          value
        }
        location
        updatedAt
      }
    }
    ${responsiveImageFragment}
  `;
  const graphqlRequest = {
    query: KarriereQuery,
    variables: {},
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

// export const getAllJobs = async (preview: boolean) => {
//   const JobsQuery = gql`
//     query Jobs {
//       allJobs {
//         slug
//       }
//     }
//   `;
//   const data = await request({
//     query: JobsQuery,
//     variables: {},
//     excludeInvalid: true,
//     includeDrafts: true,
//   });
//   return data;
// };
