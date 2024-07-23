import "./intro.css";

const Intro = () => {
  return (
    <div className="app__video flex__center">
      <iframe
        src="https://www.youtube.com/embed/ZwfkUMF6n3c?si=72GJ1WByS959PiAt"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Intro;
