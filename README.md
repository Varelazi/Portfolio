# Getting Started
In terminal: 
```bash
$ cd Desktop
$ npx create-react-app app-name
```

Getting an error saying I can't create app due to node version being too new for React. To solve:
```bash
$ nvm install 16.13.0  # Replace with the version you need
```

That should fix the issue! Once that's solved start creating app! Connecting to Github:
```bash
$ npx create-react-app app-name
$ echo "# app-name" >> README.md
$ git init
$ git add README.md
$ git commit -m "first commit"
$ git branch -M main
$ git remote add origin https://github.com/Varelazi/Portfolio.git
$ git push -u origin main
$ npm start 
```

Refresh Github! Then create branch:
```bash
$ git checkout -b branch_name
```

Start working in the branch! 
```bash
$ code .
```

## Connecting React Router Dom
Install React Router Dom:
```bash
$ npm install react-router-dom
```

Index.js should look like this:
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

This should be added into your App.js:
```js
import { Routes, Route } from "react-router-dom"

function App() {
  return(
    <>
      <Routes>
        <Route path="/pathName" element={<Component />}>
      </Routes>
    <>
  )
}

export deafult App;
```

<center>Portfolio!</center> 

#### Theme: Pixel!

# NavBar

