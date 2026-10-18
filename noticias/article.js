import { stories } from './data.js';

const story = stories.find((item) => item.slug === document.body.dataset.storySlug && item.status === 'published');
const content = document.querySelector('#article-content');

function addTextElement(parent, tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  element.textContent = text;
  parent.append(element);
  return element;
}

function formatDate(date) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC'
  }).format(new Date(`${date}T12:00:00Z`));
}

function renderNotFound() {
  addTextElement(content, 'h1', '', 'Notícia não encontrada');
  addTextElement(content, 'p', '', 'Esta notícia não está publicada ou não existe.');
}

function renderArticle() {
  document.title = `${story.title} | INFM`;
  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = story.summary;
  const socialMetadata = {
    'og:type': 'article',
    'og:title': story.title,
    'og:description': story.summary,
    'og:image': story.image,
    'og:url': window.location.href,
    'twitter:card': 'summary_large_image',
    'twitter:title': story.title,
    'twitter:description': story.summary,
    'twitter:image': story.image
  };
  Object.entries(socialMetadata).forEach(([property, value]) => {
    const isTwitterMetadata = property.startsWith('twitter:');
    const selector = isTwitterMetadata ? `meta[name="${property}"]` : `meta[property="${property}"]`;
    let meta = document.querySelector(selector);
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute(isTwitterMetadata ? 'name' : 'property', property);
      document.head.append(meta);
    }
    meta.content = value;
  });

  const category = addTextElement(content, 'p', 'story-category', story.category);
  category.setAttribute('aria-label', `Categoria: ${story.category}`);
  addTextElement(content, 'h1', '', story.title);
  addTextElement(content, 'p', 'article-deck', story.summary);
  const meta = addTextElement(content, 'div', 'story-meta', `${formatDate(story.publishedAt)}${story.author ? ` · ${story.author}` : ''}`);
  meta.setAttribute('aria-label', `Publicado em ${formatDate(story.publishedAt)}${story.author ? ` por ${story.author}` : ''}`);

  const figure = document.createElement('figure');
  figure.className = 'article-hero-image';
  const image = document.createElement('img');
  image.src = story.image;
  image.alt = story.imageAlt;
  image.dataset.imageType = story.imageType;
  image.fetchPriority = 'high';
  figure.append(image);
  content.append(figure);
  addTextElement(content, 'p', 'article-image-caption', story.imageCaption || (story.imageType === 'chart' ? 'Imagem: fonte indicada na legenda e nas referências.' : 'Imagem ilustrativa da publicação original.'));

  const copy = document.createElement('div');
  copy.className = 'article-copy';
  story.content.forEach((paragraph) => addTextElement(copy, 'p', '', paragraph));
  content.append(copy);

  const sources = document.createElement('section');
  sources.className = 'article-sources';
  sources.setAttribute('aria-labelledby', 'article-sources-title');
  addTextElement(sources, 'h2', '', 'Fontes consultadas').id = 'article-sources-title';
  const sourceList = document.createElement('ul');
  story.sources.forEach((source) => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = source.url;
    link.textContent = source.name;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    item.append(link);
    if (source.publishedAt) {
      const date = document.createElement('span');
      date.textContent = ` (publicado em ${formatDate(source.publishedAt)})`;
      item.append(date);
    }
    sourceList.append(item);
  });
  sources.append(sourceList);
  content.append(sources);

  const related = stories
    .filter((item) => item.status === 'published' && item.id !== story.id)
    .sort((first, second) => Number(second.category === story.category) - Number(first.category === story.category))
    .slice(0, 3);
  const relatedSection = document.createElement('section');
  relatedSection.className = 'read-also';
  relatedSection.setAttribute('aria-labelledby', 'read-also-title');
  addTextElement(relatedSection, 'h2', '', 'Leia também').id = 'read-also-title';
  const relatedList = document.createElement('ul');
  related.forEach((item) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.href = `../${item.slug}/`;
    link.textContent = item.title;
    listItem.append(link);
    relatedList.append(listItem);
  });
  relatedSection.append(relatedList);
  content.append(relatedSection);
}

if (story) renderArticle();
else renderNotFound();