"use client";

import { Star } from "lucide-react";

interface Review {
  id: number;
  rating: number;
  comment: string;
  name: string;
  role: string;
}

const reviews: Review[] = [
  {
    id: 1,
    rating: 5,
    comment:
      '"The configurator is unreal. Our entire roster designed their own warm-ups in one afternoon."',
    name: "Atif Islam",
    role: "Eastside HS Basketball",
  },
  {
    id: 2,
    rating: 5,
    comment:
      '"Wool body, leather sleeves, chenille patches exactly how a varsity jacket should feel."',
    name: "Sanjay M.",
    role: "Captain, TRACK",
  },
  {
    id: 3,
    rating: 5,
    comment:
      '"Bulk ordering was painless. 80 uniforms, every name and number correct."',
    name: "Emma L.",
    role: "Athletics Director",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto container px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl mb-10">
          Reviews
        </h2>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-secondary rounded-3xl p-8 flex flex-col justify-between min-h-[240px]"
            >
              <div>
                {/* Star Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                {/* Review Comment */}
                <p className="text-muted-foreground font-normal leading-relaxed text-[15px] mb-6">
                  {review.comment}
                </p>
              </div>

              {/* Reviewer Details */}
              <div>
                <h4 className="font-semibold text-foreground text-base">
                  {review.name}
                </h4>
                <p className="text-muted-foreground text-sm mt-0.5">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
