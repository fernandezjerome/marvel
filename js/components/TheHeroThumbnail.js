export default {
    name: "TheHeroThum",

    props: {
        hero: Object,
    },

    template: `
        <li @click="loadLBData">
            <img :src='"images/" + hero.biopic' alt="hero img" style="width: 150px"/>
            <div class="red-bumbper"></div>
            <h5>Captain America</h5>
        </li>
    `,

    methods: {
        loadLBData() {
            debugger;
        },
    },
};
