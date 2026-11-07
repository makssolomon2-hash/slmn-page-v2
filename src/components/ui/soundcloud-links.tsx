import { buttonVariants } from "@/components/ui/button";
import { ArrowIcon, SocialIcon } from "@/components/ui/icons";
import { soundcloudProfiles } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export default function SoundCloudLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {soundcloudProfiles.map((profile) => (
        <a
          aria-label={`${profile.label} (opens in a new tab)`}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }), "gap-3")}
          href={profile.href}
          key={profile.href}
          rel="noreferrer"
          target="_blank"
        >
          <span className="size-5"><SocialIcon kind="soundcloud" /></span>
          {profile.shortLabel}
          <ArrowIcon diagonal className="size-4" />
        </a>
      ))}
    </div>
  );
}
