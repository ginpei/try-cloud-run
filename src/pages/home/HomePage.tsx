import Head from "next/head";
import { Container } from "../../lib/alignment/Container";
import { VStack } from "../../lib/alignment/VStack";

export interface HomePageProps {
}

export function HomePage({ }: HomePageProps): JSX.Element {
  return (
    <div className="HomePage">
      <Head>
        <title>Home Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <VStack>
          <h1 className="text-4xl font-bold">Home Page</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et maxime suscipit consectetur officia non in rerum quas aut beatae fuga debitis eligendi, nesciunt aperiam soluta aliquid rem ex vitae officiis.</p>
        </VStack>
      </Container>
    </div>
  );
}
