"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";

type CatalogItem = {
  id: number;
  title: string;
  category: string;
  description: string;
};

const categories = ["Sound", "Learning", "Tools", "Media"];
const fieldClass =
  "min-h-10 w-full rounded border border-white/10 bg-[#101314] px-2.5 py-2 text-[11px] text-slate-100 placeholder:text-slate-500 focus-visible:border-cyan-300/70 focus-visible:outline-2 focus-visible:outline-cyan-300/20";

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
      { id: nextId, title: cleanTitle, category, description: cleanDescription },
      ...currentItems,
    ]);
    setNextId((currentId) => currentId + 1);
    setTitle("");
    setDescription("");
    setMessage("Added to this preview. It has not been published or saved.");
  }

  return (
    <aside
      aria-label="Provider catalog workspace preview"
      className="w-full overflow-hidden rounded-lg border border-white/15 bg-[#101213] shadow-[0_35px_90px_rgba(0,0,0,0.33)]"
      id="workspace"
    >
      <div className="flex min-h-[58px] items-center justify-between gap-4 border-b border-white/10 bg-[#121516] px-4 sm:px-5">
        <div className="flex items-center gap-2 text-[9px] font-bold tracking-[0.08em] text-slate-200">
          <span className="grid size-7 place-items-center rounded-md bg-cyan-300 text-xs text-slate-950">S</span>
          PROVIDER SPACE
        </div>
        <span className="rounded border border-cyan-300/20 px-2 py-1.5 text-[7px] tracking-[0.08em] text-cyan-300">LOCAL PREVIEW</span>
      </div>

      <div className="p-4 sm:p-6">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-[8px] tracking-[0.1em] text-slate-500">CATALOG OVERVIEW</p>
            <h2 className="mt-1 text-[22px] font-semibold text-slate-100">Your catalog</h2>
          </div>
          <span className="text-[8px] tracking-[0.1em] text-slate-500">SLMN / STUDIO</span>
        </div>

        <div className="grid grid-cols-3 divide-x divide-white/10 rounded-md border border-white/10 bg-[#0c0e0f]">
          <div className="flex min-h-[72px] flex-col justify-between p-2.5 sm:p-3">
            <span className="text-[7px] tracking-[0.1em] text-slate-500">ITEMS IN PREVIEW</span>
            <strong className="text-xl font-semibold text-cyan-300">{String(items.length).padStart(2, "0")}</strong>
          </div>
          <div className="flex min-h-[72px] flex-col justify-between p-2.5 sm:p-3">
            <span className="text-[7px] tracking-[0.1em] text-slate-500">CATEGORIES</span>
            <strong className="text-xl font-semibold text-cyan-300">04</strong>
          </div>
          <div className="flex min-h-[72px] flex-col justify-between p-2.5 sm:p-3">
            <span className="text-[7px] tracking-[0.1em] text-slate-500">STATUS</span>
            <strong className="text-[9px] font-semibold tracking-[0.05em] text-amber-300">LOCAL ONLY</strong>
          </div>
        </div>

        <form className="mt-4 grid gap-3 rounded-md border border-white/10 bg-[#0c0e0f] p-4" onSubmit={addItem}>
          <div className="mb-1 flex items-center justify-between gap-3">
            <div>
              <p className="text-[7px] tracking-[0.1em] text-slate-500">ADD TO YOUR CATALOG</p>
              <h3 className="mt-1 text-[15px] font-semibold text-slate-100">New item</h3>
            </div>
            <span className="text-[8px] text-slate-500">01 / 01</span>
          </div>
          <label className="grid gap-1.5 text-[9px] font-semibold text-slate-300" htmlFor="catalog-title">
            Title
            <input
              autoComplete="off"
              className={fieldClass}
              id="catalog-title"
              maxLength={70}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Name your product or resource"
              required
              value={title}
            />
          </label>
          <div className="grid gap-3 sm:grid-cols-[minmax(100px,0.55fr)_minmax(0,1fr)]">
            <label className="grid content-start gap-1.5 text-[9px] font-semibold text-slate-300" htmlFor="catalog-category">
              Category
              <select className={fieldClass} id="catalog-category" onChange={(event) => setCategory(event.target.value)} value={category}>
                {categories.map((itemCategory) => <option key={itemCategory} value={itemCategory}>{itemCategory}</option>)}
              </select>
            </label>
            <label className="grid content-start gap-1.5 text-[9px] font-semibold text-slate-300" htmlFor="catalog-description">
              Description
              <textarea
                className={`${fieldClass} min-h-[77px] resize-y`}
                id="catalog-description"
                maxLength={240}
                onChange={(event) => setDescription(event.target.value)}
                placeholder="What should people know?"
                required
                rows={3}
                value={description}
              />
            </label>
          </div>
          <div className="mt-1 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
            <p aria-live="polite" className="m-0 max-w-[230px] text-[9px] leading-5 text-slate-400">
              {message || "Preview only. Your entries stay in this page and are not saved."}
            </p>
            <Button className="text-[10px]" size="sm" type="submit">
              Add to preview <span aria-hidden="true" className="text-base font-normal">+</span>
            </Button>
          </div>
        </form>

        {items.length === 0 ? (
          <div className="mt-3 flex min-h-[190px] flex-col items-center justify-center rounded-md border border-dashed border-white/15 p-5 text-center">
            <span aria-hidden="true" className="grid size-9 place-items-center rounded-full border border-cyan-300/35 text-xl text-cyan-300">+</span>
            <h3 className="mt-3 text-sm font-semibold text-slate-100">Your catalog starts here</h3>
            <p className="mt-1 max-w-[290px] text-[11px] leading-5 text-slate-400">Add a title and a short description above to preview your first catalog entry.</p>
            <span className="mt-4 text-[7px] tracking-[0.1em] text-slate-500">NOT PUBLISHED / NO DATA STORED</span>
          </div>
        ) : (
          <div aria-live="polite" className="mt-4 grid gap-2">
            <div className="flex justify-between text-[7px] tracking-[0.1em] text-slate-500">
              <span>PREVIEW ITEMS</span>
              <span>{String(items.length).padStart(2, "0")}</span>
            </div>
            {items.map((item) => (
              <article className="flex items-start justify-between gap-4 rounded border border-white/10 bg-[#0c0e0f] p-3" key={item.id}>
                <div>
                  <span className="text-[7px] uppercase tracking-[0.08em] text-cyan-300">{item.category}</span>
                  <h3 className="my-1 text-xs font-semibold text-slate-100">{item.title}</h3>
                  <p className="m-0 break-words text-[10px] leading-4 text-slate-400">{item.description}</p>
                </div>
                <span className="text-[7px] tracking-[0.08em] text-amber-300">LOCAL</span>
              </article>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
}