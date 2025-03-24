<script>
    import { Car } from "lucide-svelte";
    import car from "../../assets/car_wc.png";
    import pos from "../../assets/pos.png";
    import click from "../../assets/clicking.png";
    import comfy from "../../assets/comfortable.png";
</script>

<div class="container">
    <h1>Why Choose iPick?</h1>
    <div class="book"></div>
    <p>
        Book a ride with ease with the use of our mobile app. Going to work?
        Exploring the city? Catching a flight? With iPick, rest assured, your
        journey is seamless and comfortable as it can be.
    </p>
    <div class="cards">
        <div class="card">
            <div class="safety">
                <div class="safe">
                    <h4>Safety first:</h4>
                </div>
                <p>
                    At iPick, your safety is our top priority. With experienced
                    drivers and advanced features, we ensure a smooth and
                    worry-free ride.
                </p>
            </div>
            <div class="pic">
                <img src={car} alt="car" />
            </div>
        </div>
        <div class="card">
            <div class="affordable">
                <div class="afford">
                    <h4>Affordable Luxury:</h4>
                </div>
                <p>
                    We, at iPick, delivers premium quality service at prices
                    that won't break the bank— a luxury made affordable.
                </p>
            </div>
            <div class="pic">
                <img src={pos} alt="pos" />
            </div>
        </div>
        <div class="card">
            <div class="clicking">
                <div class="click">
                    <h4>Simplicity at your Fingertips:</h4>
                </div>
                <p>
                    iPick makes booking a ride simple and effortless— just open
                    the app, set your destination, and we will take care of the
                    rest.
                </p>
            </div>
            <div class="pic">
                <img src={click} alt="click" />
            </div>
        </div>
        <div class="card">
            <div class="comfortable">
                <div class="comfort">
                    <h4>Elevated Comfort:</h4>
                </div>
                <p>
                    Travel comfortably with iPick's top-notch fleet of cars.
                    Whether it's a business meeting or a night out, we'll get
                    you there in style.
                </p>
            </div>
            <div class="pic">
                <img src={comfy} alt="comfy" />
            </div>
        </div>
    </div>
</div>

<style>
    .container {
        display: flex;
        align-items: center;
        height: 100vh;
        padding: 5rem;
        flex-direction: column;
        background: var(--background);
        color: var(--background);
    }
    .book {
        display: flex;
        padding: 1rem;
    }
    .cards {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 2rem;
        /* padding: 1rem; */
        margin-top: 10rem;
        /* border: 1px solid red; */
    }

    @media (max-width: 768px) {
        .cards {
            grid-template-columns: 1fr 1fr;
        }
    }

    .card {
        background-color: #1f4164;
        color: var(--text);
        padding: 3rem;
        position: relative;
        border-radius: 1rem;

        .safety {
            /* border: 1px solid pink; */
            margin-top: 1rem;
            text-align: center;
            /* text-decoration-color: #008000; */
            .safe {
                color: var(--green);
                /* border: 1px solid pink; */
            }
        }

        .affordable {
            /* border: 1px solid pink; */
            margin-top: 1rem;
            text-align: center;
            .afford {
                color: #008000;
                /* border: 1px solid pink; */
            }
        }

        .clicking {
            /* border: 1px solid pink; */
            margin-top: 1rem;
            text-align: center;
            .click {
                color: #008000;
                /* border: 1px solid pink; */
            }
        }

        .comfortable {
            /* border: 1px solid pink; */
            margin-top: 1rem;
            text-align: center;
            .comfort {
                color: #008000;
                /* border: 1px solid pink; */
            }
        }

        .pic {
            position: absolute;
            top: -15%;
            left: 50%;
            transform: translate(-50%);
            background-color: var(--text);
            border-radius: 50%;
            padding: 1rem;

            img {
                width: 3rem;
                align-items: center;
            }
        }
    }
</style>
