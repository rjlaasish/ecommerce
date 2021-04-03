import React from 'react';

export default function Header(props) {
  return (
    <header className="block row center">
      <div>
          <form onSubmit={props.getSearch} className="search-form">
              <input className="search-bar" type="text" value={props.search} onChange={props.updateSearch}/>
              <button className="search-btn" type="submit">Search</button>
          </form>
      </div>
      <div>
        <a href="#/">
          Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}

      </div>
    </header>
  );
}
