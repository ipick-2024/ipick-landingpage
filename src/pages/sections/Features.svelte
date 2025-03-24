<script>
  import car from "../../assets/car.png";
  import effortless from "../../assets/eb.jpg";
  import cashless from "../../assets/cashless.jpg";
  import driver from "../../assets/driver.jpg";
  import sedan from "../../assets/sedan.jpg";
  import customer from "../../assets/customer.jpg";
  import real from "../../assets/real.jpeg";

  let hoverTexts = {
    car: "Experience the future of ride-hailing\nsmart, safe, and hassle-free travel.",
    effortless: "Effortless Booking\nExperience seamless booking with just a tap. No more waiting, no more hassle!",
    cashless: "Cashless Payments\nEnjoy secure, fast, and convenient transactions without worrying about carrying cash.",
    driver: "Ride with confidence knowing our experienced and trusted drivers\nare dedicated to your safety and comfort.",
    sedan: "Select the perfect vehicle for your journey\nwhether it's a sleek 4-seater sedan, a spacious 6-seater SUV, or a convenient iPick taxi.",
    customer: "Our team is available around the clock to assist you\nwhenever you need help, iPick Center is here for you.",
    real: "Real-time Tracking\nTrack your ride in real-time and stay updated with live location sharing."
  };
</script>

<div class="container">
  <div class="grid-container">
    <div class="card card-1">
      <img src={car} alt="Car">
      <div class="overlay">{hoverTexts.car}</div>
    </div>
    <div class="card card-2">
      <img src={effortless} alt="Effortless Booking">
      <div class="overlay">{hoverTexts.effortless}</div>
    </div>
    <div class="card card-3">
      <img src={cashless} alt="Cashless Payments">
      <div class="overlay">{hoverTexts.cashless}</div>
    </div>
    <div class="card card-4">
      <img src={driver} alt="Driver">
      <div class="overlay">{hoverTexts.driver}</div>
    </div>
    <div class="card card-5">
      <img src={real} alt="Real-time Tracking">
      <div class="overlay">{hoverTexts.real}</div>
    </div>
    <div class="card card-6">
      <img src={customer} alt="Customer">
      <div class="overlay">{hoverTexts.customer}</div>
    </div>
    <div class="card card-7">
      <img src={sedan} alt="Sedan">
      <div class="overlay">{hoverTexts.sedan}</div>
    </div>
  </div>
</div>

<style>
  /* Main container */
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    width: 100vw;
    background: var(--background, #f8f8f8);
    padding: 1rem;
    box-sizing: border-box;
    overflow-y: auto;
  }

  /* Bento Grid Layout */
  .grid-container {
    display: grid;
    gap: 1rem;
    width: 90vw;
    height: auto;
    padding-bottom: 2rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: auto;
    grid-template-areas:
      "card-1 card-1 card-2 card-3"
      "card-4 card-5 card-5 card-6"
      "card-7 card-7 card-7 card-7";
  }

  /* Card styles */
  .card {
    position: relative;
    border-radius: 1rem;
    overflow: hidden;
    background: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: pointer;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }

  /* Image inside the card */
  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  /* Overlay with Glassmorphism Effect */
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(20px);
    border-radius: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.034);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    
    color: rgb(255, 255, 255);
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  /* Hover effect */
  .card:hover .overlay {
    opacity: 1;
  }

  /* Grid area assignments */
  .card-1 { grid-area: card-1; }
  .card-2 { grid-area: card-2; }
  .card-3 { grid-area: card-3; }
  .card-4 { grid-area: card-4; }
  .card-5 { grid-area: card-5; }
  .card-6 { grid-area: card-6; }
  .card-7 { grid-area: card-7; }

  /* Responsive: Tablet */
  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
      grid-template-areas:
        "card-1 card-2"
        "card-3 card-4"
        "card-5 card-6"
        "card-7 card-7";
    }
  }

  /* Responsive: Mobile */
  @media (max-width: 480px) {
    .container {
      overflow: auto;
    }
    .grid-container {
      grid-template-columns: 1fr;
      grid-template-areas:
        "card-1"
        "card-2"
        "card-3"
        "card-4"
        "card-5"
        "card-6"
        "card-7";
    }
    .overlay {
      font-size: 0.8rem;
    }
  }
</style>