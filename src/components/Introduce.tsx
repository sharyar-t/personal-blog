"use client"

import { SocialLinks } from "./SocialLinks";

export function Introduce() {
  return (
    <div>
      <h1 className="mb-300 text-preset-2">Hi, I&apos;m Sharyar <span>👋</span></h1>
      <p className="mb-300 text-preset-7">I&apos;m on a journey to become a front-end web developer. I love building little projects, trying out new coding techniques, and sharing what I learn along the way. When I&apos;m not at my desk, you&apos;ll find me reading, hiking through the mountains, or challenging myself on rock-climbing walls.</p>
      <p className="mb-300 text-preset-7">I started this blog to document my progress, keep myself accountable, and hopefully inspire anyone else who&apos;s learning to code. Welcome to my corner of the internet, and thanks for stopping by!</p>
      <SocialLinks />
    </div>
  );
}
