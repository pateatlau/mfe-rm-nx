/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function Home({ title }: { title: string }) {
  return (
    <div className="wrapper">
      <div className="container">
        <div id="welcome">
          <h1>
            Welcome to {title}!
          </h1>
          <h2>Micro Frontends in Monorepo using Nx Integrated-style repo.</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
