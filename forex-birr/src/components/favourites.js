import { useState } from "react";

const Favorites = ({ banks }) => {
  const [favorites, setFavorites] = useState([]);

  const handleAddFavorite = (bank, currency) => {
    setFavorites([...favorites, { bank, currency }]);
  };

  const handleRemoveFavorite = (index) => {
    setFavorites(favorites.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Favorites/Watchlist</h2>
      <select onChange={(e) => setSelectedBank(e.target.value)}>
        <option value="">Select Bank</option>
        {banks.map((bank) => (
          <option key={bank.name} value={bank.name}>
            {bank.name}
          </option>
        ))}
      </select>

      <select onChange={(e) => setSelectedCurrency(e.target.value)}>
        <option value="">Select Currency</option>
        {banks
          .find((b) => b.name === selectedBank)?.currencies.map((currency) => (
            <option key={currency.name} value={currency.name}>
              {currency.name}
            </option>
          ))}
      </select>

      <button
        onClick={() => handleAddFavorite(selectedBank, selectedCurrency)}
      >
        Add to Favorites
      </button>

      <ul>
        {favorites.map((fav, index) => (
          <li key={index}>
            {fav.bank} - {fav.currency}
            <button onClick={() => handleRemoveFavorite(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
