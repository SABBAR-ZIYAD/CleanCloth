import React, { useState } from "react";

const ServiceBooking = () => {
  const [itemCount, setItemCount] = useState(0);
  const [items, setItems] = useState([]);

  const handleItemCountChange = (e) => {
    const count = parseInt(e.target.value, 10) || 0;
    setItemCount(count);
    setItems(Array(count).fill({ type: "", service: "", description: "" }));
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index] = { ...updatedItems[index], [field]: value };
    setItems(updatedItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      switch (item.service) {
        case "Washing":
          return total + 30;
        case "Coloring":
          return total + 40;
        case "Ironing":
          return total + 10;
        case "Dry Cleaning":
          return total + 40;
        case "Sneakers":
          return total + 40;
        case "Blankets":
          return total + 80;
        default:
          return total;
      }
    }, 0);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>Book a Service</h2>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label style={{ fontSize: "18px" }}>How many items do you have?</label>
        <input
          type="number"
          min="0"
          value={itemCount}
          onChange={handleItemCountChange}
          style={{
            marginLeft: "10px",
            padding: "5px",
            fontSize: "16px",
            width: "80px",
          }}
        />
      </div>

      <div
        style={{
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", 
          gap: "70px",
          justifyItems: "center",
          marginTop: "20px", 
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              padding: "15px",
              paddingRight: "30px",
              borderRadius: "10px",
              backgroundColor: "#333",
              color: "#fff",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              width: "100%" ,
              
            }}
          >
            <h4>Item {index + 1}</h4>
            <div style={{ marginBottom: "10px", width: "100%" }}>
              <label style={{ fontWeight: "bold", display: "block" }}>
                Type of Item:
              </label>
              <select
                value={item.type}
                onChange={(e) =>
                  handleItemChange(index, "type", e.target.value)
                }
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              >
                <option value="">Select</option>
                <option value="Pants">Pants</option>
                <option value="Shirts">Shirts</option>
                <option value="Jackets">Jackets</option>
                <option value="Sneakers">Sneakers</option>
                <option value="Hoodies">Hoodies</option>
                <option value="Blankets">Blankets</option>
                <option value="T-Shirts">T-Shirts</option>
                <option value="Shorts">Shorts</option>
                <option value="Jeans">Jeans</option>
              </select>
            </div>

            <div style={{ marginBottom: "10px", width: "100%" }}>
              <label style={{ fontWeight: "bold", display: "block" }}>
                Service:
              </label>
              <select
                value={item.service}
                onChange={(e) =>
                  handleItemChange(index, "service", e.target.value)
                }
                style={{
                  width: "100%",
                  padding: "8px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              >
                <option value="">Select</option>
                {["Sneakers", "Blankets"].includes(item.type) ? (
                  <option value="Washing">Washing</option>
                ) : (
                  <>
                    <option value="Washing">Washing</option>
                    <option value="Coloring">Coloring</option>
                    <option value="Ironing">Ironing</option>
                    <option value="Dry Cleaning">Dry Cleaning</option>
                  </>
                )}
              </select>
            </div>

            <div style={{ marginBottom: "10px", width: "100%" }}>
              <label style={{ fontWeight: "bold", display: "block" }}>
                Description (optional):
              </label>
              <textarea
                value={item.description}
                onChange={(e) =>
                  handleItemChange(index, "description", e.target.value)
                }
                rows="2"
                style={{
                  width: "100%",
                  padding: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ccc",
                  backgroundColor: "#fff",
                  color: "#000",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          marginTop: "20px",
          textAlign: "center",
          fontSize: "18px",
          fontWeight: "bold",
        }}
      >
        Total Price: {calculateTotal()} DH
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ServiceBooking;
