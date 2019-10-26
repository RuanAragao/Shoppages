import Layout from '../../layout';
import Navbar from '../../layout/Navbar';
import Header from '../../layout/Header';
import Config from './config';

const Index = () => (
  // Passar parametros para layout
  <Layout {...Config}>
    <Navbar {...Config} />
    <Header {...Config} />
  </Layout>
);

export default Index;