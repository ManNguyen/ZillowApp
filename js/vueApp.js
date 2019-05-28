

// Vue.component('todo-item', {
//     props: ['todo'],
//     template: '<li>tomorrow sale: {{ todo.text }}</li>'
// })

Vue.component('recent-property', {
    props: ['estate'],
    methods: {
        formatPrice(value) {
            let val = (value / 1);
            return "$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
    },
    template: `<div class="owl-item">
    <div class="recent_item">
        <div class="recent_item_inner">
            <div class="recent_item_image">
                <img v-bind:src="estate.imgSrc" alt="">
                <div v-bind:class="estate.tagClass"><a href="#">{{estate.tag}}</a></div>
            </div>
            <div class="recent_item_body text-center">
                <div class="recent_item_location">{{estate.location}}</div>
                <div class="recent_item_title"><a href="property.html">{{estate.title}}</a></div>
                <div class="recent_item_price">{{formatPrice(estate.price)}}</div>
            </div>
            <div
                class="recent_item_footer d-flex flex-row align-items-center justify-content-start">
                <div>
                    <div class="recent_icon"><img src="images/icon_1.png" alt=""></div>
                    <span>{{estate.size}} Ftsq</span>
                </div>
                <div>
                    <div class="recent_icon"><img src="images/icon_2.png" alt=""></div>
                    <span>{{estate.bedCount}} Bedrooms</span>
                </div>
                <div>
                    <div class="recent_icon"><img src="images/icon_3.png" alt=""></div>
                    <span>{{estate.bathCount}} Bathrooms</span>
                </div>
            </div>
        </div>
    </div>
</div>`
})

var myApp = new Vue({
    el: '#vueApp',
    data: {
        recentEstate: [
            {

                title: "testTitle",
                tag: "Featured",
                tagClass: "tag_featured property_tag",
                imgSrc: "images/property_1.jpg",
                location: "VietNam",
                price: 1000,
                size: 500,
                bedCount: 0,
                bathCount: 0

            },
            {

                title: "2 Floor Town House",
                tag: "Featured",
                tagClass: "tag_featured property_tag",
                imgSrc: "images/property_2.jpg",
                location: "Los Angeles",
                price: 1234981,
                size: 650,
                bedCount: 5,
                bathCount: 6

            },
            {

                title: "testTitle",
                tag: "Featured",
                tagClass: "tag_featured property_tag",
                imgSrc: "images/property_1.jpg",
                location: "VietNam",
                price: 1000,
                size: 500,
                bedCount: 0,
                bathCount: 0

            }
        ]
    },

})