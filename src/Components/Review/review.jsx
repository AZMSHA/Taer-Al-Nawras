function Review({ pfp, name, rating, text }) {
  let filledStars = rating;
  const stars = [];
  for (let index = 1; index <= 5; index++) {
    if (filledStars) {
      stars.push(<Star key={index} filled={true} />);
      filledStars--;
      continue;
    }
    stars.push(<Star key={index} filled={false} />);
  }

  return (
    <article className="review">
      <img className="pfp" src={pfp} alt={`Review author: ${name}`} />
      <div role="p" className="name">
        {name}
      </div>
      <q className="comment">{text}</q>
      <span className="rating">{stars}</span>
    </article>
  );
}

Review.propTypes = {
  pfp: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

function Star({ filled }) {
  return (
    <img
      className="rating-star"
      src={filled ? starFilled : star}
      alt={filled ? "full star" : "no star"}
    />
  );
}

Star.propTypes = {
  filled: PropTypes.bool.isRequired,
};
