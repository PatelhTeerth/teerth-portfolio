import SafeImage from "./SafeImage";
import { NarrativeImage } from "@/data/projects";

interface NarrativeImageBlockProps {
  image: NarrativeImage;
  aspectClass?: string;
  imageClassName?: string;
}

export default function NarrativeImageBlock({
  image,
  aspectClass = "aspect-[16/10]",
  imageClassName = "object-cover",
}: NarrativeImageBlockProps) {
  return (
    <figure className="mt-6">
      <div
        className={`relative overflow-hidden rounded-md border border-border bg-[#f0eeeb] ${aspectClass}`}
      >
        <SafeImage
          src={image.src}
          alt={image.alt}
          fill
          className={imageClassName}
          sizes="(max-width: 768px) 100vw, 672px"
          fallbackLabel={image.alt}
        />
      </div>
      <figcaption className="mt-2.5 text-xs text-muted leading-relaxed">
        {image.caption}
      </figcaption>
    </figure>
  );
}
