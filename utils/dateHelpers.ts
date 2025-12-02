import { Article, Prayer, Song } from '../types';

type CreatedEntity = { createdAt: string; id?: string };

const getTimeValue = (value: string) => Date.parse(value);

export const compareByCreatedAtDesc = <T extends CreatedEntity>(a: T, b: T) => {
  const aTime = getTimeValue(a.createdAt);
  const bTime = getTimeValue(b.createdAt);

  const bothValid = !Number.isNaN(aTime) && !Number.isNaN(bTime);

  if (bothValid && bTime !== aTime) {
    return bTime - aTime;
  }

  if (bothValid && aTime === bTime) {
    if (a.id && b.id) {
      return b.id.localeCompare(a.id);
    }

    return 0;
  }

  return b.createdAt.localeCompare(a.createdAt);
};

export const getLatestByCreatedAt = <T extends CreatedEntity>(items: T[]) =>
  [...items].sort(compareByCreatedAtDesc)[0];

export const formatDisplayDate = (createdAt: string) => {
  const timeValue = getTimeValue(createdAt);

  if (Number.isNaN(timeValue)) {
    return createdAt;
  }

  return new Intl.DateTimeFormat('sv-SE', { dateStyle: 'long', timeStyle: 'short' }).format(timeValue);
};

export const getOrderedContent = (articles: Article[], prayers: Prayer[], songs: Song[]) => ({
  latestArticle: getLatestByCreatedAt(articles),
  latestPrayer: getLatestByCreatedAt(prayers),
  latestSong: getLatestByCreatedAt(songs),
});
