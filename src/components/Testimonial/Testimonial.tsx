import React, { FC } from "react";
import quotesIMG from "../../assets/images/icons/quotes.svg";

interface TestimonialProps {
  message: string;
  name: string;
  position: string;
  image: string;
}

const Testimonial: FC<TestimonialProps> = ({
  image,
  message,
  name,
  position,
}) => {
  return (
    <div className="feedback__testimonial">
      <img
        src={quotesIMG}
        alt="quotes"
        className="feedback__testimonial-decoration"
      />
      <p className="feedback__testimonial-message">{message}</p>
      <div className="feedback__testimonial-author">
        <img
          src={image}
          alt={name}
          className="feedback__testimonial-author-image"
        />
        <div className="feedback__testimonial-author-about">
          <div className="feedback__testimonial-author-name">{name}</div>
          <div className="feedback__testimonial-author-position">
            {position}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
