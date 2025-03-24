<script lang="ts">
  //import pera from "../../assets/pera.mp4";
  import applebutton from "../assets/Download_on_the_App_Store_Badge.svg";
  import googlebutton from "../assets/Google_Play_Store_badge_EN.svg";
  import Features from "./sections/Features.svelte";
  import WhyChoose from "./sections/WhyChoose.svelte";
  import HowItWorks from "./sections/HowItWorks.svelte";
  // Change the title of the page
  window.document.title = "iPick | Bringing you to Places";
</script>

<div class="container">
  <!--
  <video autoplay loop muted id="pera">
    <source src={pera} type="video/mp4" />
  </video>
  -->
  <div class="header-texts">
    <h1>
      <span>iPick.</span>
      Bringing you to <span class="places">Places</span>
    </h1>
    <h4>
      "Seamless, secure, and stress-free rides at your fingertips. Wherever you
      go, iPick gets you there."
    </h4>
  </div>
  <h5>Download the App</h5>
  <div class="download-buttons">
    <a
      href="https://apps.apple.com/ph/app/ipick-booking-services/id6738897138"
      target="_blank"><img src={applebutton} alt="" /></a
    >
    <a
      href="https://play.google.com/store/apps/details?id=com.ipick.starter&hl=en"
      target="_blank"><img src={googlebutton} alt="" /></a
    >
  </div>
</div>
<Features />
<WhyChoose />
<HowItWorks />

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
    gap: 2rem;
  }

  .header-texts {
    text-align: center;
    h1 {
      font-size: 5rem;
      font-weight: 400;
      text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.1);
      span {
        color: var(--green);
        font-weight: 700;
        font-family: "Proxima Nova Bold";
      }
      .places {
        color: var(--orange);
      }
    }

    h4 {
      font-size: 1.25rem;
      font-weight: 400;
      font-style: italic;
      opacity: 0.9;
    }
  }

  h5 {
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: 400;
  }
  .download-buttons {
    display: flex;
    gap: 1rem;
    img {
      width: 12rem;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  /*#pera {*/
  /*  position: fixed;*/
  /*  top: 50%;*/
  /*  left: 50%;*/
  /*  transform: translate(-50%, -50%);*/
  /*  min-width: 100%;*/
  /*  min-height: 100%;*/
  /*  z-index: -1;*/
  /*  opacity: 0.6;*/
  /*}*/

  @media (max-width: 768px) {
    .container {
      padding: 1.5rem;
      height: 100%;
      gap: 1rem;
    }
    .header-texts {
      h1 {
        font-size: 3rem;
      }

      h4 {
        font-size: 1rem;
        opacity: 0.75;
      }
    }

    h5 {
      margin-top: 0.5rem;
      font-size: 1.2rem;
    }

    .download-buttons {
      flex-direction: column;

      img {
        width: 12rem;
      }
    }
  }
</style>
