export default {
    name: "TheHeroThum",

    emits: ["loadlbdata"],

    props: {
        hero: Object,
    },

    template: `
        <li @click="loadLBData">
            <img :src='"images/" + hero.biopic' alt="hero img" style="width: 150px"/>
            <div class="red-bumbper"></div>
            <h5>{{hero.name}}</h5>
        </li>
    `,

    methods: {
        loadLBData() {
            this.$emit("loadlbdata", this.hero);
        },
    },
};
