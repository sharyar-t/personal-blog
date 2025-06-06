"use client"

import { Button } from "./ui/button";
import { SOCIALS } from "../data";

export function SocialLinks() {
  return (
    <div className="flex gap-150">
      {SOCIALS.map((social) => (
        <Button
          key={social.href}
          variant="outline"
          size="icon"
          asChild
          >
            <a href={social.href} target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          </Button>
        )
      )}
    </div>
  );
}
