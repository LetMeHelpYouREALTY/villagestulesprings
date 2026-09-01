import { youtubeEmbedUrl, type HeartlandPlan } from "@/data/heartland-cottages";

type YoutubePlanTourProps = {
  plan: HeartlandPlan;
};

export function YoutubePlanTour({ plan }: YoutubePlanTourProps) {
  return (
    <figure className="overflow-hidden rounded-lg border border-navy-200/20 bg-navy-900">
      <div className="relative aspect-video">
        <iframe
          title={plan.videoTitle}
          src={youtubeEmbedUrl(plan.videoId)}
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <figcaption className="bg-navy-800 px-4 py-3 font-sans text-sm text-cream-200">
        {plan.planLabel} model video tour. Photos and video show the model plan. Actual lot finishes may vary.
      </figcaption>
    </figure>
  );
}
