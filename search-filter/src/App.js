import { useState } from "react";

function App() {
  const productList = [
    "blue pant",
    "black pant",
    "blue shirt",
    "black shoes",
    "brown shoes",
    "white pant",
    "white shoes",
    "red shirt",
    "gray pant",
    "white shirt",
    "golden shoes",
    "dark pant",
    "pink shirt",
    "yellow pant",
  ];

  const [products, setProducts] = useState(productList);
  const [searchVal, setSearchVal] = useState("");

  function handleSearchClick() {
    if (searchVal === "") {
      setProducts(productList);
      return;
    }
    const filterBySearch = productList.filter((item) => {
      if (item.toLowerCase().includes(searchVal.toLowerCase())) {
        return item;
      }

      return null;
    });
    setProducts(filterBySearch);
  }

  const containerStyles = {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "100vh",
    justifyContent: "center",
    alignItems: "center",
  };

  const wrapperContainer = {
    textAlign: "left",
  };

  const inputStyle = {
    padding: "0.5rem",
    borderRadius: "0.5rem",
    border: "solid 2px #006700",
    onFocus: "border-none",
  };

  const searchbarStyles = {
    padding: "0.5rem",
    borderRadius: "0.5rem",
    backgroundColor: "#006700",
    color: "#fff",
    fontWeight: "700",
  };

  const wrapperStyles = {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  };

  return (
    <div style={containerStyles}>
      <div style={wrapperStyles}>
        <input
          onChange={(e) => setSearchVal(e.target.value)}
          style={inputStyle}
        />
        <button onClick={handleSearchClick} style={searchbarStyles}>
          Search
        </button>
      </div>
      <div style={wrapperContainer}>
        {products.map((product) => {
          return <div style={wrapperContainer}>{product}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
