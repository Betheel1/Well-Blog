
import { useState } from "react";
import "./App.css";

const articles = [
  {
    id: 1,
    title: "Small Habits, Big Changes: Your Guide to Daily Wellness",
    category: "Healthy Living",
    date: "October 24, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=85",
    description:
      "Discover simple, sustainable habits that can help you feel more balanced, energized, and connected to yourself.",
    featured: true,
  },
  {
    id: 2,
    title: "Nourish Your Body with Simple, Wholesome Foods",
    category: "Nutrition",
    date: "October 20, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=900&q=85",
    description:
      "Explore colorful, nourishing meals and practical ways to build a healthier relationship with food.",
  },
  {
    id: 3,
    title: "Find Your Calm: Everyday Mindfulness Practices",
    category: "Mental Wellness",
    date: "October 17, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=85",
    description:
      "Make space for yourself with gentle breathing exercises and mindful moments throughout your day.",
  },
  {
    id: 4,
    title: "Gentle Movement for a Stronger, Happier You",
    category: "Fitness",
    date: "October 13, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=85",
    description:
      "Discover approachable movement ideas that help you build strength, flexibility, and consistency.",
  },
  {
    id: 5,
    title: "Create a Bedtime Routine That Helps You Unwind",
    category: "Sleep",
    date: "October 9, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1511295742362-92c96b8c7b8d?auto=format&fit=crop&w=900&q=85",
    description:
      "Wind down with a relaxing evening routine and create a bedroom environment that supports restful sleep.",
  },
  {
    id: 6,
    title: "Bring More Nature into Your Everyday Life",
    category: "Healthy Living",
    date: "October 5, 2026",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=85",
    description:
      "Reconnect with the outdoors through small, meaningful moments in nature, even on your busiest days.",
  },
];

const categories = [
  { name: "All", icon: "✳", description: "A little of everything" },
  { name: "Nutrition", icon: "❋", description: "Eat well, feel well" },
  { name: "Mental Wellness", icon: "☼", description: "Care for your mind" },
  { name: "Fitness", icon: "↗", description: "Move with intention" },
  { name: "Sleep", icon: "☾", description: "Rest and recharge" },
  { name: "Healthy Living", icon: "❧", description: "Everyday balance" },
];

function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const featuredArticle = articles[0];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      activeCategory === "All" || article.category === activeCategory;

    const searchText =
      `${article.title} ${article.category} ${article.description}`.toLowerCase();

    const matchesSearch = searchText.includes(search.toLowerCase().trim());

    return matchesCategory && matchesSearch;
  });

  const showArticles = () => {
    setSelectedArticle(null);
    setMenuOpen(false);
    document.getElementById("articles")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const resetHome = () => {
    setActiveCategory("All");
    setSearch("");
    setSelectedArticle(null);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="site-wrapper">
      <div className="announcement">
        <span className="announcement-leaf">✳</span>
        A gentler approach to feeling your best.
        <span className="announcement-leaf">✳</span>
      </div>

      <header className="site-header">
        <a
          className="brand"
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            resetHome();
          }}
          aria-label="Wellness Wisdom home"
        >
          <span className="brand-icon">❧</span>
          <span className="brand-name">
            Wellness <em>Wisdom</em>
            <small>LIVE WELL, EVERY DAY</small>
          </span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`main-nav ${menuOpen ? "nav-open" : ""}`}>
          <a
            href="#home"
            onClick={(event) => {
              event.preventDefault();
              resetHome();
            }}
          >
            Home
          </a>
          <a href="#categories" onClick={() => setMenuOpen(false)}>
            Categories
          </a>
          <a href="#articles" onClick={() => setMenuOpen(false)}>
            Articles
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            Our Philosophy
          </a>
          <button className="nav-search-button" onClick={() => {
            setMenuOpen(false);
            document.getElementById("article-search")?.focus();
            document.getElementById("articles")?.scrollIntoView({
              behavior: "smooth",
            });
          }}>
            <span aria-hidden="true">⌕</span> Explore
          </button>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              YOUR SPACE TO BLOOM
            </div>

            <h1>
              A healthier life
              <br />
              starts with <em>you.</em>
            </h1>

            <p className="hero-description">
              Thoughtful guidance, everyday inspiration, and simple ways to
              nurture your mind, body, and soul.
            </p>

            <button className="primary-button" onClick={showArticles}>
              Discover your wellness <span>↗</span>
            </button>

            <div className="hero-note">
              <span className="hero-note-icon">✳</span>
              Small steps. Meaningful change.
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img
                src={featuredArticle.image}
                alt="A peaceful wellness and mindful movement practice"
              />
            </div>
            <div className="floating-note">
              <span className="floating-note-icon">❧</span>
              <span>
                <strong>Make room for you.</strong>
                <small>Your well-being matters.</small>
              </span>
            </div>
            <span className="hero-decoration hero-decoration-one">✳</span>
            <span className="hero-decoration hero-decoration-two">✿</span>
          </div>
        </section>

        <section className="values-strip" aria-label="Our values">
          <div><span>❧</span> Mindful living</div>
          <span className="value-divider">✳</span>
          <div><span>♡</span> Everyday nourishment</div>
          <span className="value-divider">✳</span>
          <div><span>☼</span> Whole-person wellness</div>
        </section>

        <section className="categories-section section-container" id="categories">
          <div className="section-heading">
            <div>
              <div className="eyebrow">FIND YOUR FOCUS</div>
              <h2>Explore by <em>interest.</em></h2>
            </div>
            <p>
              Wherever you are on your wellness journey, there's a place to
              begin.
            </p>
          </div>

          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category.name}
                className={`category-card ${
                  activeCategory === category.name ? "category-active" : ""
                }`}
                onClick={() => {
                  setActiveCategory(category.name);
                  setSelectedArticle(null);
                  showArticles();
                }}
              >
                <span className="category-icon">{category.icon}</span>
                <strong>{category.name}</strong>
                <small>{category.description}</small>
              </button>
            ))}
          </div>
        </section>

        <section className="featured-section">
          <div className="featured-inner">
            <div className="featured-image">
              <img
                src={featuredArticle.image}
                alt="A calm setting for wellness and mindful living"
                loading="lazy"
              />
              <span className="image-label">EDITOR'S PICK</span>
            </div>

            <div className="featured-content">
              <div className="eyebrow">A MOMENT FOR YOURSELF</div>
              <p className="article-category">{featuredArticle.category}</p>
              <h2>{featuredArticle.title}</h2>
              <p className="featured-description">
                {featuredArticle.description}
              </p>
              <div className="article-meta">
                <span>{featuredArticle.date}</span>
                <span className="meta-dot">•</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              <button
                className="text-button"
                onClick={() => setSelectedArticle(featuredArticle)}
              >
                Read the story <span>→</span>
              </button>
            </div>
          </div>
        </section>

        <section className="articles-section section-container" id="articles">
          <div className="section-heading articles-heading">
            <div>
              <div className="eyebrow">THE WELLNESS JOURNAL</div>
              <h2>A little inspiration for <em>every day.</em></h2>
            </div>
            <span className="article-count">
              {filteredArticles.length}{" "}
              {filteredArticles.length === 1 ? "story" : "stories"}
            </span>
          </div>

          <div className="article-tools">
            <div className="search-box">
              <span aria-hidden="true">⌕</span>
              <input
                id="article-search"
                type="search"
                placeholder="Search topics, stories, or ideas..."
                value={search}
                onChange={(event) => {
                  setSearch(event.target.value);
                  setSelectedArticle(null);
                }}
                aria-label="Search articles"
              />
              {search && (
                <button
                  className="clear-search"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="filter-list" aria-label="Filter articles by category">
              {categories.map((category) => (
                <button
                  key={category.name}
                  className={`filter-chip ${
                    activeCategory === category.name ? "filter-active" : ""
                  }`}
                  onClick={() => {
                    setActiveCategory(category.name);
                    setSelectedArticle(null);
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {selectedArticle ? (
            <article className="article-detail">
              <button
                className="text-button detail-back"
                onClick={() => setSelectedArticle(null)}
              >
                ← Back to articles
              </button>
              <img src={selectedArticle.image} alt="" />
              <div className="article-detail-body">
                <p className="article-category">{selectedArticle.category}</p>
                <h2>{selectedArticle.title}</h2>
                <div className="article-meta">
                  <span>{selectedArticle.date}</span>
                  <span className="meta-dot">•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                <p>{selectedArticle.description}</p>
                <p>
                  Wellness isn't about getting everything right. It's about
                  noticing what you need and making small, thoughtful choices
                  that support you over time.
                </p>
                <p>
                  Start with one simple step today. Give yourself time to
                  discover what feels good, stay curious, and remember that
                  progress can be gentle.
                </p>
                <p className="detail-note">
                  Take what serves you, move at your own pace, and make your
                  well-being a priority.
                </p>
              </div>
            </article>
          ) : filteredArticles.length > 0 ? (
            <div className="article-grid">
              {filteredArticles.map((article) => (
                <article className="article-card" key={article.id}>
                  <button
                    className="article-image-button"
                    onClick={() => setSelectedArticle(article)}
                    aria-label={`Read ${article.title}`}
                  >
                    <img src={article.image} alt="" loading="lazy" />
                    <span className="card-arrow">↗</span>
                  </button>
                  <div className="article-card-body">
                    <p className="article-category">{article.category}</p>
                    <button
                      className="article-title-button"
                      onClick={() => setSelectedArticle(article)}
                    >
                      <h3>{article.title}</h3>
                    </button>
                    <p className="article-description">
                      {article.description}
                    </p>
                    <div className="article-card-footer">
                      <span>{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <span>❧</span>
              <h3>No stories found just yet.</h3>
              <p>Try another search term or explore a different category.</p>
              <button
                className="primary-button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("All");
                }}
              >
                Show all articles
              </button>
            </div>
          )}
        </section>

        <section className="philosophy-section" id="about">
          <span className="philosophy-flower">✳</span>
          <div className="eyebrow">A GENTLER KIND OF WELLNESS</div>
          <h2>
            You don't have to change
            <br />
            everything to <em>feel better.</em>
          </h2>
          <p>
            We believe wellness grows from the little things: a nourishing
            meal, a quiet moment, a walk outside, and the grace to begin again.
          </p>
          <button className="philosophy-button" onClick={showArticles}>
            Find your next small step <span>→</span>
          </button>
        </section>
      </main>

      <footer className="site-footer">
        <a
          className="brand footer-brand"
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            resetHome();
          }}
        >
          <span className="brand-icon">❧</span>
          <span className="brand-name">
            Wellness <em>Wisdom</em>
            <small>LIVE WELL, EVERY DAY</small>
          </span>
        </a>
        <p>A little more balance. A little more you.</p>
        <span className="footer-copy">
          © {new Date().getFullYear()} Wellness Wisdom
        </span>
      </footer>
    </div>
  );
}

export default App;
