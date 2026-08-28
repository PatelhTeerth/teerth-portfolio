"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";

interface SafeImageProps extends Omit<ImageProps, "onError"> {
  fallbackLabel?: string;
}

export default function SafeImage({
  fallbackLabel = "Image",
  alt,
  className,
  ...props
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-[#f3f4f6] border border-border ${className ?? ""}`}
        role="img"
        aria-label={alt}
      >
        <div className="text-center px-6 py-12">
          <div className="w-12 h-12 mx-auto mb-3 rounded border border-border flex items-center justify-center">
            <svg
              className="w-5 h-5 text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
              />
            </svg>
          </div>
          <p className="text-sm text-muted">{fallbackLabel}</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
      {...props}
    />
  );
}
