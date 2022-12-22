import type { NextPage } from 'next'
import { Layout } from '../components/Layout';
import { Pokeman } from '../components/Pokeman';

const Home: NextPage = () => {
  return (
    <Layout>
      <Pokeman />
    </Layout>
  )
}

export default Home
