import { gql } from "@apollo/client";
import client from "client";
import { CleanAndTransformBlocks } from "utils/CleanAndTransformBlocks";
import { BlockRenderer } from "components/BlockRenderer";

export default function Home(props) {
  console.log("Props:", props);
  return <div>Next JS &amp; WordPress Course</div>;
}

export const getStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query NewQuery {
        nodeByUri(uri: "/") {
          ... on Page {
            id
            blocks(postTemplate: false)
          }
        }
      }
    `,
  });

  return {
    props: {
      blocks: data.nodeByUri.blocks,
      myexampleprop: "test",
    },
  };
};
