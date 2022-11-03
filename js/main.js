import HeroThumb from "./components/TheHeroThumbnail.js";
import LightBox from "./components/Thelightbox.js";

(() => {
    // create vue instance here
    const { createApp } = Vue;

    createApp({
        created() {
            //place to get data
            fetch("./data.json")
                .then((res) => res.json())
                .then((data) => (this.heroData = data))
                .catch((error) => console.error(error));
        },

        data() {
            return {
                heroData: {},
                lbData: {},
            };
        },

        components: {
            theherothumb: HeroThumb,
            thelightbox: LightBox,
        },

        methods: {
            loadLightbox(hero) {
                this.lbData = hero;
            },
        },
    }).mount("#app");
})();
