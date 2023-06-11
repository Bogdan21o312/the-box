import {headers} from "next/headers";

export default function Home() {
  const headersList = headers();
  const userAgent = headersList.get('user-agent');
  let isMobileView = userAgent!.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  );

  return (
    <main>
      <h1>Using Next.js headers API</h1>
      <h2>{isMobileView ? 'You are using a mobile device.' : 'You are using a PC.'}</h2>
    </main>
  )
}
