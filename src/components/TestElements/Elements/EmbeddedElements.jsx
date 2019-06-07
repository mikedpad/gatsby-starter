import React from 'react';
import BackToTop from './BackToTop';

const EmbeddedElements = () => {
  return (
    <section id="embedded">
      <header>
        <h1>Embedded content</h1>
      </header>
      <article id="embedded__images">
        <header>
          <h1>Images</h1>
        </header>
        <div>
          <h3>
            No <code>&lt;figure&gt;</code> element
          </h3>
          <p>
            <img src="https://placekitten.com/480/480" alt="alt text" />
          </p>
          <h3>
            Wrapped in a <code>&lt;figure&gt;</code> element, no <code>&lt;figcaption&gt;</code>
          </h3>
          <figure>
            <img src="https://placekitten.com/420/420" alt="alt text" />
          </figure>
          <h3>
            Wrapped in a <code>&lt;figure&gt;</code> element, with a{` `}
            <code>&lt;figcaption&gt;</code>
          </h3>
          <figure>
            <img src="https://placekitten.com/420/420" alt="alt text" />
            <figcaption>Here is a caption for this image.</figcaption>
          </figure>
        </div>
        <footer>
          <BackToTop />
        </footer>
      </article>
      <article id="embedded__audio">
        <header>
          <h1>Audio</h1>
        </header>
        <div>
          <audio controls="">
            <track kind="captions" />
            audio
          </audio>
        </div>
        <footer>
          <BackToTop />
        </footer>
      </article>
      <article id="embedded__video">
        <header>
          <h1>Video</h1>
        </header>
        <div>
          <video controls="">
            <track kind="captions" />
            video
          </video>
        </div>
        <footer>
          <BackToTop />
        </footer>
      </article>
      <article id="embedded__canvas">
        <header>
          <h1>Canvas</h1>
        </header>
        <div>
          <canvas>canvas</canvas>
        </div>
        <footer>
          <BackToTop />
        </footer>
      </article>
      <article id="embedded__meter">
        <header>
          <h1>Meter</h1>
        </header>
        <div>
          <meter value="2" min="0" max="10">
            2 out of 10
          </meter>
        </div>
        <footer>
          <BackToTop />
        </footer>
      </article>
      <article id="embedded__progress">
        <header>
          <h1>Progress</h1>
        </header>
        <div>
          <progress>progress</progress>
        </div>
        <footer>
          <BackToTop />
        </footer>
      </article>
      <article id="embedded__svg">
        <header>
          <h1>Inline SVG</h1>
        </header>
        <div>
          <svg width="100px" height="100px">
            <circle cx="100" cy="100" r="100" fill="#1fa3ec" />
          </svg>
        </div>
        <footer>
          <BackToTop />
        </footer>
      </article>
      <article id="embedded__iframe">
        <header>
          <h1>IFrame</h1>
        </header>
        <div>
          <iframe src="/" height="300" title="Index" />
        </div>
        <footer>
          <BackToTop />
        </footer>
      </article>
    </section>
  );
};

export default EmbeddedElements;
