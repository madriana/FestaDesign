import './App.scss';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { SurveyCollector } from './SurveyCollector';
import { SurveyEditor } from './SurveyEditor';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={SurveyCollector} />
      <Route path="/editor/" component={SurveyEditor} />
    </Router>
  );
}

export default App;
