import  { useState } from "react";
import './authors.css'

import { authors } from "./../../data/authors";
const Authors = () => {
  const [search, setSearch] = useState('')
  return (
    <section className="authors">
      <div className="author-search-wrapper">
        <input value={search} onChange={(e) => setSearch(e.target.value) } type="search" placeholder="Search in authors" />
      </div>
      <div className="authors-wrapper">
        {authors.filter(a => a.name.toLowerCase().includes(search)).map((author) => (
          <div key={author.id} className="author">
            <img src={author.image} alt={author.name} className="author-img" />
            <h2 className="author-name">{author.name}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Authors;
