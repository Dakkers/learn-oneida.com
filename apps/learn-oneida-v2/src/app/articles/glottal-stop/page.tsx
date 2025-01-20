import React from "react";
import { GlottalStopArticle } from "~/components/articles/GlottalStop";

import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Glottal Stop",
  description: "Glottal stops in Oneida",
};

export default function ArticlesGlottalStop() {
  return (
    <PageWrapper>
      <GlottalStopArticle />
    </PageWrapper>
  );
}
