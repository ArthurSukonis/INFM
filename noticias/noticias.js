import { categories, stories } from './data.js';

const publishedStories = stories
  .filter((story) => story.status === 'published')
  .sort((first, second) => new Date(second.publishedAt) - new Date(first.publishedAt));
const latestDate = publishedStories[0]?.publishedAt;
const featuredStory = publishedStories.find((story) => story.featured && story.publishedAt === latestDate)
  || publishedStories[0];
const pageSize = 6;
let activeCategory = 'Todas';
let visibleCount = pageSize;
let searchTerm = '';

const formatDate = (date) => new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
}).format(new Date(`${date}T12:00:00Z`));

function createImage(story) {
  const image = document.createElement('img');
  image.src = story.image;
  image.alt = story.imageAlt;
  image.loading = 'lazy';
  image.dataset.imageType = story.imageType;
  image.addEventListener('error', () => image.closest('.story-card__image, .featured-story__image')?.classList.add('image-unavailable'), { once: true });
  return image;
}

function createStoryCard(story) {
  const card = document.createElement('article');
  card.className = 'story-card';
  const imageLink = document.createElement('a');
  imageLink.className = 'story-card__image';
  imageLink.href = `./${story.slug}/`;
  imageLink.setAttribute('aria-label', `Abrir notícia: ${story.title}`);
  imageLink.append(createImage(story));

  const body = document.createElement('div');
  body.className = 'story-card__body';
  const category = document.createElement('span');
  category.className = 'story-category';
  category.textContent = story.category;
  const heading = document.createElement('h3');
  const titleLink = document.createElement('a');
  titleLink.href = imageLink.href;
  titleLink.textContent = story.title;
  heading.append(titleLink);
  const summary = document.createElement('p');
  summary.className = 'story-card__summary';
  summary.textContent = story.summary;
  const meta = document.createElement('div');
  meta.className = 'story-meta';
  meta.textContent = formatDate(story.publishedAt);
  const readLink = document.createElement('a');
  readLink.className = 'story-card__read';
  readLink.href = imageLink.href;
  readLink.textContent = 'Ler notícia';
  body.append(category, heading, summary, meta, readLink);
  card.append(imageLink, body);
  return card;
}

function matchesFilters(story) {
  const normalizedSearch = searchTerm.toLocaleLowerCase('pt-BR');
  const matchesCategory = activeCategory === 'Todas' || story.category === activeCategory;
  const searchable = `${story.title} ${story.summary} ${story.category}`.toLocaleLowerCase('pt-BR');
  return matchesCategory && searchable.includes(normalizedSearch);
}

const results = document.querySelector('#news-results');
const resultCount = document.querySelector('#news-result-count');
const loadMore = document.querySelector('#news-load-more');

function renderStories() {
  const matches = publishedStories.filter((story) =>
    matchesFilters(story) && (story.id !== featuredStory?.id || activeCategory !== 'Todas' || searchTerm)
  );
  results.replaceChildren();
  if (!matches.length) {
    const empty = document.createElement('p');
    empty.className = 'news-empty';
    empty.textContent = searchTerm || activeCategory !== 'Todas'
      ? 'Nenhuma notícia publicada corresponde a esta busca ou categoria.'
      : 'Ainda não há notícias publicadas nesta seção.';
    results.append(empty);
  } else {
    matches.slice(0, visibleCount).forEach((story) => results.append(createStoryCard(story)));
  }
  resultCount.textContent = `${matches.length} ${matches.length === 1 ? 'notícia' : 'notícias'}`;
  loadMore.hidden = visibleCount >= matches.length;
}

function renderFeatured() {
  if (!featuredStory) return;
  const image = document.querySelector('#featured-image');
  const category = document.querySelector('#featured-category');
  const title = document.querySelector('#featured-title');
  const summary = document.querySelector('#featured-summary');
  const date = document.querySelector('#featured-date');
  const link = document.querySelector('#featured-link');
  image.replaceChildren(createImage(featuredStory));
  image.firstElementChild.loading = 'eager';
  category.textContent = featuredStory.category;
  title.textContent = featuredStory.title;
  summary.textContent = featuredStory.summary;
  date.textContent = formatDate(featuredStory.publishedAt);
  link.href = `./${featuredStory.slug}/`;
}

function renderCategoryButtons() {
  const container = document.querySelector('#news-categories');
  ['Todas', ...categories].forEach((categoryName) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'news-category-button';
    button.textContent = categoryName;
    button.setAttribute('aria-pressed', String(categoryName === activeCategory));
    button.addEventListener('click', () => {
      activeCategory = categoryName;
      visibleCount = pageSize;
      container.querySelectorAll('button').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      renderStories();
    });
    container.append(button);
  });
}

renderFeatured();
renderCategoryButtons();
renderStories();

document.querySelector('#news-search').addEventListener('submit', (event) => {
  event.preventDefault();
  searchTerm = document.querySelector('#news-search-input').value.trim();
  visibleCount = pageSize;
  renderStories();
});

document.querySelector('#news-search-input').addEventListener('input', (event) => {
  searchTerm = event.currentTarget.value.trim();
  visibleCount = pageSize;
  renderStories();
});

loadMore.addEventListener('click', () => {
  visibleCount += pageSize;
  renderStories();
});