import hero1 from '../../assets/juta.png';

function ShoesHero() {
  return (
    // Hero 2
    <div>
      <div className="hero bg-yellow-400 py-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={hero1} alt="Logo" className="max-w-xl rounded-lg shadow-2xl" />

          <div>
            <h1 className="text-5xl font-bold">For real sneakerheads</h1>
            <h1 className="text-5xl">Step into this month’s hot drops</h1>
            <p className="py-6">
              Chunky, textured, branded — and made to be lived in.
            </p>
            <button className="btn btn-neutral">Shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoesHero;