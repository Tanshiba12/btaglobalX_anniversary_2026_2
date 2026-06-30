import { ExternalLink, Play } from "lucide-react";
import type { VideoAsset } from "@/data/assets";
import { SafeIcon } from "./SafeIcon";

type VideoFrameProps = {
  body: string;
  ctaLabel?: string;
  title: string;
  video: VideoAsset;
};

const directVideoPattern = /\.(mp4|webm|ogg)(\?.*)?$/i;

function getEmbedUrl(src: string) {
  if (!src) {
    return "";
  }

  try {
    const url = new URL(src);
    if (url.hostname.includes("youtube.com")) {
      const id = url.searchParams.get("v");
      return id ? `https://www.youtube.com/embed/${id}` : src;
    }
    if (url.hostname.includes("youtu.be")) {
      const id = url.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}` : src;
    }
    if (url.hostname.includes("drive.google.com") && url.pathname.includes("/file/d/")) {
      const id = url.pathname.split("/file/d/")[1]?.split("/")[0];
      return id ? `https://drive.google.com/file/d/${id}/preview` : src;
    }
  } catch {
    return src;
  }

  return src;
}

export function VideoFrame({ body, ctaLabel = "Open video", title, video }: VideoFrameProps) {
  const hasSource = Boolean(video.src);
  const isDirectVideo = directVideoPattern.test(video.src);
  const embedUrl = getEmbedUrl(video.src);

  return (
    <div className="video-feature-frame" data-animate="card">
      <div className="video-feature-header">
        <span>
          <SafeIcon aria-hidden="true" icon={Play} />
          {video.label}
        </span>
        {hasSource ? (
          <a href={video.src} rel="noreferrer" target="_blank">
            {ctaLabel}
            <SafeIcon aria-hidden="true" icon={ExternalLink} />
          </a>
        ) : (
          <em>URL pending</em>
        )}
      </div>

      <div className="video-feature-screen">
        {hasSource && isDirectVideo ? (
          <video controls preload="metadata">
            <source src={video.src} />
          </video>
        ) : null}
        {hasSource && !isDirectVideo ? (
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            src={embedUrl}
            title={title}
          />
        ) : null}
        {!hasSource ? (
          <div className="video-feature-placeholder">
            <SafeIcon aria-hidden="true" icon={Play} />
            <strong>{title}</strong>
            <p>{body}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
