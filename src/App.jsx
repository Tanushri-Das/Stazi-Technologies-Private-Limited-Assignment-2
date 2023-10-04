// import { useState } from 'react'
// import Tab from 'react-bootstrap/Tab';
// import Tabs from 'react-bootstrap/Tabs';

// import './App.css'

// function App() {
//   const [key, setKey] = useState('home');

//   return (
//     <Tabs
//       id="controlled-tab-example"
//       activeKey={key}
//       onSelect={(k) => setKey(k)}
//       className="mb-3"
//     >
//       <Tab eventKey="home" title="Home">
//         Tab content for Home
//       </Tab>
//       <Tab eventKey="profile" title="Profile">
//         Tab content for Profile
//       </Tab>
//       <Tab eventKey="contact" title="Contact">
//         Tab content for Contact
//       </Tab>
//     </Tabs>
//   )
// }

// export default App



import React from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes'
import store from './redux/store'
import './App.css'

const App = () => {
  return (
    <Provider store={store}>
    <RouterProvider router={routes} />
  </Provider>

  )
}

export default App