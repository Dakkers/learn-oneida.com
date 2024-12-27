"use client";

import React from "react";

export default function ArticleKanuhwelatuksla() {
  return (
    <div>
      {/* @ts-expect-error TODO */}
      <read-along
        href="/audio/kanuhwelatuksla/kanuhwelatuksla-20240719041040.readalong"
        audio="/audio/kanuhwelatuksla/kanuhwelatuksla-20240719041040.wav"
        theme="light"
        language="en"
        image-assets-folder="assets/"
      >
        <span slot="read-along-header">Kanuhwelatúksla’</span>
        {/* @ts-expect-error TODO */}
      </read-along>

      <script
        type="module"
        src="https://unpkg.com/@readalongs/web-component@^1.4.0/dist/web-component/web-component.esm.js"
      />
    </div>
  );
}
