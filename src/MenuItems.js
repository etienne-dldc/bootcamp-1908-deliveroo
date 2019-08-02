import React from 'react';

const MenuItems = props => {
  return (
    <div className="MenuItems">
      <h2>{props.name}</h2>
      <div className="MenuItems--items">
        {props.items.map(menuItem => {
          return (
            <div className="MenuItem">
              <div className="MenuItem--card">
                <div className="MenuItem--texts">
                  <h3>{menuItem.title}</h3>
                  {menuItem.description && <p>{menuItem.description}</p>}
                  <div className="MenuItem--infos">
                    <span className="MenuItem--price">{menuItem.price} €</span>
                    {menuItem.popular && (
                      <span className="MenuItem--popular">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="#ff8000"
                          className="feather feather-star"
                          style={{ width: 20, height: 20, marginRight: 5 }}
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>{' '}
                        Populaire
                      </span>
                    )}
                  </div>
                </div>
                {menuItem.picture && (
                  <div className="MenuItem--picture">
                    <img src={menuItem.picture} alt />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuItems;
