import './App.css';

import Header from './components/header';
import Layout from './components/layout';
import Footer from './components/footer';

const App = () => {
  return (
      <>
        <Header title="Title"
                descr="Descriprion"/>
        <Layout id="Layout1"
                title="Title"
                descr="Description"
                urlBg="urlBg"
                colorBg="colorBg"/>
        <Layout id="Layout2"
                title="Title"
                descr="Description"
                urlBg="urlBg"
                colorBg="colorBg"/>
        <Layout id="Layout3"
                title="Title"
                descr="Description"
                urlBg="urlBg"
                colorBg="colorBg"/>
        <Footer/>
      </>
  );
}
export default App;