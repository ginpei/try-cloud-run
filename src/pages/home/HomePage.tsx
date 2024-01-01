import Head from "next/head";

export interface HomePageProps {
}

export function HomePage({}: HomePageProps): JSX.Element {
  return (
    <div className="HomePage">
      <Head>
        <title>HomePage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      HomePage
    </div>
  );
}
