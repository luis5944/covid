import React, { useEffect, useState } from "react";
import { fetchNews } from "../../api/fetchAPI";

import "./Info.css";
export const Info = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const data = async () => {
      const fetchData = await fetchNews();
      setNews(fetchData);
      console.log(fetchData);
    };
    data();
  }, []);

  return (
    <div>
      {news.map((n, i) => {
        return (
          <div className="col s12 m6 l4" key={i}>
            <div className="card">
              {n.image ? (
                <div className="card-image imagen_a">
                  <img src={n.image} alt={n.title} />
                  <span className="card-title">{n.source.name}</span>
                </div>
              ) : null}

              <div className="card-content">
                <h3>{n.title}</h3>
                <p>{n.description}</p>
              </div>
              <div className="card-action">
                <a
                  href={n.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="waves-effect waves-light btn"
                >
                  Ver noticia completa
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
