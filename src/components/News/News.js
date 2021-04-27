import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const News = props => {
    return (
      <div>
        <h1>{props.news.title}</h1>
        <img src={props.news.urlToImage} alt={props.news.title}/>
        <p>{props.news.content}</p>

        {/* <input type="button" value="Close News" onClick={props.closeNews} /> */}
        <FontAwesomeIcon icon={faArrowLeft} onClick={props.closeNews} size="6x" border/>
      </div>
    );
  };

  export default News;