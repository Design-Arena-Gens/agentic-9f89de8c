"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import type { Photo, PhotoOrientation } from "@/data/photos";
import { categories, photos, tags } from "@/data/photos";

type SortOption = "newest" | "oldest" | "alphabetic";

const orientationLabels: Record<PhotoOrientation, string> = {
  landscape: "افقی",
  portrait: "عمودی",
  square: "مربعی",
};

const sortOptionLabels: Record<SortOption, string> = {
  newest: "جدیدترین",
  oldest: "قدیمی‌ترین",
  alphabetic: "مرتب‌سازی الفبا",
};

function formatDate(value: string) {
  try {
    return new Intl.DateTimeFormat("fa-IR", {
      dateStyle: "long",
    }).format(new Date(value));
  } catch {
    return value;
  }
}

export default function GalleryPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("همه");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [orientation, setOrientation] = useState<PhotoOrientation | "all">(
    "all",
  );
  const [sortOrder, setSortOrder] = useState<SortOption>("newest");
  const [focusedPhoto, setFocusedPhoto] = useState<Photo | null>(null);

  const filteredPhotos = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return photos
      .filter((photo) => {
        if (selectedCategory === "همه") return true;
        return photo.category === selectedCategory;
      })
      .filter((photo) => {
        if (orientation === "all") return true;
        return photo.orientation === orientation;
      })
      .filter((photo) => {
        if (selectedTags.length === 0) return true;
        return selectedTags.every((tag) => photo.tags.includes(tag));
      })
      .filter((photo) => {
        if (!normalizedQuery) return true;
        const haystack = [
          photo.title,
          photo.description,
          photo.category,
          photo.location,
          photo.photographer,
          ...photo.tags,
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(normalizedQuery);
      })
      .sort((a, b) => {
        if (sortOrder === "alphabetic") {
          return a.title.localeCompare(b.title, "fa");
        }

        const aTime = new Date(a.date).getTime();
        const bTime = new Date(b.date).getTime();

        if (sortOrder === "newest") {
          return bTime - aTime;
        }

        return aTime - bTime;
      });
  }, [orientation, query, selectedCategory, selectedTags, sortOrder]);

  const activeCount = filteredPhotos.length;
  const categoryOptions = ["همه", ...categories];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag],
    );
  };

  const clearFilters = () => {
    setQuery("");
    setSelectedCategory("همه");
    setSelectedTags([]);
    setOrientation("all");
    setSortOrder("newest");
  };

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <div>
          <span className={styles.badge}>نگارخانه آفتاب</span>
          <h1 className={styles.heading}>گالری عکس آنلاین</h1>
          <p className={styles.subtitle}>
            مجموعه‌ای منتخب از عکس‌های الهام‌بخش طبیعت، معماری، پرتره و زندگی
            شهری. فیلتر کنید، جستجو کنید و با یک کلیک تصاویر را در اندازه کامل
            ببینید.
          </p>
        </div>
        <div className={styles.statsPanel}>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>تصاویر در مجموعه</span>
            <span className={styles.statValue}>{photos.length}</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statLabel}>نتیجه مطابق فیلترها</span>
            <span className={styles.statValue}>{activeCount}</span>
          </div>
          <button type="button" className={styles.resetButton} onClick={clearFilters}>
            بازنشانی فیلترها
          </button>
        </div>
      </header>

      <section className={styles.filterPanel}>
        <div className={styles.filterRow}>
          <label className={styles.fieldLabel} htmlFor="search">
            جستجوی سریع
          </label>
          <div className={styles.searchField}>
            <input
              id="search"
              type="search"
              placeholder="عنوان، مکان یا برچسب را وارد کنید..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className={styles.searchIcon}
            >
              <path
                d="M21 21l-4.35-4.35m1.35-4.65a6 6 0 11-12 0 6 6 0 0112 0z"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

        <div className={styles.filterRow}>
          <label className={styles.fieldLabel} htmlFor="category">
            دسته‌بندی
          </label>
          <div className={styles.selectWrapper}>
            <select
              id="category"
              value={selectedCategory}
              onChange={(event) => setSelectedCategory(event.target.value)}
            >
              {categoryOptions.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <span className={styles.selectIcon}>▾</span>
          </div>
        </div>

        <div className={styles.filterRow}>
          <span className={styles.fieldLabel}>جهت عکس</span>
          <div className={styles.segmentedControl}>
            <button
              type="button"
              onClick={() => setOrientation("all")}
              className={`${styles.segment} ${
                orientation === "all" ? styles.segmentActive : ""
              }`}
            >
              همه
            </button>
            {(Object.keys(orientationLabels) as PhotoOrientation[]).map(
              (key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setOrientation(key)}
                  className={`${styles.segment} ${
                    orientation === key ? styles.segmentActive : ""
                  }`}
                >
                  {orientationLabels[key]}
                </button>
              ),
            )}
          </div>
        </div>

        <div className={styles.filterRow}>
          <label className={styles.fieldLabel} htmlFor="sort">
            مرتب‌سازی
          </label>
          <div className={styles.selectWrapper}>
            <select
              id="sort"
              value={sortOrder}
              onChange={(event) =>
                setSortOrder(event.target.value as SortOption)
              }
            >
              {(Object.keys(sortOptionLabels) as SortOption[]).map((key) => (
                <option key={key} value={key}>
                  {sortOptionLabels[key]}
                </option>
              ))}
            </select>
            <span className={styles.selectIcon}>▾</span>
          </div>
        </div>

        <div className={styles.filterRow}>
          <span className={styles.fieldLabel}>برچسب‌ها</span>
          <div className={styles.tagCloud}>
            {tags.map((tag) => {
              const active = selectedTags.includes(tag);
              return (
                <button
                  type="button"
                  key={tag}
                  className={`${styles.tag} ${active ? styles.tagActive : ""}`}
                  onClick={() => toggleTag(tag)}
                >
                  <span>{tag}</span>
                  {active && <span className={styles.tagClose}>×</span>}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section aria-live="polite">
        {filteredPhotos.length === 0 ? (
          <div className={styles.emptyState}>
            <h2>هیچ تصویری مطابق فیلترها یافت نشد</h2>
            <p>شرایط جستجو را تغییر دهید یا فیلترهای فعال را حذف کنید.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {filteredPhotos.map((photo) => (
              <article
                key={photo.id}
                className={styles.card}
                style={{ "--accent-color": photo.color } as CSSProperties}
              >
                <button
                  type="button"
                  className={styles.cardButton}
                  onClick={() => setFocusedPhoto(photo)}
                >
                  <div className={styles.imageWrapper}>
                    <Image
                      src={photo.url}
                      alt={photo.title}
                      width={600}
                      height={photo.orientation === "landscape" ? 380 : 720}
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    />
                    <span className={styles.imageBadge}>{photo.category}</span>
                  </div>
                  <div className={styles.cardContent}>
                    <h2>{photo.title}</h2>
                    <p>{photo.description}</p>
                    <div className={styles.metaRow}>
                      <span>{photo.location}</span>
                      <span>ثبت: {formatDate(photo.date)}</span>
                    </div>
                    <div className={styles.metaRow}>
                      <span>عکاس: {photo.photographer}</span>
                      <span>{orientationLabels[photo.orientation]}</span>
                    </div>
                    <div className={styles.tagRow}>
                      {photo.tags.map((tag) => (
                        <span key={tag} className={styles.cardTag}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              </article>
            ))}
          </div>
        )}
      </section>

      {focusedPhoto && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={`نمایش بزرگ ${focusedPhoto.title}`}
        >
          <div className={styles.lightboxBackdrop} onClick={() => setFocusedPhoto(null)} />
          <div className={styles.lightboxContent}>
            <button
              type="button"
              className={styles.lightboxClose}
              onClick={() => setFocusedPhoto(null)}
              aria-label="بستن"
            >
              ×
            </button>
            <div className={styles.lightboxImage}>
              <Image
                src={focusedPhoto.url}
                alt={focusedPhoto.title}
                width={1200}
                height={
                  focusedPhoto.orientation === "landscape" ? 780 : 1500
                }
                sizes="(min-width: 1280px) 960px, 80vw"
                priority
              />
            </div>
            <div className={styles.lightboxDetails}>
              <div className={styles.lightboxHeader}>
                <span className={styles.badge}>نمای تمام‌صفحه</span>
                <h2>{focusedPhoto.title}</h2>
              </div>
              <p>{focusedPhoto.description}</p>
              <div className={styles.lightboxGrid}>
                <div>
                  <span className={styles.detailLabel}>مکان</span>
                  <span className={styles.detailValue}>
                    {focusedPhoto.location}
                  </span>
                </div>
                <div>
                  <span className={styles.detailLabel}>تاریخ ثبت</span>
                  <span className={styles.detailValue}>
                    {formatDate(focusedPhoto.date)}
                  </span>
                </div>
                <div>
                  <span className={styles.detailLabel}>عکاس</span>
                  <span className={styles.detailValue}>
                    {focusedPhoto.photographer}
                  </span>
                </div>
                <div>
                  <span className={styles.detailLabel}>دسته</span>
                  <span className={styles.detailValue}>
                    {focusedPhoto.category}
                  </span>
                </div>
              </div>
              <div className={styles.lightboxTags}>
                {focusedPhoto.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
