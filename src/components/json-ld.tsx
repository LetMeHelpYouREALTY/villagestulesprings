type JsonLdProps = {
  data: Record<string, unknown>;
};

/** Server-rendered JSON-LD. One graph per page. */
export function JsonLd({ data }: JsonLdProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
