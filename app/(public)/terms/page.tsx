import Section from "@/components/layout/Section";

export const metadata = { title: "$page" } as const;

export default function Page() {
  return (
    <Section>
      <h1 className="text-4xl font-bold capitalize">$page</h1>
      <p className="mt-2 text-sm text-foreground/70">Last updated: TBD</p>
      <div className="mt-6 space-y-4 text-foreground/80">
        <p>This policy will be updated before launch. In the meantime, please contact us for any queries.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus sit amet ipsum posuere auctor.</p>
      </div>
    </Section>
  );
}
