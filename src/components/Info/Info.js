import React, { useEffect, useState } from "react";
import { fetchNews } from "../../api/fetchAPI";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import "./Info.css";
export const Info = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const data = async () => {
      const fetchData = await fetchNews();
      setNews(fetchData);
    };
    data();
  }, []);

  console.log(news);

  return (
    <div>
      {news.map((n, i) => {
        return (
          <div key={i} className="grid-container-info">
            <Grid item component={Card} xs={12} md={10}>
              <a
                href={n.url}
                className="grid-a-info "
                target="_blank"
                rel="noopener noreferrer"
              >
                <CardContent>
                  <Typography color="textSecondary" gutterBottom align="center">
                    NOTICIA
                  </Typography>
                  <Typography color="textSecondary">{n.title}</Typography>
                  <Typography variant="body2" color="textPrimary">
                    {n.description}
                  </Typography>
                </CardContent>
              </a>
            </Grid>
          </div>
        );
      })}
    </div>
  );
};
