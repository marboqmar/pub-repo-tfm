import { reviewModel } from "../../models/reviewModel.ts";

export const Review = ({ review }: { review: reviewModel }) => {
  return (
    <div className="flex-column gap-18 productDetails--review border-bottom-gray-300">
      <div className="flex gap-24 align-items-center">
        <img src={review.img} alt={""} />
        <span>{review.name}</span>
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
