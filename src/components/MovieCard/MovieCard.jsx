import './MovieCard.scss'
import {Image} from "minista";
import Badge from "@/components/Badge";
import RatingView from "@/components/RatingView";

const MovieCard = (props) => {
  const {
    title,
    imgSrc,
    duration,
    views,
    season,
    released,
    rating,
    href = '/movie',
  } = props

  return (
    <a
      className="movie-card"
      href={href}
      title={title}
    >
      <h3 className="visually-hidden">{title}</h3>
      <Image
        className="movie-card__image"
        src={imgSrc}
      />
      <div className="movie-card__body">
        {duration && (
          <Badge
            className="movie-card__duration-badge"
            iconName="clock"
            iconAriaLable="Duration"
            hasFillIcon
          >{duration}</Badge>
        )}

        {rating && (
          <Badge className="movie-card__rating-badge">
            <RatingView {...rating}/>
          </Badge>
        )}

        {views && (
          <Badge
            className="movie-card__views-badge"
            iconName="eye"
            iconAriaLable="Views"
            hasFillIcon
          >{views}</Badge>
        )}
        {season && (
          <Badge
            className="movie-card__season-badge"
            iconName="season"
            iconAriaLable="Season"
            hasFillIcon
          >{season}</Badge>
        )}
        {released && (
          <Badge className="movie-card__released-badge">
            Released at
            <time className="movie-card__released-badge-label" dateTime={released.dateTime}>
              {released.label}
            </time>
          </Badge>
        )}

      </div>
    </a>
  )
}

export default MovieCard