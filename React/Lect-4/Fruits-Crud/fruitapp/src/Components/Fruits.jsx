import React, { useState } from "react";

function Fruits() {
  const [fruits, setFruits] = useState(["Apple", "Banana"]);
  const [fname, setFname] = useState("");
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setFname(e.target.value);
  };

  const handleClick = () => {
    if (fname.trim() === "") return;

    setFruits([...fruits, fname]);
    setFname("");
  };

  const EditFruits = (i) => {
    setFname(fruits[i]);
    setEditId(i);
  };

  const handleUpdate = () => {
    if (editId === null) return;

    const newArray = [...fruits];
    newArray[editId] = fname;

    setFruits(newArray);
    setEditId(null);
    setFname("");
  };

  const DelFruits = (i) => {
    const newArray = fruits.filter((_, index) => index !== i);
    setFruits(newArray);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="w-full max-w-xl bg-white shadow-2xl rounded-xl p-8">

        <h2 className="text-3xl font-bold text-center text-green-600 mb-8">
          🍎 Fruits List
        </h2>

        <ul className="space-y-4 mb-8">
          {fruits.map((fruit, i) => (
            <li
              key={i}
              className="bg-gray-50 border rounded-lg p-4 flex justify-between items-center hover:shadow-lg duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-700">
                {fruit}
              </h3>

              <div className="flex gap-3">
                <button
                  onClick={() => EditFruits(i)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>

                <button
                  onClick={() => DelFruits(i)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        <div className="bg-gray-50 p-5 rounded-lg border">
          <label className="block text-lg font-medium mb-2">
            Enter Fruit Name
          </label>

          <input
            type="text"
            value={fname}
            onChange={handleChange}
            placeholder="Enter fruit..."
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          <div className="flex gap-4 mt-5">
            <button
              onClick={handleClick}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold"
            >
              Add Fruit
            </button>

            <button
              onClick={handleUpdate}
              className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-lg font-semibold"
            >
              Update Fruit
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Fruits;