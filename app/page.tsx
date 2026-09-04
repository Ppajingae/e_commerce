const placeholders = Array.from({ length: 8 });

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="logo-placeholder">LOGO</div>
        <nav aria-label="주요 메뉴"><span>MENU</span><span>MENU</span><span>MENU</span></nav>
        <div className="header-actions"><div className="search-placeholder">SEARCH</div><button aria-label="장바구니">CART</button></div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <span className="line short" /><span className="line title" /><span className="line title medium" />
          <span className="line text" /><span className="line text narrow" /><button className="button-placeholder">BUTTON</button>
        </div>
        <div className="image-placeholder">IMAGE</div>
      </section>

      <section className="content-section">
        <div className="section-header"><div><span className="line short" /><span className="line heading" /></div><span className="line text section-note" /></div>
        <div className="filter-row">{Array.from({ length: 4 }).map((_, index) => <button key={index}>FILTER</button>)}</div>
        <div className="product-grid">
          {placeholders.map((_, index) => (
            <article className="product-card" key={index}>
              <div className="product-image">IMAGE</div>
              <div className="product-info"><span className="line label" /><span className="line name" /><span className="line price" /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="wide-section">
        <div className="wide-image">IMAGE</div>
        <div className="wide-copy">
          <span className="line short" /><span className="line heading" /><span className="line heading medium" />
          <span className="line text" /><span className="line text narrow" /><button className="button-placeholder">BUTTON</button>
        </div>
      </section>

      <footer>
        <div className="logo-placeholder">LOGO</div><div className="footer-lines"><span /><span /></div>
        <div className="footer-links"><span>LINK</span><span>LINK</span><span>LINK</span></div>
      </footer>
    </main>
  );
}
