// ContactCard.jsx — the link-in-bio card itself. Works at any width;
// outer frame decides whether it's a phone or a desktop layout.

const ICONS = {
  phone: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  ),
  text: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.7-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.3-.7.3-1.2.2-1.4-.1-.2-.3-.3-.6-.4zM12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.5 5.3L2 22l4.8-1.5C8.4 21.5 10.2 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2z"/>
    </svg>
  ),
  map: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  star: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  starOutline: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  ),
  camera: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  ),
  upload: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="17 8 12 3 7 8"/>
      <line x1="12" y1="3" x2="12" y2="15"/>
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
  check: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  clock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  weight: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 6.5h11l2.5 13H4z"/>
      <path d="M9 6.5a3 3 0 0 1 6 0"/>
    </svg>
  ),
};

// ────────────────────────────────────────────────────────────────────
// Sub-component: photo uploader with mock estimate state machine
// ────────────────────────────────────────────────────────────────────
function PhotoUploader({ theme, compact }) {
  const [stage, setStage] = React.useState('idle'); // idle | uploading | review | sent
  const [photos, setPhotos] = React.useState([]); // {id,src}
  const [progress, setProgress] = React.useState(0);
  const fileRef = React.useRef(null);

  const addFiles = (files) => {
    const list = Array.from(files || []).slice(0, 6);
    if (!list.length) return;
    const reads = list.map(
      (f) =>
        new Promise((res) => {
          const r = new FileReader();
          r.onload = () => res({ id: Math.random().toString(36).slice(2), src: r.result });
          r.readAsDataURL(f);
        })
    );
    Promise.all(reads).then((items) => {
      setPhotos((p) => [...p, ...items].slice(0, 6));
      setStage('uploading');
      setProgress(0);
      let p = 0;
      const t = setInterval(() => {
        p += Math.random() * 22 + 8;
        if (p >= 100) {
          p = 100;
          clearInterval(t);
          setTimeout(() => setStage('review'), 300);
        }
        setProgress(p);
      }, 180);
    });
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('cc-drop-hot');
    addFiles(e.dataTransfer.files);
  };

  const reset = () => {
    setPhotos([]);
    setStage('idle');
    setProgress(0);
  };

  // mock estimate range based on a fake "spectrometer" feel
  const lo = 480 + photos.length * 35;
  const hi = lo + 220 + photos.length * 30;

  if (stage === 'idle') {
    return (
      <div
        className="cc-uploader"
        onDragOver={(e) => {
          e.preventDefault();
          e.currentTarget.classList.add('cc-drop-hot');
        }}
        onDragLeave={(e) => e.currentTarget.classList.remove('cc-drop-hot')}
        onDrop={onDrop}
        onClick={() => fileRef.current?.click()}
        role="button"
      >
        <div className="cc-uploader-glow" aria-hidden="true"></div>
        <div className="cc-uploader-inner">
          <div className="cc-uploader-icon">{ICONS.camera}</div>
          <div className="cc-uploader-eyebrow">Free instant estimate</div>
          <h3 className="cc-uploader-title">
            Snap your silver,<br />get an offer today.
          </h3>
          <p className="cc-uploader-sub">
            Drop a few photos of what you're selling. We reply with a real cash offer within the hour — no obligation, no pressure.
          </p>
          <div className="cc-uploader-cta">
            <span className="cc-uploader-btn">
              {ICONS.upload}
              Upload photos
            </span>
            <span className="cc-uploader-or">or drag &amp; drop</span>
          </div>
          <div className="cc-uploader-meta">
            <span>{ICONS.shield} Insured &amp; bonded</span>
            <span>·</span>
            <span>{ICONS.clock} Reply in &lt;1 hr, 7 days</span>
          </div>
        </div>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          multiple
          style={{ display: 'none' }}
          onChange={(e) => addFiles(e.target.files)}
        />
      </div>
    );
  }

  if (stage === 'uploading') {
    return (
      <div className="cc-uploader cc-uploader-busy">
        <div className="cc-uploader-inner">
          <div className="cc-progress-ring">
            <svg viewBox="0 0 64 64">
              <circle cx="32" cy="32" r="28" stroke="currentColor" strokeOpacity="0.15" strokeWidth="3" fill="none" />
              <circle
                cx="32"
                cy="32"
                r="28"
                stroke="currentColor"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={2 * Math.PI * 28}
                strokeDashoffset={2 * Math.PI * 28 * (1 - progress / 100)}
                transform="rotate(-90 32 32)"
                style={{ transition: 'stroke-dashoffset .2s linear' }}
              />
            </svg>
            <span>{Math.round(progress)}%</span>
          </div>
          <h3 className="cc-uploader-title">Analyzing photos</h3>
          <p className="cc-uploader-sub">
            Reading hallmarks, weighing visually, cross-checking today's spot price ({(34.21).toFixed(2)}/oz)…
          </p>
        </div>
      </div>
    );
  }

  if (stage === 'review') {
    return (
      <div className="cc-uploader cc-uploader-review">
        <div className="cc-uploader-inner">
          <div className="cc-review-eyebrow">
            <span className="cc-dot"></span> Preliminary estimate
          </div>
          <div className="cc-estimate">
            <span className="cc-estimate-currency">$</span>
            <span className="cc-estimate-lo">{lo.toLocaleString()}</span>
            <span className="cc-estimate-dash">–</span>
            <span className="cc-estimate-hi">${hi.toLocaleString()}</span>
          </div>
          <p className="cc-uploader-sub">
            Range based on {photos.length} photo{photos.length === 1 ? '' : 's'} at today's spot. A locked offer follows once we see the pieces in person — bring them in or we'll come to you.
          </p>
          <div className="cc-thumbs">
            {photos.map((p) => (
              <div key={p.id} className="cc-thumb" style={{ backgroundImage: `url(${p.src})` }}></div>
            ))}
            {photos.length < 6 && (
              <button className="cc-thumb cc-thumb-add" onClick={() => fileRef.current?.click()} aria-label="Add more">
                +
              </button>
            )}
          </div>
          <div className="cc-review-actions">
            <button className="cc-btn-primary" onClick={() => setStage('sent')}>
              Send to dealer for firm offer {ICONS.arrow}
            </button>
            <button className="cc-btn-ghost" onClick={reset}>
              Start over
            </button>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/*"
            multiple
            style={{ display: 'none' }}
            onChange={(e) => addFiles(e.target.files)}
          />
        </div>
      </div>
    );
  }

  // sent
  return (
    <div className="cc-uploader cc-uploader-sent">
      <div className="cc-uploader-inner">
        <div className="cc-sent-check">{ICONS.check}</div>
        <h3 className="cc-uploader-title">Sent to Marcus.</h3>
        <p className="cc-uploader-sub">
          You'll hear back by text within the hour. In the meantime, here's where to find us, or tap to call directly.
        </p>
        <button className="cc-btn-ghost" onClick={reset}>
          Submit another batch
        </button>
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────
// Link row
// ────────────────────────────────────────────────────────────────────
function LinkRow({ icon, label, sub, accent, badge, onClick }) {
  return (
    <button className="cc-link" onClick={onClick} type="button">
      <span className="cc-link-icon" data-accent={accent}>{icon}</span>
      <span className="cc-link-text">
        <span className="cc-link-label">{label}</span>
        {sub && <span className="cc-link-sub">{sub}</span>}
      </span>
      {badge && <span className="cc-link-badge">{badge}</span>}
      <span className="cc-link-chev">{ICONS.arrow}</span>
    </button>
  );
}

// ────────────────────────────────────────────────────────────────────
// Header (monogram + name + tagline + rating)
// ────────────────────────────────────────────────────────────────────
function CardHeader({ compact }) {
  return (
    <header className={`cc-head ${compact ? 'cc-head-compact' : ''}`}>
      <div className="cc-monogram" aria-hidden="true">
        <svg viewBox="0 0 64 64">
          <defs>
            <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--mg-1)" />
              <stop offset=".5" stopColor="var(--mg-2)" />
              <stop offset="1" stopColor="var(--mg-3)" />
            </linearGradient>
          </defs>
          <circle cx="32" cy="32" r="31" fill="url(#mg)" />
          <circle cx="32" cy="32" r="30.5" fill="none" stroke="var(--mg-stroke)" strokeWidth="0.5" />
          <text x="32" y="40" textAnchor="middle" fontFamily="'Instrument Serif', serif" fontSize="28" fill="var(--mg-text)" fontStyle="italic">
            H&amp;Co
          </text>
        </svg>
      </div>
      <h1 className="cc-name">
        Halverson <em>&amp; Co.</em>
      </h1>
      <p className="cc-tagline">Family silver buyer · Est. 1987 · Portland, OR</p>
      <div className="cc-rating">
        <span className="cc-stars">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="cc-star">{ICONS.star}</span>
          ))}
        </span>
        <span className="cc-rating-num">4.9</span>
        <span className="cc-rating-meta">· 612 Google reviews</span>
      </div>
    </header>
  );
}

// ────────────────────────────────────────────────────────────────────
// Whole card
// ────────────────────────────────────────────────────────────────────
function ContactCard({ variant = 'vault', layout = 'mobile' }) {
  const [toast, setToast] = React.useState(null);

  const showToast = (msg) => {
    setToast(msg);
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => setToast(null), 2400);
  };

  const links = [
    { icon: ICONS.phone, label: 'Call us', sub: '(503) 555-0182 · Marcus, owner', accent: 'gold', onClick: () => showToast('Calling (503) 555-0182…') },
    { icon: ICONS.text, label: 'Text for a quick quote', sub: 'Replies usually under 10 min', accent: 'sky', onClick: () => showToast('Opening Messages…') },
    { icon: ICONS.whatsapp, label: 'WhatsApp', sub: 'Send photos & chat live', accent: 'leaf', badge: 'Fastest', onClick: () => showToast('Opening WhatsApp…') },
    { icon: ICONS.map, label: 'Directions to the shop', sub: '2418 NW Quimby St · 0.5mi free parking', accent: 'rose', onClick: () => showToast('Opening Maps…') },
    { icon: ICONS.starOutline, label: 'Leave a Google review', sub: 'It really helps the family business', accent: 'gold', onClick: () => showToast('Opening Google Reviews…') },
  ];

  return (
    <div className={`cc-root cc-variant-${variant} cc-layout-${layout}`}>
      {layout === 'desktop' ? (
        <DesktopLayout links={links} variant={variant} />
      ) : (
        <MobileLayout links={links} variant={variant} />
      )}
      {toast && <div className="cc-toast">{toast}</div>}
    </div>
  );
}

function MobileLayout({ links, variant }) {
  return (
    <div className="cc-mobile">
      <div className="cc-mobile-bg" aria-hidden="true">
        <div className="cc-mobile-bg-grain"></div>
      </div>
      <div className="cc-mobile-scroll">
        <CardHeader />
        <PhotoUploader />
        <div className="cc-links">
          {links.map((l, i) => (
            <LinkRow key={i} {...l} />
          ))}
        </div>
        <FootBlock />
      </div>
    </div>
  );
}

function DesktopLayout({ links, variant }) {
  return (
    <div className="cc-desktop">
      <aside className="cc-desktop-side">
        <div className="cc-desktop-side-bg" aria-hidden="true"></div>
        <div className="cc-desktop-side-inner">
          <div className="cc-desktop-eyebrow">
            <span className="cc-dot cc-dot-live"></span>
            Open now · until 6:00 PM
          </div>
          <h2 className="cc-desktop-headline">
            We pay <em>honest</em> prices<br />for the silver in<br />your top drawer.
          </h2>
          <p className="cc-desktop-lede">
            Flatware, tea sets, coins, scrap, hollowware, sterling jewelry. Bring it in or text photos — we'll quote it the same day, pay you in cash, and you'll know exactly how we got the number.
          </p>

          <div className="cc-stats">
            <div className="cc-stat">
              <div className="cc-stat-num">39<span>yrs</span></div>
              <div className="cc-stat-lbl">Buying silver in PDX</div>
            </div>
            <div className="cc-stat-div"></div>
            <div className="cc-stat">
              <div className="cc-stat-num">$34.21</div>
              <div className="cc-stat-lbl">Today's spot, per troy oz</div>
            </div>
            <div className="cc-stat-div"></div>
            <div className="cc-stat">
              <div className="cc-stat-num">94<span>%</span></div>
              <div className="cc-stat-lbl">Of spot we pay on sterling</div>
            </div>
          </div>

          <figure className="cc-desktop-fig">
            <div className="cc-fig-frame">
              <div className="cc-fig-placeholder">
                <span>SHOP PHOTO · 2418 NW QUIMBY ST</span>
              </div>
            </div>
            <figcaption>
              <span className="cc-fig-name">Marcus Halverson</span>
              <span className="cc-fig-role">Third-generation buyer. He'll be the one weighing your pieces.</span>
            </figcaption>
          </figure>
        </div>
      </aside>

      <main className="cc-desktop-main">
        <div className="cc-mobile-bg" aria-hidden="true">
          <div className="cc-mobile-bg-grain"></div>
        </div>
        <div className="cc-desktop-card">
          <CardHeader />
          <PhotoUploader />
          <div className="cc-links">
            {links.map((l, i) => (
              <LinkRow key={i} {...l} />
            ))}
          </div>
          <FootBlock />
        </div>
      </main>
    </div>
  );
}

function FootBlock() {
  return (
    <footer className="cc-foot">
      <div className="cc-foot-hours">
        <div className="cc-foot-hours-title">Shop hours</div>
        <ul>
          <li><span>Mon – Fri</span><span>9:00 — 6:00</span></li>
          <li><span>Saturday</span><span>10:00 — 4:00</span></li>
          <li><span>Sunday</span><span>By appointment</span></li>
        </ul>
      </div>
      <div className="cc-foot-fine">
        Halverson &amp; Co. is a bonded precious-metals dealer (OR-PMD #41822). State ID required for transactions over $200.
      </div>
    </footer>
  );
}

Object.assign(window, { ContactCard });
