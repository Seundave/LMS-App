import request, { gql } from "graphql-request";

const MASTER_URL =
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/" +
  process.env.NEXT_PUBLIC_HYGRAPH_KEY +
  "/master";

export const getCourseList = async () => {
  const query = gql`
    query CourseList {
      courseLists {
        name
        free
        id
        totalChapters
        tag
        sourceCode
        banner {
          url
        }
      }
    }
  `;

  const result = await request(MASTER_URL, query);
  return result;
};

export const getCourseById = async (id) => {
  const query = gql`
    query course {
      courseList(where: { id: "`+id+`" }) {
        chapter {
          ... on Chapter {
            id
            name
            video {
              url
            }
            youtubeUrl
          }
        }
        description
        id
        name
        free
        totalChapters
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};