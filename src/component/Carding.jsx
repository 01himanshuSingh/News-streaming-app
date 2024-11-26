import React from 'react'

function Carding({ data }) {
    const truncateText = (text, limit) => {
        if (text.length > limit) {
          return text.substring(0, limit) + '...';
        }
        return text;
      };
  return (
    <div className="row">
    {data.map((current, index) => (
      <div className="col-md-4" key={index}>
        <div className="card" style={{ width: '18rem', margin: '10px' }}>
          <img
            className="card-img-top"
            src={current.urlToImage}
            alt="Card image cap"
          />
          <div className="card-body">
            <a className="card-title">{current.title}</a>
            <p className="card-text">{truncateText(current.description, 50)}</p>
            <a href={current.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
  Go somewhere
</a>

          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Carding