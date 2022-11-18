import Head from 'next/head'
import MainPage from './mainpage';

export default function Home() {


  return (
    <div>
      <Head>
        <title>유어클래스 | 코드스테이츠 학습 플랫폼</title>
        <link rel="icon" href="/img/favicon.png" />
      </Head>
      
      <MainPage />
    </div>
  )
}
