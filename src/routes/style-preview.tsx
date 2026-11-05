import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/style-preview")({
  head: () => ({
    meta: [
      { title: "SOPI Luxury Style Preview" },
      { name: "description", content: "Preview of the SOPI luxury card and burgundy button styles." },
      { property: "og:title", content: "SOPI Luxury Style Preview" },
      { property: "og:description", content: "Glass card and burgundy button preview." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: StylePreview,
});

function StylePreview() {
  return (
    <main className="bg-hero">
      <div className="container-page py-20">
        <p className="eyebrow">Style preview</p>
        <h1 className="mt-4 text-5xl">Luxury styling</h1>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="luxury-card p-10">
            <p className="eyebrow">Rose Valorosa</p>
            <h2 className="mt-3 text-3xl">Soft luxury glass card</h2>
            <p className="mt-4 text-muted-foreground">
              Frosted white with a faint gold border and a whisper of shadow.
            </p>
            <button className="btn-luxury-primary mt-8">Back SOPI</button>
          </div>
          <div className="luxury-card flex flex-col items-start justify-center gap-6 p-10">
            <p className="text-sm text-muted-foreground">Hover the button to see its effect.</p>
            <button className="btn-luxury-primary">View funding brief</button>
            <button className="btn-luxury-primary">Shop the range</button>
          </div>
        </div>
      </div>
    </main>
  );
}
