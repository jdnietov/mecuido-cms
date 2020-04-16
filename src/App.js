import React, { useEffect, useState } from 'react'
import { FirebaseContext } from 'services/firebase';

import SectionEditor from "components/SectionEditor/SectionEditor";

import './App.sass'

function App(props) {
  const { firebase } = props
  const [done, setDone] = useState(false)
  const [sections, setSections] = useState([])

  const db = firebase.database() 

  useEffect(() => {    
    db.ref().on("value", snapshot => {
      snapshot.forEach(snap => {
        const val = snap.val()
        setSections(prev => [...prev, { id: snap.key, val }])
      });
    });
  }, [db])
  
  return (
    <div className="App container">
      <h1 className="title">MeCuido CMS</h1>

      {sections.map(s => <SectionEditor section={s} />)}
    </div>
  );
}

const withContext = (Component) => {
  return (props) => (
      <FirebaseContext.Consumer>    
          {(context) => <Component {...props} firebase={context} />}
      </FirebaseContext.Consumer>
  )
}

export default withContext(App)
