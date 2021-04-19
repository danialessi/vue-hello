var app = new Vue (
    {
        el: '#container',
        data: {
            message: 'Ciao',
            sub_message: 'sono Vue!',
            color: 'green',
            imagePath: 'img/logo.png',
            love: ''
        },
        methods: {
            changeFramework: function () {
                if (this.sub_message == 'sono Vue!') {
                    this.sub_message = 'sono Angular!';
                    this.imagePath = 'img/angular.png';
                    this.color = 'red';
                    this.love = 'but I love Vue!';
                } else if (this.sub_message == 'sono Angular!') {
                    this.sub_message = 'sono React!';
                    this.imagePath = 'img/react.png';
                    this.color = 'azzurro';
                    this.love = 'but I love Vue!';
                } else {
                    this.sub_message = 'sono Vue!';
                    this.color = 'green';
                    this.imagePath = 'img/logo.png';
                    this.love = '';
                }
            }
        }
        
    }
);