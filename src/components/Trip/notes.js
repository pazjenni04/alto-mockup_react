import React from "react";
import data from "../../assets/data/mission.json";

// loops through json array and renders the notes from customer
const notesData = data.map((data) => {
  return (
    <div key={data.trip} className="row notes">
      <p className="note">{data.trip.notes}</p>
    </div>
  );
});

export default notesData;
