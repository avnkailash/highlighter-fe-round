import React from 'react';
import './App.css';
import NewsList from './components/NewsList/NewsList';
import News from './components/News/News'

function App() {

  const [newsFlag, setNewsFlag] = React.useState(false);
  const [activeNews, setActiveNews] = React.useState(0);
  const [newsList, setNews] = React.useState([]);

  React.useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=598978409cd24daf98b37dfa07ff6bdb')
    .then(response => response.json())
    .then(data => {
      setNews(data.articles);

    });
  });

  const closeNews = id => {
    const newData = newsList.map((news, index) => {
      if (id === index) {
        news.flag = false;
      }
      return news;
    });

    setNews(newData);
    setNewsFlag(false);
  }

  const showNews = id => {
    const newData = newsList.map((news, index) => {
      if (id === index) {
        news.flag = true;
      }
      return news;
    });

    setActiveNews(id);
    setNews(newData);
    setNewsFlag(true);
  };

  return (
    <div className="App">
      <h1>News List</h1>
      { !newsFlag && newsList.map((news, index) => <NewsList news={news} key={index} id={index} showNews={showNews}/>)}
      { newsFlag && <News news={newsList[activeNews]} closeNews={closeNews}/>}

    </div>
  );
}

export default App;
