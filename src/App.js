import { Layout, Menu } from 'antd'
import Main from "./components/Main";



function App() {
  return (
    <Layout>
    <Layout.Header 
      style={{position: 'fixed',
       zIndex:10,
       width: '100%',
       textAlign:'center',
       color:'whitesmoke'}}>
         Much Todo
         </Layout.Header>
      <Layout.Content
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}>
     <Main />
      </Layout.Content>
      <Layout.Footer>&copy; 2022, J Martinez.</Layout.Footer>
    </Layout>
  );
}



export default App;
