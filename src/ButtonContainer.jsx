import "./ButtonContainer.css";
export function ButtonContainer({ handleStart }) {
  return (
    <div className="btn container">
      <button className="btn" data-min="1" data-max="151" onClick={handleStart}>
        Gen 1
      </button>
      <button
        className="btn"
        data-min="152"
        data-max="251"
        onClick={handleStart}
      >
        Gen 2
      </button>
      <button
        className="btn"
        data-min="252"
        data-max="386"
        onClick={handleStart}
      >
        Gen 3
      </button>
      <button
        className="btn"
        data-min="387"
        data-max="493"
        onClick={handleStart}
      >
        Gen 4
      </button>
      <button
        className="btn"
        data-min="494"
        data-max="649"
        onClick={handleStart}
      >
        Gen 5
      </button>
      <button
        className="btn"
        data-min="650"
        data-max="721"
        onClick={handleStart}
      >
        Gen 6
      </button>
      <button
        className="btn"
        data-min="722"
        data-max="809"
        onClick={handleStart}
      >
        Gen 7
      </button>
      <button
        className="btn"
        data-min="810"
        data-max="905"
        onClick={handleStart}
      >
        Gen 8
      </button>
      <button
        className="btn"
        data-min="906"
        data-max="1025"
        onClick={handleStart}
      >
        Gen 9
      </button>
    </div>
  );
}
