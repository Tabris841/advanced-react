import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import storeProvider from './storeProvider';

const style = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  date: {
    fontSize: '0.85em',
    color: '#888',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  }
};

const dateDisplay = (dateString) => new Date(dateString).toDateString();

class Article extends PureComponent {
  render() {
    const { article, author } = this.props;

    return (
      <div style={style.article}>
        <div style={style.title}>{article.title}</div>
        <div style={style.date}>
          {dateDisplay(article.date)}
        </div>
        <div style={style.author}>
          <a href={author.website}>
            {author.firstName} {author.lastName}
          </a>
        </div>
        <div style={style.body}>{article.body}</div>
      </div>
    );
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })
};

function extraProps(store, originalProps) {
  return {
    author: store.lookupAuthor(originalProps.article.authorId),
  };
}

export default storeProvider(extraProps)(Article);