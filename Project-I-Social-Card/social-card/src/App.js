import React from 'react';
import './App.css';

import Header from './components/HeaderComponents/HeaderContainer';
import CardContent from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div>
      {/* <h3>Welcome to React Social Card!</h3>
      <p>
        Begin by exploring the `components` directory. You'll notice we have a
        few files that we've already included in there to get you started right
        away building components. You'll need to make sure you include your
        components that you build in this file to watch your app come to life
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p> */}
      <Header 
        url = "https://avatars2.githubusercontent.com/u/13279523?s=460&v=4" 
        displayName = "Xander Jake de los Santos" 
        userName = "xanderjakeq" 
        day = "11"
        month = "Feb"
        content = "Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!"/>

      <CardContent 
        url = "https://avatars2.githubusercontent.com/u/13279523?s=460&v=4"
        title = "Get Started with React"
        paragraph = "React makes it painless to create interactive UIs. Design simple views for each state in your application."
        link = "reactjs.org"/>

    </div>
  );
};

export default App;
