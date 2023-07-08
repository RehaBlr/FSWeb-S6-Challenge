// Karakter bileşeniniz buraya gelecek
import React, { useState } from "react";
// function handleOpen(e) {
//   const acc = e.target.parentNode;
//   acc.classList.toggle("open");
// }
const Accordeon = (props) => {
  const [open, setOpen] = useState(false);
  const { title, children } = props;

  return (
    <div className={`accordeon ${open ? "open" : ""}`}>
      <div className="acc-title" onClick={() => setOpen(!open) /*handleOpen*/}>
        <h2>{title}</h2> <div className="arrow">{`<`}</div>{" "}
        {/*open ? "-" : "+"*/}
      </div>
      {children}
      {/* <ul>
        <li>Height: {character.height}</li>
        <li>Mass: {character.mass}</li>
        <li>Hair Color: {character.hair_color}</li>
        <li>Skin Color: {character.skin_color}</li>
        <li>Eye Color: {character.eye_color}</li>
        <li>Birth Year: {character.birth_year}</li>
        <li>Gender: {character.gender}</li>
        <li>Appaers in: {character.films.length} movies </li>
      </ul> */}
    </div>
  );
};

export default Accordeon;
