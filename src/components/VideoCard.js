import React from "react";
import "../css/videoCard.css";
import TextTruncate from "react-text-truncate";
import { ThumbUpSharp } from "@material-ui/icons";

const base_url = "https://image.tmdb.org/t/p/original/";

function VideoCard({ movie }) {
  return (
    <div className="video__card">
      <img
        src={`${base_url}${movie.backdrop_path || movie.poster_path}`}
        alt="Movie poster"
      />
      <div className="card__text">
        <TextTruncate
          line={2}
          element="p"
          truncateText="...."
          text={movie.overview}
        />
        <TextTruncate
          line={2}
          element="h2"
          truncateText=""
          text={movie.title || movie.original_name}
        />

        <p className="videoCard__stats">
          {movie.media_types && `${movie.media_types} .`}
          {movie.release_date || movie.first_air_date}.
          <ThumbUpSharp /> {movie.vote_count} Likes
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
