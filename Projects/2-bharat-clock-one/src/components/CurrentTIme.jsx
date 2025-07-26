let ClockTime = () => {
  let time = new Date();

  return (
    <>
      <p className="lead">
        This is the Current Time : {time.toLocaleDateString()} and{" "}
        {time.toLocaleTimeString()}
      </p>
    </>
  );
};

export default ClockTime;
