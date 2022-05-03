export async function getStaticProps() {
  const d = new Date();
  let time = d.getTime();

  return {
    props: {
      time,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}

export default function Blog({ time }) {
  return <ul>The time is {time}</ul>;
}
