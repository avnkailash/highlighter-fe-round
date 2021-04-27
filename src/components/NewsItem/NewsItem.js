import './NewsItem.css';

const NewsItem = props => {
    return (
      <div className="card" onClick={() => props.showNews(props.id)}>
          <div className="container">
            <h4>{props.news.title}</h4>
            <img src={props.news.urlToImage} alt={props.news.title} className="newsImage"/>
            <p>{props.news.description}</p>
          </div>



      </div>
    );
  };

export default NewsItem;