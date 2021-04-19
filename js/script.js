var app = new Vue (
    {
        el: '#container',
        data: {
            message: 'Ciao',
            sub_message: 'sono Vue!',
            color: 'color',
            imagePath: 'img/logo.png',
            background: 'indigo'
        },
        methods: {
            changeColor: function () {
                if (this.background == 'indigo') {
                    this.background = 'yellow';
                } else if (this.background == 'yellow') {
                    this.background = 'white';
                } else {
                    this.background = 'indigo';
                }
            }
        }
        
    }
);