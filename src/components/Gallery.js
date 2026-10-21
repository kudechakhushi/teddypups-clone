"use client";
import { useState } from "react";

export default function Gallery({ images, alt, video }) {
  const [i, setI] = useState(0);
  const go = (d) => setI((i + d + images.length) % images.length);

  return (
    <div>
      <div className="gallery-main">
        <img src={images[i]} alt={alt} />
        {images.length > 1 && (
          <>
            <button className="g-btn g-prev" onClick={() => go(-1)} aria-label="Previous photo">‹</button>
            <button className="g-btn g-next" onClick={() => go(1)} aria-label="Next photo">›</button>
          </>
        )}
        <span className="g-count">{i + 1} / {images.length}</span>
      </div>
      {images.length > 1 && (
        <div className="thumbs">
          {images.map((src, k) => (
            <button key={src} className={k === i ? "on" : ""} onClick={() => setI(k)} aria-label={`Show photo ${k + 1}`}>
              <img src={src} alt="" />
              {video && k === images.length - 1 && <span className="play">▶</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}