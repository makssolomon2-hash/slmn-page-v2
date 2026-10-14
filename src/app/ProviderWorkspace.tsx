"use client";

import { useState, type FormEvent } from "react";

type CatalogItem = {
  id: number;
  title: string;
  category: string;
  description: string;
};

const categories = ["Sound", "Learning", "Tools", "Media"];

export default function ProviderWorkspace() {
  const [items, setItems] = useState<CatalogItem[]>([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [description, setDescription] = useState("");
  const [nextId, setNextId] = useState(1);
  const [message, setMessage] = useState("");

  function addItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanTitle = title.trim();
    const cleanDescription = description.trim();

    if (!cleanTitle || !cleanDescription) {
      setMessage("Add a title and description before adding this item.");
      return;
    }

    setItems((currentItems) => [
      {
        id: nextId,
        title: cleanTitle,
        category,
        description: cleanDescription,
      },
      ...currentItems,
    ]);
    setNextId((currentId) => currentId + 1);
    setTitle("");
    setDescription("");
    setMessage("Added to this preview. It has not been published or saved.");
  }

  return (
    <aside
      className="workspace-preview"
      id="workspace"
      aria-label="Provider catalog workspace preview"
    >
      <div className="workspace-topbar">
        <div className="workspace-brand">
          <span className="brand-mark small-mark">S</span>
          <span>PROVIDER SPACE</span>
        </div>
        <span className="preview-badge">LOCAL PREVIEW</span>
      </div>
      <div className="workspace-content">
        <div className="workspace-heading">
          <div>
            <p className="eyebrow">CATALOG OVERVIEW</p>
            <h3>Your catalog</h3>
          </div>
          <span className="workspace-date">SLMN / STUDIO</span>
        </div>
        <div className="workspace-stats">
          <div>
            <span>ITEMS IN PREVIEW</span>
            <strong>{String(items.length).padStart(2, "0")}</strong>
          </div>
          <div>
            <span>CATEGORIES</span>
            <strong>04</strong>
          </div>
          <div>
            <span>STATUS</span>
            <strong className="status-draft">LOCAL ONLY</strong>
          </div>
        </div>

        <form className="provider-form" onSubmit={addItem}>
          <div className="provider-form-heading">
            <div>
              <p className="eyebrow">ADD TO YOUR CATALOG</p>
              <h4>New item</h4>
            </div>
            <span>01 / 01</span>
          </div>
          <label htmlFor="catalog-title">Title</label>
          <input
            autoComplete="off"
            id="catalog-title"
            maxLength={70}
            onChange={(event) => setTitle(event.target.value)}
            placeholder="Name your product or resource"
            required
            value={title}
          />
          <div className="provider-form-row">
            <div className="provider-field">
              <label htmlFor="catalog-category">Category</label>
              <select
                id="catalog-category"
                onChange={(event) => setCategory(event.target.value)}
                value={category}
              >
                {categories.map((itemCategory) => (
                  <option key={itemCategory} value={itemCategory}>
                    {itemCategory}
                  </option>
                ))}
              </select>
            </div>
            <div className="provider-field">
              <label htmlFor="catalog-description">Description</label>
              <textarea
                id="catalog-description"
                maxLength={240}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="What should people know?"
                required
                rows={3}
                value={description}
              />
            </div>
          </div>
          <div className="provider-form-footer">
            <p id="provider-preview-note" aria-live="polite">
              {message ||
                "Preview only. Your entries stay in this page and are not saved."}
            </p>
            <button className="button button-primary" type="submit">
              Add to preview <span aria-hidden="true">+</span>
            </button>
          </div>
        </form>

        {items.length === 0 ? (
          <div className="workspace-empty">
            <span className="empty-symbol" aria-hidden="true">
              +
            </span>
            <h4>Your catalog starts here</h4>
            <p>
              Add a title and a short description above to preview your first
              catalog entry.
            </p>
            <span className="empty-caption">
              NOT PUBLISHED / NO DATA STORED
            </span>
          </div>
        ) : (
          <div className="provider-item-list" aria-live="polite">
            <div className="provider-item-list-heading">
              <span>PREVIEW ITEMS</span>
              <span>{String(items.length).padStart(2, "0")}</span>
            </div>
            {items.map((item) => (
              <article className="provider-item" key={item.id}>
                <div>
                  <span className="provider-item-category">{item.category}</span>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
                <span className="provider-item-state">LOCAL</span>
              </article>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}
