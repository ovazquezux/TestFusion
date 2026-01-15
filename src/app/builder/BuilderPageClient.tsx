"use client";

import React from "react";
import { BuilderComponent, builder } from "@builder.io/react";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default function BuilderPageClient() {
  const [content, setContent] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    let cancelled = false;

    builder
      .get("page", {
        // IMPORTANT: match the URL you set in Builder (e.g. /builder)
        userAttributes: { urlPath: "/builder" },
      })
      .promise()
      .then((res) => {
        if (!cancelled) setContent(res);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <main style={{ padding: 24 }}>
        <p>Loading Builder content...</p>
      </main>
    );
  }

  if (!content) {
    return (
      <main style={{ padding: 24 }}>
        <h1>Builder route is alive ✅</h1>
        <p>No Builder content found for model="page" at urlPath="/builder".</p>
        <p>
          In Builder: create a <b>Page</b> with URL <b>/builder</b>, publish it, then refresh.
        </p>
      </main>
    );
  }

  return (
    <main style={{ padding: 24 }}>
      <BuilderComponent model="page" content={content} />
    </main>
  );
}