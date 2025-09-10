import hero1 from '../../assets/beda.png';

function Hero() {
  return (
    // Hero 1
    <div>
      <div className="hero bg-green-700 py-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={hero1} alt="Logo" className="max-w-xl rounded-lg shadow-2xl" />

          <div>
            <h1 className="text-5xl font-bold">Layered softness</h1>
            <h1 className="text-5xl">What do i wear to feel it all?</h1>
            <p className="py-6">
              Pile on fuzzy knits, mohair, brushed wools and oversized cuts.
            </p>
            <button className="btn btn-neutral">Discover now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
