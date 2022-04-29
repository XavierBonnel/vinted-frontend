import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PublishedModal from "../components/PublishedModal";

function Publish({ token }) {
  const [image, setImage] = useState({});
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [condition, setCondition] = useState("");
  const [color, setColor] = useState("");
  const [city, setCity] = useState("");
  const [publishedModalOpen, setPublishedModalOpen] = useState(false);

  const navigate = useNavigate();

  const userToken = token;

  return (
    <div>
      {publishedModalOpen && (
        <PublishedModal
          setPublishedModalOpen={setPublishedModalOpen}
          publishedModalOpen={publishedModalOpen}
        />
      )}

      <form
        className="publish"
        onSubmit={async (event) => {
          event.preventDefault();

          const formData = new FormData();
          formData.append("image", image);
          formData.append("name", name);
          formData.append("description", description);
          formData.append("price", price);
          formData.append("brand", brand);
          formData.append("condition", condition);
          formData.append("color", color);
          formData.append("city", city);

          try {
            const response = await axios.post(
              "https://my--vinted-backend.herokuapp.com/offer/publish",
              formData,
              {
                headers: {
                  Authorization: "Bearer " + userToken,
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            setPublishedModalOpen(true);
          } catch (err) {
            if (err.response.status === 500) {
              console.error("An error occurred");
            } else {
              console.error(err.response.data.msg);
            }
          }
        }}
      >
        <h1>Vends ton article</h1>
        <input
          type="file"
          onChange={(event) => {
            setImage(event.target.files[0]);
          }}
        />
        <div className="titleDescription">
          <p>Titre</p>
          <input
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
          <p>Décris ton article</p>
          <textarea
            onChange={(event) => {
              setDescription(event.target.value);
            }}
            value={description}
          ></textarea>
        </div>
        <div className="detailsPublish">
          <div>
            <p>Taille</p>
            <input
              type="text"
              onChange={(event) => {
                setSize(event.target.value);
              }}
              value={size}
            />
          </div>
          <div>
            <p>Couleur</p>
            <input
              type="text"
              onChange={(event) => {
                setColor(event.target.value);
              }}
              value={color}
            />
          </div>
          <div>
            <p>Etat</p>
            <input
              type="text"
              onChange={(event) => {
                setCondition(event.target.value);
              }}
              value={condition}
            />
          </div>
          <div>
            <p>Marque</p>
            <input
              type="text"
              onChange={(event) => {
                setBrand(event.target.value);
              }}
              value={brand}
            />
          </div>
          <div>
            <p>Lieu</p>
            <input
              type="text"
              onChange={(event) => {
                setCity(event.target.value);
              }}
              value={city}
            />
          </div>
          <div>
            <p>prix</p>
            <input
              type="text"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
              value={price}
            />
          </div>
        </div>
        <div className="interestedForExchange">
          <input type="radio" />
          <label>Je suis intéressé par les échanges</label>
        </div>
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}

export default Publish;
