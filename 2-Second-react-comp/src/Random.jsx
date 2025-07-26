function Random() {
  let random = Math.floor(Math.random() * 100);

  return (
    <>
      <h2 style={{ backgroundColor: "#628760" }}>
        This is a randum number : {random}
      </h2>
    </>
  );
}

export default Random;
