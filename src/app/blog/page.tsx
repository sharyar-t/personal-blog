import { Separator } from "@/components/ui/separator";

export default function Blog() {
  return (
    <div>
      <div>
        <h1 className="text-preset-2">Blog</h1>
        <p className="text-preset-7">Below are all my recent blog posts. Click on any title to read the full article.</p>
      </div>
      <Separator className="mt-6 mb-5" />
    </div>
  );
}
