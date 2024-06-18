import { reviewModel } from "../../models";

export const Review = ({ review }: { review: reviewModel }) => {
  return (
    <div className="flex-column gap-18 productDetails--review border-bottom-gray-300">
      <div className="flex gap-24 align-items-center">
        <img src={review.img} alt={""} />
        <p>{review.name}</p>
      </div>
      <img
        className={"productDetails--review-stars"}
        src={"/reviews/stars-rating.png"}
        alt={""}
      />
      <p>{review.review}</p>
    </div>
  );
};
