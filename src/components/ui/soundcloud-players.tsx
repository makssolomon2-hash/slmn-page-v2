"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { soundcloudProfiles } from "@/data/portfolio";

export default function SoundCloudPlayers() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="mt-8 border-t border-white/10 pt-8">
      {!loaded ? (
        <div className="flex flex-wrap items-center justify-between gap-5">
          <div>
            <p className="text-sm font-semibold text-white">Listen here</p>
            <p className="mt-2 max-w-[500px] text-xs leading-6 text-slate-400">
              Load the SoundCloud players to browse tracks and sets. SoundCloud will receive your connection; nothing plays automatically.
            </p>
          </div>
          <Button onClick={() => setLoaded(true)} size="lg" type="button" variant="outline">Load players</Button>
        </div>
      ) : (
        <>
          <div className="grid gap-4 md:grid-cols-2">
            {soundcloudProfiles.map((profile) => {
              const params = new URLSearchParams({
                url: `https://api.soundcloud.com/users/${profile.embedUserId}`,
                visual: "true",
                auto_play: "false",
                show_artwork: "true",
                color: "#00c8e8",
              });
              return (
                <iframe
                  className="h-[450px] w-full rounded-lg border border-white/10 bg-[#0b0b0b]"
                  key={profile.href}
                  loading="lazy"
                  src={`https://w.soundcloud.com/player/?${params.toString()}`}
                  title={`${profile.label} player`}
                />
              );
            })}
          </div>
          <p className="mt-4 text-xs leading-6 text-slate-400">
            If a player or track is unavailable, use the profile links above to listen on SoundCloud.
          </p>
        </>
      )}
    </div>
  );
}
